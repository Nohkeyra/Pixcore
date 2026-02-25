import { modelRegistry, ModelInfo } from './modelRegistry';

class ModelValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ModelValidationError';
  }
}

export function validateModelCall(modelId: string, hfApiKey?: string, stabilityApiKey?: string, openaiApiKey?: string): ModelInfo {
  const modelInfo = modelRegistry[modelId];

  if (!modelInfo) {
    throw new ModelValidationError(`Model '${modelId}' is not registered.`);
  }

  if (modelInfo.requiresApiKey) {
    if (modelInfo.provider === 'huggingface_api' && !hfApiKey) {
      throw new ModelValidationError(
        `Model '${modelId}' requires a Hugging Face API key. Please add it in Settings.`
      );
    } else if (modelInfo.provider === 'stability_ai' && !stabilityApiKey) {
      throw new ModelValidationError(
        `Model '${modelId}' requires a Stability AI API key. Please add it in Settings.`
      );
    } else if (modelInfo.provider === 'openai' && !openaiApiKey) {
      throw new ModelValidationError(
        `Model '${modelId}' requires an OpenAI API key. Please add it in Settings.`
      );
    }
  }

  return modelInfo;
}
