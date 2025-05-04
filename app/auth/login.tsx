
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const router = useRouter();
    const goToSignup = () => {
        router.replace("/auth/signup");
    }
    const handLogin = () => {
        router.replace("/main");
    }
    return (
        <View style={styles.container}>
            <View style={styles.auth}>
                <Text style={styles.title}>Login</Text>
                <View>
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
                    <TouchableOpacity style={styles.submitButton} onPress={handLogin}>
                        <Text style={styles.submitButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gotoSignup}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={goToSignup}>
                        <Text style={styles.signup}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
    signup: {
        color: "#FF6F91",
        textDecorationLine: "underline",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
    },
    gotoSignup: {
        flexDirection: "row",
        marginTop: 20,
    },
    auth: {
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
    },
});

    

 