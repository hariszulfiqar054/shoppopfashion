import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    imageThumbnail: {
        alignItems: "center",
        height: h(25),
        width: w(45),
        marginLeft: w(3.7),
        marginTop: w(3)
    },
    itemText: {
        color: UiColor.BLACK,
        // textAlign: "center",
        marginLeft: w(1),
        marginTop: w(2),
        fontWeight: "bold",
        fontSize: 13,
        // backgroundColor:'red',
        width:w(45)
    },
})