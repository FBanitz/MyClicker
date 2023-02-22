import { Audio } from 'expo-av';
import { createContext, useContext } from 'react';

const PlayClick = createContext();

const PlayBuy = createContext();

const PlayError = createContext();

const CLICK_SOUND_FILE = '../../assets/click.wav';

const BUY_SOUND_FILE = '../../assets/buy.wav';

const ERROR_SOUND_FILE = '../../assets/error.wav';

export function SoundProvider({ children }) {
    let clickSoundObject = new Audio.Sound();
    let clickSoundLoaded = false;
    let buySoundObject = new Audio.Sound();
    let buySoundLoaded = false;
    let errorSoundObject = new Audio.Sound();
    let errorSoundLoaded = false;

    async function play(soundObject) {
        try {
            await soundObject.setPositionAsync(0);
            await soundObject.replayAsync();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    async function playClick () {
        if (!clickSoundLoaded) {
            await clickSoundObject.loadAsync(require(CLICK_SOUND_FILE));
            clickSoundLoaded = true;
        }
        play(clickSoundObject);
    };

    async function playBuy () {
        if (!buySoundLoaded) {
            await buySoundObject.loadAsync(require(BUY_SOUND_FILE));
            buySoundLoaded = true;
        }
        play(buySoundObject);
    };

    async function playError () {
        if (!errorSoundLoaded) {
            await errorSoundObject.loadAsync(require(ERROR_SOUND_FILE));
            errorSoundLoaded = true;
        }
        play(errorSoundObject);
    };
    

    return (
        <PlayClick.Provider value={playClick}>
            <PlayBuy.Provider value={playBuy}>
                <PlayError.Provider value={playError}>
                {children}
                </PlayError.Provider>
            </PlayBuy.Provider>
        </PlayClick.Provider>
    );
}


export function usePlayClick() {
    return useContext(PlayClick);
}

export function usePlayBuy() {
    return useContext(PlayBuy);
}

export function usePlayError() {
    return useContext(PlayError);
}
