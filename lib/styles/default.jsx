import { StyleSheet } from 'react-native';
import { APP_PRIMARY_COLOR } from './colors';

export const defaultStyle = StyleSheet.create({
    h1 : {
        margin: 16,
        fontSize: 30,
        fontWeight: 'bold',
    },
    h2 : {
        marginTop: 16,
        marginBottom: 16,
        fontSize: 20,
        fontWeight: 'bold',
    },
    background: {
        paddingTop: 16,
        paddingBottom: 16,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: APP_PRIMARY_COLOR,
        color: 'white',
    },
    touchZone : {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchZoneView : {
        height: '100%',
        width: '100%',
        backgroundColor: APP_PRIMARY_COLOR,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});