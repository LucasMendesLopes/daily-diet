import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { Home } from '@screens';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Nunito_Regular: Nunito_400Regular,
    Nunito_Bold: Nunito_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_7,
  },
});
