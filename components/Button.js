import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imageUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Circle</Text>
    </View>
  );
};
