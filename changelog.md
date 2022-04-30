# **eslint-config-carnesen** changelog

## Upcoming

Breaking: Drop official support for Node.js version 12

Breaking: Enable rule [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility/).

Breaking: Enable rule [@typescript-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define/) for classes, variables, enums, and typedefs but not for functions which are safely hoisted and type references which are also effectively hoisted.

Feature: Set `env.es2021` to `true` 

Feature: Commit the result of `eslint --print-config` for each .eslintrc file.

## eslint-config-carnesen-10.0.0 (2022-04-18)

Breaking: Enable @typescript-eslint/no-shadow and disable the associated base rule to work around a bug where all enums are reported as shadowing https://stackoverflow.com/a/63961972/2793540.

## eslint-config-carnesen-9.1.0 (2022-04-11)

Split out separate node.eslintrc.json and react.eslintrc.json configurations to avoid spurious errors when using with Node.js. Keep the main .eslintrc.json as a combination of the two.

## eslint-config-carnesen-9.0.0 (2022-03-28)

- Potentially breaking: Upgrade dependencies. Require TypeScript >=4.0.

## eslint-config-carnesen-8.0.0 (2022-03-11)

- Breaking: Enable rule @typescript-eslint/no-explicit-any. Use `unknown` instead.

## eslint-config-carnesen-7.0.0 (2022-02-25)

- Feature: Disable no-useless-constructor which incorrectly identifies things like:

```
class Foo {
   constructor(public readonly bar: string) {}
}
```

- Breaking: Enable explicit-module-boundary-types https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md . Previously this was a warning. Now it's an error.

## v6.0.1 (2021-10-30)

- Breaking: Upgrade all dependencies, make them "^" dependencies to allow this package's users update the dependencies transitively without upgrading this package.

- Breaking: Drop official support for Node.js v10

- Added: Official support for Node.js v16

## 5.0.0 - 2021-05-29

- Breaking: Upgrade all dependencies and make console.log an error

## 4.6.0 - August 22, 2020
- Disable react/static-property-placement because it caused problems in @carnesen/google-cloud

## 4.5.0 - August 19, 2020
- Disable react rules relates to whitespace because Prettier controls that
- Update dependencies

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
