import { readFileSync } from 'fs';

// eslint-disable-next-line
console.log(readFileSync(__filename, 'utf8'));

export async function returnsAwait(): Promise<string> {
	return await 'foo';
}
