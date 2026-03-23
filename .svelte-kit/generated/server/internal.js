
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@2.55.0_@svelt_9215fa1dc0c1bae3f588b244016242ea/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <title>USA Power Gym</title>\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\"\r\n    />\r\n    <script src=\"https://cdn.tailwindcss.com\"></script>\r\n    <script>\r\n      tailwind.config = {\r\n        theme: {\r\n          extend: {\r\n            fontFamily: {\r\n              oswald: ['Oswald', 'sans-serif']\r\n            }\r\n          }\r\n        }\r\n      }\r\n    </script>\r\n    <style>\r\n      .hero-gradient {\r\n        background: linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%);\r\n      }\r\n      @keyframes fade-in {\r\n        from {\r\n          opacity: 0;\r\n        }\r\n        to {\r\n          opacity: 1;\r\n        }\r\n      }\r\n      @keyframes slide-in-from-left {\r\n        from {\r\n          transform: translateX(-50px);\r\n          opacity: 0;\r\n        }\r\n        to {\r\n          transform: translateX(0);\r\n          opacity: 1;\r\n        }\r\n      }\r\n      @keyframes zoom-in {\r\n        from {\r\n          transform: scale(0.95);\r\n          opacity: 0;\r\n        }\r\n        to {\r\n          transform: scale(1);\r\n          opacity: 1;\r\n        }\r\n      }\r\n      @keyframes slide-in-from-bottom-10 {\r\n        from {\r\n          transform: translateY(40px);\r\n          opacity: 0;\r\n        }\r\n        to {\r\n          transform: translateY(0);\r\n          opacity: 1;\r\n        }\r\n      }\r\n      .animate-in {\r\n        animation-fill-mode: both;\r\n      }\r\n      .fade-in {\r\n        animation-name: fade-in;\r\n      }\r\n      .slide-in-from-left {\r\n        animation-name: slide-in-from-left;\r\n      }\r\n      .zoom-in {\r\n        animation-name: zoom-in;\r\n      }\r\n      .slide-in-from-bottom-10 {\r\n        animation-name: slide-in-from-bottom-10;\r\n      }\r\n      .duration-1000 {\r\n        animation-duration: 1000ms;\r\n      }\r\n      .delay-300 {\r\n        animation-delay: 300ms;\r\n      }\r\n      .outline-text {\r\n        -webkit-text-stroke: 1px white;\r\n        text-stroke: 1px white;\r\n      }\r\n      body {\r\n        margin: 0;\r\n        padding: 0;\r\n        background-color: #000;\r\n        color: #fff;\r\n      }\r\n      * {\r\n        box-sizing: border-box;\r\n      }\r\n    </style>\r\n    " + head + "\r\n  </head>\r\n  <body data-sveltekit-preload-data=\"hover\">\r\n    <div style=\"display: contents\">" + body + "</div>\r\n  </body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "vz2rzy"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
