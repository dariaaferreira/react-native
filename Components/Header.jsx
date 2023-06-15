import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Header = ({ pageTitle, showBackButton, onBackButtonPress, showLogoutButton, onLogoutButtonPress }) => {

  return (
    <View style={styles.container}>
      {showBackButton ? (
        <Icon
          style={styles.backButton}
          size={24}
          name="arrow-back"
          onPress={onBackButtonPress}
        />
      ) : null}
      <Text style={styles.text}>{pageTitle}</Text>
      {showLogoutButton ? (
        <Icon
          style={styles.logoutButton}
          size={24}
          name="logout"
          onPress={onLogoutButtonPress}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 44,
    borderBottomColor: "#9C9C9C",
    borderBottomWidth: 1,
  },
  backButton: {
    position: "absolute",
    left: 16,
    color: "#BDBDBD",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  logoutButton: {
    position: "absolute",
    right: 16,
    color: "#BDBDBD",
  },
});
