import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Picker, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { Circular, Larsseit } from '~/components/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignupForm = () => {
    const [gender, setGender] = useState(true)
    
    return(
        <>
            <View style={styles.wrapper}>

                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.TextInput, {
                            flex: 8, 
                            marginRight: 2.5,
                        }]}
                        value="Name"

                    />   
                    <TextInput 
                        style={[styles.TextInput, {
                            flex: 4, 
                            marginLeft: 2.5,
                        }]}
                        value="Age"
                    />
                </View>

                <View style={styles.formGroup}>

                    <TouchableOpacity 
                        onPress={()=>{setGender(!gender)}}
                        activeOpacity={1} 
                        style={[styles.TextInput, {
                            flex: 1, 
                            marginRight: 2.5, 
                            textAlign: 'center', 
                            backgroundColor: '#f15353', 
                        }]}
                    >
                        <Circular style={{fontSize: 20, color: '#fff'}}>
                            {gender ? 'M' : 'F' }
                        </Circular>
                    </TouchableOpacity>
                    
                    <TextInput
                        style={[styles.TextInput, 
                            {
                                marginLeft: 2.5, 
                                flex: 12, 
                            }
                        ]}
                        value="Email"

                    />   
                    
                </View>


                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.TextInput, {flex: 1}]}
                        value="Password"
                        secureTextEntry={false}
                    />   
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.TextInput, {flex: 1}]}
                        value="Password"
                        secureTextEntry={false}
                    />   
                </View>


            </View> 
        </>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    wrapper: {
        borderColor: '#f15353',
        borderRadius: 5,
        paddingVertical: 5
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 7
    },
    TextInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 20,
        borderWidth: .5,
        borderColor: '#f15353',
        borderRadius: 5,
        borderStartWidth: 5,
        fontFamily: 'circular',
        color: '#4b4b4b'
    }

})