#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const CopilotInstructionsGenerator = require('./generator');
const targets = require('./copilot-instructions.config');

const generator = new CopilotInstructionsGenerator({ fs, path, console });

generator.generate(targets);
