# `eslint-config-carnesen` change log

## [Unreleased]
Update dependencies

## 4.4.0
- Reinstate "typescript-eslint/explicit-module-boundary-types" with allowArgumentsExplicitlyTypedAsAny=true

## 4.3.0
- "@typescript-eslint/explicit-module-boundary-types": off"

## 4.2.0
- "max-classes-per-file": "off"

## 4.1.0
- "no-return-await": "off"
- "no-underscore-dangle": "off"

## 4.0.0
### Breaking
- Use tabs instead of spaces for the reasons enumerated in this thread https://github.com/romejs/rome/issues/425

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
