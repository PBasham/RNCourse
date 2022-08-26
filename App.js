/*========================================
        Import Dependencies
========================================*/
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
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

    const [courseGoals, setCourseGoals] = useState([])

    // === Functions === //

    const addGoalHandler = (enteredGoalText) => {
        console.log(enteredGoalText)
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() }
        ])
    }
    const deleteGoalHander = (id) => {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }
    // === Functions END === //

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHander}
                            />
                        )
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
    goalsContainer: {
        flex: 5,
    },

});
