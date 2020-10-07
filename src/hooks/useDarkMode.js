import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage(initialValue, key);
    
    const handleChanges = newValue => {
        setDarkValue(newValue);
    };
    
    return [darkValue, setDarkValue, handleChanges];
};

export default useDarkMode;