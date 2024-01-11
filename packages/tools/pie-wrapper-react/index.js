#!/usr/bin/env node

import { loadCustomElementsFile, addReactWrapper } from './scripts/add-react-wrapper.js';

addReactWrapper(loadCustomElementsFile());
