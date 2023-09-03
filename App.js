import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/Navigation/MainNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}
