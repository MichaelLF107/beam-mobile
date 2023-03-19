import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Routes, Route } from "react-router-native";
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <StatusBar style="auto" />
    </NativeRouter>
  );
}