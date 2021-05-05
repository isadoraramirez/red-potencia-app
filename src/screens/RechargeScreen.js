import * as React from "react";
//import Http from "../libs/http";
//import DetailsRecharge from '../components/DetailsRecharge'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Image,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
//import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// export default function RechargeScreen({ navigation: { navigate } }) {
class RechargeScreen extends React.Component {
  // state = {
  //   coins: [],
  // };
  // componentDidMount = async () => {
  //   // this.setState({ loading :true })

  //   const res = await Http.instance.get(
  //     "https://api.coinlore.net/api/tickers/"
  //   );

  //   this.setState({ coins: res.data });
  
  // };
  // pay = () => {
  //   this.props.navigation.navigate('PaymentScreen');
  // };
  constructor(props){
    super(props)
  }
  render() {
    // const { coins, loading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subHeader}>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,paddingLeft: 10, paddingBottom: 10, }]}>
            Elige un Plan Para Recargar
          </Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('PaymentScreen', {price: '$300',gigas: '40GB',minutes:'1500 minutos' ,messages: '1000 SMS'})}
          //onPress={this.pay}

        //   data={coins}
        //   renderItem={({ item }) => 
        //    <Details
        //     item={item}
        //     onPress={() => {this.handlePress (item)}}
        //     />
        // }
        >
            <LinearGradient
              colors={["#eb4980", "#eb5000"]}
              style={styles.signIn}
            >
              <View style={styles.card}>
                <View style={styles.itemOne}>
                  <Text
                    style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      $ 300{"\n"}
                    </Text>
                    <Text style={{ fontWeight: "900", fontSize: 7 }}>
                      costo mensual{"\n"}
                      IVA icluido
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemTwo}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                      40 GB{"\n"}
                      {"\n"}
                      1500 minutos{"\n"}
                      {"\n"}
                      1000 SMS
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemThree}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "900", fontSize: 10 }}>
                      Datos 20 GB best effort 20 GB a 512 kbps{"\n"}
                      {"\n"}
                      en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      SMS en México Estados Unidos y Canada. Folio IFT 353305
                      {"\n"}
                      Los datos pueden Compartirse desde hotspot o tethering
                    </Text>
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('PaymentScreen', {price: '$200',gigas: '40GB',minutes:'1500 minutos' ,messages: '1000 SMS'})}>
            <LinearGradient
              colors={["#f26316", "#f07350"]}
              style={styles.signIn}
            >
              <View style={styles.card}>
                <View style={styles.itemOne}>
                  <Text
                    style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      $ 200{"\n"}
                    </Text>
                    <Text style={{ fontWeight: "900", fontSize: 7 }}>
                      costo mensual{"\n"}
                      IVA icluido
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemTwo}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                      40 GB{"\n"}
                      {"\n"}
                      1500 minutos{"\n"}
                      {"\n"}
                      1000 SMS
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemThree}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "900", fontSize: 10 }}>
                      Datos 20 GB best effort 20 GB a 512 kbps{"\n"}
                      {"\n"}
                      en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      SMS en México Estados Unidos y Canada. Folio IFT 328246
                      {"\n"}
                      Los datos No pueden Compartirse desde hotspot o tethering
                    </Text>
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('PaymentScreen', {price: '$150',gigas: '8GB',minutes:'1500 minutos' ,messages: '500 SMS'})}>
            <LinearGradient
              colors={["#e08351", "#edb400"]}
              style={styles.signIn}
            >
              <View style={styles.container}>
                <View style={styles.itemOne}>
                  <Text
                    style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      $ 150{"\n"}
                    </Text>
                    <Text style={{ fontWeight: "900", fontSize: 7 }}>
                      costo mensual{"\n"}
                      IVA icluido
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemTwo}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                      8 GB{"\n"}
                      {"\n"}
                      1500 minutos{"\n"}
                      {"\n"}
                      500 SMS
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemThree}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "900", fontSize: 10 }}>
                      Datos en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      SMS en México Estados Unidos y Canada. Folio IFT 328269
                      {"\n"}
                      Los datos pueden Compartirse desde hotspot o tethering
                    </Text>
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('PaymentScreen', {price: '$100',gigas: '5GB',minutes:'1500 minutos' ,messages: '500 SMS'})}>
            <LinearGradient
              colors={["#edb600", "#edb620"]}
              style={styles.signIn}
            >
              <View style={styles.card}>
                <View style={styles.itemOne}>
                  <Text
                    style={[styles.text, { color: "#fff", fontWeight: "300" }]}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      $ 100{"\n"}
                    </Text>
                    <Text style={{ fontWeight: "900", fontSize: 7 }}>
                      costo mensual{"\n"}
                      IVA icluido
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemTwo}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                      5 GB{"\n"}
                      {"\n"}
                      1500 minutos{"\n"}
                      {"\n"}
                      500 SMS
                    </Text>
                  </Text>
                </View>
                <View style={styles.itemThree}>
                  <Text style={[styles.text, { color: "#fff" }]}>
                    <Text style={{ fontWeight: "900", fontSize: 10 }}>
                      Datos en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      en México Estados Unidos y Canada{"\n"}
                      {"\n"}
                      SMS en México Estados Unidos y Canada. Folio IFT 326007
                      {"\n"}
                      Los datos pueden Compartirse desde hotspot o tethering
                    </Text>
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signIn: {
    borderRadius: 20,
    height: 110,
    width: 360,
    elevation: 10,
  },
  itemOne: {
    width: "25%",
    alignItems: "center",
    paddingTop: 40,
  },
  itemTwo: {
    width: "20%",
    alignItems: "center",
    paddingTop: 5,
  },
  itemThree: {
    width: "55%",
    alignItems: "center",
    paddingTop: 5,
  },
  box: {
    paddingTop: 10,
  },
});

export default RechargeScreen;
