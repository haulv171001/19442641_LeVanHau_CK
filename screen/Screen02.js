import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

const Screen02 = () => {
    const categories = ["Trending", "Popular", "We recommende"];
    const [data, setData] = useState([]);
    const [catergoryIndex, setCategoryIndex] = useState(0);
    const renderItem = ({ item }) => (
        <Item title={item.name} img={item.img} price={item.price} />
      );
      const Item = ({ title , img , price}) => (
        <TouchableOpacity>
        <View style={{backgroundColor:"white",width:170,height:280,marginHorizontal:20,marginVertical:10}} >
          <Image source={{ uri: `${img}` }} style={{width:170,height:210,resizeMode:'contain',backgroundColor:"#EFDFC8"}}/>
          <Text style={{fontSize:18,fontWeight:"bold"}}>{title}</Text>
          <Text style={{fontSize:18,color:"grey",textAlign:'center'}}>{price}$</Text>
        </View>
        </TouchableOpacity>
      );
    useEffect(() => {
        fetch("https://63991f2afe03352a94e674bb.mockapi.io/api/cart")
          .then((plant) => plant.json())
          .then((plantss) => setData(plantss));
      }, []);
      console.log(data)
    const CategoryList = () => {
        return (
          <View style={styles.categoryContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCategoryIndex(index)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.categoryText,
                    catergoryIndex == index && styles.categoryTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      };
  return (
    <View style={{flex:1}}>
        <View style={{marginHorizontal:10,marginTop:40}}>
            <Text style={{fontSize:26,fontWeight:"bold"}}>WELCOME BACK!</Text>
            <Text style={{fontSize:23,color:"grey"}}>Jennifer Marconova</Text>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:20,borderWidth:1,backgroundColor:"#EFDFC8"}}>
            <View style={{flex:2,marginHorizontal:10}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>New Products</Text>
                <Text style={{fontSize:20,color:"grey",textAlign:"center"}}>Get a 50% discount on 
your first purchase</Text>
                <TouchableOpacity style={{backgroundColor:"black",width:136,height:42,borderRadius:5,marginTop:10,justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:"white",textAlign:"center"}}>Buy now</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../assets/a_rm.png")} style={{flex:1,resizeMode:"contain"}}/>
        </View>
        <CategoryList/>
        <FlatList
            data={data}
            
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
            }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  )
}

export default Screen02

const styles = StyleSheet.create({
    categoryContainer: {
      marginHorizontal:10,
      flexDirection: "row",
      marginTop: 30,
      marginBottom: 20,
      justifyContent: "space-between",
    },
    categoryText: {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
    },
    categoryTextSelected: {
      paddingBottom: 5,
      borderWidth: 2,
      borderColor: "black",
    },
    
  });