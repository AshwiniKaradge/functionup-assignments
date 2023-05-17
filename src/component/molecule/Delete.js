
import React from 'react';
import {useState} from 'react';

export default function Delete(){

    const user=[
        {name:'Ranjan'},
        {name:'Ankit'},
        {name:'Rahul'}
    ];
    const [list, setList] = useState(user);
    
    const handleDelete=(e)=>{
        const i=e.target.getAttribute('deleteNames');
        setList(list.filter(items=> items.name !== i))
    }

    return(
        <div>
            {list.map(i=>{
                return(
                    <div>
                        {i.name}
                        <button deleteNames={i.name} onClick={handleDelete}>Delete</button>
                    </div>
                )
            })
            }
            <div className='newuser'>
                <input type='text' placeholder="add new user"/>
            </div>
        </div>
    )
}