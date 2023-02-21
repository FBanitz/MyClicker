import { StyleSheet } from 'react-native';
import { APP_PRIMARY_COLOR } from './colors';

export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: APP_PRIMARY_COLOR,
        color: 'white',
    }
});