#!/bin/bash

# Apply any patches
# https://www.npmjs.com/package/patch-package
npx patch-package

# Copy the libraries from the node_modules folder to our themes js/libraries
# folder where we include them as libraries in Drupal.
#
# Foundation
# rm -rf ./js/libraries/foundation
# cp -r ./node_modules/foundation-sites ./js/libraries/foundation
# MMenu
# rm -rf ./js/libraries/mmenu
# cp -r ./node_modules/mmenu-js ./js/libraries/mmenu
# PriorityNav
rm -rf ./js/libraries/priority-nav
cp -r ./node_modules/priority-nav ./js/libraries/priority-nav
rm -rf ./js/libraries/slick-carousel
cp -r ./node_modules/slick-carousel ./js/libraries/slick-carousel
cp -r ./node_modules/magnific-popup ./js/libraries/magnific-popup
