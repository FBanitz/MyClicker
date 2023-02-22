import { createContext, useContext, useEffect, useState } from "react";
import { useShowError, useHideError } from "./ErrorProvider";

const NOT_ENOUGH_POINTS_ERROR = "Not enough points!";

const DEFAULT_SCORE_VALUE = 0;
const DEFAULT_POWER_COUNT = 1;
const DEFAULT_POWER_PRICE_VALUE = 10;
const DEFAULT_SUPER_POWER_COUNT = 0;
const DEFAULT_CLICKER_COUNT = 0;
const DEFAULT_CLICKER_PRICE_VALUE = 75;
const SUPER_POWER_VALUE = 10;
const DEFAULT_SUPER_POWER_PRICE_VALUE = 100;

const ScoreValue = createContext(DEFAULT_SCORE_VALUE);

const PowerCount = createContext(DEFAULT_POWER_COUNT);

const PowerPriceValue = createContext(DEFAULT_POWER_PRICE_VALUE);

const BuyPower = createContext();

const ClickerCount = createContext(DEFAULT_CLICKER_COUNT);

const ClickerPriceValue = createContext(DEFAULT_CLICKER_PRICE_VALUE);

const BuyClicker = createContext();

const SuperPowerCount = createContext(DEFAULT_SUPER_POWER_COUNT);

const SuperPowerPriceValue = createContext(DEFAULT_SUPER_POWER_PRICE_VALUE);

const BuySuperPower = createContext();

const TotalPower = createContext();

const IncrementScore = createContext();

const Reset = createContext();


export function GameProvider({ children }) {
    const [score, setScore] = useState(DEFAULT_SCORE_VALUE);
    const [power, setPower] = useState(DEFAULT_POWER_COUNT);
    const [powerPrice, setPowerPrice] = useState(DEFAULT_POWER_PRICE_VALUE);
    const [clickerCount, setClickerCount] = useState(DEFAULT_CLICKER_COUNT);
    const [clickerPrice, setClickerPrice] = useState(DEFAULT_CLICKER_PRICE_VALUE);
    const [superPower, setSuperPower] = useState(DEFAULT_SUPER_POWER_COUNT);
    const [superPowerPrice, setSuperPowerPrice] = useState(DEFAULT_SUPER_POWER_PRICE_VALUE);
    const totalPower = power + superPower * SUPER_POWER_VALUE;
    const showError = useShowError();
    const hideError = useHideError();

    const reset = () => {
        setScore(DEFAULT_SCORE_VALUE);
        setPower(DEFAULT_POWER_COUNT);
        setClickerCount(DEFAULT_CLICKER_COUNT);
        setSuperPower(DEFAULT_SUPER_POWER_COUNT);
        setClickerPrice(DEFAULT_CLICKER_PRICE_VALUE);
        setPowerPrice(DEFAULT_POWER_PRICE_VALUE);
        setSuperPowerPrice(DEFAULT_SUPER_POWER_PRICE_VALUE);
    };

    const incrementScore = () => {
        setScore(score + totalPower);
        hideError();
    };

    const buyPower = () => {
        try {
            if (score < powerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
            setScore(score - powerPrice);
            setPower(power + 1);
            setPowerPrice(powerPrice * 2);
            hideError();
            return true;
        } catch (error) {
            showError(error.message);
            return false;
        }
    };

    const buyClicker = () => {
        try {
            if (score < clickerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
            setScore(score - clickerPrice);
            setClickerCount(clickerCount + 1);
            setClickerPrice(clickerPrice * 2);
            hideError();
            return true;
        } catch (error) {
            showError(error.message);
            return false;
        }
    };

    const buySuperPower = () => {
        try {
            if (score < superPowerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
            setScore(score - superPowerPrice);
            setSuperPower(superPower + 1);
            setSuperPowerPrice(superPowerPrice * 2);
            hideError();
            return true;
        } catch (error) {
            showError(error.message);
            return false;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((prevScore) => prevScore + clickerCount);
        }, 1000);
        return () => clearInterval(interval);
    }, [clickerCount]);

    return (
        <ScoreValue.Provider value={score}>
                <PowerCount.Provider value={power}>
                    <IncrementScore.Provider value={incrementScore}>
                        <PowerPriceValue.Provider value={powerPrice}>
                            <BuyPower.Provider value={buyPower}>
                                <ClickerCount.Provider value={clickerCount}>
                                    <ClickerPriceValue.Provider value={clickerPrice}>
                                        <BuyClicker.Provider value={buyClicker}>
                                            <SuperPowerCount.Provider value={superPower}>
                                                <SuperPowerPriceValue.Provider value={superPowerPrice}>
                                                    <BuySuperPower.Provider value={buySuperPower}>
                                                        <TotalPower.Provider value={totalPower}>
                                                            <Reset.Provider value={reset}>
                                                                {children}
                                                            </Reset.Provider>
                                                        </TotalPower.Provider>
                                                    </BuySuperPower.Provider>
                                                </SuperPowerPriceValue.Provider>
                                            </SuperPowerCount.Provider>
                                        </BuyClicker.Provider>
                                    </ClickerPriceValue.Provider>
                                </ClickerCount.Provider>
                            </BuyPower.Provider>
                        </PowerPriceValue.Provider>
                    </IncrementScore.Provider>
                </PowerCount.Provider>
        </ScoreValue.Provider>
    );
}

export const useScoreValue = () => {
    return useContext(ScoreValue);
};

export const usePowerCount = () => {
    return useContext(PowerCount);
};

export const usePowerPriceValue = () => {
    return useContext(PowerPriceValue);
};

export const useIncrementScore = () => {
    return useContext(IncrementScore);
}

export const useBuyPower = () => {
    return useContext(BuyPower);
}

export const useClickerCount = () => {
    return useContext(ClickerCount);
}

export const useClickerPriceValue = () => {
    return useContext(ClickerPriceValue);
}

export const useBuyClicker = () => {
    return useContext(BuyClicker);
}

export const useSuperPowerCount = () => {
    return useContext(SuperPowerCount);
}

export const useSuperPowerPriceValue = () => {
    return useContext(SuperPowerPriceValue);
}

export const useBuySuperPower = () => {
    return useContext(BuySuperPower);
}

export const useTotalPower = () => {
    return useContext(TotalPower);
}

export const useReset = () => {
    return useContext(Reset);
}