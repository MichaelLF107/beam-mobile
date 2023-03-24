import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
    },
    loginForm: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
    },
    button: {
        marginTop: 20,
        color: 'white',
    },
    bubblePurple: {
        position: 'absolute',
        top: -250,
        left: -350,
        width: 700,
        height: 700,
        borderRadius: 700 / 2,
        backgroundColor: '#9C27B0',
    },
    bubbleBlue: {
        position: 'absolute',
        bottom: -250,
        right: -350,    
        width: 600,
        height: 600,
        borderRadius: 600 / 2,
        backgroundColor: '#2196F3',
    },
});