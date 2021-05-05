import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert
} from "react-native";
import {  MaterialIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from "react-native-paper";


class PaymentScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={checked: ""
    
    }
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { checked } = this.state;
    const {price,gigas,minutes,messages}= this.props.route.params;
    const alerta = ()=> Alert.alert("datos mandados= Pago por "+this.state.checked +price)
    return (
      <SafeAreaView>
       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft: 15,
  },
  button: {
    marginTop: 5,
    borderRadius: 60,
  },
  card: {
    height: 90,
    width: "93%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    paddingTop: 8,
  },
  profileImg: {
    width: 50,
    height: 30,
    borderRadius: 20,
  },
  itemOne: {
    width: "30%",
    alignItems: "center",
  },
  itemTwo: {
    width: "40%",
    alignItems: "center",
  },
  itemThree: {
    width: "30%",
    alignItems: "center",
  },
  buttonGreen: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentScreen;
