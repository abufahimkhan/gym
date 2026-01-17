
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/contact" | "/gallery" | "/join" | "/pricing" | "/programs" | "/trainers";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/gallery": Record<string, never>;
			"/join": Record<string, never>;
			"/pricing": Record<string, never>;
			"/programs": Record<string, never>;
			"/trainers": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/contact/" | "/gallery" | "/gallery/" | "/join" | "/join/" | "/pricing" | "/pricing/" | "/programs" | "/programs/" | "/trainers" | "/trainers/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/gym-selfy1.png" | "/gym-selfy2.png" | "/gym-selfy3.png" | "/gym-selfy4.png" | "/gym-tool10.png" | "/gym-tool11.png" | "/gym-tool2.png" | "/gym-tool3.png" | "/gym-tool4.png" | "/gym-tool5.png" | "/gym-tool6.png" | "/gym-tool7.png" | "/gym-tool8.mp4" | "/gym-tool9.png" | "/location1.png" | "/location2.png" | "/rasel power 3.mp4" | "/rasel power body showcasing.mp4" | "/rasel power video.mp4" | string & {};
	}
}