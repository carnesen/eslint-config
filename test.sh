#!/bin/bash

set -o errexit
set -o xtrace

subdir=examples
echo -n "Checking ${subdir} ... "
cd "${subdir}"
eslint --ext .js,.jsx,.ts,.tsx .
echo "Done!"
cd ..

echo "Success!"
