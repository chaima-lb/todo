import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import Select from 'react-select';
import style from './TodoList.css'

const TodoList = () => {
    const count = useSelector((state) => state.EditData.data)
 
    const options = [
        { value: 'All', label: 'All' },
        { value: 'Done', label: 'Done' },
        { value: 'NotDone', label: 'NotDone' },
    ];
    const [Option, setOption] = useState({ value: 'All', label: 'All' });
    return (
        <div>
            <div>
                {(count.length===0? 
                <h2 style={{textAlign:'center'}}>Add New Item</h2> 
                : ((Option.value)==='NotDone' 
                ? (count.filter(el=>el.isDone===false).map(el=><TodoItem key={el.id} el={el} />)) 
                : ((Option.value)==='Done' 
                ? (count.filter(el=>el.isDone===true).map(el=><TodoItem key={el.id} el={el} />)) 
                : (count.map(el=><TodoItem key={el.id} el={el} />)))))}
            </div>
            <div>
            <Select
                className={style.select}
                defaultValue={Option}
                onChange={setOption}
                options={options}
            />
            
            </div>
            
        </div>
    )
}

export default TodoList