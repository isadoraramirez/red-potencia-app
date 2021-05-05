import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import {  MaterialIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

// export default function PaymentScreen({ navigation: { navigate, goBack} }) {
//   const [checked, setChecked] = React.useState("first");
class DetailsScreen extends React.Component {
  state = {
    checked: "first",
  };

  goBack = () => {
    this.props.navigation.goBack();
  };
  recharge = () => {
    this.props.navigation.navigate('RechargeScreen');
  };
  render() {
    const { checked } = this.state;
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,paddingLeft: 20}]}>Detalles de consumo</Text>
        <View style={styles.card}>
        <View style={styles.infoContainer}>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,paddingLeft: 20}]}>Mensajes</Text>
                </View>
        <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Contratados</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>444</Text>
                        <Text style={[styles.text, styles.subText]}>Consumidos</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Restantes</Text>
                    </View>
                </View>
                </View>

                <View style={styles.card}>
        <View style={styles.infoContainer}>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,paddingLeft: 20}]}>Llamadas</Text>
                </View>
        <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>50</Text>
                        <Text style={[styles.text, styles.subText]}>Contratadas</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>8</Text>
                        <Text style={[styles.text, styles.subText]}>Consumidas</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                        <Text style={[styles.text, styles.subText]}>Restantes</Text>
                    </View>
                </View>
                </View>

                <View style={styles.card}>
        <View style={styles.infoContainer}>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,paddingLeft: 50}]}>GB</Text>
                </View>
        <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>200</Text>
                        <Text style={[styles.text, styles.subText]}>Contratados</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>35</Text>
                        <Text style={[styles.text, styles.subText]}>Consumidos</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>32</Text>
                        <Text style={[styles.text, styles.subText]}>Restantes</Text>
                    </View>
                </View>
                </View>

        


          <View style={styles.button}>
            <TouchableOpacity onPress={this.recharge}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Recarga</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={this.goBack}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <MaterialIcons name="navigate-before" color="#fff" size={20} />
                <Text style={styles.textSign}>Regresar</Text>
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
    paddingTop: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 16
},
button: {
  alignItems: 'center',
  marginTop: 20
},
  card: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 15,
    marginTop: 15
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10
},

subText: {
  fontSize: 12,
  color: "#AEB5BC",
  textTransform: "uppercase",
  fontWeight: "500"
},
statsBox: {
    alignItems: "center",
    flex: 1
},
  profileImg: {
    width: 50,
    height: 30,
    borderRadius: 20,
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

export default DetailsScreen;

