import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type OnLoadEventPayload = {
  url: string;
};

export type GlbViewerModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type GlbViewerViewProps = {
  // url: string;
  // onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  // style?: StyleProp<ViewStyle>;
  animation: string;
} & ViewProps;
