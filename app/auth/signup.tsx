import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
export default function SignupScreen() {
    const router = useRouter();
    const goToLogin = () =>{
        router.replace("/auth/login")
    }
    return(
        <View>
            <Text> hello</Text> 
            <Button title="Go to Login" onPress={goToLogin} />

        </View>
    )
 }

    

 