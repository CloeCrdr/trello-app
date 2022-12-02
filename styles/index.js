import { Dimensions, StyleSheet } from "react-native";

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
        backgroundColor: 'white',
        opacity: 0.7,
        padding: 15,
        fontSize: 15,
        color: 'black',
    },
    form: {
        flex: 1,
        alignItems: 'bottom',
        justifyContent: 'center',
    },
    fondImage: {
        opacity: 0.9,
        width: Dimensions.get('window').width,
    },
    imageForm: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
        height: 150,
        width: 150,
        resizeMode: 'cover',
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
        backgroundColor: '#6bbaa7',
    },
    buttonRight: {
        justifyContent: 'right',
        alignItems: 'center',
        marginRight: 1,
    },
    listItem: {
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width
    },
    textList: {
        alignContent: 'stretch',
        alignItems: 'stretch',
    },
    buttonStyle: {
        width: 50,
        height: 50,
        borderRadius: 100, 
        backgroundColor: '#6BBAA7',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonContainerStyle: {

        marginLeft: 'auto' ,
        marginRight: 20,
        marginBottom: 20,
        color:'white',
       
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }

});