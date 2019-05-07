import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";


const MainNavigation = createStackNavigator({
    // title 을 지정하고 싶으면...
    // Tabs: { screen: TabNavigation, navigationOptions: {title: "suun"} },

    Tabs: { screen: TabNavigation, navigationOptions: { title: "Title" } },
    Detail: DetailScreen
}, 
// {
//     mode: "card"
// }

// 디테일 스크린으로 이동? 
// {
//     initialRouteName: "DetailScreen"
// }




);

export default createAppContainer(MainNavigation);
