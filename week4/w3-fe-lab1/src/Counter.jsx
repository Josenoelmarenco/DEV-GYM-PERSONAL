// import './Counter.css';


const Counter = () => {
    const handleClick = () => {
        console.log('Button clicked');
    };
    
    return (
    <div className="content">
      <h1>UseState Component</h1>
      <button onClick={handleClick}>Dark</button>
      <button onClick={handleClick}>Light</button>
    </div>
  );
};
export default Counter;