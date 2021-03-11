import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create ({
    headerView:{
        backgroundColor:UiColor.PINK,
        height:h(26),
        width:'100%'
    },
    shopText:{
        fontSize:18,
        // fontWeight:'bold',
        textAlign:'center',
        marginTop:h(2),
        color:UiColor.WHITE
    },
    inputIcon: {
        width: w(6),
        height: h(5.5),
        marginLeft: w(2),
        justifyContent: "center"
      },
      inputField: {
        height: h(6),
        width: w(65),
        marginLeft: w(2)
      },
      searchBarInput: {
        flexDirection: "row",
        marginVertical: w(3),
        height: h(6.5),
        width: "95%",
        borderWidth: w(0.4),
        borderColor: UiColor.BLACK,
        borderRadius: 7,
        backgroundColor: "#FFFFFF",
        alignSelf: "center"
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: "center",
        position: "absolute",
        marginTop: h(16)
      },
      body:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:h(11)
      },
      name:{
        fontSize:h(3.5),
        color:UiColor.BLACK,
        fontWeight:'600'
      },
      buttonContainer: {
        marginTop: 15,
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: 250,
        borderRadius: 30,
        backgroundColor: UiColor.PINK
      },
      buttonText:{
        color:UiColor.WHITE
      }

});   