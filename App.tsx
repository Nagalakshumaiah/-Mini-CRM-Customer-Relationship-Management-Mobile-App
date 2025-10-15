import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { View, ActivityIndicator } from "react-native";
import MainNavigator from "./src/navigation/Main"; // your stack navigation

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" />} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
