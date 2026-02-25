import { ModuleStrategy, GenerationContext } from "./types";

export const VectorizeModule: ModuleStrategy = {
  id: 'vectorize',
  name: 'Vectorize',
  
  constructPrompt: (context: GenerationContext) => {
    const { prompt, preset, base64Image, strictMode } = context;
    
    let finalPrompt = `Professional high-end graphic design: ${prompt}. 
    Style: ${preset.basePrompt}. 
    Technical details: ultra-clean vector lines, sharp edges, flat solid colors, high contrast, professional composition, 8k resolution, minimalist aesthetic.`;

    if (base64Image) {
      const fidelityInstruction = strictMode 
        ? "STRICTLY COPY the reference image subject. Do not alter the pose, composition, or key features. High fidelity to source subject is required."
        : "Maintain the composition, pose, and main features of the reference image.";

      finalPrompt = `Convert this image to vector art. 
      Trace the lines and shapes of the subject exactly as they appear.
      Do not generate new subjects or change the content.
      Output a clean, high-quality vector illustration of the input image.
      ${fidelityInstruction}
      Style: ${preset.basePrompt}.
      Technical details: ultra-clean vector lines, sharp edges, flat solid colors, high contrast, professional composition, 8k resolution, minimalist aesthetic.`;
    }
    
    return finalPrompt;
  },

  shouldSkipTurbo: (context: GenerationContext) => {
    // Skip Turbo if an image is uploaded, because Turbo (Gradio) likely doesn't support 
    // strict image-to-vector conversion as well as Gemini's multimodal capabilities.
    // We want to process the actual pixels, not just a description.
    return !!context.base64Image;
  }
};
