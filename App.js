import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';



import Header from './src/components/Header';
import Timer from './src/components/Timer';
import Buttons from './src/components/Buttons';

const greenColors = ["#E4F9F5", "#30E3CA", "#11999E", "#EEEEEE"];

export default function App() {
  const [estaTrabajando, setEstaTrabajando] = useState(false);
  const [tiempo, setTiempo] = useState(1500);
  const [modoActual, setModoActual] = useState("Pomodoro" | "Break Corto" | "Break Largo");
  const [estaActivo, setEstaActivo] = useState(false);


  useEffect(() => {
    let intervalo = null;
    if (estaActivo) {
      intervalo = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    if (tiempo === 0) {
      setEstaActivo(false);
      setEstaTrabajando((prev) => !prev); // Cambia el estado de trabajo a descanso o viceversa
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

    return () => clearInterval(intervalo);
  }, [estaActivo, tiempo])







  return (
    <SafeAreaView style={[styles.container, { backgroundColor: greenColors[modoActual] }]}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 20
        }}
      >

        <Text style={styles.title} > Pomodoro </Text>

        <Header
          setTiempo={setTiempo}
          modoActual={modoActual}
          setModoActual={setModoActual}
          estaActivo={estaActivo}
          setEstaActivo={setEstaActivo}
        />

        <Timer tiempo={tiempo} />

        <Buttons
          setEstaTrabajando={setEstaTrabajando}
          estaActivo={estaActivo}
          setEstaActivo={setEstaActivo}
          modoActual={modoActual}
          setTiempo={setTiempo}
        />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 15,
  }
});
