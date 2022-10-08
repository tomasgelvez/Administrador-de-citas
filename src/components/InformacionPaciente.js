import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {formatearFecha} from './helpers';
const InformacionPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          styles={styles.btnCancelar}
          onLongPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}>
          <Text style={styles.btnCancelarTexto}> X Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.emailPropietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono: </Text>
          <Text style={styles.valor}>{paciente.telPropietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas: </Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});
export default InformacionPaciente;
