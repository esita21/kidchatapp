import { logout } from "@/services/authService";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SettingScreen() {
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
    }
    return (
        <View>
            <Text>SETTING PAGE</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
    
}