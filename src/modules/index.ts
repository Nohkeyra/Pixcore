import { ModuleStrategy } from "./types";
import { VectorizeModule } from "./VectorizeModule";
import { LetteringModule } from "./LetteringModule";
import { MonogramModule } from "./MonogramModule";
import { AnalyzerModule } from "./AnalyzerModule";

const modules: Record<string, ModuleStrategy> = {
  [VectorizeModule.id]: VectorizeModule,
  [LetteringModule.id]: LetteringModule,
  [MonogramModule.id]: MonogramModule,
  [AnalyzerModule.id]: AnalyzerModule,
};

export const getModule = (id: string): ModuleStrategy => {
  return modules[id] || VectorizeModule; // Default to Vectorize
};
