import PageHeader from '../../components/PageHeader';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="My favorite Proffys" />
    </View>
  );
}

export default Favorites;