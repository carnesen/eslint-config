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

// Should use unknown instead of any
export function serialize(object: unknown): string {
	return JSON.stringify(object);
}

export enum FooBarBaz {
	Foo1 = 'BAR',
}

// Types aren't required if it's not exported
function wave(input) {
	return input;
}
wave('hello');

export class Carl {
	public constructor(public readonly dir: string) {}
}
