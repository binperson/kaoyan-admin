import type { GlobEnvConfig } from '/#/config';

import pkg from '../../package.json';
import { getConfigFileName } from '../../build/getConfigFileName';
import { warn } from '/@/utils/log';

export function getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase();
}

export function getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = ((isDevMode()
    ? // Get the global configuration (the configuration will be extracted independently when packaging)
      ((import.meta.env as unknown) as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown) as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  } = ENV;

  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }
  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  };
}

// Generate cache key according to version
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
 export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
 export function getEnv(): string {
  return import.meta.env.MODE;
}