import { PROBLEM_DESCRIPTIONS } from './problemDescriptions';
import { PROBLEM_DESCRIPTIONS_2 } from './problemDescriptions2';

export const ALL_PROBLEM_DESCRIPTIONS: Record<string, { desc: string; examples: string }> = {
  ...PROBLEM_DESCRIPTIONS,
  ...PROBLEM_DESCRIPTIONS_2,
};
