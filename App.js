import { View } from "react-native";
import { ScrollView } from "@nandorojo/anchor";
import AlignItems from "./components/AlignItems";
import FlexWrap from "./components/FlexWrap";
import JustifyContent from "./components/JustifyContent";
import Outline from "./components/Outline";
import AlignContent from "./components/AlignContent";

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Outline />
      </View>
      <View>
        <FlexWrap />
        <JustifyContent />
        <AlignItems />
        <AlignContent />
      </View>
    </ScrollView>
  );
}
