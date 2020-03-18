import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {Button} from '../components/Button';
import {Ionicon} from '@expo/vector-icons'; 
import FirebaseConfig from '../FirebaseConfig';

const ProfileScreen=({navigation})=>{

    const [email,setEmail]= useState('');
    const [displayName,setDisplayName]= useState('');
    const [avatar,setAvatar]= useState(null);

    useEffect(()=>{
        const { email, displayName,avatar } = FirebaseConfig.shared.Cuser();
        setEmail(email);
        setDisplayName(displayName);
        setAvatar(avatar);
    })
    return(
        <SafeAreaView style={styles.container}>
           <View style={styles.dataContainer}>
            <Image
                source={{uri:avatar}}
            />
                <Text style={styles.data}>Name: {displayName}</Text>
                <Text style={styles.data}>Email: {email}</Text>
           </View>
           

            <Button onPress={()=>navigation.navigate('Edit')} >Edit Profile</Button>
            <Button onPress={()=>FirebaseConfig.shared.signOut()}>SignOut</Button>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    dataContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:25,
        

    },
    data:{
        fontSize:15,
        fontWeight:'400',
        margin:15,
    }
    
});

export default ProfileScreen