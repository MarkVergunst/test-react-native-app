import React, {Component} from 'react'
import {createAppContainer, createDrawerNavigator} from "react-navigation";
import { View } from 'react-native'
import { Icon } from 'react-native-elements';
import ListView from '../listview'

class Dashboard extends Component {

    static navigationOptions = {
        headerLeft:
            <View style={{paddingLeft: 16}}>
                <Icon
                    name="md-menu"
                    size={30}
                    color='white'
                />
            </View>,
    };


    render() {
        return (
            <AppStack/>
        )
    }
}

const AppStack = createDrawerNavigator({
    listview: {
        screen: ListView
    }
});


const MyApp = createAppContainer(AppStack);

export default MyApp