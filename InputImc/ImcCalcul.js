import React, { Component } from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from "react-native";


const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: { margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4', 
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })

class ImcCalcul extends Component
{
    state = {
        height: '',
        weight: '',
        imc: ''
    }
    handleHeight = (text) => {
        this.setState({ height: text })
    }
    handleWeight = (text) => {
        this.setState({ weight: text })
    }
    calculImc = (height, weight) => {
        this.setState({imc: (weight) / (height * height)})
        console.log(this.state.imc)

        if(this.state.imc < 20){
            alert('maigre')
        }else if(this.state.imc > 20 && this.state.imc < 25){
            alert('ideal')
        }else{
            alert('surpoids')
        }
    }

    render()
    {
        return(
            <>
                <View style = {styles.container}>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder= "height"
                        placeholderTextColor = "#9a73ef" 
                        autoCapitalize = "none"
                        onChangeText = {this.handleHeight}
                    />
                    <TextInput style = {styles.input} 
                        underlineColorAndroid = "transparent" 
                        placeholder = "Weight" 
                        placeholderTextColor = "#9a73ef" 
                        autoCapitalize = "none"
                        onChangeText = {this.handleWeight}
                    />
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {() => this.calculImc(this.state.height, this.state.weight) }
                    >
                        <Text style = {styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>

                </View>
            </>
        )

    }
}
export default ImcCalcul