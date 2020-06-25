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
