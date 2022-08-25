/*========================================
        Import Dependencies
========================================*/
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
            enteredGoalText
        ])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <ScrollView>
                    {courseGoals.map((goal) => (
                        <View key={goal} style={styles.goalItem}>
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView>
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
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    goalText: {
        color: "white",
    }
});
