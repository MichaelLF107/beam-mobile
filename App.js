import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Routes, Route } from "react-router-native";
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import useUserStore from './store/userStore';

export default function App() {
  const user = useUserStore((state) => state.user);

  return (
    <>
    {user ? (
      <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
      <StatusBar style="auto" />
    </NativeRouter>
    ) : (
      <Login />
    )}
    </>
  );
}