import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const EditTransaksi = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EDIT TRANSAKSI</Text>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nomor</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nomor</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Nomor"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Tanggal</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nomor</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Tanggal"
                />
            </View>
            <Text style={styles.title2}>EDIT CUSTOMER</Text>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Kode</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kode</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Kode"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nama</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nama</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Nama"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>No Telepon</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>No Telepon</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="TangNo Telepon"
                />
            </View>
            <TouchableOpacity style={styles.simpanButton} >
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
    label: {
        marginRight: 10,
    },
    inputNomor: {
        height: 20,
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
