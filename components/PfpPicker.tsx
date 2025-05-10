import { Modal, View,Text,Pressable,StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import  MaterialIcons from "@expo/vector-icons/MaterialIcons";
type props=PropsWithChildren<{
    visible:boolean,
    onClose:()=>void,
}>
export default function PfpPicker({visible,onClose,children}:props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
               <View style={styles.container }>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Choose a Profile Picture</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredView: { 
        height: "25%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        position: "absolute",
        bottom: 0},
    container: {
        height : "16%",
        backgroundColor: "#fff",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    });