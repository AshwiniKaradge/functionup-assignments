import React, {useState} from 'react';

function TodoList(){

    const [Work, setWork] = useState("");
    const [listData, setListdata] = useState("");

    function addWork(){
        setListdata((listData)=>{
            const updatedList=[...listData, Work]
            console.log(updatedList)
            setWork('');
            return updatedList;
        });
        

    }

    function removeWork(i){

        const updatedListData = listData.filter((elem, id)=>{
            return i!=id;
        })
        setListdata(updatedListData)

    }



    return(
    
    <>
    <div className='container'>
        <div className='header'>TODOLIST</div>
        <input type='text' placeholder='Add Task' value={Work} onChange={(e)=>setWork(e.target.value)}/>
        <button onClick={addWork}>Add</button>
        <p className='List-heading'>Here is List:</p>
        {listData!=[] && listData.map((data, i)=>{
            return(
                <>
                <p key={i}>

                    <div className="listData">{data}</div>
                    <div className='btn-position'><button onClick={()=>removeWork(i)}>remove</button></div>

                </p>
                </>
            )
        })}
    </div>
    
    </>
    )


}

export default TodoList;