export interface ModelInfo {
  id: string;
  label: string;
  provider: 'google_gemini' | 'huggingface_api' | 'stability_ai' | 'openai';
  modelId?: string; // For Hugging Face models
  requiresApiKey: boolean;
}

export const modelRegistry: Record<string, ModelInfo> = {
  'gemini': {
    id: 'gemini',
    label: 'Gemini',
    provider: 'google_gemini',
    requiresApiKey: true,
  },
  'hidream': {
    id: 'hidream',
    label: 'HiDream',
    provider: 'huggingface_api',
    modelId: 'digiplay/HiDream-v2',
    requiresApiKey: true,
  },
  'stability-ai': {
    id: 'stability-ai',
    label: 'Stability AI (SDXL)',
    provider: 'stability_ai',
    requiresApiKey: true,
  },
  'dall-e-3': {
    id: 'dall-e-3',
    label: 'DALL-E 3',
    provider: 'openai',
    requiresApiKey: true,
  },
};
