#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const ComponentStatusGenerator = require('./componentStatusGenerator');

const generator = new ComponentStatusGenerator({
    fs, path, promisify, console,
});

generator.generateStatuses();
