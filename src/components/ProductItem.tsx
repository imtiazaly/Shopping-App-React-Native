import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Product } from '../App';

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductItem = ({ product, onPress }: Props) => {
  const saveAmount = product.originalPrice - product.discountPrice;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageWrap}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>
            {product.offerPercentage}% OFF
          </Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.brand} numberOfLines={1}>
          {product.brand}
        </Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>

        <View style={styles.ratingRow}>
          <View style={styles.ratingPill}>
            <Text style={styles.ratingText}>{product.rating} ★</Text>
          </View>
          <Text style={styles.ratingCount}>
            ({product.ratingCount.toLocaleString()})
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

        <Text style={styles.save}>Save ₹{saveAmount.toLocaleString()}</Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEF1F5',
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  imageWrap: {
    backgroundColor: '#F4F6FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    position: 'relative',
  },
  image: {
    width: 110,
    height: 130,
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 100,
  },
  discountText: {
    color: '#DC2626',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  info: {
    padding: 12,
    gap: 6,
  },
  brand: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6C5CE7',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    lineHeight: 17,
    minHeight: 34,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingPill: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  ratingCount: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  strike: {
    fontSize: 12,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
    fontWeight: '500',
  },
  save: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '700',
  },
});
