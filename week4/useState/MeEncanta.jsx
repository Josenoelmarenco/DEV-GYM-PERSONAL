import { useState } from "react";

const MeEncantaButton = () => {
    const [meEncanta, setMeEncanta] = useState(0);
    const clickHandler = () => setMeEncanta(meEncanta +1)
    return(
        <button onClick={clickHandler}> Me encanta {meEncanta}</button>
    )
}

export default MeEncantaButton;