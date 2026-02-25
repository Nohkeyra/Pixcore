import { ModuleStrategy, GenerationContext } from "./types";

export const MonogramModule: ModuleStrategy = {
  id: 'monogram',
  name: 'Monogram',
  
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

    finalPrompt += ` Focus on interlocking letters, symbol design, logo mark, geometric synthesis.`;
    
    return finalPrompt;
  },

  shouldSkipTurbo: (context: GenerationContext) => {
    // Similar to Lettering, prefer Gemini for image-based monograms.
    return !!context.base64Image;
  }
};
