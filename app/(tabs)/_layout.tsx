import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './index';
import CoursesScreen from './courses';
import ExamsScreen from './exams';
import ProfileScreen from './profil';

import Modal from '../../components/Modal';
import TaskForm from './TaskForm';

// Define types for the AddButton props
interface AddButtonProps {
  onPress: () => void;  // The onPress prop is a function that takes no arguments and returns void
}

const Tab = createBottomTabNavigator();

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]); // It's okay to use 'any' here if you don't have a type for tasks yet

  const handleAddTask = () => {
    setModalVisible(true);
  };

  const handleSaveTask = (newTask: any) => {
    setTasks([...tasks, newTask]);
    console.log('New task added:', newTask);
    setModalVisible(false);
    // Here you would typically save the task to your state management or database
  };

  const handleCancelTask = () => {
    setModalVisible(false);
  };

  return (
    <>
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
          component={HomeScreen}
          options={{
            tabBarButton: () => (
              <AddButton onPress={handleAddTask} />
            ),
          }}
        />
        <Tab.Screen name="Dashboard" component={ExamsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      <Modal 
        visible={modalVisible}
        onClose={handleCancelTask}
        title="Add New Task"
      >
        <TaskForm 
          onSave={handleSaveTask}
          onCancel={handleCancelTask}
        />
      </Modal>
    </>
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
