import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circular}></View>
                <Text>{props.taskName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    taskName:{
        maxWidth: '80%',
    },
    circular:{
        width: 20,
        height: 20,
        borderColor: '#55BCF6',
        backgroundColor: '#00ffc8',
        marginRight: 10,
        borderWidth: 3,
        borderRadius: 20,
    }
});

export default Task;