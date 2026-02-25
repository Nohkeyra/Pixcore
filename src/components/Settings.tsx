import React, { useState, useEffect } from 'react';
import { X, Key, Save, Trash2, AlertCircle, Loader2, Sparkles, Zap, Shield, Terminal } from 'lucide-react';

interface SettingsProps {
  onClose: () => void;
  addLog: (message: string, type?: 'info' | 'success' | 'error' | 'process') => void;
  geminiKeys: string[];
  setGeminiKeys: (keys: string[]) => void;
  activeKeyIndex: number;
  setActiveKeyIndex: (index: number) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  onClose,
  addLog,
  geminiKeys,
  setGeminiKeys,
  activeKeyIndex,
  setActiveKeyIndex,
}) => {
  const [hfApiKey, setHfApiKey] = useState('');
  const [stabilityApiKey, setStabilityApiKey] = useState('');
  const [openaiApiKey, setOpenaiApiKey] = useState('');

  useEffect(() => {
    const storedHfKey = localStorage.getItem('hfApiKey');
    if (storedHfKey) setHfApiKey(storedHfKey);

    const storedStabilityKey = localStorage.getItem('stabilityApiKey');
    if (storedStabilityKey) setStabilityApiKey(storedStabilityKey);

    const storedOpenaiKey = localStorage.getItem('openaiApiKey');
    if (storedOpenaiKey) setOpenaiApiKey(storedOpenaiKey);
  }, []);

  const handleSave = () => {
    if (hfApiKey) localStorage.setItem('hfApiKey', hfApiKey);
    else localStorage.removeItem('hfApiKey');

    if (stabilityApiKey) localStorage.setItem('stabilityApiKey', stabilityApiKey);
    else localStorage.removeItem('stabilityApiKey');

    if (openaiApiKey) localStorage.setItem('openaiApiKey', openaiApiKey);
    else localStorage.removeItem('openaiApiKey');

    addLog('API keys saved successfully.', 'success');
    onClose();
  };

  const handleClear = () => {
    localStorage.removeItem('hfApiKey');
    localStorage.removeItem('stabilityApiKey');
    localStorage.removeItem('openaiApiKey');
    setHfApiKey('');
    setStabilityApiKey('');
    setOpenaiApiKey('');
    addLog('API keys cleared.', 'info');
  };

  const handleKeyChange = (index: number, value: string) => {
    const newKeys = [...geminiKeys];
    newKeys[index] = value;
    setGeminiKeys(newKeys);
  };

  return (
    <div className="w-full max-w-md bg-bg-secondary border border-border-primary rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-border-primary shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Shield size={20} className="text-accent" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Security & Synthesis</h2>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-bg-primary rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar">
        {/* Secret Panel: Gemini Multi-Key Management */}
        <div className="space-y-4 bg-black/40 p-5 rounded-2xl border border-accent/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="text-[8px] font-mono text-accent animate-pulse">ENCRYPTED_LINK_ACTIVE</div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-2">
              <Terminal size={12} /> Secret Panel: Gemini Free Tier Nodes
            </h3>
          </div>

          <div className="space-y-3">
            {/* Node 1: Gemini */}
            <div className={`relative transition-all duration-300 ${activeKeyIndex === 0 ? 'scale-[1.02]' : 'opacity-60 hover:opacity-100'}`}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-accent/70">Node_01: Gemini</label>
                {activeKeyIndex === 0 && (
                  <span className="text-[8px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">ACTIVE_UPLINK</span>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={geminiKeys[0] || ''}
                  onChange={(e) => handleKeyChange(0, e.target.value)}
                  placeholder="GEMINI_KEY_REQUIRED..."
                  className="flex-1 bg-black/60 border border-accent/10 rounded-lg p-2.5 text-xs font-mono text-accent focus:outline-none focus:border-accent/40 placeholder:text-accent/20"
                />
                <button
                  onClick={() => setActiveKeyIndex(0)}
                  className={`px-3 rounded-lg border transition-all ${
                    activeKeyIndex === 0 
                      ? 'bg-accent border-accent text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                      : 'border-accent/20 text-accent hover:bg-accent/10'
                  }`}
                  title="Switch to this node"
                >
                  <Zap size={14} className={activeKeyIndex === 0 ? 'fill-current' : ''} />
                </button>
              </div>
            </div>

            {/* Node 2: Hugging Face */}
            <div className="relative opacity-60 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-accent/70">Node_02: Hugging Face</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={hfApiKey}
                  onChange={(e) => setHfApiKey(e.target.value)}
                  placeholder="HF_KEY_REQUIRED..."
                  className="flex-1 bg-black/60 border border-accent/10 rounded-lg p-2.5 text-xs font-mono text-accent focus:outline-none focus:border-accent/40 placeholder:text-accent/20"
                />
              </div>
            </div>

            {/* Node 3: Stability AI */}
            <div className="relative opacity-60 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-accent/70">Node_03: Stability AI</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={stabilityApiKey}
                  onChange={(e) => setStabilityApiKey(e.target.value)}
                  placeholder="STABILITY_KEY_REQUIRED..."
                  className="flex-1 bg-black/60 border border-accent/10 rounded-lg p-2.5 text-xs font-mono text-accent focus:outline-none focus:border-accent/40 placeholder:text-accent/20"
                />
              </div>
            </div>

            {/* Node 4: OpenAI */}
            <div className="relative opacity-60 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-accent/70">Node_04: OpenAI</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={openaiApiKey}
                  onChange={(e) => setOpenaiApiKey(e.target.value)}
                  placeholder="OPENAI_KEY_REQUIRED..."
                  className="flex-1 bg-black/60 border border-accent/10 rounded-lg p-2.5 text-xs font-mono text-accent focus:outline-none focus:border-accent/40 placeholder:text-accent/20"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-accent/10">
            <p className="text-[9px] font-mono text-accent/40 leading-relaxed uppercase tracking-tighter">
              SYSTEM_NOTE: Synthesis Engine Nodes established. 
              Node_01 handles primary neural processing. 
              Nodes 02-04 handle external specialized generation.
            </p>
          </div>
        </div>

        {/* Gemini API Key Selection (Platform) */} 
      </div>

      <div className="flex justify-between items-center p-6 border-t border-border-primary mt-auto shrink-0 bg-bg-secondary">
        <button onClick={handleClear} className="flex items-center gap-2 text-xs text-red-500 opacity-60 hover:opacity-100 transition-opacity">
          <Trash2 size={14} /> Clear Keys
        </button>
        <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-accent text-bg-primary rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
          <Save size={14} /> Save & Close
        </button>
      </div>
    </div>
  );
};
