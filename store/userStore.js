import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function handleLogin(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
}

const useUserStore = create(set => ({
    user: null,
    setUser: user => {
        set({ user });
        handleLogin(user);
    },
    removeUser: () => set({ user: null }),
}))

export default useUserStore