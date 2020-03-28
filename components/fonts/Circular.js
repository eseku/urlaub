import * as React from 'react';
import { Text } from 'react-native';

export default function Circular(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'circular' }]} />;
}
