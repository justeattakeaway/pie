import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PieData } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataPath = join(__dirname, '..', 'generated', 'pie-data.json');
export const pieData = JSON.parse(readFileSync(dataPath, 'utf-8')) as PieData;
