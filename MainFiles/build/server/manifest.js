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
		client: {start:"_app/immutable/entry/start.BNGV0jy4.js",app:"_app/immutable/entry/app.Ck9f9AoC.js",imports:["_app/immutable/entry/start.BNGV0jy4.js","_app/immutable/chunks/UND0dHTr.js","_app/immutable/chunks/BuOAj7lt.js","_app/immutable/chunks/DmmwT5-D.js","_app/immutable/chunks/SkA-wPL8.js","_app/immutable/entry/app.Ck9f9AoC.js","_app/immutable/chunks/BuOAj7lt.js","_app/immutable/chunks/DBsoQM_X.js","_app/immutable/chunks/SkA-wPL8.js","_app/immutable/chunks/BarTyeg5.js","_app/immutable/chunks/m2dIwXWi.js","_app/immutable/chunks/DmmwT5-D.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DDTHjJ3Q.js')),
			__memo(() => import('./chunks/1-D6Kp42V3.js')),
			__memo(() => import('./chunks/2-DYP25BZs.js')),
			__memo(() => import('./chunks/3-B0KjEbmd.js')),
			__memo(() => import('./chunks/4-COYPhoUZ.js')),
			__memo(() => import('./chunks/5-D6Wz72im.js')),
			__memo(() => import('./chunks/6-smbMUSdY.js')),
			__memo(() => import('./chunks/7-CSksj2jk.js')),
			__memo(() => import('./chunks/8-DT2lpI4h.js'))
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
