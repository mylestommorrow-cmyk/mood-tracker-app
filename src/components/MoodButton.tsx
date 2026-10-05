import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MoodButtonProps {
  emoji: string;
  label: string;
  onPress: () => void;
}

export default function MoodButton({ emoji, label, onPress }: MoodButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 140,
    padding: 15,
    margin: 8,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 35,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});