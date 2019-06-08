import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {Icon} from "react-native-elements";

class ListView extends Component {

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
            <View>
                <Text>
                    Hallo ListView
                </Text>
                <Button
                    onPress={() => this.props.navigation.toggleDrawer()}
                    title="Go to notifications"
                />
            </View>
        )
    }
}


export default ListView