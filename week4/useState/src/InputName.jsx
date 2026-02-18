import { useState } from "react";

const ImputName = () => {
    const [name, setName] = useState("");
    const inputHandler = (event) => setName(event.target.value);

    const handleSubmit = event => {event.preventDefault();
        console.log('Enviamos datos al servidor: ', name);
        //limpiamos el formulario
        setName('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input value={name} type={'text'} onChange={inputHandler}/>
            <button type="submit" >Send</button>
        </form>
    );
};

export default ImputName;