import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  DrawerLayoutAndroid,
  Button
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d752',
    title: 'Third Item',
  },
];

const Item = ({ title,id }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{id}</Text>
    </View>
  );
}
async function getMoviesFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch(
      "https://facebook.github.io/react-native/movies.json"
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
const App = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.movies))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
    // }, []);
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} />
    );
    const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };


  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );
    return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source = {image} style = {{
          flex: 1,
          resizemode: 'cover',
          justifyContent: "center"}} >
        <Text style={{color:'lime',fontSize:40}}>asd</Text>
      </ImageBackground> */}

      {/* <Image
        style={{width: 50,height: 50}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}

      {/* <TextInput
        style={{height:40,borderColor: 'grey',borderWidth:1}}
      
      /> */}
      
    <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <Text style={{ margin: 10, fontSize: 15 }}>
            DrawerLayoutAndroid example
          </Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={{ margin: 10, fontSize: 15 }}>
            Drawer on the {drawerPosition}! Swipe from the side to see!
          </Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;