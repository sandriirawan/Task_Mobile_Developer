import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InputBarang = () => {
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('');
    const [namaBarang, setNamaBarang] = useState('');
    const [kodeBarang, setKodeBarang] = useState('');
    const [hargaBarang, setHargaBarang] = useState('');
    const [jumlahBarang, setJumlahBarang] = useState('');

    const insertBarang = async () => {
        try {
            if (!namaBarang || !kodeBarang || !hargaBarang || !jumlahBarang) {
                setErrorMessage('Mohon isi semua input.');
                return;
            }
            const totalBarang = parseInt(hargaBarang) * parseInt(jumlahBarang);
            const response = await fetch('/api/barang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ namaBarang, kodeBarang, hargaBarang, jumlahBarang, totalBarang }),
            });
            if (response.ok === true) {
                navigation.navigate('listBarang');
            }
        } catch (error) {
            console.error('Error during insertion:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Barang</Text>

            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nama Barang</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nama barang"
                    onChangeText={(text) => setNamaBarang(text)}
                    value={namaBarang}
                />
            </View>

            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nomor Barang</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Kode barang"
                    onChangeText={(text) => setKodeBarang(text)}
                    value={kodeBarang}
                />
            </View>

            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Harga</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Harga barang"
                    keyboardType="numeric"
                    onChangeText={(text) => setHargaBarang(text)}
                    value={hargaBarang}
                />
            </View>

            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Jumlah</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Jumlah"
                    keyboardType="numeric"
                    onChangeText={(text) => setJumlahBarang(text)}
                    value={jumlahBarang}
                />
            </View>

            {/* <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Total</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Total"
                    keyboardType="numeric"
                    onChangeText={(text) => setTotalBarang(text)}
                    value={totalBarang}
                />
            </View> */}

            {errorMessage !== '' && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}

            <TouchableOpacity style={styles.simpanButton} onPress={insertBarang}>
                <Text style={styles.simpanButtonText}>Simpan</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InputBarang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
        paddingVertical: 30,
    },
    placeholderContainer: {
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    placeholder: {
        color: 'gray',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    input: {
        flex: 1,
        height: 35,
    },
    simpanButton: {
        backgroundColor: '#364775',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
        marginVertical: 30,
    },
    simpanButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});
