import { compressImage } from "./imageUtils";

export namespace OpenAIApi {
  const API_URL = "https://api.openai.com/v1/images/generations";
  const API_KEY_ENV_VAR = "OPENAI_API_KEY";

  export async function generate(prompt: string, presetBasePrompt: string, presetNegativePrompt: string): Promise<string> {
    const apiKey = localStorage.getItem('openaiApiKey') || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error('OpenAI API key not found. Please add it in Settings.');
    }

    const artisticModifiers = 'Ultra high-resolution, sharp focus, physically-based rendering (PBR), studio lighting, hyper-detailed, 8K, cinematic, professional color grading, flawless composition.';
    const negativeModifiers = 'Blurry, out of focus, low-resolution, noisy, grainy, watermark, signature, text, amateur, oversaturated, distorted, deformed, ugly, disfigured, poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation.';

    const fullPrompt = `${prompt}. ${presetBasePrompt}. ${artisticModifiers}`;
    const finalNegativePrompt = `${presetNegativePrompt} ${negativeModifiers}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const body = JSON.stringify({
      model: "dall-e-3",
      prompt: fullPrompt,
      n: 1,
      size: "1024x1024", // Standardize resolution
      response_format: "b64_json",
    });

    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API failed with status: ${response.status}. ${errorData.error?.message || JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const base64Image = data.data[0].b64_json;

    if (!base64Image) {
      throw new Error("No image data received from OpenAI.");
    }

    const dataUrl = `data:image/png;base64,${base64Image}`;
    return compressImage(dataUrl, 0.7);
  }
}
