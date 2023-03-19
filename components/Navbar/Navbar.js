import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useNavigate } from "react-router-native";

const routes = [
    { path: "/", name: "Home" },
    { path: "/chat", name: "Chat" },
];

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <View style={styles.navbar}>
            {routes.map(({ path, name }) => (
                <Button
                    key={path}
                    title={name}
                    onPress={() => navigate(path)}
                />
            ))}
        </View>
    );
}
