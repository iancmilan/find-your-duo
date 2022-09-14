import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

// tudo o que o viewprops oferece podemos passar com o ...rest para nossa view

export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest} >
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}