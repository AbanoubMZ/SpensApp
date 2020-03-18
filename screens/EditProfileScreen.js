import React,{useState} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Button } from '../components/Button';

const EditProfileScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Edit Profile Screen</Text>
            <Button onPress={()=>navigation.navigate('Profile')}>Back</Button>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default EditProfileScreen