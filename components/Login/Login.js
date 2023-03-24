import { View, Text } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { TextInput, Button } from "@react-native-material/core";
import useUserStore from "../../store/userStore";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useUserStore((state) => state.setUser);

    function handleUsername(username) {
        setUsername(username);
    }

    function handlePassword(password) {
        setPassword(password);
    }

    return (
        <View style={styles.container}>
            <View style={styles.bubblePurple}></View>
            <View style={styles.bubbleBlue}></View>
            <View style={styles.loginForm}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    label="Username"
                    variant="outlined"
                    id="username"
                    value={username}
                    onChangeText={(username) => handleUsername(username)}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    variant="outlined"
                    id="password"
                    value={password}
                    onChangeText={(password) => handlePassword(password)}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    onPress={async () => {
                        const user = {
                            username,
                            token: "1234567890",
                        };
                        await setUser(user);
                    }}
                    style={styles.button}
                >
                    Login
                </Button>
            </View>
        </View>
    );
}