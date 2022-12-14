import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Screen03 = () => {
  return (
    <View style={{flex:1}}>
       <Image style={{backgroundColor:"#EFDFC8",width:"100%",height:390,marginHorizontal:10,marginVertical:10,resizeMode:"contain"}}  source={require("../assets/started_hat_1.png")}/>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:20}} >Jennifer Lopez</Text>
        <View style={{flexDirection:"row",marginTop:20,marginHorizontal:20}}>
        <Text style={{fontSize:20,color:"grey"}}>10% OFF I 445$</Text>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:20}}>449$</Text>
        </View>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:20,marginTop:20}} >Description</Text>
        <Text style={{fontSize:20,color:"grey",marginLeft:20,marginTop:20}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between"}}>
            <Image source={require("../assets/Vector.png")}/>
            <TouchableOpacity>
                <Text>Add to card</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Screen03

const styles = StyleSheet.create({})