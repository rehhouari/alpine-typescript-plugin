import type { Alpine } from '@leanadmin/alpine-typescript';

// Replace all occurrences of "AlpineI18n" with your plugin's name
const AlpineI18n = {
	start() {
		//Your plugin's code goes here.
	}
}

const alpine = window.deferLoadingAlpine || ((callback: Function) => callback());

window.AlpineI18n = AlpineI18n;

window.deferLoadingAlpine = function (callback: Function) {
	window.AlpineI18n.start();
	alpine(callback);
};

declare global {
	interface Window {
		Alpine: Alpine;
		deferLoadingAlpine: any;
		AlpineI18n: typeof AlpineI18n;
	}
}

export default AlpineI18n;
