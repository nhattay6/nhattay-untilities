import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delay: number): any => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounceValue;
};

// example use
const [keySearch, setKeySearch] = useState("");
const debounced = useDebounce(keySearch, 300);
useEffect(() => {
    // Trim search value
    if (!debounced.trim()) {
        setKeySearch("");
        return;
    }
    // logic to do
    // ...
}, [debounced]);