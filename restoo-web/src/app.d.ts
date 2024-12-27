// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import eventsource from 'eventsource';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: string;
				role: "admin" | "user"
			} | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

global.EventSource = eventsource;

export {};
