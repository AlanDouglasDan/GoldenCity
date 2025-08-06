// Reexport the native module. On web, it will be resolved to GlbViewerModule.web.ts
// and on native platforms to GlbViewerModule.ts
export { default } from './src/GlbViewerModule';
export { default as GlbViewerView } from './src/GlbViewerView';
export * from  './src/GlbViewer.types';
