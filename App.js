import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon, Input } from "@rneui/themed";

const CardsComponentsProps = {};

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card style={{ marginTop: 30 }}>
            <Card.Title>Sign In</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Username"
              leftIcon={{ type: "font-awesome", name: "user" }}
            />
            <Input
              placeholder="Email"
              leftIcon={{ type: "font-awesome", name: "envelope" }}
            />
            <Input
              placeholder="Password"
              leftIcon={{ type: "font-awesome", name: "lock" }}
            />
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  color="#ffffff"
                  iconStyle={{ marginRight: 8 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Sign In"
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 128,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;
