import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
const [storedValue, setStoredValue] = useState(() => {
      // Get from local storage by the "key" from the parameter
   const item = window.localStorage.getItem(key); 
   // Parse and return stored json or, if undefined, return initialValue
   return item ? JSON.parse(item) : initialValue; 
}); 

const setValue = value => {
    // Updating state of storedValue with value
    setStoredValue(value);
    // Save to local storage using the "key" that was passed into the hook itself
    window.localStorage.setItem(key, JSON.stringify(value));
}
return [storedValue, setValue];
}

export default useLocalStorage