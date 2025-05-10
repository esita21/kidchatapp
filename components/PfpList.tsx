import ProfilePic from "@/components/ProfilePic";
import { type ImageSource } from "expo-image";
import { FlatList, Platform, Pressable } from "react-native";
type props={
    onSelect:(img:ImageSource)=>void,
    onCloseModal:()=>void,

}

export default function PfpList({onSelect,onCloseModal}:props) {
   
    const images=[
        require("@/assets/images/pfp.jpg"),
        require("@/assets/images/pfp2.jpg"),
        require("@/assets/images/pfp3.jpg"),
        require("@/assets/images/pfp4.jpg"),
        require("@/assets/images/pfp5.jpg"),
        
    ];
    return (
        <FlatList
            data={images}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                <Pressable  style= { { marginHorizontal:10 }} onPress={()=>{
                  
                    onSelect(item);
                    onCloseModal();
                }}>
                    <ProfilePic source={item} size={120} />
                </Pressable>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={Platform.OS==="web"}
            contentContainerStyle={{borderTopLeftRadius:10,borderTopRightRadius:10,paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}
        />
    );
}