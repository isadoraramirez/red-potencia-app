import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import MainTabScreen from './src/screens/MainTabScreen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';

const Drawer = createStackNavigator();



const App = () => {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/* <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
        <Drawer.Screen name="RechargeScreen" component={RechargeScreen} />  */}
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );

}

export default App;