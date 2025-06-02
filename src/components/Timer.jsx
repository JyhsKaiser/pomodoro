import { Text, View, StyleSheet } from 'react-native';

export default function Timer({ tiempo, setTiempo, tiempoActual, setTiempoActual }) {
    const tiempoFormateado = `${Math.floor(tiempo / 60)
        .toString()
        .padStart(2, "0")} : ${(tiempo % 60).toString().padStart(2, "0")}`;
    return (
        <View style={styles.container}>
            <Text style={styles.time}>
                {tiempoFormateado}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    }
});