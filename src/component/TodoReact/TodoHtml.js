import React from 'react'

const TodoHtml = ({ inputdata, onChangeInput, addItems, item, error, editItems, deleteItems, removeAll, button }) => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" name='name' placeholder='✍ Add Item' className="form-control"
                            value={inputdata.name} onChange={onChangeInput} />

                        <span>{button ?
                            <i className="far fa-edit add-btn" onClick={addItems}></i>
                            :
                            <i className="fa fa-plus add-btn" onClick={addItems}></i>
                        }</span><br />
                        <span className='errorMessage text-danger'>{error.nameError}</span>
                    </div>
                    <div className="showItems">
                        {
                            item.map((itemValue, i) => {
                                return (<div className="eachItem" key={itemValue.id}>
                                    <h3>{itemValue.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={() => editItems(itemValue)}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => deleteItems(i)}></i>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoHtml
