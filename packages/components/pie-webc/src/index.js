#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

import { main } from './add-components.js';
import { ComponentService } from './componentService.js';

const componentService = new ComponentService(fs, path);

main(componentService);
