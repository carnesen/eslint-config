#!/bin/bash

set -o errexit
set -o xtrace

for subdir in nodejs react; do
  echo -n "Checking ${subdir} ... "
  cd "${subdir}"
  eslint --ext .js,.jsx,.ts,.tsx .
  echo "Done!"
  cd ..
done

echo "Success!"
