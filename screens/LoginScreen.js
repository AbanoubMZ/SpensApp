import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, LayoutAnimation } from "react-native";
import * as firebase from 'firebase';
import {Button} from '../components/Button';
import {Input} from '../components/Input';

const LoginScreen=({navigation})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState(null);  
    
   const handleLogin=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error=>setMsg(error.message));
    };
    LayoutAnimation.easeInEaseOut();
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            
            <Image
                    source={require("../assets/headerSpens2.png")}
                    style={{ marginTop:-5, marginLeft: -30 }}
            />
            <Image
                    source={require("../assets/footerSpens2.png")}
                    style={{ position: "absolute", bottom:-20, right: -100 }}
                />
            <Image
                    source={require("../assets/SpensLogo.png")}
                    style={{ marginTop: -155, alignSelf: "center" }}
            />
            
            <Text style={styles.greeting}>Welcome Back ! </Text>
            <View style={styles.form}>
                <Input
                    label='Email'
                    placeholder='Enter Email'
                    onChangeText={email=>setEmail(email)}
                    value={email}    
                />

                <Input
                    label='Password'
                    placeholder='Enter Password'
                    secureTextEntry
                    onChangeText={password=>setPassword(password)}
                    value={password}
                />
            </View>
            <Button onPress={()=>handleLogin()}>Login</Button>
            
            <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() =>navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        New to SpensApp? <Text style={{ fontWeight: "500", color: "#36485F" }}>Sign Up</Text>
                    </Text>
            </TouchableOpacity>


            <View style={styles.errMsg}>
                {msg && <Text style={styles.err}>{msg}</Text>}
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errMsg: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    err: {
        color: "#E00",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    }
});

export default LoginScreen
