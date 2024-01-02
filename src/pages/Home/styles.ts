import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff2f2',
      },
      toolbar: {
        height: 70,
        backgroundColor: "#eff8f8",
        flexDirection: "row",
        alignContent: "stretch",
        alignItems: "center",
        borderBottomColor: '#62c1bf',
        borderBottomWidth: 1
      },
      icontoolbar: {
        justifyContent: "center",
        display: "flex",
        marginRight: 15,
        marginLeft: 15,
      },
      icon:{
        width: 55,
        height: 55,
        borderRadius: 50,
        marginLeft: 8
      },
      tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 24,
        fontFamily: 'PBold'
      },
      items: {
        backgroundColor: '#cfeceb',
        marginTop: 30,
        borderRadius: 20,
        paddingHorizontal: 30,
      },
      writeTaskWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#62c1bf',
        borderWidth: 1,
        width: 300,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#62c1bf',
        borderWidth: 1,
      },
      addText: {},
});
