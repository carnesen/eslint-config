#!/bin/bash

set -eou pipefail # Safe mode

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SCRIPT_NAME="$( basename "${BASH_SOURCE[0]}" )"

PACKAGE_DIR="$(dirname "${SCRIPT_DIR}")"

cd "${PACKAGE_DIR}"

export PATH="./node_modules/.bin:${PATH}"

function usage() {
	>&2 echo "Usage: ${SCRIPT_NAME}"
	exit 1
}

if [ $# -ne 0 ]; then
	>&2 echo "Error: Unxpected arguments"
	usage
fi

echo "Printing resolved configurations to file"
rm -f .resolved.eslintrc.json *.resolved.eslintrc.json
for eslintrc in .eslintrc.json *.eslintrc.json; do
	resolved_eslintrc=$(echo "${eslintrc}" | sed s/.eslintrc.json/.resolved.eslintrc.json/)
	echo "  ${eslintrc}"
	command="eslint --print-config \'${eslintrc}\'"
	echo "// This file is the output of \"${command}\"." > "${resolved_eslintrc}"
	echo "// It is for informational purposes only. Do not use or modify." >> "${resolved_eslintrc}"
	${command} >> "${resolved_eslintrc}"
done

echo "Packing the package"
rm -f eslint-config-carnesen-*.tgz
npm pack
