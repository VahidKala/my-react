import './Header.css';
import Order from './Order';

function Header(props) {
  const headerTf = (entry) => {
    props.tfInApp(entry)
  }

  return (
    <div className='fatherEl'>
      <div className='ReactMeals'>ReactMeals</div>
      <Order getTotal={props.sendTot} tf={headerTf}/>
    </div>
  );
}

export default Header;
