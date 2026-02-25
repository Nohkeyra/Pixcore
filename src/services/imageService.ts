import { compressImage } from "./imageUtils";
import { validateModelCall } from "./modelValidator";
import { StabilityAIApi } from './stabilityAiService';
import { OpenAIApi } from './openAiService';



export type ImageModel = 'gemini' | 'hidream' | 'stability-ai' | 'dall-e-3';

export async function generateImage(prompt: string, model: ImageModel = 'gemini', presetBasePrompt: string, presetNegativePrompt: string): Promise<string> {
  const hfApiKey = localStorage.getItem("hfApiKey");
  const stabilityApiKey = localStorage.getItem("stabilityApiKey");
  const openaiApiKey = localStorage.getItem("openaiApiKey");

  const modelInfo = validateModelCall(model, hfApiKey || undefined, stabilityApiKey || undefined, openaiApiKey || undefined);

  if (modelInfo.provider === 'huggingface_api') {
    try {
      return await generateWithHF(prompt, modelInfo.modelId);
    } catch (error: any) {
      console.warn(`${modelInfo.modelId} generation failed:`, error.message);
      throw error;
    }
  }

  if (modelInfo.provider === 'stability_ai') {
    try {
      return await StabilityAIApi.generate(prompt, presetBasePrompt, presetNegativePrompt);
    } catch (error: any) {
      console.warn(`Stability AI generation failed:`, error.message);
      throw error;
    }
  }

  if (modelInfo.provider === 'openai') {
    try {
      return await OpenAIApi.generate(prompt, presetBasePrompt, presetNegativePrompt);
    } catch (error: any) {
      console.warn(`OpenAI (DALL-E 3) generation failed:`, error.message);
      throw error;
    }
  }

  if (modelInfo.provider === 'google_gemini') {
    throw new Error("USE_GEMINI_FALLBACK");
  }

  throw new Error(`Unsupported model provider: ${modelInfo.provider}`);
}



async function generateWithHF(prompt: string, modelId: string): Promise<string> {
  const hfApiKey = localStorage.getItem("hfApiKey");

  try {
    const headers: Record<string, string> = { 
      "Content-Type": "application/json"
    };
    
    if (hfApiKey) {
      headers["Authorization"] = `Bearer ${hfApiKey}`;
    }

    const response = await fetch(`https://api-inference.huggingface.co/models/${modelId}`, {
      method: "POST",
      headers,
      body: JSON.stringify({ inputs: prompt }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HF API (${modelId}) failed with status: ${response.status}. ${errorText}`);
    }

    const blob = await response.blob();
    const dataUrl = await new Promise<string>(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
    return compressImage(dataUrl, 0.7);
  } catch (error: any) {
    console.error(`HF API Error (${modelId}):`, error);
    throw error;
  }
}

