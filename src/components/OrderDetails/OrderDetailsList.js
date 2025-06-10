import { useEffect, useState } from 'react';
import './OrderDetailsList.css';

const OrderDetailsList = (props) => {
    const [newValue, setNewValue] = useState([Number(props.foodValue)])

    const plus = () => {
        if (newValue[0] < 5) {
            setNewValue(prev => {
                return [prev[0] + 1, 'PLUS']
            })
        }
    }

    const minus = () => {
        if (newValue[0] > 0) {
            setNewValue(prev => {
                return [prev[0] - 1, 'MINUS']
            })
        }
    }

    useEffect(() => {
        props.sezz([Number(props.foodCost).toFixed(2), newValue, props.id])
    }, [newValue[0]])

    return <li className='liClass'>
        <div>
            <h3>{props.foodName}</h3>
            <h4>{(Number(props.foodCost))}</h4>
            <div>✗{newValue[0]}</div>
            <div style={{margin:'0', marginBottom:'2px'}}><i>Total of {props.foodName}:</i> ${(Number(props.foodCost) * newValue[0]).toFixed(2)}</div>
        </div>
        <div>
            <button className='butt1' onClick={plus}>+</button>
            <button className='butt2' onClick={minus}>-</button>
        </div>
    </li>
}

export default OrderDetailsList;