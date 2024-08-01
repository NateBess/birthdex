import { View, Text, StyleSheet, Appearance } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faUserPlus,
  faClock,
  faMagnifyingGlass,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import tailwindConfig from "../../tailwind.config";

const theme = tailwindConfig.theme.colors;

const colorScheme = Appearance.getColorScheme();
if (colorScheme === "light") {
  // Use light color scheme
}

const styles = StyleSheet.create({
  navBarIcons: {
    color: "#9C9C9C", // Color of the navbar icons themselves
    fontSize: 8,
    fontWeight: "bold",
  },

  navBarActiveIcons: {
    color: "#E75B5B", // Color of the ACTIVE navbar icon
    fontSize: 12,
    fontWeight: "bold",
  },

  navbarActiveIconBackgroundColor: "#1C1C1C", // * ACTIVE ICON Navbar BACKGROUND color

  navBarTopBorderColor: {
    color: "#E9E9E9", // Color of the navbar top border
  },

  NavBarBackgroundColor: "#000000", // *Navbar BACKGROUND color
});

const TabIcon = (icon, label, focused) => {
  return (
    <View className="flex justify-center items-center">
      {focused ? (
        <FontAwesomeIcon
          icon={icon}
          size={27}
          style={styles.navBarActiveIcons}
        />
      ) : (
        <FontAwesomeIcon icon={icon} size={23} style={styles.navBarIcons} />
      )}
      {focused ? (
        <Text style={styles.navBarActiveIcons}>{label}</Text>
      ) : (
        <Text style={styles.navBarIcons}>{label}</Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: styles.navbarActiveIconBackgroundColor,
          tabBarActiveTintColor: styles.navBarActiveIcons,
          tabBarStyle: {
            backgroundColor: styles.NavBarBackgroundColor,
            borderTopWidth: 1,
            borderTopColor: styles.navBarTopBorderColor,
            paddingTop: 3,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => TabIcon(faHouse, "Home", focused),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "Add",
            headerShown: false,
            tabBarIcon: ({ focused }) => TabIcon(faUserPlus, "Add", focused),
          }}
        />
        <Tabs.Screen
          name="soon"
          options={{
            title: "Soon",
            headerShown: false,
            tabBarIcon: ({ focused }) => TabIcon(faClock, "Soon", focused),
          }}
        />
        <Tabs.Screen
          name="lookup"
          options={{
            title: "Lookup",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon(faMagnifyingGlass, "Lookup", focused),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }) => TabIcon(faGear, "Settings", focused),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
