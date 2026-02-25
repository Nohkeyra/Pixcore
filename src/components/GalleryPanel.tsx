import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Trash2, ZoomIn } from 'lucide-react';

interface GalleryPanelProps {
  images: string[];
  onClose: () => void;
  onDelete: (image: string) => void;
}

export const GalleryPanel: React.FC<GalleryPanelProps> = ({ images, onClose, onDelete }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDownload = (image: string) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `gallery-image-${Date.now()}.png`;
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-6xl h-[90vh] bg-bg-secondary border border-border-primary rounded-2xl shadow-2xl flex flex-col"
    >
      <header className="p-4 border-b border-border-primary flex justify-between items-center flex-shrink-0">
        <h2 className="text-lg font-bold">Image Gallery</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-bg-primary">
          <X size={20} />
        </button>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        {images.length === 0 ? (
          <div className="flex items-center justify-center h-full text-text-secondary">
            Your gallery is empty. Save generated images to see them here.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="aspect-square bg-bg-primary rounded-lg overflow-hidden relative group"
              >
                <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => setSelectedImage(img)} className="w-10 h-10 bg-black/70 rounded-full text-white hover:bg-accent hover:text-black flex items-center justify-center">
                    <ZoomIn size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-bg-primary/80 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected" className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" />
              <div className="absolute -top-12 right-0 flex gap-2">
                 <button onClick={() => handleDownload(selectedImage)} className="w-10 h-10 bg-black/70 rounded-full text-white hover:bg-accent hover:text-black flex items-center justify-center">
                    <Download size={20} />
                  </button>
                 <button onClick={() => { onDelete(selectedImage); setSelectedImage(null); }} className="w-10 h-10 bg-black/70 rounded-full text-white hover:bg-red-500 flex items-center justify-center">
                    <Trash2 size={20} />
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
