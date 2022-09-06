import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';
import { store } from './src/store/Store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <Navigation />
      </Provider>
    </>
  );
}
