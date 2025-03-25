import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const { html } = paths;

  return [
    new HtmlWebpackPlugin({
      // template используется для указания шаблонного файла (туда будут вставляться затем скрипты)
      template: html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
