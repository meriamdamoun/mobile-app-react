import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock data
const NEXT_DEADLINES = [/* ... */];
const CURRENT_COURSES = [/* ... */];
const WEEKLY_STATS = { studyHours: 14.5, completedTasks: 8, upcomingExams: 2 };

export default function HomeScreen() {
  // 🔥 Dynamic date
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const fullDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{dayName}</Text>
      <Text style={styles.subDate}>{fullDate}</Text>

      <View style={styles.statsContainer}>
        {['Classes', 'Exams', 'Tasks Due'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.messageContainer}>
        <Ionicons name="school-outline" size={64} color="#d0e6ff" />
        <Text style={styles.message}>No classes, tasks or exams left for today</Text>
        <Text>
          You can adjust this in <Text style={styles.link}>personalised settings</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#f9fcfd' },
  date: { fontSize: 28, fontWeight: '600', textAlign: 'center' },
  subDate: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  statBox: { backgroundColor: '#e6f3ff', borderRadius: 12, padding: 10, alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#007aff' },
  messageContainer: { alignItems: 'center', marginTop: 40 },
  message: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  link: { color: '#007aff' },
});
