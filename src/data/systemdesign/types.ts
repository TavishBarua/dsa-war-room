export type SDDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface SDRequirements {
  functional: string[];
  nonFunctional: string[];
  outOfScope: string[];
}

export interface SDComponent {
  name: string;
  description: string;
  techChoices: string;
}

export interface SDHighLevelDesign {
  components: SDComponent[];
  dataFlow: string;
  svgDiagram: string;
}

export interface SDDeepDive {
  title: string;
  explanation: string;
  svgDiagram?: string;
}

export interface SDWalkthroughStep {
  stepNumber: number;
  title: string;
  description: string;
  svgHighlight: string;
}

export interface SDBottleneck {
  problem: string;
  solution: string;
  pattern: string;
}

export interface SDKeyNumber {
  label: string;
  value: string;
}

export interface SDProblem {
  id: string;
  name: string;
  icon: string;
  accent: string;
  difficulty: SDDifficulty;
  eli5: string;
  interviewPitch: string;
  requirements: SDRequirements;
  highLevel: SDHighLevelDesign;
  deepDives: SDDeepDive[];
  walkthrough: SDWalkthroughStep[];
  bottlenecks: SDBottleneck[];
  keyNumbers: SDKeyNumber[];
  tags: string[];
}

export interface SDPattern {
  name: string;
  icon: string;
  accent: string;
  tagline: string;
  description: string;
  whenToUse: string[];
  examples: string[];
  svgDiagram: string;
}
