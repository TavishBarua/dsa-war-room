import { DnaPattern } from './types';
import { DNA_PATTERNS } from './dnaPatterns';
import { DNA_EXTRA } from './dnaExtra';

export const ALL_DNA_PATTERNS: DnaPattern[] = [...DNA_PATTERNS, ...DNA_EXTRA];
