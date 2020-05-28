# `eslint-config-carnesen` change log

## 3.0.0
### Breaking
- Drop nodejs/.eslintrc.json entrypoint
- Include support for React in main entrypoint

## 2.0.0
### Breaking
- TypeScript >=3.8 is a required peer dependency
- Move base/.eslintrc.json to repository root
- Drop support for nodejs and react entrypoints
- Drop support for Node.js 8

### Added
- Support .ts linting via [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).
- Official support for Node.js versions 10, 12, and 14.

## 1.0.0
`.js` and `.jsx` linting with Prettier and AirBnB ESLint rules.
