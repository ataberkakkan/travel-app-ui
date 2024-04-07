import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ListingDetailsPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ListingDetailsPage</Text>
    </View>
  );
};
export default ListingDetailsPage;

const styles = StyleSheet.create({});
