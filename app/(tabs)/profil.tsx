import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profilePic} />
      <Text style={styles.name}>Merima</Text>
      <Text style={styles.email}>dmmeriam0@gmail.com</Text>

      <View style={styles.statsGrid}>
        {[
          ['Pending Tasks', '0', '👀'],
          ['Overdue Tasks', '0', '⚠️'],
          ['Tasks Completed', '0', '👍'],
          ['Your Streak', '0', '🔥']
        ].map(([label, value, icon], i) => (
          <View key={i} style={styles.statCard}>
            <Text style={styles.statLabel}>{icon} {label}</Text>
            <Text style={styles.statValue}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.menu}>
        {['Change Email', 'Change Password', 'Import CSV Data'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text>{item}</Text>
            <Feather name="chevron-right" size={20} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#f5fcff' },
  title: { fontSize: 20, textAlign: 'center', marginVertical: 10 },
  profilePic: {
    width: 80, height: 80, borderRadius: 40, borderWidth: 1, borderColor: '#00aaff',
    alignSelf: 'center', marginBottom: 10
  },
  name: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
  email: { textAlign: 'center', color: '#666', marginBottom: 20 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  statCard: {
    width: '48%', padding: 10, borderRadius: 12, backgroundColor: '#eef6ff',
    marginBottom: 10
  },
  statLabel: { fontSize: 14, marginBottom: 4 },
  statValue: { fontSize: 18, fontWeight: 'bold' },
  menu: { marginTop: 20 },
  menuItem: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ccc'
  },
});

export default ProfileScreen;
