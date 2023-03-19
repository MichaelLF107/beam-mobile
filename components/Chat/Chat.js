import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigate } from 'react-router-native';

export default function Chat() {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text>Chat</Text>
            <Button title="Go to Home" onPress={() => navigate('/')} />
        </View>
    );
}