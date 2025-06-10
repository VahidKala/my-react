import { useEffect, useState } from 'react';
import './OrderDetails.css';
import OrderDetailsList from './OrderDetailsList';

const OrderDetails = (props) => {
    const [newTotal, setNewTotal] = useState([props.orderTotal[0], props.orderTotal[1]])
    const [resut, setResult] = useState(props.inf)
    const [x, setX] = useState(0)

    const cancelBlur = () => {
        props.can(false)
    }
    const okBlur = () => {
        props.can(false)
        const k = resut.filter(el => el.id)
        const d = k.map(e => { return { ...e, tot: e.cost * e.value } })
        console.log('Final result: ', [...d, { totalResultCost: newTotal[0] }]);
    }

    const submitForm = (event) => {
        event.preventDefault()
    }

    const sse = (entry) => {
        setX(1)
        if (entry[1][1] === 'PLUS') {
            setNewTotal(prev => {
                const r = Number(prev[0]) + Number(entry[0])
                return [r.toFixed(2), entry[1][0], entry[2]]
            })
        }
        if (entry[1][1] === 'MINUS') {
            setNewTotal(prev => {
                const r = Number(prev[0]) - Number(entry[0])
                return [r.toFixed(2), entry[1][0], entry[2]]
            })
        }
    }

    useEffect(() => {
        setResult((pre) => {
            setX(0)
            const r = pre.filter(el => el.id !== newTotal[2])
            const rr = pre.filter(el => el.id === newTotal[2])
            if (r.length > 0) {
                return [...r, { ...rr[0], value: newTotal[1] }]
            }
            if (r.length === 0) {
                return [{ ...rr[0], value: newTotal[1] }]
            }
        })
    }, [x])

    return <form onSubmit={submitForm}>
        <ul className='ulClass'>
            {props.inf.map(el => {
                return <OrderDetailsList key={el.id} sezz={sse} foodName={el.food} foodCost={el.cost} foodValue={el.value} id={el.id} />
            })}
            <div className='totH3'>
                <h3 className='totH3Child'><i>Total Amount: ${newTotal[0]}</i></h3>
            </div>
            <div>
                <button className='blurButt' onClick={cancelBlur}>Cancel</button>
                <button className='blurButt' onClick={okBlur}>Order</button>
            </div>
        </ul>
    </form>
}

export default OrderDetails;