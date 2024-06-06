/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_ENV: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
