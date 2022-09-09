import * as React from "react";
import { View, StyleSheet, Text} from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function FormLogin(){
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <Text style={styles.title}>WELCOME</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        label="Username"
        value={text}
        leading={props => <Icon name="account" {...props} />}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        label="Password"
        leading={props => <Icon name="lock" {...props} />}
      />
      <Button title="Login" style={styles.button} 
      onPress={() => {
        alert('Success');
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: 350,
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold"
    },
    button: {
        paddingVertical: 5,
        marginTop: 15,
    }
  });
  
