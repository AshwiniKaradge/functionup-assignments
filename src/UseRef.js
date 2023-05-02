import {useRef , Fragment} from 'react';

export default function UseRef (){
    const inputRef = useRef (null);

    const handleClick =()=> {
        inputRef.current.click();
    };

    return(
        <Fragment>
        <button onClick={handleClick}> Pick the File </button>
        <input type ="file" ref={inputRef} style={{display: 'none'}} />

        </Fragment>
    )
}