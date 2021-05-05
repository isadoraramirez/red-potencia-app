import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../components/Context';

 export function DrawerContent(props){

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  // const AuthContext = React.createContext();
  const { signOut } = React.useContext(AuthContext);

  const  toggleTheme  = () => {
    setIsDarkTheme(!isDarkTheme);
  }

    return(
        <View style= {{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={require("../../assets/avatar.png")}
                            size={50}
                            backgroundColor= {'white'}
                            />
                            <View style={{marginLeft: 15,flexDirection: 'column'}}>
                              <Title style={styles.title}>Usuario
                              </Title>
                              <Caption style={styles.caption}>@Usuario
                              </Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                             <View >
                               <Paragraph style={[styles.paragraph, styles.caption]}>568186854</Paragraph>
                               <Caption style={styles.caption}>Numero</Caption>
                             </View>
                             <View >
                               <Paragraph style={[styles.paragraph, styles.caption]}>100Gb</Paragraph>
                               <Caption style={styles.caption}>Plan</Caption>
                             </View>
                             <View >
                               <Paragraph style={[styles.paragraph, styles.caption]}>11/03/22</Paragraph>
                               <Caption style={styles.caption}>Vigencia</Caption>
                             </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="credit-card" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Recarga"
                            onPress={() => {props.navigation.navigate('RechargeScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Referencia de Pago"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                       
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ayuda"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Tema Oscuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Salir"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

// export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      marginRight: 30,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });