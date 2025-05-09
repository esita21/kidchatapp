import { Image, type ImageSource } from 'expo-image'; // Assuming you're using expo-image for better performance
import React from 'react';

import { StyleSheet, View } from 'react-native';

interface ProfilePicProps {
    size: number;
    source: ImageSource;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ size, source }) => {
    return (
        <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
            <Image
                source={ source }
                style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'cover',
    },
});

export default ProfilePic;