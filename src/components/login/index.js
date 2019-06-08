import React, {Component} from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from './styles'

class Login extends Component{

    state = {username: "", password: ""};

    checkLogin() {
        const {username, password} = this.state;
        if(username == 'admin' && password == 'admin') {

            this.props.navigation.navigate('dashboard')

        }else {
            Alert.alert('Error', 'Username/Password mismatch', [{
                text: 'Okay'
            }])
        }
    }

    render(){
        const { heading, input, button, parent } = styles;

        return (
            <View style={parent}>
                <Text style={heading}>Login into the APP</Text>
                <TextInput style={input} placeholder={"Username"}
                           onChangeText={text => this.setState({ username: text})} />
                <TextInput style={input} placeholder={"Password"}
                           onChangeText={text => this.setState( {password: text})} secureTextEntry={true} />

                <Button style={button} onPress={_=> this.checkLogin()} title={"Login"} />
            </View>
        )
    }

}


export default Login