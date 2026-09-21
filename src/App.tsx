import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';

// ---------- Types ----------
export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  category: string;
  brand: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// ---------- Custom Nav Theme ----------
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6C5CE7',
    background: '#F8F9FB',
    card: '#FFFFFF',
    text: '#0F172A',
    border: '#E5E7EB',
    notification: '#6C5CE7',
  },
};

// ---------- Cart Icon ----------
const CartIcon = ({ count = 0 }: { count?: number }) => (
  <Pressable style={styles.cartWrap} hitSlop={8}>
    <Text style={styles.cartEmoji}>🛒</Text>
    {count > 0 && (
      <View style={styles.cartBadge}>
        <Text style={styles.cartBadgeText}>{count}</Text>
      </View>
    )}
  </Pressable>
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerTintColor: '#0F172A',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '800',
              color: '#0F172A',
            },
            headerShadowVisible: false,
            headerBackTitle: '',
            animation: 'slide_from_right',
            contentStyle: { backgroundColor: '#F8F9FB' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Trending Products',
              headerRight: () => <CartIcon count={3} />,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: 'Product Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  cartWrap: {
    marginRight: 4,
    position: 'relative',
    padding: 4,
  },
  cartEmoji: { fontSize: 22 },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -4,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#6C5CE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
});
