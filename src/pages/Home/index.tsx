import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from 'react-native';
import Task from '../../components/Taks';

import { styles } from './styles';
import Feather from "@expo/vector-icons/Feather";

import icon from '../../../assets/img/icon.jpg'

export default function Home() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask('');
    }
  
    const completeTask = (index: any) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }

    return (
      <View style={styles.container}>
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <View style={styles.toolbar}>
            <Image source={icon} style={styles.icon}/>
            <Text style={{fontFamily: 'PRegular', marginLeft: 8}}>Olá, </Text><Text style={{fontFamily: 'PBold'}}>Victor Carbelotti</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
  
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Suas Tarefas:</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
          
        </ScrollView>
  
        {/* Write a task */}
        {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'O que há de novo?'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
            <Feather
              name="plus"
              size={25}
              color="#62c1bf"
              style={styles.addText}
            />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        
      </View>
    );
  }
  