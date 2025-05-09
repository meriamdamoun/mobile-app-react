import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

import HomeScreen from './index';
import CoursesScreen from './courses';
import ExamsScreen from './exams';
import ProfileScreen from './profil';

const Tab = createBottomTabNavigator();

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.addButtonContainer}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={onPress}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const BottomNav = () => {
  const handleAddTask = () => {
    // Fonction pour ajouter une tâche
    console.log('Ajouter une tâche');
    // Vous pouvez naviguer vers un écran d'ajout de tâches
    // navigation.navigate('AddTask');
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#007aff',
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute',
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home" size={24} color={color} />;
            case 'Calendar':
              return <Ionicons name="book" size={24} color={color} />;
            case 'Dashboard':
              return <Ionicons name="grid-outline" size={24} color={color} />;
            case 'Profile':
              return <Ionicons name="person-outline" size={24} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CoursesScreen} />
      <Tab.Screen
        name="Add"
        component={HomeScreen} // Utilisez HomeScreen comme écran par défaut ou créez un écran vide
        options={{
          tabBarButton: () => (
            <AddButton onPress={handleAddTask} />
          ),
        }}
      />
      <Tab.Screen name="Dashboard" component={ExamsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    bottom: 10,
  },
  addButton: {
    backgroundColor: '#0096FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // Effet d'ombre subtil comme dans l'image
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default BottomNav;