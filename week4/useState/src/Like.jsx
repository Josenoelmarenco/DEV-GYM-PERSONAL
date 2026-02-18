import { useState } from "react";

const LikeButton = () => {
    const [like, setLike] = useState(0);
    const clickHandel = () => { setLike(like +1)};
    return(<button onClick={clickHandel} > Likes de me gusta: {like} </button>);
};

export default LikeButton;