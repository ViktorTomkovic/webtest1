import {configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit';

const options: ConfigureStoreOptions = {
	reducer: {},
};
export const store = configureStore(options);
