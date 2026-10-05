import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MoodButton from '../components/MoodButton';

type MoodType = 'happy' | 'sad' | 'tired' | 'excited';

export default function Index() {
  const [moodCounts, setMoodCounts] = useState<Record<MoodType, number>>({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });

  const selectMood = (mood: MoodType) => {
    setMoodCounts((prevCounts) => ({
      ...prevCounts,
      [mood]: prevCounts[mood] + 1,
    }));
  };

  const resetMoods = () => {
    setMoodCounts({
      happy: 0,
      sad: 0,
      tired: 0,
      excited: 0,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>😊 Mood Tracker</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>

      <View style={styles.moodContainer}>
        <MoodButton
          emoji="😊"
          label="Happy"
          onPress={() => selectMood('happy')}
        />
        <MoodButton
          emoji="😢"
          label="Sad"
          onPress={() => selectMood('sad')}
        />
        <MoodButton
          emoji="😴"
          label="Tired"
          onPress={() => selectMood('tired')}
        />
        <MoodButton
          emoji="🤩"
          label="Excited"
          onPress={() => selectMood('excited')}
        />
      </View>

      <Text style={styles.countTitle}>Mood Counts</Text>

      <Text style={styles.count}>😊 Happy: {moodCounts.happy}</Text>
      <Text style={styles.count}>😢 Sad: {moodCounts.sad}</Text>
      <Text style={styles.count}>😴 Tired: {moodCounts.tired}</Text>
      <Text style={styles.count}>🤩 Excited: {moodCounts.excited}</Text>

      <View style={styles.resetButton}>
        <Button title="Reset" onPress={resetMoods} color="#ff4d4d" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666666',
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  countTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
    marginVertical: 3,
  },
  resetButton: {
    marginTop: 20,
    width: 150,
  },
});