import { Tabs } from "expo-router";
export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ tabBarLabel: "Home",headerTitle:"Home" }} />
            <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile",headerTitle:"Profile" }} />
        </Tabs>
    );
}