import React, { useState, useEffect } from 'react'
// import ItemList from './ItemList';
import "./style.css";
import TodoHtml from './TodoHtml';

const Todo = () => {
    const [inputdata, setInputdata] = useState({ id: '', name: '' })
    const [item, setItem] = useState([]);
    const [error, setError] = useState({ nameError: '' });
    const [button, setButton] = useState(false);

    useEffect(() => {
        let userList = JSON.parse(localStorage.getItem('userToDoList')) || [];
        setItem(userList)
    }, [])

    const onChangeInput = (event) => {
        setInputdata({ ...inputdata, [event.target.name]: event.target.value });
        // console.log(inputdata)
    }

    const addItem = () => {
        // debugger;
        let errorMsg = { ...error }
        if (inputdata.name.trim() === '') {
            errorMsg.nameError = 'text field is empty'
        } else {
            errorMsg.nameError = ''
        }
        setError({ ...errorMsg });

        if (inputdata.name !== '') {
            let localStorageValue = JSON.parse(localStorage.getItem('userToDoList')) || [];
            // console.log(localStorageValue)

            // const copyItemList = [...localStorageValue]
            if (inputdata.id !== '') {
                let index = localStorageValue.findIndex((val) => val.id === inputdata.id)
                localStorageValue.splice(index, 1, inputdata)
                setItem(localStorageValue)
                localStorage.setItem('userToDoList', JSON.stringify(localStorageValue))
                setButton(false)
            } else {
                inputdata.id = new Date().getTime();
                localStorageValue.push(inputdata)
                setItem(localStorageValue)
                localStorage.setItem('userToDoList', JSON.stringify(localStorageValue))
            }
            setInputdata({ id: '', name: '' })
        }

    }

    const editItems = (item) => {
        setInputdata(item)
        setButton(true)
    }

    const deleteItems = (id) => {
        let localStorageValue = JSON.parse(localStorage.getItem('userToDoList')) || [];
        // console.log(localStorageValue)
        // const copyItems = [...item]
        localStorageValue.splice(id, 1);
        localStorage.setItem('userToDoList', JSON.stringify(localStorageValue))
        setItem(localStorageValue)
        setInputdata({ id: '', name: '' })
        setButton(false)

    }

    const removeAll = () => {
        let localStorageValue = JSON.parse(localStorage.getItem('userToDoList')) || [];
        localStorageValue.splice(inputdata);
        localStorage.setItem('userToDoList', JSON.stringify(localStorageValue))
        setItem(localStorageValue)
        setInputdata({ id: '', name: '' })
        // setItem([]);
    }

    return (
        <>
            <TodoHtml inputdata={inputdata} onChangeInput={onChangeInput} addItems={addItem} item={item} editItems={editItems} deleteItems={deleteItems} removeAll={removeAll} button={button} error={error} />
            {/* <ItemList /> */}
        </>
    )
}

export default Todo
