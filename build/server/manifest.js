const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","gym-selfy1.png","gym-selfy2.png","gym-selfy3.png","gym-selfy4.png","gym-tool10.png","gym-tool11.png","gym-tool2.png","gym-tool3.png","gym-tool4.png","gym-tool5.png","gym-tool6.png","gym-tool7.png","gym-tool8.mp4","gym-tool9.png","location1.png","location2.png","rasel power 3.mp4","rasel power body showcasing.mp4","rasel power video.mp4"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.Bt45zqe4.js",app:"_app/immutable/entry/app.DJqx0yMT.js",imports:["_app/immutable/entry/start.Bt45zqe4.js","_app/immutable/chunks/VbxPEoT7.js","_app/immutable/chunks/CSH3oXqI.js","_app/immutable/chunks/DrgSe8qk.js","_app/immutable/chunks/Djy73PjC.js","_app/immutable/entry/app.DJqx0yMT.js","_app/immutable/chunks/CSH3oXqI.js","_app/immutable/chunks/BJoRQBkI.js","_app/immutable/chunks/Djy73PjC.js","_app/immutable/chunks/CcW4AwYh.js","_app/immutable/chunks/DnatENb_.js","_app/immutable/chunks/DrgSe8qk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DZw9xWzV.js')),
			__memo(() => import('./chunks/1-Di8gY43L.js')),
			__memo(() => import('./chunks/2-IPgnfa-H.js')),
			__memo(() => import('./chunks/3-DjEG3BuC.js')),
			__memo(() => import('./chunks/4-Dh2hCwEx.js')),
			__memo(() => import('./chunks/5-B4uUROPf.js')),
			__memo(() => import('./chunks/6-2DvC9GlD.js')),
			__memo(() => import('./chunks/7-CDHQDmzG.js')),
			__memo(() => import('./chunks/8-WI4M5IMj.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/join",
				pattern: /^\/join\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/programs",
				pattern: /^\/programs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/trainers",
				pattern: /^\/trainers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
