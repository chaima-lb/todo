import React from 'react'
import { useDispatch } from 'react-redux'
import {DeleteItemData,ChangeStateItemData} from '../../features/EditData';
import { Link } from 'react-router-dom';

const TodoItem = ({el}) => {
    const dispatch = useDispatch();
    const handleClickDelete = () => {
        dispatch(DeleteItemData(el.id))
    }
    const handleClickDone = () => {
        dispatch(ChangeStateItemData(el.id))
    }
    return (
        <div className="container">
           <div className="todoitem">
                {el.isDone===true ? 
                <img className="img" src="https://img.icons8.com/small/344/cloud-checked.png" alt="done" /> 
                :<img className="img" src="https://img.icons8.com/small/344/cloud-cross.png" alt="notdone" /> }
                {el.desc}
            </div>
            <div className="control">
                <button onClick={handleClickDelete}>X</button>
                <Link to={`/${el.id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleClickDone}>IsDone</button>
            </div>
        </div>
    )
}

export default TodoItem;