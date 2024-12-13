export const AppStore = $state({
	showLoading: false,
	toggleShowLoading: (val?: boolean) => {
		AppStore.showLoading = val || !AppStore.showLoading;
	}
});
