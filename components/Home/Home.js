import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigate } from 'react-router-native';

export default function Home() {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to Chat" onPress={() => navigate('/chat')} />
        </View>
    );
}
