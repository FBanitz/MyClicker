import { StyleSheet } from 'react-native';
import { APP_PRIMARY_COLOR } from './colors';

export const defaultStyle = StyleSheet.create({
    h1 : {
        margin: 5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    h2 : {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    background: {
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