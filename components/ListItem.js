import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export const ListItem = (props) => {
  const { imageUrl, title, author, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
              <Image 
                  style={{width: 100, height: 100}}  
                  source={{uri: imageUrl}}
              >
              </Image>
          </View>
          <View style={styles.rightContainer}>
              <Text numberOfLines={3} style={styles.text}>
              {title}
              </Text>
              <Text style={styles.subText}>
              {author}
              </Text>
          </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  }, 
  subText: {
    fontSize: 12,
    color: "gray"
  }
});
