import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';
import { ScrollView } from 'react-native';

export default function App() {

  const [taskName, setTaskName] = useState();
  const [items, setItems] = useState([]);

  const handleAddButton = () =>{
    setItems([...items, taskName])
    setTaskName(null)
  }

  const deleteTask = (index) =>{
    let temp = [...items];
    temp.splice(index, 1);
    setItems(temp);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>

        <KeyboardAvoidingView  style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={"Write a task"} value={taskName} onChangeText={text => setTaskName(text)}></TextInput>
          <TouchableOpacity onPress={() => handleAddButton()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={styles.sectionTitle}>Tasks list:</Text>

        <ScrollView style={styles.items}>
          <View>
            {
              items.map((item, index) =>{
                return(
                  <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                    <Task key={index} taskName={item}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7faff',
  },
  tasksWrapper:{
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 10,
    marginBottom: 100,
  },
  writeTaskWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginBottom: 10,
  },
  input:{
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor:'#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#C0C0C0',
    borderWidth: 1,
  },
  addText:{
    
  }
});
