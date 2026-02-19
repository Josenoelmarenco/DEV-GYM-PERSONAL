import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    //1. Estados
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

    //2. Controladores
  const setDarkThemeHandler = () => {
    setTheme('dark');
  };

  const setLightThemeHandler = () => {
    setTheme('light');
  };

  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount(prvCount => prvCount - 1);
  };

  //3. Return en pantalla
  return (
    <div className={`content ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setDarkThemeHandler}>Dark</button>
      <button onClick={setLightThemeHandler}>Light</button>
      <button onClick={toggleThemeHandler}>Toggle Theme {theme}</button>

      <h2>Contador = {count}</h2>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;