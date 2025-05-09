// import ProfileButton from "@/components/Profilebutton";
// import ProfilePic from "@/components/ProfilePic";
// import { logout } from "@/services/authService";
// import { useRouter } from "expo-router";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function SettingScreen() {
//     const router = useRouter();
//     const handleLogout = async () => {
//         await logout();
//     }
//     return (
//         <View style={styles.container}>
//             <View style={styles.profile}>
//                 <ProfilePic size={150} source={require("@/assets/images/pfp.jpg")} />
//                 <View style={styles.profiletext}>
//                     <Text style={{ fontSize: 30, fontWeight: "bold" }}>Esita Dey</Text>
//                     <Text style={{ fontSize: 20, color: "#555" }}>esitadey20042gmail.com</Text>
//                 </View>


//             </View>
//             <View>
//             <ProfileButton text="logout" col="red" onPress={handleLogout}/>
         
//             </View>

//             {/* <Button title="Logout" onPress={handleLogout} /> */}
//         </View>

//     );
    
// }
// const styles = StyleSheet.create({
//     container: {
//         paddingTop : 30,
//         flex: 1,
//         // justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#cee7f0",
//     },
//     profiletext: {
//         alignItems: "center",
//         marginBottom: 10,
//         marginTop: 10,
        

//     },
//     input: {
//         width: "100%",
//         padding: 12,
//         marginBottom: 15,
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 8,
//     },
//     submitButton: {
//         backgroundColor: "#FF6F91",
//         padding: 15,
//         borderRadius: 8,
//         alignItems: "center",
//     },
//     submitButtonText: {
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 16,
//     },
//     signup: {
//         color: "#FF6F91",
//         textDecorationLine: "underline",
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: "bold",
//         marginBottom: 30,
//     },
//     gotoSignup: {
//         flexDirection: "row",
//         marginTop: 20,
//     },
//     profile: {
//         backgroundColor: "#fff",
//         padding: 40,
//         marginBottom: 10,
//         marginTop: 10,
//         borderRadius: 20,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 12,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 25.00,
//         elevation: 10,
//     },
// });









import ProfilePic from "@/components/ProfilePic";
import { logout } from "@/services/authService";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
  };

  const handleInvite = () => {
    Alert.alert("Invite Friends", "This will open your phone's share menu.");
  };

  return (
    <View style={styles.container}>
      {/* Full Card: Profile + Menu */}
      <View style={styles.fullCard}>
        {/* Pink Profile Header */}
        <View style={styles.profileHeader}>
          <ProfilePic size={90} source={require("@/assets/images/pfp.jpg")} />
          <Text style={styles.username}>🌸 Esita Dey</Text>
          <Text style={styles.email}>📧 esitadey20042@gmail.com</Text>
        </View>

        {/* Menu Section */}
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push("../profile")}>
            <Text style={styles.menuText}>👤 Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push("../settings")}>
            <Text style={styles.menuText}>⚙️ Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleInvite}>
            <Text style={styles.menuText}>💌 Invite Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={handleLogout}>
            <Text style={[styles.menuText, { color: "#ff4d6d" }]}>🚪 Logout</Text>
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
    backgroundColor: "#fef6ff", // Soft pink background
    // paddingTop: 60,
    paddingHorizontal: 20,
  },
  fullCard: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  profileHeader: {
    backgroundColor: "#ff87ab", // Pink header
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 12,
    color: "#050505", // Hot pink name
  },
  email: {
    fontSize: 16,
    color: "black",
    marginTop: 5,
  },
  menu: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
});

