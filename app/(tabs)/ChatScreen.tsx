import { View, Text } from 'react-native'
import React from 'react'
import Nav from '@/constants/Nav'
import tw from 'twrnc'

const ChatScreen = () => {
    return (
        <View style={tw`flex-1 bg-slate-50`}>
            <Nav />

        </View>
    )
}

export default ChatScreen