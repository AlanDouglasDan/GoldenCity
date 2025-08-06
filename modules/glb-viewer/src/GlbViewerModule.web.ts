import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './GlbViewer.types';

type GlbViewerModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class GlbViewerModule extends NativeModule<GlbViewerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(GlbViewerModule, 'GlbViewerModule');
