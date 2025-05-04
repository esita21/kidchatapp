import { useAuth } from "@/services/authService";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { user } = useAuth();
  if (user) {
    return <Stack initialRouteName="main" screenOptions={{ headerShown: false }} />;
  }
  return <Stack  screenOptions={{headerShown:false}}/>;
}
