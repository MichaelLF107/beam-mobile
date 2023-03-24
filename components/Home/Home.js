import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import useUserStore from '../../store/userStore';

export default function Home() {
    const removeUser = useUserStore((state) => state.removeUser);
    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={() => {removeUser()}} />
            <Text>Home</Text>
        </View>
    );
}
