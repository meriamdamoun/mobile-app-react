import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit-2" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profilePic}>
            <Text style={styles.profilePicText}>Profile Picture</Text>
          </View>
          <Text style={styles.name}>Merima</Text>
          <Text style={styles.email}>dmmeriam0@gmail.com</Text>
        </View>
        
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <LinearGradient
            colors={['#FFF9E6', '#FFEDB3']}
            style={styles.statCard}
          >
            <Text style={styles.statLabel}>👀 Pending Tasks</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statSubtitle}>Next 7 days</Text>
          </LinearGradient>
          
          <LinearGradient
            colors={['#FFF0F0', '#FFD6D6']}
            style={styles.statCard}
          >
            <Text style={styles.statLabel}>⚠️ Overdue Tasks</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statSubtitle}>Total</Text>
          </LinearGradient>
          
          <LinearGradient
            colors={['#F0FFF0', '#D6FFD6']}
            style={styles.statCard}
          >
            <Text style={styles.statLabel}>👍 Tasks Completed</Text>
            <Text style={[styles.statValue, {color: '#4CAF50'}]}>0</Text>
            <Text style={styles.statSubtitle}>Last 7 days</Text>
          </LinearGradient>
          
          <LinearGradient
            colors={['#F8F0FF', '#EED6FF']}
            style={styles.statCard}
          >
            <Text style={styles.statLabel}>🔥 Your Streak</Text>
            <Text style={[styles.statValue, {color: '#9C27B0'}]}>0</Text>
            <Text style={styles.statSubtitle}>Total streak</Text>
          </LinearGradient>
        </View>
        
        {/* Menu */}
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="mail-outline" size={22} color="#0099FF" />
              <Text style={styles.menuItemText}>Change Email</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Feather name="key" size={22} color="#0099FF" />
              <Text style={styles.menuItemText}>Change Password</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="server-outline" size={22} color="#0099FF" />
              <Text style={styles.menuItemText}>Import CSV Data</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.menuItem, styles.menuItemLast]}>
            <View style={styles.menuItemLeft}>
              <MaterialCommunityIcons name="crown-outline" size={22} color="#0099FF" />
              <Text style={styles.menuItemText}>Premium Subscription</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
        </View>
        
        {/* Add some bottom padding for better scrolling experience */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'relative',
    backgroundColor: '#EBF5FF',
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#0099FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFB300',
    marginBottom: 4,
  },
  statSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
  bottomPadding: {
    height: 20, // Just a little padding at the bottom for better scrolling
  },
});

export default ProfileScreen;