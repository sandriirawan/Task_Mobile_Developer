import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";


const ListTransaksi = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const InputTransaksi = () => {
        navigation.navigate("inputTransaksi");
    };

    const EditTransaksi = () => {
        navigation.navigate("editTransaksi");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="menu"
                    size={25}
                    color="white"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
                <MaterialIcons
                    name="search"
                    size={25}
                    color="white"
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.nomorTransaksi}>202101-0001</Text>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Nama Customer</Text>
                                <Text style={styles.blackText}>Cust A</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Tanggal</Text>
                                <Text style={styles.blackText}>01-Januari-2024</Text>
                            </View>
                        </View>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Jumlah Barang</Text>
                                <Text style={styles.blackText}>2</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Total</Text>
                                <Text style={styles.blackText}>245.000.00</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.wrapButton}>
                            <TouchableOpacity style={styles.loginEdit} onPress={EditTransaksi} >
                                <Text style={styles.loginEditText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginHapus} onPress={toggleModal}>
                                <Text style={styles.loginHapusText}>Hapus</Text>
                            </TouchableOpacity>
                        </View>
                        <Modal isVisible={isModalVisible}>
                            <View style={{ backgroundColor: "white", height: 350, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.titleModal}>Apakah yakin ingin menghapus Transaksi?</Text>
                                <MaterialIcons
                                    name="delete-forever"
                                    size={100}
                                    color="black"
                                />
                                <View style={styles.wrapButton}>
                                    <Button title="Batal" color={"grey"} onPress={toggleModal} />
                                    <View style={{ paddingHorizontal: 5 }}></View>
                                    <Button title="Hapus" color={"red"} onPress={toggleModal} />
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nomorTransaksi}>202101-0001</Text>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Nama Customer</Text>
                                <Text style={styles.blackText}>Cust A</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Tanggal</Text>
                                <Text style={styles.blackText}>01-Januari-2024</Text>
                            </View>
                        </View>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Jumlah Barang</Text>
                                <Text style={styles.blackText}>2</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Total</Text>
                                <Text style={styles.blackText}>245.000.00</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.wrapButton}>
                            <TouchableOpacity style={styles.loginEdit} >
                                <Text style={styles.loginEditText}>edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginHapus} >
                                <Text style={styles.loginHapusText}>edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nomorTransaksi}>202101-0001</Text>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Nama Customer</Text>
                                <Text style={styles.blackText}>Cust A</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Tanggal</Text>
                                <Text style={styles.blackText}>01-Januari-2024</Text>
                            </View>
                        </View>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Jumlah Barang</Text>
                                <Text style={styles.blackText}>2</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Total</Text>
                                <Text style={styles.blackText}>245.000.00</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.wrapButton}>
                            <TouchableOpacity style={styles.loginEdit} >
                                <Text style={styles.loginEditText}>edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginHapus} >
                                <Text style={styles.loginHapusText}>edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nomorTransaksi}>202101-0001</Text>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Nama Customer</Text>
                                <Text style={styles.blackText}>Cust A</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Tanggal</Text>
                                <Text style={styles.blackText}>01-Januari-2024</Text>
                            </View>
                        </View>
                        <View style={styles.wrap}>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Jumlah Barang</Text>
                                <Text style={styles.blackText}>2</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.title}>Total</Text>
                                <Text style={styles.blackText}>245.000.00</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.wrapButton}>
                            <TouchableOpacity style={styles.loginEdit} >
                                <Text style={styles.loginEditText}>edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginHapus} >
                                <Text style={styles.loginHapusText}>edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.floatingButton} onPress={InputTransaksi}>
                <MaterialIcons
                    name="add"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
};

export default ListTransaksi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    header: {
        height: 70,
        backgroundColor: '#364775',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    cardContainer: {
        padding: 10,
        flex: 1,
    },
    card: {
        padding: 20,
        backgroundColor: "#ffffff",
        width: "100%",
        height: 300,
        borderRadius: 20,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#ccc',
    },
    wrap: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    nomorTransaksi: {
        color: "#364775",
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    title: {
        color: "grey",
    },
    blackText: {
        color: "black",
    },
    leftContent: {
        flex: 1,
    },
    rightContent: {
        flex: 1,
        alignItems: 'flex-start',
    },
    line: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    wrapButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30
    },
    loginEdit: {
        backgroundColor: '#364775',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10
    },
    loginEditText: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 25
    },
    loginHapus: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#364775',
        marginRight: 10
    },
    loginHapusText: {
        color: '#364775',
        fontWeight: 'bold',
        paddingHorizontal: 25
    },
    titleModal: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
        textAlign: "center",
        paddingVertical: 30
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#364775',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});
