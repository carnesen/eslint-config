#!/bin/bash

set -o errexit

for subdir in nodejs react; do
  echo -n "Checking ${subdir} ... "
  cd "${subdir}"
  eslint example.js*
  echo "Done!"
  cd ..
done

echo "Success!"
