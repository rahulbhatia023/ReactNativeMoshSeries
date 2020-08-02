import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function IconComponent() {
    return (
        <View>
            <MaterialCommunityIcons name="email" size={60} color="dodgerblue"/>
        </View>
    )
}

const styles = StyleSheet.create({})
