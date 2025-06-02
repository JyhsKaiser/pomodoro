
/**
 * Importación de componentes esenciales desde React Native:
 * - View: Contenedor básico para diseño y estructura.
 * - Text: Componente para mostrar texto.
 * - TouchableOpacity: Componente interactivo que responde al toque con un efecto de opacidad.
 * - StyleSheet: Utilidad para definir estilos de forma optimizada.
 */

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const options = [
    "Pomodoro",
    "Break Corto",
    "Break Largo",
];

export default function Header({ modoActual, setModoActual, setTiempo, setEstaActivo }) {

    function handlePress(indice) {
        const newTime = indice === 0 ? 25 : indice === 1 ? 5 : 15;
        setModoActual(indice);
        setEstaActivo(false);
        setTiempo(newTime * 60);

    }

    return (
        <View style={{ flexDirection: "row" }}>

            {options.map((item, indice) => (
                <TouchableOpacity
                    key={indice}
                    onPress={() => { handlePress(indice) }}
                    style={[styles.itemStyle, modoActual !== indice && { borderColor: "transparent" }]}
                >
                    <Text style={{ fontWeight: "bold" }}>{item}</Text>
                </TouchableOpacity>
            ))
            }

        </View >
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderColor: "white",
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 20,
    }
});