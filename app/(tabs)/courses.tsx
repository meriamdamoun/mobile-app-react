import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

// Mock data for courses
const INITIAL_COURSES = [
  {
    id: '1',
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Alan Smith',
    progress: 75,
    startDate: '2025-01-15',
    endDate: '2025-05-30',
    color: '#0096FF'
  },
  {
    id: '2',
    name: 'Calculus II',
    instructor: 'Prof. Maria Johnson',
    progress: 60,
    startDate: '2025-01-15',
    endDate: '2025-05-30',
    color: '#0096FF'
  },
  {
    id: '3',
    name: 'Physics for Engineers',
    instructor: 'Dr. Robert Chen',
    progress: 45,
    startDate: '2025-01-15',
    endDate: '2025-05-30',
    color: '#0096FF'
  }
];

interface Course {
    id: string;
    name: string;
    instructor: string;
    progress: number;
    startDate: string;
    endDate: string;
    color: string;
};

export default function CoursesScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: '',
    instructor: '',
    startDate: '',
    endDate: '',
    color: '#0096FF'
  });

  const formatDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US');
  };

  const CourseCard = ({ course }: { course: Course }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => console.log(`Course ${course.id} pressed`)}>
      <View style={styles.courseHeader}>
        <ThemedText style={styles.courseName}>{course.name}</ThemedText>
        <ThemedText style={styles.courseInstructor}>{course.instructor}</ThemedText>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${course.progress}%`, backgroundColor: course.color }
            ]}
          />
        </View>
        <ThemedText style={styles.progressText}>{course.progress}% completed</ThemedText>
      </View>
    </TouchableOpacity>
  );

  // Course count summary
  const CourseCountSummary = () => (
    <View style={styles.summaryContainer}>
      <View style={styles.summaryCard}>
        <ThemedText style={styles.summaryNumber}>{courses.length}</ThemedText>
        <ThemedText style={styles.summaryLabel}>Courses</ThemedText>
      </View>
      <View style={styles.summaryCard}>
        <ThemedText style={styles.summaryNumber}>0</ThemedText>
        <ThemedText style={styles.summaryLabel}>Due Soon</ThemedText>
      </View>
      <View style={styles.summaryCard}>
        <ThemedText style={styles.summaryNumber}>0</ThemedText>
        <ThemedText style={styles.summaryLabel}>Completed</ThemedText>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.dateHeader}>
          <ThemedText style={styles.headerDay}>
            {formatDate()}
          </ThemedText>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <IconSymbol name="search" size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>

      <CourseCountSummary />

      <View style={styles.coursesContainer}>
        <ThemedText style={styles.sectionTitle}>My Courses</ThemedText>
        {courses.length === 0 ? (
          <View style={styles.emptyStateContainer}>
            <IconSymbol name="book" size={60} color="rgba(150, 150, 150, 0.5)" />
            <ThemedText style={styles.emptyStateText}>
              No courses, tasks or exams left for today
            </ThemedText>
            <ThemedText style={styles.emptyStateSubText}>
              You can adjust what is displayed on your homepage in 
              <ThemedText style={styles.linkText}> personalised settings</ThemedText>.
            </ThemedText>
          </View>
        ) : (
          <View style={styles.coursesList}>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </View>
        )}
      </View>

      {/* This is a placeholder for the add course modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : 'white' }]}>
            <ThemedText style={styles.modalTitle}>Add New Course</ThemedText>
            {/* Form fields would go here */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}>
              <ThemedText style={styles.modalButtonText}>Close</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dateHeader: {
    alignItems: 'flex-start',
  },
  headerDay: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  summaryNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0096FF',
  },
  summaryLabel: {
    fontSize: 14,
    marginTop: 5,
  },
  coursesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  coursesList: {
    marginTop: 10,
  },
  courseCard: {
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
  },
  courseHeader: {
    marginBottom: 12,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseInstructor: {
    fontSize: 14,
    opacity: 0.7,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    borderRadius: 4,
    marginBottom: 4,
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    opacity: 0.7,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
  },
  emptyStateSubText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  linkText: {
    color: '#0096FF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0096FF',
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});