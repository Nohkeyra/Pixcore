import { compressImage } from "./imageUtils";

export namespace StabilityAIApi {
  const API_URL = "https://api.stability.ai/v2beta/stable-image/generate/sd3";

  export async function generate(prompt: string, presetBasePrompt: string, presetNegativePrompt: string): Promise<string> {
    const apiKey = localStorage.getItem('stabilityApiKey') || process.env.STABILITY_API_KEY;

    if (!apiKey) {
      throw new Error('Stability AI API key not found. Please add it in Settings.');
    }

    const artisticModifiers = 'Ultra high-resolution, sharp focus, physically-based rendering (PBR), studio lighting, hyper-detailed, 8K, cinematic, professional color grading, flawless composition.';
    const negativeModifiers = 'Blurry, out of focus, low-resolution, noisy, grainy, watermark, signature, text, amateur, oversaturated, distorted, deformed, ugly, disfigured, poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation.';

    const fullPrompt = `${prompt}. ${presetBasePrompt}. ${artisticModifiers}`;
    const negativePrompt = `${presetNegativePrompt} ${negativeModifiers}`;

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: "image/*",
    };

    const formData = new FormData();
    formData.append("prompt", fullPrompt);
    formData.append("negative_prompt", negativePrompt);
    formData.append("output_format", "webp");
    formData.append("mode", "text-to-image");
    formData.append("aspect_ratio", "1:1"); // Standardize resolution

    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Stability AI API failed with status: ${response.status}. ${errorText}`);
    }

    const blob = await response.blob();
    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

    return compressImage(dataUrl, 0.7);
  }
}
