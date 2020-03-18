import React,{useState,useEffect} from 'react';
import {Text , View, StyleSheet,TextInput ,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {Button} from '../components/Button';
import FirebaseConfig  from '../FirebaseConfig';

const HomeScreen=()=>{
    const [email,setEmail]= useState('');
    const [displayName,setDisplayName]= useState('');
    const [text,setText]= useState('');
    const [avatar,setAvatar]= useState(null);

    useEffect(()=>{
        const { email, displayName,avatar } = FirebaseConfig.shared.Cuser();
        setEmail(email);
        setDisplayName(displayName);
        setAvatar(avatar);
    })

    return(
        <SafeAreaView style={styles.container}>
        
            <View style={styles.post}>
                <Image style={styles.avatarStyle} source={{uri:avatar}}/>
                <TextInput 
                    style={{flex:1,fontSize:15}} 
                    numberOfLines={4}
                    autoFocus={true}
                    multiline={true}
                    placeholder={`What is on your mind, ${displayName}?`}
                    onChangeText={text=>setText(text)}
                    value={text}
                />
            </View>
            <TouchableOpacity onPress={()=>{}} style={styles.button}>
                <Text style={styles.text}>Post</Text>
            </TouchableOpacity>
           
    


        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    miniContainer:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    post:{
        flexDirection: "row",
        margin:25,
        borderColor:'#004E96',
        borderWidth:1,
        marginBottom:5

    },
    avatarStyle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    button: {
        alignSelf:'flex-end',
        marginTop: 5,
        padding: 20,
        borderRadius: 4,
        height: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#004E96',
        marginHorizontal:25
    
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
      }
});

export default HomeScreen
