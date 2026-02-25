import { ModuleStrategy, GenerationContext } from "./types";

export const LetteringModule: ModuleStrategy = {
  id: 'core lettering',
  name: 'Core Lettering',
  
  constructPrompt: (context: GenerationContext) => {
    const { prompt, preset, base64Image, strictMode } = context;
    
    let finalPrompt = `Professional high-end graphic design: ${prompt}. 
    Style: ${preset.basePrompt}. 
    Technical details: ultra-clean vector lines, sharp edges, flat solid colors, high contrast, professional composition, 8k resolution, minimalist aesthetic.`;

    if (base64Image) {
      const fidelityInstruction = strictMode 
        ? "STRICTLY COPY the reference image subject. Do not alter the pose, composition, or key features. High fidelity to source subject is required."
        : "Maintain the composition, pose, and main features of the reference image.";

      finalPrompt = `Vectorize this exact subject: ${prompt}.
      ${fidelityInstruction}
      Style: ${preset.basePrompt}.
      Technical details: ultra-clean vector lines, sharp edges, flat solid colors, high contrast, professional composition, 8k resolution, minimalist aesthetic.`;
    }

    finalPrompt += ` Focus on typography, clear legible text, custom lettering design, font layout.`;
    
    return finalPrompt;
  },

  shouldSkipTurbo: (context: GenerationContext) => {
    // Lettering can use Turbo if it's just text generation, but if an image is uploaded,
    // we prefer Gemini for multimodal understanding.
    // However, if the user explicitly wants Turbo for style transfer on text, we might allow it.
    // But consistent with Vectorize, if there's an image, Gemini is safer for fidelity.
    return !!context.base64Image;
  }
};
