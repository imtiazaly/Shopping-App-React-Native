import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsProps) => {
  const { product } = route.params;
  const saveAmount = product.originalPrice - product.discountPrice;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Image */}
        <View style={styles.imageWrap}>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              {product.offerPercentage}% OFF
            </Text>
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoCard}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.name}>{product.name}</Text>

          <View style={styles.ratingRow}>
            <View style={styles.ratingPill}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>
              {product.ratingCount.toLocaleString()} ratings
            </Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>
              ₹{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.strike}>
              ₹{product.originalPrice.toLocaleString()}
            </Text>
          </View>
          <Text style={styles.save}>
            You save ₹{saveAmount.toLocaleString()}
          </Text>
        </View>

        {/* Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          {product.tags.map((tag, index) => (
            <View key={index} style={styles.bulletRow}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Delivery & Returns */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery & Returns</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🚚</Text>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>Free Delivery</Text>
              <Text style={styles.infoSub}>Arrives in 2–3 business days</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>↩️</Text>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>7-Day Returns</Text>
              <Text style={styles.infoSub}>Hassle-free return policy</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>✅</Text>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>1 Year Warranty</Text>
              <Text style={styles.infoSub}>Brand warranty included</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky CTA Bar */}
      <View style={styles.ctaBar}>
        <Pressable
          style={({ pressed }) => [styles.cartBtn, pressed && styles.pressed]}
        >
          <Text style={styles.cartBtnText}>Add to Cart</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.buyBtn, pressed && styles.pressed]}
        >
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  scrollContent: {
    paddingBottom: 24,
  },

  // Image
  imageWrap: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    position: 'relative',
  },
  image: {
    width: 220,
    height: 280,
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.4,
  },

  // Info card
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
    gap: 8,
  },
  brand: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6C5CE7',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 26,
    letterSpacing: -0.3,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  ratingPill: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  ratingCount: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  strike: {
    fontSize: 15,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
    fontWeight: '500',
  },
  save: {
    fontSize: 13,
    color: '#16A34A',
    fontWeight: '700',
  },

  // Sections
  section: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6C5CE7',
    marginTop: 7,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    fontWeight: '500',
  },

  // Delivery rows
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  infoIcon: {
    fontSize: 22,
  },
  infoTextWrap: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  infoSub: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },

  // CTA
  ctaBar: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEF1F5',
  },
  cartBtn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#6C5CE7',
    backgroundColor: '#FFFFFF',
  },
  cartBtnText: {
    color: '#6C5CE7',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  buyBtn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#6C5CE7',
    shadowColor: '#6C5CE7',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  buyBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
