import React, { useState, useEffect } from 'react';
import './index.css';
import Todo from './Todo';
import AddIcon from '@material-ui/icons/Add';

const App = () => {
    
    const initialItem = JSON.parse(window.localStorage.getItem('Item') || "[]")

    const[itemList, setItemList] = useState("");
    const[Item, setItem] = useState(initialItem);

    useEffect(() => {
        window.localStorage.setItem('Item', JSON.stringify(Item));
    }, [Item])

    useEffect(() => {
        if(document.input === 0){
            alert("add");
        }
    })

    const inputEvent = (event) => {
        setItemList(event.target.value);
    }

    const AddItem = () => {
        setItem((preValue) => {
            return[...preValue, itemList]
        })
        setItemList("")
    }

    const deleteItem = (id) => {
        setItem((preValue) => {
            return preValue.filter((array, index) => {
                return id!==index
            })
        })
    }
        

    return(
        <>
        <div className="main_div">
            <div className="todo">
                <h1>ToDo List</h1>
                <br/>
                <form>
                <input type="text" placeholder="Add a item" autoComplete="off" onChange={inputEvent} value={itemList}/>
                <span className="add"><AddIcon onClick={AddItem}/></span>
                </form>
                <ol>
                    {Item.map((itemVal, index) => {
                        return(
                            <Todo text={itemVal}
                                key={index}
                                id={index}
                                onSelect={deleteItem}
                            />
                        )
                    })}
                </ol>
            </div>
        </div>
        </>
    )

}

export default App;