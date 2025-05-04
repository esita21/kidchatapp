import { signup } from "@/services/authService";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function SignupScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const goToLogin = () =>{
        router.replace("/auth/login")
    }
    const handleSignup = async () => {
        if(await signup(email, password))
            router.replace("/main");
    }
    return(
        <View style={styles.container}>
        
            <View style={styles.auth}> 
                <Text style={styles.title}>Signup</Text>
                <View>
                    <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} keyboardType="email-address"/>
                    <TextInput placeholder="Password" secureTextEntry  style={styles.input} onChangeText={setPassword}/>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
                        <Text style={styles.submitButtonText}>Signup</Text>
                    </TouchableOpacity>
                    

                </View>
                <View style={styles.gotoLogin}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffe6f0",
    },
    input: {
        width: "100%",
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
    submitButton: {
        backgroundColor: "#FF6F91",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    submitButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    login :{
        color: "#FF6F91",
        textDecorationLine: "underline",
    },
    title :{
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
    },
    gotoLogin:{
        flexDirection: "row",
    
        marginTop: 20,
    },
    auth :{
        backgroundColor: "#fff",
        padding: 40,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.2,
        shadowRadius: 25.00,
        elevation: 10,
    }
 })
    

 