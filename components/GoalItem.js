import { StyleSheet } from "react-native"
import { View, Text } from "react-native";

export const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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