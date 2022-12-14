import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 2,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
export default function Screen01({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFDFC8",
      }}
    >
      <FadeInView style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 65,
            color: "black",
            marginHorizontal: 20,
          }}
        >
          WELCOME TO FURISAS
        </Text>
      </FadeInView>
      <View style={{ flex: 5 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 65,
            color: "black",
            marginHorizontal: 20,
          }}
        >
          A premium online store for women and their stylish choice
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 195,
              height: 61,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
            onPress={() => navigation.navigate("Screen02")}
          >
            <Text style={{ fontSize: 23, color: "white" }}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Image
            source={require("../assets/started_hat_1.png")}
            style={{ resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
