import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import { Audio } from 'expo-av';
const fuenteSonido = require('../../assets/touch.mp3');

export default function Buttons({ setEstaTrabajando, estaActivo, setEstaActivo, modoActual, setTiempo }) {

    function handlerStop() {
        playSound();
        setEstaActivo(false);
        setEstaTrabajando(false);
        switch (modoActual) {
            case 0:
                setTiempo(1500);
                break;
            case 1:
                setTiempo(300);
                break;
            case 2:
                setTiempo(900);
        }
    }

    function handlerIniciarPausar() {
        playSound();
        setEstaActivo(!estaActivo);
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(fuenteSonido);
        await sound.playAsync();
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button.buttonRed} onPress={handlerStop} >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                    Stop
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handlerIniciarPausar} >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                    {estaActivo ? "Pausar" : "Iniciar"}
                </Text>
            </TouchableOpacity>

        </View >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 0.07,
        flexDirection: 'row',
        // borderWidth: 3,
        // borderColor: "white",
        justifyContent: 'space-between',
        marginVertical: 15,
        width: "100%",
    },
    button: {
        buttonRed: {
            backgroundColor: 'red',
            padding: 15,
            borderRadius: 15,
            alignItems: 'center',
            width: "45%",
            height: 50,
        },
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        // marginVertical: 15,
        width: "45%",
        height: 50,
    }
});