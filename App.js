import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, View, Text, Input, Button, ScrollView, StatusBar, useColorScheme, Pressable } from "react-native";
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





const App = () => {

  return (
    <View style={{flex:1}}>

      <Newlist />
      <Post />

    </View>
  )
}

export default App;