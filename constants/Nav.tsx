import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Nav = () => {
    return (
        <View style={tw`flex-row justify-between items-center p-4 bg-white h-20 shadow-md shadow-cyan-500 border-b border-gray-200`}>
            <Text style={tw`text-xl p-0 top-3 text-[#32ab97] font-bold`}>ChatSys</Text>
            <View style={tw`flex-row items-center bg-gray-100  px-2 py-1 h-10 w-2.2/3 
                top-3 rounded-full  justify-between shadow-md shadow-gray-100`}>
                {/* <Text style={tw`text-gray-400 mr-2`}>🔍</Text> */}
                <TextInput
                    placeholder="Search..."
                    style={tw`w-24 text-black p-0`}
                    placeholderTextColor="#888"
                />
            </View>
        </View>
    )
}

export default Nav