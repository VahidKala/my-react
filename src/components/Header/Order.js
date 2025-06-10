import './Order.css';

const Order = (props) => {
    const ended = () => {
        if(props.getTotal[0] > 0){
            console.log('Is sending...');
            props.tf(true)
        }
    }

    return <div className='order'>
        <button className='oredrButt' onClick={ended}>
            <span>Your Cart</span>
            <span className='counter'>Cost: ${props.getTotal[0]}</span>
        </button>
        <button className='fixedButt' onClick={ended}>Num: {props.getTotal[1]} <br />Cost: ${props.getTotal[0]}</button>
    </div>
}

export default Order;
