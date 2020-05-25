# `eslint-config-carnesen` change log

## [Unreleased]
## [2.0.0-2]
### Breaking
- TypeScript is now required as a dependency. This project continues to work for .js files, but its main focus is TypeScript.
- Move base/.eslintrc.json to repository root
- Drop support for Node.js 8.
### Added
- Support .ts and .tsx linting via [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).
- Test Node.js versions 10, 12, and 14.

## 1.0
`.js` and `.jsx` linting with Prettier and AirBnB ESLint rules.
