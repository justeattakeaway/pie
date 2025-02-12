#!/bin/bash

# setup temporary folder
mkdir -p _tmp-pie-iconography

# clean-up potential leftovers
rm -rf _tmp-pie-iconography/*

# clone pie-iconography repo
git clone --depth=1 --branch=main git@github.com:justeattakeaway/pie-iconography.git ./_tmp-pie-iconography

# sync assets
find _tmp-pie-iconography/All -type f -name "*.svg" -exec mv {} packages/tools/pie-icons/src/assets/ \;

find _tmp-pie-iconography/Flag -type f -name "*.svg" -exec mv {} packages/tools/pie-icons/src/assets/flag/ \;

find _tmp-pie-iconography/Logo -type f -name "*.svg" -exec mv {} packages/tools/pie-icons/src/assets/logo/ \;

find _tmp-pie-iconography/Payment/Default -type f -name "*.svg" -exec mv {} packages/tools/pie-icons/src/assets/payment/ \;

find _tmp-pie-iconography/Social -type f -name "*.svg" -exec mv {} packages/tools/pie-icons/src/assets/social/ \;

# clean-up temporary folder
rm -rf _tmp-pie-iconography/*
