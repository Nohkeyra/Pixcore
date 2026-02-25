import { Preset } from "../presets";

export interface GenerationContext {
  prompt: string;
  preset: Preset;
  base64Image?: string;
  mimeType?: string;
  strictMode?: boolean;
}

export interface ModuleStrategy {
  id: string;
  name: string;
  constructPrompt(context: GenerationContext): string;
  shouldSkipTurbo(context: GenerationContext): boolean;
}
