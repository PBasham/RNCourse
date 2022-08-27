/*========================================
        Import Dependencies
========================================*/
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState("")

    // === Functions == //
    const goalInputHandler = (enteredText) => {
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText("")
    }
    // === Function END === //


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" value={enteredGoalText} onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
});
