import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';

const Select = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Title titleText='Select Type of Quiz' />
            <View style={styles.bannerContainer}>
                <Text>Select One Option :</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz', { type: "maths" })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Maths</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz', { type: "computer" })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Computer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz', { type: "gk" })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>GK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz', { type: "sports" })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Sports</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
});
