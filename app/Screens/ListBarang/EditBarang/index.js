import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const EditBarang = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Barang</Text>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Kode Barang</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kode Barang</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Kode Barang"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Nomor Barang</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nomor Barang</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Nomor Barang"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Harga</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Harga</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Harga"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Jumlah</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Jumlah</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Jumlah"
                />
            </View>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholder}>Total</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Total</Text>
                <TextInput
                    style={styles.inputNomor}
                    placeholder="Total"
                />
            </View>
            <TouchableOpacity style={styles.simpanButton} >
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
