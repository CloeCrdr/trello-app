import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // FORM ELEMENTS 
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
    inputB: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#EFEFEF',
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
    imageForm: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },

    // LAYOUT COMPONENTS
        // BACKGROUNDS
    fondImage: {
        opacity: 0.9,
        width: Dimensions.get('window').width,
    },
    fondCol: {
    },
    addBck: {
        backgroundColor: 'rgba(255,255,255, 0.9)',
        padding: 25,
    },
        // Buttons (add, update, edit, delete and "others")
    buttonRight: {
        justifyContent: 'right',
        alignItems: 'center',
        marginRight: 1,
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
        marginLeft: 'auto',
        marginRight: 20,
        marginBottom: 20,
        color: 'white',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonCouleur: {
        width: 20,
        height: 20,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: 10,
    },
    buttonsTacheList: {
        marginRight: -20,
        marginTop: -15,
        marginBottom: -10,
        flex: 1,
        alignSelf: 'flex-end',
    },
    // ITEM LISTS
    listItem: {
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    listTaches: {
        borderLeftWidth: 5,
        borderStyle: 'solid',
        borderRadius: 2,
        width: Dimensions.get('window').width,
        marginLeft: 25,
        marginRight: 15,
        marginTop: 15,
        padding: 30,
        backgroundColor: '#fff',
        width: '90%',
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',

    },
    listTache: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',

    },
    listCol: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        width: Dimensions.get('window').width,
    },
    listTableau: {
        borderWidth: 1,
        borderColor: '#e4d8f8',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 5,
        shadowOffset: {
            width: 2,
            height: 1,
        },
        shadowOpacity: 0.55,
        shadowColor: '#e4d8f8',
        elevation: 10,
        alignSelf: 'center',
        padding: 25,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    draggable: {
        height: '90%'
    },

        // TITLES AND TEXTS
    titleCol: {
        margin: 5,
        marginTop: 10,
        marginBottom: 30,
    },
    textList: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        maxWidth: 180,
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 5,
        marginBottom: 15,
    },
    h2: {
        fontSize: 15,
        fontStyle: 'italic',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 25
    },
    contentTextTache: {
        marginTop: 5,
        fontStyle: 'italic'
    },

        // DESCRIPTIONS
    description: {
        fontStyle: 'italic',
        fontSize: 13,
        textAlign: 'center',
        marginRight: 22,
        marginLeft: 22,
        marginBottom: 5,
        color: 'brown'
    },
    contentDescription: {
        padding: 10,
        fontSize: 15,
        textAlign: 'justify',
    },
    taskColor: {
        justifyContent: 'center',
        alignContent: 'stretch',
    },

        // "OTHERS" images (content, layouts and others)
    imageTache: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
        borderRadius: 2
    },
    viewImage: {
        alignSelf: 'center',
        marginTop: 20,
    },
    imageAddUpdt: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    textImage: {
        alignSelf: 'center',
        textDecorationLine: 'underline',
        textDecorationColor: '#6d648b',
        color: '#6d648b'
    },
});