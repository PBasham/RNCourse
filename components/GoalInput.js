/*========================================
        Import Dependencies
========================================*/
import { TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = ({ goalInputHandler, addGoalHandler }) => {
    return <>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
    </>
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
