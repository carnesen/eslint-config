# eslint-config-carnesen [![npm version badge](https://badge.fury.io/js/eslint-config-carnesen.svg)](https://www.npmjs.com/package/eslint-config-carnesen) [![build status badge](https://github.com/carnesen/eslint-config/workflows/test/badge.svg)](https://github.com/carnesen/eslint-config/actions?query=workflow%3Atest+branch%3Amaster)

ESLint configurations for `@carnesen` projects

## Install
```
npm install eslint-config-carnesen
```
Create a file `.eslintrc.json` at the root of your project with contents:

```json
{
  "extends": [
    "eslint-config-carnesen"
  ]
}
```
Add these lines to your `package.json`'s "scripts" field:
```
    "lint": "eslint --ext .js,.jsx,.ts,.tsx <source code directory>",
    "fix": "npm run lint -- --fix",
```
where `<source code directory>` is the subdirectory of your project containing the source code that you want to lint. Finally add `&& npm run lint` to your package's "test" script to make sure you don't forget to lint! I strongly recommend setting up your editor to automatically fix lint errors on save. That way the linter mostly stays out of your way and just does the right thing. In Visual Studio Code, [this plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) works great.

## Rules
This package's rules extends those espoused by [by AirBnB](https://github.com/airbnb/javascript), consumed as [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Those rules are mostly concerned with syntax. For code formatting, this package uses [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier), which disables all rules that are unnecessary or might conflict with [Prettier](https://prettier.io/). Instead of calling `prettier` directly, this package employs [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier), which "runs Prettier as a ESLint rule and reports differences as individual ESLint issues". I wrote up some thoughts [here](https://github.com/googleapis/google-cloud-node/issues/2842#issuecomment-425229710) on why that's a much better approach than using `eslint` and `prettier` separately.

## More information
If you encounter any bugs or have any questions or feature requests, please don't hesitate to file an issue or submit a pull request on this project's repository on GitHub.

## Related
- [@carnesen/tsconfig](https://github.com/carnesen/tsconfig): TypeScript configurations for `@carnesen` projects

## License
MIT © [Chris Arnesen](https://www.carnesen.com)
