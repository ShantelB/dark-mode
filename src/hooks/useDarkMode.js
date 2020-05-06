import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {

const [dark, setDark] = useLocalStorage('dark-mode');

const toggleMode = e => {
    e.preventDefault();
    setDark(!dark);
   };

   useEffect(() =>{
       if (dark) {
        document.body.classList.add("dark-mode");
      }else{ document.body.classList.remove("dark-mode");}
   },[dark])
 
  return [dark, toggleMode]

}

export default useDarkMode