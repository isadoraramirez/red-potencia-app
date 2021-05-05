import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import RechargeScreen from './RechargeScreen';
import CardScreen from './CardScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const RechargeStack= createStackNavigator();
const CardStack= createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarLabel: 'Inicio',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size= {26}/>
        ) }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{ tabBarLabel: 'Detalles',
        tabBarColor:'#1f65ff',
        tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size= {26}/>
        ) }}
      />
      <Tab.Screen
        name="RechargeScreen"
        component={RechargeStackScreen}
        options={{ tabBarLabel: 'Recarga',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
            <Icon name="pricetag" color={color} size= {26}/>
        ) }}
      />
            <Tab.Screen
        name="Card"
        component={CardStackScreen}
        options={{ tabBarLabel: 'Pago con Tarjeta',
        tabBarColor:'#694fad',
        // tabBarIcon: ({ color }) => (
        //     <Icon name="pricetag" color={color} size= {26}/>
        // ) 
      }}
      />
  
    </Tab.Navigator>
  );


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions= {{
      headerStyle:{
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home"
      component={HomeScreen}
      options={{title:'Inicio',
      headerLeft: ()=> (
        <Icon.Button name= "menu" size={25}
        backgroundColor="#1f65ff" onPress={()=> {navigation.openDrawer()
        }}>
        </Icon.Button>
      )
    
    }}
      />
     
    </HomeStack.Navigator>
    );
    
    const DetailsStackScreen = ({navigation}) => (
      <DetailsStack.Navigator screenOptions= {{
        headerStyle:{
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <DetailsStack.Screen name="Detalles"
        component={DetailsScreen}
        options={{
          headerLeft: ()=> (
            <Icon.Button name= "ios-menu" size={25}
            backgroundColor="#1f65ff" onPress={()=> {navigation.openDrawer()
            }}>
            </Icon.Button>
          )
        }}
        />
       
      </DetailsStack.Navigator>
    );

    const RechargeStackScreen = ({navigation}) => (
      <RechargeStack.Navigator screenOptions= {{
        headerStyle:{
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <RechargeStack.Screen name="Recarga"
        component={RechargeScreen}
        options={{
          headerLeft: ()=> (
            <Icon.Button name= "ios-menu" size={25}
            backgroundColor="#1f65ff" onPress={()=> {navigation.openDrawer()
            }}>
            </Icon.Button>
          )
        }}
        />
       
      </RechargeStack.Navigator>
    );

    const CardStackScreen = ({navigation}) => (
      <CardStack.Navigator screenOptions= {{
        headerStyle:{
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <CardStack.Screen name="Pago con Tarjeta"
        component={CardScreen}
        options={{
          headerLeft: ()=> (
            <Icon.Button name= "ios-menu" size={25}
            backgroundColor="#1f65ff" onPress={()=> {navigation.openDrawer()
            }}>
            </Icon.Button>
          )
        }}
        />
       
      </CardStack.Navigator>
    );

    export default MainTabScreen;
    