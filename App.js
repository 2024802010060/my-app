import { useState } from "react";
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
const App=()=>{
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>{
    Alert.alert(`Dang nhap thanh cong voi user = ${email} va pass = ${password} ` );
    // Alert.alert('Dang nhap thanh cong voi user name = ${email}va password = ${password}' ); dùng ` dưới esc
  }
  return(
    <ImageBackground
    source ={require("./assets/backgr.jpg")}
    style ={{width: '100%', height: '100%'}}
    resize
    >

    <View style={mystyle.container}>
          <Image
              style ={{width: 200, height: 200, alignSelf:"center"}}
              source={require("./assets/logo.png")}
              resize
          ></Image>
          <TextInput
            style={mystyle.textInput}
            onChangeText={setEmail}
            backgroundColor="white"
            placeholderTextColor="#000000"
            placeholder="Nhap user name"
            value={email}
            />
          <TextInput
            style={mystyle.textInput}
            onChangeText={setPassword}
            backgroundColor="white"
            placeholderTextColor="#000000"
            placeholder="Nhap password"
            secureTextEntry
            value={password}
            />
          <TouchableHighlight
            style={mystyle.button}
            onPress={onPress}
          >
            <Text style={mystyle.buttonText}>
                Login
            </Text>
          </TouchableHighlight>
    </View>
    </ImageBackground>
  )
}
export default App;
const mystyle = StyleSheet.create(
  {
    container: {
      flex:1,
      padding: 10,
      justifyContent:"flex-end"
      
    },
    textInput: {

      padding:10,
      borderWidth:3,
      borderColor: "#0000FF",
      margin:15
    },
    button: {
      backgroundColor: "lime",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "#FF0000",
      fontSize: 20,
      fontweight: "bold"
    }
  }
)