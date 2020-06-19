import React, { useState, useEffect, } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, AsyncStorage } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import SvgUri from "expo-svg-uri"
import HeaderHome from './HeaderHome'
import { sendMessage, retrieveMessage } from 'coohappy-client-logic'
import getNow from 'coohappy-client-logic/helpers/getNow'
import { FlatList } from 'react-native-gesture-handler';

const Chat = function () {

    const [messages, setMessages] = useState([])
    const [singleMessage, setSingleMessage] = useState()

    let interval
    useFocusEffect(
        React.useCallback(() => {


            interval = setInterval(async () => {
                const token = await AsyncStorage.getItem('TOKEN')
                const _messages = await retrieveMessage(token)
                setMessages(_messages.messages.reverse())
            }, 2000)


            return () => {
                clearInterval(interval)
            }
        }, [])
    )

    useEffect(() => {

    }, [messages.length])



    useEffect(() => {
        (async () => {

            const token = await AsyncStorage.getItem('TOKEN')
            const _messages = await retrieveMessage(token)
            setMessages(_messages.messages.reverse())
        })()
    }, [])

    function handleOnSubmitSendMessage() {

        try {

            (async () => {
                const date = getNow()
                const token = await AsyncStorage.getItem('TOKEN')

                await sendMessage(token, singleMessage, date)
                const _messages = await retrieveMessage(token)
                setMessages(_messages.messages.reverse())

            })()

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <View style={styles.container}>

            <HeaderHome />

            <View style={styles.messages}>

                <FlatList

                    data={messages}
                    inverted={true}
                    renderItem={({ item }) =>
                    <>
                    <View style={styles.messageContainer}>
                                <Text style={styles.name}>{item.userId.name + ' ' + item.userId.surname}</Text>
                                <Text style={styles.hour}><Text numberOfLines={3} style={styles.message}>{item.message + '  '}</Text>{item.date.hour}</Text>
                            </View>
                        </>

                    }/>

            </View>
            <View style={styles.chat}>

                <TextInput onChangeText={(value) => setSingleMessage(value)} style={styles.input} placeholder="Say something to your neighbors" placeholderTextColor="#81868e" />


                <TouchableOpacity activeOpacity={0.2} style={styles.send} onPress={() => handleOnSubmitSendMessage()}>
                    <SvgUri width='50' height='50' source={require('../assets/btn-send.svg')} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        backgroundColor: '#069b69',
    },
    titleText: {
        color: '#ffd545',
        fontWeight: '700',
        fontSize: 28,
        marginBottom: 20,
        marginRight: 50,
        width: 200
    },
    houseIcon: {
        marginBottom: 15,
        marginLeft: 20
    },

    userIcon: {
        marginBottom: 20,
        marginRight: 20
    },
    chat: {
        height: 80,
        width: '100%',
        backgroundColor: '#c4c4c4',
        justifyContent: 'center',
        flexDirection: 'row', justifyContent: 'space-between'
    },
    input: {
        backgroundColor: 'white',
        height: 55,
        width: '80%',
        marginTop: 10,
        marginLeft: 15,

        borderRadius: 25,
        paddingLeft: 20,
        color: 'black'
    },
    messages: {
        flex: 1,
        backgroundColor: 'white'

    },
    messageContainer: {
        alignSelf:'flex-start',
        marginBottom: 15,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 40,
        backgroundColor: '#f1f1f1',
        
        alignItems: 'flex-start',
        padding: (10, 10, 10, 10),
        borderRadius: 15,
    },
    hour: {
        color: '#c4c4c4',
        fontSize: 10
    },
    message: {
        color: 'black',
        fontSize: 15
    },
    name: {
        fontSize: 15,
        fontWeight: '700',
        width: 150
    },
    send: {
        justifyContent: 'center',
        marginRight: 10
    }


})