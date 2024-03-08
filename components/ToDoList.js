import React,{useState} from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
    return (
        <ScrollView>
           <div className="todo-list">
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
            </ul>
            </div>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;
