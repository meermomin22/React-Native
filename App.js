import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Image,Text, Input, Button, ScrollView, StatusBar, useColorScheme, Pressable } from "react-native";
import Products from "./components/Products";
import Names from "./components/Names";
import Form from "./components/Form";
import Icecream from "./components/Icecream";
import List from "./components/List";
import MapList from "./components/ListMap";
import Grid from "./components/Grid";
import Dynamic from "./components/GridDynamic";
import Component from "./components/ComponentLoop";
import Section from "./components/SectionList";
import Class from "./components/ClassComponent";
import Hook from "./components/Hook";
import Effect from "./components/UseEffectHook";
import Toogle from "./components/Toogle";
import UseEffect from "./components/UseEffect";
import Layout from "./components/Layout";
import Hightlight from "./components/TouchableHighlight";
import Radio from "./components/Radio";
import DynamicRadio from "./components/DynamicRadio";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import StatusBars from "./components/StatusBar";
import Plattforms from "./components/Plattform";
import Custom from "./components/CustomModal";
import Stacks from "./components/Navigation";
import NewApp from "./components/NewApp";
import TabNavigation from "./components/TabNavigation";
import Api from "./components/Api";
import ApiList from "./components/ApiList";
import ApiFlatList from "./components/ApiFlatList";
import GetApi from "./components/GetApi";
import Dbjs from "./components/Db";
import Register from "./components/Rejister";
import Delete from "./components/Delete";
import Post from "./components/Post";
import Newlist from "./components/Newlist";
import Thirdapi from "./components/Thirdapi";
import Search from "./components/SearchWithApi";
import Ref from "./components/Ref";
import Async from "./components/Async";
import Header from "./components/Header";
import Product from "./components/ProductRedux";





const App = () => {
  const Mobiles = [
    {
      name: 'Samsung',
      color: 'black',
      price: 10000,
      ram: '3gb',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fin%2Fexplore%2Fbrand%2Flatest-5g-mobile-phone-online%2F&psig=AOvVaw3HeFMuxvBgAINGgB_hAc5e&ust=1699248846511000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCJxLKRrIIDFQAAAAAdAAAAABAE'
    },
    {
      name: 'Redmi',
      color: 'black',
      price: 20000,
      ram: '6gb',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fin%2Fexplore%2Fbrand%2Flatest-5g-mobile-phone-online%2F&psig=AOvVaw3HeFMuxvBgAINGgB_hAc5e&ust=1699248846511000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCJxLKRrIIDFQAAAAAdAAAAABAE'
    },
    {
      name: 'Redmi 4A',
      color: 'black',
      price: 30000,
      ram: '9gb',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fin%2Fexplore%2Fbrand%2Flatest-5g-mobile-phone-online%2F&psig=AOvVaw3HeFMuxvBgAINGgB_hAc5e&ust=1699248846511000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCJxLKRrIIDFQAAAAAdAAAAABAE'
    }

  ]

  return (
    <View style={{ flex: 1 }}>

      <Header />
      <ScrollView>
      {
        Mobiles.map((item)=><Product item={item} />)
      }
      </ScrollView>

    </View>
  )
}

export default App;