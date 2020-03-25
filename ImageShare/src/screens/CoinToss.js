import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import Coin from "../components/Coin";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function CoinToss(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cTheaderStack}>
        <CupertinoHeaderWithActionButton
          text2="Coin Toss"
          text3=""
          style={styles.cTheader}
        ></CupertinoHeaderWithActionButton>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("IntroScreen")}
          style={styles.button1}
        ></TouchableOpacity>
      </View>
      <View style={styles.coin2Stack}>
        <Coin style={styles.coin2}></Coin>
        <Text style={styles.coin3}>$</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinTossResults")}
          style={styles.cashonClick}
        ></TouchableOpacity>
      </View>
      <MaterialHelperTextBox
        text1="How many flips?"
        style={styles.flipInput}
      ></MaterialHelperTextBox>
      <Text style={styles.swipe}>Swipe or press the button</Text>
      <View style={styles.cTflipStack}>
        <CupertinoButtonDanger
          text1="Flip"
          button1="CoinTossResults"
          style={styles.cTflip}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinTossResults")}
          style={styles.fBonClick}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(190,207,223,1)"
  },
  cTheader: {
    top: 0,
    left: 0,
    width: 360,
    height: 44,
    backgroundColor: "rgba(190,207,223,1)",
    position: "absolute"
  },
  button1: {
    top: 11,
    left: 0,
    width: 83,
    height: 44,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  cTheaderStack: {
    width: 360,
    height: 55,
    marginTop: 29
  },
  coin2: {
    top: 14,
    left: 13,
    width: 143,
    height: 143,
    position: "absolute"
  },
  coin3: {
    top: 50,
    left: 65,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 70,
    fontFamily: "roboto-regular"
  },
  cashonClick: {
    top: 0,
    left: 0,
    width: 169,
    height: 171,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  coin2Stack: {
    width: 169,
    height: 171,
    marginTop: 212,
    marginLeft: 103
  },
  flipInput: {
    width: 147,
    height: 85,
    backgroundColor: "rgba(239,221,205,1)",
    borderRadius: 20,
    borderColor: "rgba(255,114,0,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45,
    marginTop: -343,
    alignSelf: "center"
  },
  swipe: {
    color: "rgba(105,104,104,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 27,
    alignSelf: "center"
  },
  cTflip: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(255,87,0,1)",
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45
  },
  fBonClick: {
    top: 0,
    left: 2,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  cTflipStack: {
    width: 211,
    height: 52,
    marginTop: 355,
    marginLeft: 74
  }
});

export default CoinToss;
