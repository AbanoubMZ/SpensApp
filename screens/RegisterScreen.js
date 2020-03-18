import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, LayoutAnimation } from "react-native";
import { Button } from '../components/Button';
import {Input} from '../components/Input';
import {Ionicons} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import * as firebase from 'firebase';
import '@firebase/firestore';
import UserPermissions from '../utils/UserPersmissions';
import FirebaseConfig from '../FirebaseConfig';


const RegisterScreen=({navigation})=>{
    /*const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [msg,setMsg]=useState(null);
    const [avatar,setAvatar]=useState(null);
    */
    const [user,setUser]=useState({name:'',email:'',password:'',msg:null,avatar:null});

    const handleRegisteration= async ()=>{
      /*firebase.auth().createUserWithEmailAndPassword(email,password).then(userCredentials=>{
            return userCredentials.user.updateProfile({
                displayName:name
            });
        }).catch(error=>setMsg(error.message));
        */
       FirebaseConfig.shared.createUser(user);
      
    }
    
    const handlePickAvatar = async () => {
        UserPermissions.getCameraPermission();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            console.log(result.uri);
           setUser({...user,avatar:result.uri});
        }
    };
    LayoutAnimation.easeInEaseOut();

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <Image
                    source={require("../assets/headerSpens2.png")}
                    style={{ marginTop:-5, marginLeft: -30 ,marginBottom:-70}}
            />
             <Image
                    source={require("../assets/footerSpens2.png")}
                    style={{ position: "absolute", bottom:-20, right: -100 }}
                />

            <View style={{ position: "absolute", top: 64, alignItems: "center", width: "100%" }}>
                <TouchableOpacity style={styles.avatarPlaceholder} onPress={()=>handlePickAvatar()}>
                    <Image source={{uri:user.avatar}} style={styles.avatar} />
                    <Ionicons
                            name="ios-add"
                            size={40}
                            color="#F0F1F0"
                            style={{ marginTop: 6, marginLeft: 2 }}
                        />
                    </TouchableOpacity>
                </View>
            <View style={styles.form}>
                <Input
                    label='Full Name'
                    placeholder='Enter Full Name'
                    onChangeText={name=>setUser({...user,name:name})}
                    value={user.name}
                 />
                 <Input
                     label='Email'
                     placeholder='Enter Email Adress'
                     onChangeText={email=>setUser({...user,email:email})}
                     value={user.email}
                 />

                 <Input
                     label='Password'
                     placeholder='Enter Password'
                     onChangeText={password=>setUser({...user,password:password})}
                     secureTextEntry
                     value={user.password}
                 />


            </View>
            <Button
                onPress={()=>handleRegisteration()}
            >Sign Up </Button>

            <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={()=>navigation.navigate('Login')}>
                 <Text style={{ color: "#414959", fontSize: 13 }}>
                        Already user? <Text style={{ fontWeight: "500", color: "#36485F" }}>Login</Text>
                </Text>
            </TouchableOpacity>

            <View style={styles.errMsg}>
                {user.msg && <Text style={styles.err}>{user.msg}</Text>}
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    greeting:{
        marginTop:5,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errMsg:{
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    err:{
        color: "#E00",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 45,
        marginHorizontal: 30
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50
    }
});

export default RegisterScreen
