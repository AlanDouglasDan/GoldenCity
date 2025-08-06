import { requireNativeView } from 'expo';
import * as React from 'react';

import { GlbViewerViewProps } from './GlbViewer.types';

const NativeView: React.ComponentType<GlbViewerViewProps> =
  requireNativeView('GlbViewer');

export default function GlbViewerView(props: GlbViewerViewProps) {
  return <NativeView {...props} />;
}
