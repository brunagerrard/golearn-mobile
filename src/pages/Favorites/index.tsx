import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="My favorite teachers"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;