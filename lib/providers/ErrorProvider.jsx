import React, { createContext, useContext, useState } from 'react';
import { usePlayError, usePlaySound } from './SoundProvider';

const ErrorValue = createContext(null);
const ErrorSetter = createContext();

const ShowError = createContext();
const HideError = createContext();

export const useErrorValue = () => {
    return useContext(ErrorValue);
};

export const useErrorSetter = () => {
    return useContext(ErrorSetter);
};

export const useShowError = () => {
    return useContext(ShowError);
};

export const useHideError = () => {
    return useContext(HideError);
};

export function ErrorProvider ({ children }) {
  const [error, setError] = useState(null);
  const playSound = usePlaySound();

  const showError = (error) => {
    setError(error);
    playSound("error");
  };

  const hideError = () => {
    setError(null);
  };

  return (
    <ErrorValue.Provider value={error}>
        <ShowError.Provider value={showError}>
            <HideError.Provider value={hideError}>
                {children}
            </HideError.Provider>
        </ShowError.Provider>
    </ErrorValue.Provider>
  );
}