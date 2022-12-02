import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        width: 300,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    form: {
        flex: 1,
        alignItems: 'bottom',
        justifyContent: 'center',
    },
    imageForm: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
        borderRadius: 150,
        height: 150,
        width: 150,
        borderColor: 'lightgrey',
        borderWidth: 2,
        borderStyle: 'solid',
        resizeMode: 'cover'
    },
    buttonForm: {
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        width: 300,
        borderRadius: 0,
        marginTop: 15,
        textTransform: 'capitalize',
    },
    buttonRight: {
        justifyContent: 'right', 
        alignItems: 'right',
        marginRight: 1,
    }, 
    listItem: {
        justifyContent: 'space-between',
        flex: 1,
    },
    textList: {
        width: 300,
    }

});