import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Header = (props) => {
  const { pageTitle } = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{pageTitle}</Text>
      </View>
      <Icon style={styles.icon} size={24} name='logout'/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 44,
    position: 'relative',
    borderBottomColor: '#9C9C9C',
    borderBottomWidth: 1,
  },

  text: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    color: '#212121',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 44,
    color: '#BDBDBD',
  },
});