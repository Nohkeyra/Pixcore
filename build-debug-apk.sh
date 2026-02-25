#!/bin/bash

###############################################################################
# V-CTOR-STYL Debug APK Build Script for Termux
# This script builds a debug APK directly from Termux
###############################################################################

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Utility functions
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

check_command() {
    if ! command -v $1 &> /dev/null; then
        print_error "$1 is not installed"
        return 1
    fi
    print_success "$1 is installed"
    return 0
}

###############################################################################
# Step 1: Check Prerequisites
###############################################################################

print_header "Step 1: Checking Prerequisites"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Are you in the project root?"
    exit 1
fi

print_success "Found project directory"

# Check required commands
echo "Checking for required tools..."
check_command "node" || (print_error "Node.js not installed" && exit 1)
check_command "npm" || (print_error "npm not installed" && exit 1)
check_command "java" || (print_error "Java not installed" && exit 1)

# Check Java version
JAVA_VERSION=$(java -version 2>&1 | grep 'version' | head -1)
print_success "Java version: $JAVA_VERSION"

###############################################################################
# Step 2: Install/Update Dependencies
###############################################################################

print_header "Step 2: Installing Dependencies"

if [ ! -d "node_modules" ]; then
    print_warning "node_modules not found, installing..."
    npm install
    print_success "Dependencies installed"
else
    print_warning "node_modules exists, skipping install (use 'npm install' to update)"
fi

###############################################################################
# Step 3: Build Web Assets
###############################################################################

print_header "Step 3: Building Web Assets"

echo "Running: npm run build"
npm run build

if [ -d "dist" ]; then
    print_success "Web build successful (dist/ created)"
else
    print_error "Web build failed - dist/ not created"
    exit 1
fi

###############################################################################
# Step 4: Setup Java Environment
###############################################################################

print_header "Step 4: Setting Up Java Environment"

export JAVA_HOME=$(readlink -f $(which java) | sed "s:/bin/java::")
export PATH="$JAVA_HOME/bin:$PATH"

if [ -z "$JAVA_HOME" ]; then
    print_warning "Could not auto-detect JAVA_HOME"
    print_warning "Please set it manually: export JAVA_HOME=/path/to/java"
else
    print_success "JAVA_HOME set to: $JAVA_HOME"
fi

java -version

###############################################################################
# Step 5: Setup/Update Capacitor Android
###############################################################################

print_header "Step 5: Setting Up Capacitor Android"

# Check if @capacitor/android is installed
if ! npm list @capacitor/android > /dev/null 2>&1; then
    print_warning "@capacitor/android not found, installing..."
    npm install --save-dev @capacitor/android @capacitor/cli
    print_success "Capacitor packages installed"
else
    print_success "@capacitor/android is installed"
fi

# Check if android directory exists
if [ ! -d "android" ]; then
    print_warning "android/ directory not found, adding Android platform..."
    npx cap add android
    print_success "Android platform added"
else
    print_success "android/ directory exists"
fi

# Update Capacitor
echo "Updating Capacitor native dependencies..."
npx cap update android
print_success "Capacitor updated"

# Sync web assets
echo "Syncing web assets to Android..."
npx cap sync android
print_success "Web assets synced"

###############################################################################
# Step 6: Prepare Gradle
###############################################################################

print_header "Step 6: Preparing Gradle"

cd android

# Make gradlew executable
if [ -f "gradlew" ]; then
    chmod +x gradlew
    print_success "gradlew is executable"
else
    print_error "gradlew not found in android/"
    exit 1
fi

# Check gradle wrapper version
echo "Gradle wrapper version:"
./gradlew --version

###############################################################################
# Step 7: Build Debug APK
###############################################################################

print_header "Step 7: Building Debug APK"

echo "This may take several minutes..."
echo "Command: ./gradlew assembleDebug"
echo ""

./gradlew assembleDebug

###############################################################################
# Step 8: Verify APK
###############################################################################

print_header "Step 8: Verifying APK"

APK_PATH="app/build/outputs/apk/debug/app-debug.apk"

if [ -f "$APK_PATH" ]; then
    APK_SIZE=$(ls -lh "$APK_PATH" | awk '{print $5}')
    print_success "Debug APK created successfully!"
    print_success "Location: $(pwd)/$APK_PATH"
    print_success "Size: $APK_SIZE"
    
    cd ..
    FULL_PATH="$(pwd)/$APK_PATH"
    print_success "Full path: $FULL_PATH"
else
    print_error "APK not found at expected location"
    print_error "Expected: $(pwd)/$APK_PATH"
    exit 1
fi

###############################################################################
# Step 9: Summary
###############################################################################

print_header "Build Complete! 🎉"

echo -e "${GREEN}Your debug APK is ready:${NC}"
echo ""
echo -e "  Location: $FULL_PATH"
echo -e "  Size:     $APK_SIZE"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Transfer APK to your Android device"
echo "  2. Enable installation from unknown sources"
echo "  3. Install the APK"
echo "  4. Run the app and test"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo "  adb install -r \"$FULL_PATH\"     # Install via ADB"
echo "  adb shell am start -n com.vector.app/.MainActivity  # Run app"
echo "  adb logcat                        # View logs"
echo ""

###############################################################################
# Optional: Install via ADB
###############################################################################

if command -v adb &> /dev/null; then
    print_warning "ADB is available. Install the APK now?"
    read -p "Install APK? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Installing APK via ADB..."
        adb install -r "$FULL_PATH"
        print_success "APK installed!"
        
        read -p "Launch app now? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            adb shell am start -n com.vector.app/.MainActivity
            print_success "App launched!"
        fi
    fi
fi

echo ""
print_success "Build script completed successfully!"
