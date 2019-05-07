import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator({
    // title 을 지정하고 싶으면...
    // Tabs: { screen: TabNavigation, navigationOptions: {title: "suun"} },

    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    // Detail: DetailScreen
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            ...headerStyles,
            // android 에서만 적용 , iOS 적용안됨!
            // headerBackTitle: null
        }
    }
}, 
// {
//     mode: "card"
// }

// 디테일 스크린으로 이동? 
// {
//     initialRouteName: "DetailScreen"
// }


{
    headerMode: "screen",
    headerBackTitleVisible: false   // AOS, iOS 둘다 적둉 가능.
}

);

export default createAppContainer(MainNavigation);
