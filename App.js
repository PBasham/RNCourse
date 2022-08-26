/*========================================
        Import Dependencies
========================================*/
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

/*========================================
        Import Components
========================================*/
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState("second")
    const [courseGoals, setCourseGoals] = useState([])

    const goalInputHandler = (enteredText) => {
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        console.log(enteredGoalText)
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() }
        ])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text}/>
                }}
                keyExtractor={(item, index) => {
                    return item.id
                }}
                />
            </View>
        </View>
    );
}


/*========================================
        React-Native Styling
========================================*/
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    goalsContainer: {
        flex: 5,
    },
    
});
