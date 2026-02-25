import React from 'react';
import { Type, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Typography() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-12 text-center space-y-6"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-3xl bg-accent/5 border border-accent/20 flex items-center justify-center">
          <Type className="text-accent w-10 h-10" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-bg-secondary border border-border-primary flex items-center justify-center shadow-lg">
          <Sparkles className="text-accent" size={16} />
        </div>
      </div>
      <div className="max-w-xs">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Core Lettering</h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          Transform text into artistic typography. Select a preset and enter your content to begin synthesis.
        </p>
      </div>
    </motion.div>
  );
}
