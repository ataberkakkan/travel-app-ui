import Colors from "@/constants/Colors";
import { GroupListing } from "@/types";
import { Ionicons } from "@expo/vector-icons";
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
            <View>
              <Text style={styles.itemTxt}>{item.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="star" size={20} color={Colors.primaryColor} />
                <Text style={styles.itemRating}>{item.rating}</Text>
                <Text style={styles.itemReviews}>({item.reviews})</Text>
              </View>
            </View>
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
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 8,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    color: "#999",
  },
});
