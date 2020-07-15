import { readFileSync } from 'fs';

// eslint-disable-next-line
console.log(readFileSync(__filename, 'utf8'));

export async function returnsAwait(): Promise<string> {
	return await 'foo';
}

// underscore dangle is allowed
export const foo = {
	_bar(): string {
		return 'baz';
	},
};

// Two classes in a module should be allowed
export class Foo {}
export class Bar {}

// Should be allowed to export a function with argument type any if it makes
// sense for the situation at hand. See
// @typescript-eslint/explicit-module-boundary-types
export function serialize(object: any): string {
	return JSON.stringify(object);
}
