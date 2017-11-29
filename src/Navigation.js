import { StackNavigator, TabNavigator } from 'react-navigation';
import appScreens from 'modules/app/screens';
import userScreens from 'modules/user/screens';
import inboxScreens from 'modules/inbox/screens';
import { colors } from 'themes';

const ProfileNavigation = StackNavigator({
  Profile: {
    screen: userScreens.Profile
  }
});

const InboxNavigation = StackNavigator({
  List: {
    screen: inboxScreens.List
  }
});

const MainNavigation = TabNavigator(
  {
    ProfileNavigation: {
      screen: ProfileNavigation
    },
    InboxNavigation: {
      screen: InboxNavigation
    }
  },
  {
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: { backgroundColor: colors.darkGray },
      activeTintColor: colors.white
    }
  }
);

const RootNavigation = StackNavigator(
  {
    Splash: {
      screen: appScreens.Splash
    },
    Landing: {
      screen: appScreens.Landing
    },
    LogIn: {
      screen: userScreens.LogIn
    },
    SignUp: {
      screen: userScreens.SignUp
    },
    Main: {
      screen: MainNavigation
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash'
  }
);

export default RootNavigation;
