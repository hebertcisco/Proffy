import PageHeader from '../../components/PageHeader';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys available" />
    </View>
  );
}

export default TeacherList;