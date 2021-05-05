import React, { Component} from "react";
import Http from '../libs/http';
import { TouchableOpacity, StyleSheet,Button, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import {  MaterialIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';



    class HomeScreen extends Component{

        render(){

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
                </View>

                    <View style={ styles.profileContainer }>
                      <View style={styles.profileImage}>
                         <Image source={require("../../assets/avatar.png")} style={styles.image} resizeMode="center"></Image>
                    {/* </View> */}
                    {/* <View style={styles.dm}>
                        <MaterialIcons name="chat" size={15} color="#DFD8C8"></MaterialIcons>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <MaterialIcons name="phonelink-ring" size={20} color="#DFD8C8" style={{ marginTop: 4, marginLeft: 2 }}></MaterialIcons>
                    </View>                  */}
                   </View>
                     {/* <View style={styles.dm}>
                         <MaterialIcons name="chat" size={15} color="#DFD8C8"></MaterialIcons>
                     </View> */}
                     {/* <View style={styles.active}>
                     </View> */}
                     {/* <View style={styles.add}>
                         <MaterialIcons name="phonelink-ring" size={20} color="#DFD8C8" style={{ marginTop: 4, marginLeft: 2 }}></MaterialIcons>
                     </View>  */}

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>$ 300</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Plan Contratado</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Saldo Disponible:</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Llamadas</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Mensajes</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>MB</Text>
                    </View>
                </View>


                <View style={{ marginTop: 15 }}>
                </View>
                <Text style={[styles.subText, styles.recent]}>Servicios Contratados</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Plan $ 300 <Text style={{ fontWeight: "400" }}>todo incluido</Text> mas <Text style={{ fontWeight: "400" }}>mensajes ilimitados</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                1500 minutos <Text style={{ fontWeight: "400" }}>de voz</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                compartir <Text style={{ fontWeight: "400" }}>datos</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Estados Unidos <Text style={{ fontWeight: "400" }}>y Canada</Text>
                            </Text>
                        </View>
                    </View>
                    </View>


                </View>
          </ScrollView> 
      </SafeAreaView>

    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        // fontFamily: "HelveticaNeue",
        // color: "#52575D"
    },
    button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        marginHorizontal: 16,
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    signIn: {
      width: 200,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
    },
    profileContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: "hidden",
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 25,
        height: 25,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 1,
        padding: 10,
        height: 10,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        // position: "absolute",
        // top: "50%",
        marginTop: 20,
        // marginLeft: 30,
        width: 180,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});

export default HomeScreen;