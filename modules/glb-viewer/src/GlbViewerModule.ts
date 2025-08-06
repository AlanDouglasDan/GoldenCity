import { NativeModule, requireNativeModule } from 'expo';

import { GlbViewerModuleEvents } from './GlbViewer.types';

declare class GlbViewerModule extends NativeModule<GlbViewerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<GlbViewerModule>('GlbViewer');
