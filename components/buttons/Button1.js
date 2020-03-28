import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import {Larsseit} from '~/components/fonts'


const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={props.function}>
            <Larsseit style={styles.text}>
                {props.title}
            </Larsseit>
        </TouchableOpacity>
    )
}

export default Button


const styles = StyleSheet.create({
    button: {
        borderWidth: 5,
        borderColor: '#000000',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'black',
        paddingTop: 20,
        marginVertical:10
    },
    text: {
        fontSize: 25,
        color: 'white'
    }
})