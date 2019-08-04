import { React } from "react";
import { Platform, Button, Alert, ToastAndroid } from "react-native";

export default props => {
    const notify = msg => {
        if(Platform.OS === 'android') { 
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else { // ios
            Alert.alert('Informação', msg);
        }
    }

    return (
        <Button title='Plataforma?' onPress={ () => notify('Hello World!!!') } />
    )
}