import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const EditBarang = ({ route }) => {
    const { id } = route.params
    const navigation = useNavigation();

    const [namaBarang, setNamaBarang] = useState('')
    const [kodeBarang, setKodeBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [totalBarang, setTotalBarang] = useState('')

    useEffect(() => {
        const fetchBarangDetails = async () => {
            try {
                const response = await axios.get(`/api/barang/${id}`);
                if (response.ok) {
                    const barang = await response.json();
                    setNamaBarang(barang.namaBarang);
                    setKodeBarang(barang.kodeBarang);
                    setHargaBarang(String(barang.hargaBarang));
                    setJumlahBarang(String(barang.jumlahBarang));
                    setTotalBarang(String(barang.totalBarang));
                } else {
                    console.error('Failed to fetch barang details:', response.statusText);
                }
            } catch (error) {
                console.error('Error during fetching barang details:', error);
            }
        };

        fetchBarangDetails();
    }, [id]);

    const editBarang = async () => {
        try {
            const response = await axios.put(`/api/barang/${id}`, {
                namaBarang,
                kodeBarang,
                hargaBarang,
                jumlahBarang,
                totalBarang
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                navigation.navigate('listBarang');
            } else {
                console.error('Failed to edit barang:', response.statusText);
            }
        } catch (error) {
            console.error('Error during editing barang:', error);
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
                    placeholder="nama barang"
                    onChangeText={text => setNamaBarang(text)}
                    value={namaBarang}
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nomor Barang</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="kode barang"
                    onChangeText={text => setKodeBarang(text)}
                    value={kodeBarang}
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Harga</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="harga barang"
                    keyboardType="numeric"
                    onChangeText={text => setHargaBarang(text)}
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
                    onChangeText={text => setJumlahBarang(text)}
                    value={jumlahBarang}
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Total</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Total"
                    keyboardType="numeric"
                    onChangeText={text => setTotalBarang(text)}
                    value={totalBarang}
                />
            </View>
            <TouchableOpacity style={styles.simpanButton} onPress={editBarang}>
                <Text style={styles.simpanButtonText}>Simpan</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditBarang

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30,
        paddingVertical: 30
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
        marginVertical: 30
    },
    simpanButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
