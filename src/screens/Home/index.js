import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Card, CardItem, Text} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode';

export default class Home extends Component {
    render() {
        return(
            <DarkTheme/>
        )
    }
}

function DarkTheme() {
    const styles = useDynamicStyleSheet(dynamicStyles)

    const cardContent = [
        {
            title: "Aga Orlova",
            body: "Hi John, Let's grab lunch this week and chat."
        },
        {
            title: "Amy Frost",
            body: "Hey John, How excited are you for this years camping trip?!"
        },
        {
            title: "James Brown",
            body: "Hey, Let's play!"
        }
    ];

    const cardList = cardContent.map((content, index) =>
        <Card key={index} style={styles.card}>
            <CardItem header style={styles.card}>
                <Text style={styles.text}>{content.title}</Text>
            </CardItem>
            <CardItem style={styles.card}>
                <Text style={styles.text}> {content.body} </Text>
            </CardItem>
        </Card>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {cardList}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue('white', 'black'),
    },
    card: {
        backgroundColor: new DynamicValue('white', 'black'),
    },
    text: {
        color: new DynamicValue('black', 'white'),
    }
})
