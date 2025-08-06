import * as React from 'react';

import { GlbViewerViewProps } from './GlbViewer.types';

export default function GlbViewerView(props: GlbViewerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
