import { StatusBar } from 'expo-status-bar';
import { StatusBar as Bar } from 'react-native';
import Toast from 'react-native-toast-message';

import { Main } from './src/components/Main';

export default function App() {
  return (
    <>
        <Main />
        <Toast
          topOffset={(Bar.currentHeight || 0) + 20}
        />

        <StatusBar style="dark" />
    </>
  );
}