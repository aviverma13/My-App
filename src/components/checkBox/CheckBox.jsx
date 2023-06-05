import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

const CheckBox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/checkedIcon.png")}
            style={styles.checkIcon}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
