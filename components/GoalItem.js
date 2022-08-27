import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => {

    // === Functions === //
    // Functions END === //

    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: "#2d0ddd" }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed /* or pressData for full pbject*/}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    pressedItem: {
        opacity:0.5
    },
    goalText: {
        padding: 8,
        color: "white",
    }
});