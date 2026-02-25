# V-CTOR-STYL Setup & Troubleshooting Guide

## Project Overview

V-CTOR-STYL is a React/TypeScript web application with Capacitor for Android deployment. It uses Vite as a bundler and Tailwind CSS for styling.

## ✅ Issues Fixed

1. **Missing Tailwind Config** - Created `tailwind.config.ts`
2. **Missing PostCSS Config** - Created `postcss.config.cjs`
3. **Broken Workflow** - Fixed GitHub Actions workflow with proper:
   - Base64 keystore decoding
   - Conditional release/debug builds
   - Caching for faster builds
   - Error handling
4. **Missing .env.local** - Created for local development
5. **Keystore Path Issues** - Corrected base64 secret handling
6. **.gitignore** - Updated to exclude sensitive files

## 🚀 Quick Start

### 1. Local Development Setup

```bash
# Install dependencies
npm install

# Copy environment template and add your API keys
cp .env.example .env.local

# Start dev server
npm run dev
```

### 2. Build for Web

```bash
npm run build
npm run preview
```

### 3. Build for Android

```bash
# Install Capacitor
npm install --save-dev @capacitor/cli @capacitor/android

# Build web assets
npm run build

# Sync to Android
npx cap sync android

# Build APK
cd android && ./gradlew assembleDebug
```

## 🔑 GitHub Secrets Setup (Required for CI/CD)

Go to: **Settings → Secrets and variables → Actions**

### For Release Builds (Signed APK)

Add these secrets:

1. **RELEASE_KEYSTORE_BASE64** (Required for signing)
   ```bash
   # In Termux, run:
   base64 android/app/release-key.jks > release-key.b64
   cat release-key.b64
   ```
   - Copy the entire base64 output
   - Add as secret `RELEASE_KEYSTORE_BASE64`

2. **KEYSTORE_PASSWORD** - Your keystore password

3. **KEY_ALIAS** - The key alias in your keystore

4. **KEY_PASSWORD** - Your key password

### Optional Environment Variables

- **GEMINI_API_KEY** - Google Gemini API key
- **OPENAI_API_KEY** - OpenAI API key
- **STABILITY_API_KEY** - Stability AI API key

## 📁 Project Structure

```
V-CTOR-STYL/
├── src/
│   ├── components/       # React components
│   ├── services/         # API services
│   ├── modules/          # Processing modules
│   ├── types/            # TypeScript definitions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── android/              # Capacitor Android project
├── .github/workflows/    # GitHub Actions
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── .env.example          # Environment template
```

## 🔧 Troubleshooting

### Issue: "base64: invalid input"

**Cause**: The base64 secret is corrupted or incomplete

**Fix**:
```bash
# Regenerate the base64
base64 android/app/release-key.jks > release-key.b64

# Verify it's valid
head -c 50 release-key.b64  # Should show base64 characters

# Update the GitHub secret with fresh output
cat release-key.b64
```

### Issue: "Cannot find module" errors

**Fix**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: Workflow fails at "Decode Keystore"

**Fix**:
- Ensure `RELEASE_KEYSTORE_BASE64` secret is set (not empty)
- Check the secret value starts with valid base64 characters
- No special characters or line breaks in secret

### Issue: APK build fails with gradle errors

**Fix**:
```bash
# Clear gradle cache
rm -rf ~/.gradle/caches

# Ensure Java 17 is available
java -version  # Should be 17+
```

## 📦 Dependencies

Key packages included:

- **React 19** - UI framework
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Styling
- **Capacitor 8** - Native bridge
- **Lucide React** - Icons
- **Motion** - Animations
- **Google GenAI** - Gemini API
- **OpenAI** - GPT integration

## 🔐 Security Notes

1. **Never commit `.env` files** - Use `.env.example` as template
2. **Never commit keystores** - Use GitHub Secrets for sensitive data
3. **Keep API keys private** - Don't share or commit them
4. **Use `.gitignore`** - Make sure all sensitive files are excluded

## 📝 Environment Variables

Create `.env.local` for local development:

```bash
GEMINI_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
STABILITY_API_KEY=your_key_here
APP_URL=http://localhost:3000
```

## ✨ Commands Reference

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build locally
npm run clean        # Remove dist folder
npm run lint         # Check TypeScript types
npm run build:android # Build web + sync android
```

## 🤝 Contributing

When pushing changes:

```bash
# Make sure to lint
npm run lint

# Build before committing
npm run build

# Test on device
npm run build:android
```

## 📞 Support

For issues with:
- **Vite**: See https://vitejs.dev
- **React**: See https://react.dev
- **Tailwind**: See https://tailwindcss.com
- **Capacitor**: See https://capacitorjs.com

---

**Last Updated**: February 2026
**Status**: ✅ All issues fixed and tested
