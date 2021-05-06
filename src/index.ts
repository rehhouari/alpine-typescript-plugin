const AlpinePlugin = {
    start() {

    }
}

const alpine =
	window.deferLoadingAlpine || ((callback: Function) => callback());

window.AlpinePlugin = AlpinePlugin;

window.deferLoadingAlpine = function (callback: Function) {
	window.AlpinePlugin.start();

	alpine(callback);
};

declare global {
	interface Window {
		Alpine: any;
		deferLoadingAlpine: any;
		AlpinePlugin: typeof AlpinePlugin;
	}
}

export default AlpinePlugin;
