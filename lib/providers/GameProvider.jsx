import { createContext, useContext, useState } from "react";
import { useShowError, useHideError } from "./ErrorProvider";

const NOT_ENOUGH_POINTS_ERROR = "Not enough points!";

const DEFAULT_SCORE_VALUE = 0;
const DEFAULT_POWER_VALUE = 1;
const DEFAULT_POWER_PRICE_VALUE = 10;

const ScoreValue = createContext(DEFAULT_SCORE_VALUE);

const PowerValue = createContext(DEFAULT_POWER_VALUE);

const PowerPriceValue = createContext(DEFAULT_POWER_PRICE_VALUE);

const IncrementScore = createContext();

const BuyPower = createContext();

const Reset = createContext();


export function GameProvider({ children }) {
    const [score, setScore] = useState(DEFAULT_SCORE_VALUE);
    const [power, setPower] = useState(DEFAULT_POWER_VALUE);
    const [powerPrice, setPowerPrice] = useState(DEFAULT_POWER_PRICE_VALUE);
    const showError = useShowError();
    const hideError = useHideError();

    const reset = () => {
        setScore(DEFAULT_SCORE_VALUE);
        setPower(DEFAULT_POWER_VALUE);
        setPowerPrice(DEFAULT_POWER_PRICE_VALUE);
    };

    const incrementScore = () => {
        setScore(score + power);
        hideError();
    };

    const buyPower = () => {
        try {
            if (score < powerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
            setScore(score - powerPrice);
            setPower(power + 1);
            setPowerPrice(powerPrice * 2);
            hideError();
        } catch (error) {
            showError(error.message);
        }
    };

    return (
        <ScoreValue.Provider value={score}>
                <PowerValue.Provider value={power}>
                    <IncrementScore.Provider value={incrementScore}>
                        <PowerPriceValue.Provider value={powerPrice}>
                            <BuyPower.Provider value={buyPower}>
                                <Reset.Provider value={reset}>
                                    {children}
                                </Reset.Provider>
                            </BuyPower.Provider>
                        </PowerPriceValue.Provider>
                    </IncrementScore.Provider>
                </PowerValue.Provider>
        </ScoreValue.Provider>
    );
}

export const useScoreValue = () => {
    return useContext(ScoreValue);
};

export const usePowerValue = () => {
    return useContext(PowerValue);
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

export const useReset = () => {
    return useContext(Reset);
}