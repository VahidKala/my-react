/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from 'react';
import './List.css';

const List = (props) => {
    const [res, setRes] = useState([])
    const [inputValue, setInputValue] = useState(0)
    const [orderInfo, setOrderInfo] = useState({})

    const inputRef = useRef()

    const receiveAmount = (event) => {
        setInputValue(inputRef.current.value)
        setRes([props.id, Number(inputRef.current.value), Number(props.cost)])
        setOrderInfo({ id: props.id, food: props.food, cost: Number(props.cost), value: Number(inputRef.current.value) })
    }

    const result = () => {
        if (Number(inputRef.current.value) > 0) {
            props.getCost(res)
            props.sendInfo(orderInfo)
        }
    }

    return <li>
        <div>
            <div className='foodType'>{props.food}</div>
            <p className='option'><i>{props.option}</i></p>
            <p className='dolar'>${props.cost}</p>
        </div>
        <div className='fatherAmount'>
            <div className='amount'>
                <div>Amount:</div>
                <input ref={inputRef} type='number' defaultValue={inputValue} min={0} onChange={receiveAmount} />
            </div>
            <button onClick={result}>Add</button>
        </div>
    </li>
}

export default List;
