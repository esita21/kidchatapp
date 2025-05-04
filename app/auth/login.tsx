import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
export default function LoginScreen() {
    const router = useRouter();
    const goToSignup = () =>{
        router.replace("/auth/signup")
    }
    return(
        <View>
            <Text> hello</Text> 
            <Button title="Go to Signup" onPress={goToSignup} />

        </View>
    )
 }

    

 