
// import PfpList from "@/components/PfpList";
// import PfpPicker from "@/components/PfpPicker";
// import ProfilePic from "@/components/ProfilePic";
// import { type ImageSource } from "expo-image";
// import { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function editprofile() {
//     const [modalvisible, setModalVisible] = useState <boolean>(false);
//     const [selectedPfp, setSelectedPfp] = useState <ImageSource | undefined>(undefined);
//     return (
//         <View style={styles.container}>
//       {/* Full Card: Profile + Menu */}
//         <View style={styles.fullCard}>
//         {/* Pink Profile Header */}
//         <View style={styles.profileHeader}>
//           <ProfilePic size={130} source={ (selectedPfp )? selectedPfp :require("@/assets/images/pfp.jpg")} />
//           <TouchableOpacity onPress= {() => setModalVisible(true)} style={{marginTop:10}}>
//             <Text style={{color:"aqua",fontSize:15}}>Change Profile Picture</Text>
//           </TouchableOpacity>
//           <Text style={styles.username}>🌸 Esita Dey</Text>
//           <Text style={styles.email}>📧 esitadey20042@gmail.com</Text>
//           <TouchableOpacity style={styles.submitButton}>
//             <Text style={styles.submitButtonText}>Save</Text>
//          </TouchableOpacity>
//         </View>
    
       
//          </View>
//          <PfpPicker
//             visible={modalvisible}
//             onClose={() => setModalVisible(false)}>
//             <PfpList onSelect={ setSelectedPfp} onCloseModal={() => setModalVisible(false)} />
//          </PfpPicker>

//         </View>
//     );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#b8e6fc", // Soft pink background
//     // paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   fullCard: {
//     borderRadius: 20,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   profileHeader: {
//     backgroundColor: "#cab4fa", // Pink header
//     alignItems: "center",
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: "600",
//     marginTop: 12,
//     color: "#050505", // Hot pink name
//   },
//   email: {
//     fontSize: 16,
//     color: "black",
//     marginTop: 5,
//   },
//   submitButton: {
//         backgroundColor: "#FF6F91",
//         padding: 15,
//         borderRadius: 8,
//         alignItems: "center",
//         width:"50%",
//     },
//     submitButtonText: {
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 16,
//     },
//   menu: {
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//   },
//   menuItem: {
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//     borderBottomColor: "#eee",
//     borderBottomWidth: 1,
//   },
//   menuText: {
//     fontSize: 18,
//     color: "#333",
//   },
//   logout: {
//     borderBottomWidth: 0,
//     marginTop: 10,
//   },
// });



import PfpList from "@/components/PfpList";
import PfpPicker from "@/components/PfpPicker";
import ProfilePic from "@/components/ProfilePic";
import { type ImageSource } from "expo-image";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfile() {
  const [modalvisible, setModalVisible] = useState<boolean>(false);
  const [selectedPfp, setSelectedPfp] = useState<ImageSource | undefined>(undefined);
  const [username, setUsername] = useState("Esita Dey");

  const handleSave = () => {
    // Implement actual save logic here
    console.log("Saved profile with name:", username);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.fullCard}>
          {/* Pink Header */}
          <View style={styles.profileHeader}>
            <ProfilePic
              size={130}
              source={selectedPfp ? selectedPfp : require("@/assets/images/pfp.jpg")}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginTop: 10 }}>
              <Text style={styles.linkText}>Change Profile Picture</Text>
            </TouchableOpacity>

            <Text style={styles.email}>📧 esitadey20042@gmail.com</Text>

            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your name"
              placeholderTextColor="#888"
            />
          </View>

          {/* Save Button */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSave}>
              <Text style={styles.submitButtonText}> Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal for selecting new profile pic */}
        <PfpPicker visible={modalvisible} onClose={() => setModalVisible(false)}>
          <PfpList onSelect={setSelectedPfp} onCloseModal={() => setModalVisible(false)} />
        </PfpPicker>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#e6f6ff",
    paddingHorizontal: 20,
    paddingVertical: 40,
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
    backgroundColor: "#fdd6f5",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  linkText: {
    color: "#00bcd4",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 12,
  },
  input: {
    marginTop: 20,
    width: "100%",
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    color: "#333",
  },
  footer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#FF6F91",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
