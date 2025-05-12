import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = '#0098FF'; // Main blue
  const lightBlue = 'rgba(230, 242, 255, 0.9)'; // Light blue for cards

  // Format current date safely
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  };
  const dateString = today.toLocaleDateString('en-US', options);
  const [weekday, month, day, year] = dateString.replace(',', '').split(' ');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.headerDay}>{weekday}</ThemedText>
          <ThemedText style={styles.headerDate}>
            {month} {day.padStart(2, '0')}, {year}
          </ThemedText>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <IconSymbol
            name="magnifyingglass"
            size={24}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <View style={[styles.card, { backgroundColor: lightBlue }]}>
            <ThemedText style={[styles.cardCount, { color: primaryColor }]}>0</ThemedText>
            <ThemedText style={[styles.cardLabel, { color: primaryColor }]}>Classes</ThemedText>
          </View>

          <View style={[styles.card, { backgroundColor: lightBlue }]}>
            <ThemedText style={[styles.cardCount, { color: primaryColor }]}>0</ThemedText>
            <ThemedText style={[styles.cardLabel, { color: primaryColor }]}>Exams</ThemedText>
          </View>

          <View style={[styles.card, { backgroundColor: lightBlue }]}>
            <ThemedText style={[styles.cardCount, { color: primaryColor }]}>0</ThemedText>
            <ThemedText style={[styles.cardLabel, { color: primaryColor }]}>Tasks Due</ThemedText>
          </View>
        </View>

        <View style={styles.emptyStateContainer}>
          <View style={styles.iconContainer}>
            <IconSymbol name="graduationcap.fill" size={70} color={lightBlue} />
          </View>

          <ThemedText style={styles.emptyStateText}>
            No classes, tasks or exams left for today
          </ThemedText>

          <ThemedText style={styles.settingsText}>
            You can adjust what is displayed on your homepage in{' '}
            <ThemedText style={styles.settingsLink}>personalised settings.</ThemedText>
          </ThemedText>
        </View>
      </ScrollView>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerDay: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerDate: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  searchButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(230, 230, 230, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  card: {
    width: '31%',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardCount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  iconContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  settingsText: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 22,
  },
  settingsLink: {
    color: '#0098FF',
    fontWeight: '500',
  },
});
