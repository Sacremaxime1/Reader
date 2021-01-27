import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "user",
            },
          },
        },
      },
      Description: {
        screens: {
          DescriptionScreen: {
            path: "manga/:id",
            parse: {
              id: "number",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
