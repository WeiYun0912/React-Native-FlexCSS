import { ScrollView, View } from "react-native";
import FlexWrap from "./components/FlexWrap";
import JustifyContent from "./components/JustifyContent";

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlexWrap />
      <JustifyContent />
    </ScrollView>
  );
}
