import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/assets/avatars/male/76.jpg",
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.notifications} onPress={() => {}}>
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              color={Colors.black}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholderTextColor={Colors.black}
              placeholder="Search..."
            />
          </View>
          <TouchableOpacity style={styles.filterBtn} onPress={() => {}}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <CategoryButtons />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  notifications: {
    marginRight: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});

export default Page;
