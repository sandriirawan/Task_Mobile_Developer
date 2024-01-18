import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditTransaksi = ({ route }) => {
    const { id } = route.params
    console.log(id);
    const navigation = useNavigation();

    const listTransaksi = () => {
        navigation.navigate("listTransaksi");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EDIT TRANSAKSI</Text>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nomor</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nomor"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Tanggal</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tanggal"
                />
            </View>
            <Text style={styles.title2}>Customer</Text>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Kode</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Kode"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nama</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nama"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>no Telepon</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="no Telepon"
                />
            </View>
            <TouchableOpacity style={styles.simpanButton} onPress={listTransaksi}>
                <Text style={styles.simpanButtonText}>Simpan</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditTransaksi

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
        fontSize: 25
    },
    title2: {
        fontWeight: "bold",
        color: "black",
        fontSize: 25,
        marginTop: 30
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
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    input: {
        height: 35,
        flex: 1,
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
