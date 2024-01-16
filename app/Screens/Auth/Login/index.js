import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();


    const handleLogin = () => {
        navigation.navigate("listBarang");

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color="black"
                    style={styles.icon}
                />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons
                    name="lock"
                    size={20}
                    color="black"
                    style={styles.icon}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <Pressable onPress={togglePasswordVisibility} style={styles.visibilityIcon}>
                        <MaterialIcons
                            name={showPassword ? "visibility" : "visibility-off"}
                            size={20}
                            color="black"
                        />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.forgot}>Forgot Password?</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
    },
    login: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingVertical: 10,
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
    icon: {
        marginRight: 10,
    },
    inputEmail: {
        flex: 1,
        height: 40,
    },
    passwordContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputPassword: {
        flex: 1,
        height: 40,
        paddingRight: 10,
    },
    visibilityIcon: {
        paddingLeft: 10,
    },
    forgot: {
        textAlign: 'right',
        marginBottom: 20,
        color: "#364775"
    },
    loginButton: {
        backgroundColor: '#364775',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',

    },
});
