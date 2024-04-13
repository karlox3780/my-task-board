import { useEffect, useState } from 'react';

export function useLocalStorage(initialState: any, key: any) {
    const [value, setValue] = useState(function () {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialState;
        }
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    );

    return [value, setValue];
}