import { Text, View, Button, Linking } from "react-native";

export default function Index() {
  const handleGoogleOAuth = () => {
    // Replace with your computer's IP address if testing on a device
    Linking.openURL("http://localhost:3000/users/auth/google_oauth2");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Sign in with Google" onPress={handleGoogleOAuth} />
    </View>
  );
}
