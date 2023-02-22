import { Audio } from 'expo-av';
import { createContext, useContext } from 'react';

const PlayClick = createContext();

const PlayBuy = createContext();

const CLICK_SOUND_FILE = '../../assets/click.wav';

const BUY_SOUND_FILE = '../../assets/buy.wav';

export function SoundProvider({ children }) {
    let clickSoundObject = new Audio.Sound();
    let clickSoundLoaded = false;
    let buySoundObject = new Audio.Sound();
    let buySoundLoaded = false;

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

    return (
        <PlayClick.Provider value={playClick}>
            <PlayBuy.Provider value={playBuy}>
                {children}
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
