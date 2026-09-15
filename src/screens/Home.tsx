import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

import { PRODUCTS_LIST } from '../data/contents';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Details', { product: item })}
          >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,
    backgroundColor: '#F5F5F5',
  },
});
