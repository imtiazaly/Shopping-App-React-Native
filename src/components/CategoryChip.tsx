import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

type Props = {
  label: string;
  active?: boolean;
  onPress: () => void;
};

const CategoryChip = ({ label, active = false, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        active && styles.chipActive,
        pressed && styles.chipPressed,
      ]}
    >
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </Pressable>
  );
};

export default CategoryChip;

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: '#6C5CE7',
    borderColor: '#6C5CE7',
  },
  chipPressed: {
    opacity: 0.85,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  textActive: {
    color: '#FFFFFF',
  },
});
