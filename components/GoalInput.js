/*========================================
        Import Dependencies
========================================*/
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
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
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput} placeholder="Your course goal!" value={enteredGoalText} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
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
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
        backgroundColor: "#fff",
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
