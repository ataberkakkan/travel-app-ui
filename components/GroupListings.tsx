import Colors from "@/constants/Colors";
import { GroupListing } from "@/types";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type GroupListingsProps = {
  listings: GroupListing[];
};

const GroupListings = ({ listings }: GroupListingsProps) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={listings}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};
export default GroupListings;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
});
