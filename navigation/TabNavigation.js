import React from "react";
import { Platform } from "react-native"; // platform 별로 구분하여 스타일등 소스를 구분하기 위해서-
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

const TopNavigation = createBottomTabNavigator(
    {
        // Movie: MoviesScreen,
        // TV: TVScreen,
        // Search: Search
        // 아래와 동일 네임과 컴포넌트명을 함께 써주거나, 그냥 컴포넌트명만 쓰거나 , 동일한 방식!

        Movie: { screen: MoviesScreen, 
                 navigationOptions: {tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film" }/>) }},
        TV: { screen: TVScreen, 
                 navigationOptions: {tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-tv" : "md-tv" }/>) }},
        Search: { screen: SearchScreen, 
                 navigationOptions: {tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search" }/>) }}
    }, {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

// createAppContainer 생성하는 이유는 리액트 네비게이션에게 어플리케이션이 여기 있다고 말해주려고? 
export default createAppContainer(TopNavigation);