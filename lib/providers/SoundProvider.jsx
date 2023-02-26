import { Audio } from 'expo-av';
import { createContext, useContext } from 'react';

const PlaySound = createContext();

const CLICK_SOUND_FILE = require('../../assets/click.wav');
const BUY_SOUND_FILE = require('../../assets/buy.wav');
const ERROR_SOUND_FILE = require('../../assets/error.wav');

export function SoundProvider({ children }) {
    const sounds = {
        buy: {
            sound: new Audio.Sound(),
            fileName: BUY_SOUND_FILE,
            isLoaded:false,
        },
        click: {
            sound: new Audio.Sound(),
            fileName: CLICK_SOUND_FILE,
            isLoaded:false,
        },
        error: {
            sound: new Audio.Sound(),
            fileName: ERROR_SOUND_FILE,
            isLoaded:false,
        },
    }

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

    async function playSound(soundName) {
        const sound = sounds[soundName];
        if (!sounds[soundName].isLoaded) {
            await sound.sound.loadAsync(sound.fileName);
            sound.isLoaded = true;
        }
        play(sound.sound);
    }

    return (
        <PlaySound.Provider value={playSound}>
            {children}
        </PlaySound.Provider>
    );
}


export function usePlaySound() {
    return useContext(PlaySound);
}
