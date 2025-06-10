/* eslint-disable react-hooks/exhaustive-deps */
import './OrderList.css';
import List from './List';
import { useEffect, useState } from 'react';

const OrderList = (props) => {
    const [totalCostA, setTotalCostA] = useState(0)
    const [totalCostB, setTotalCostB] = useState(0)
    const [totalCostC, setTotalCostC] = useState(0)
    const [totalCostD, setTotalCostD] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [x, setX] = useState(0)

    const [amountA, setAmountA] = useState(0)
    const [amountB, setAmountB] = useState(0)
    const [amountC, setAmountC] = useState(0)
    const [amountD, setAmountD] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const listOfOrder = [
        {
            food: 'Sushi',
            option: 'Finest fish and veggies',
            cost: 22.99,
            id: 'a'
        },
        {
            food: 'Schnitzel',
            option: 'A german specialy!',
            cost: 16.55,
            id: 'b'
        },
        {
            food: 'Barbecue burger',
            option: 'American, raw, meaty',
            cost: 18.99,
            id: 'c'
        },
        {
            food: 'Green bowl',
            option: 'Healthy... and green..',
            cost: 12.99,
            id: 'd'
        },
    ]

    const getAmountList = (entry) => {
        if (entry[0] === 'a') {
            setTotalCostA(entry[1] * entry[2])
            setAmountA(entry[1])
        }
        if (entry[0] === 'b') {
            setTotalCostB(entry[1] * entry[2])
            setAmountB(entry[1])
        }
        if (entry[0] === 'c') {
            setTotalCostC(entry[1] * entry[2])
            setAmountC(entry[1])
        }
        if (entry[0] === 'd') {
            setTotalCostD(entry[1] * entry[2])
            setAmountD(entry[1])
        }
    }

    useEffect(() => {
        const total = totalCostA + totalCostB + totalCostC + totalCostD;
        setTotalCost(total.toFixed(2))

        const totalA = amountA + amountB + amountC + amountD;
        setTotalAmount(totalA)

        setX(1)
    }, [totalCostA, totalCostB, totalCostC, totalCostD])

    useEffect(()=>{
        props.totalCost([totalCost, totalAmount])
        setX(0)
    }, [x])

    const recieveInfo = (ent) => {
        props.infoInApp(ent)
    }

    return <div className='firstDiv'>
        <div className='ulFather'>
            <ul>
                {listOfOrder.map(element => {
                    return <List
                        key={element.id}
                        food={element.food}
                        option={element.option}
                        cost={element.cost}
                        id={element.id}
                        getCost={getAmountList} 
                        sendInfo={recieveInfo} 
                        sendValueToList={props.sendNewValueToOrederList}/>
                })}
            </ul>
        </div>
    </div>
}

export default OrderList;