import { BuildOptions } from './types/config';
import type { Configuration as DerServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DerServerConfiguration {
  return {
    port: options.port,
    historyApiFallback: true,
  };
}
