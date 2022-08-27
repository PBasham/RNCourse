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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        marginHorizontal: 8,
        width: 100,
    }
});
