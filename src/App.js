import './App.css';
import Header from './components/Header/Header';
import Image from './components/Other/Image';
import Welcome from './components/Other/Welcome';
import OrderList from './components/List/OrderList';
import { useState } from 'react';
import OrderDetails from './components/OrderDetails/OrderDetails';
import UserContext from './Context/UserContext';

function App() {
  const [total, setTotal] = useState([])
  const [tORf, setTorF] = useState(false)
  const [infoForSend, setInfoForSend] = useState([])

  const getAndSendTotal = (entry) => {
    setTotal(entry)
  }

  const settingTf = (e) => {
    setTorF(e)
  }

  const infoo = (entr) => {
    setInfoForSend((prev) => {
      const z = prev.filter(el => el.id !== entr.id)
      return [...z, entr]
    });
  }

  return (
    <UserContext.Provider value={null}>
      <div className="App">
        <Image />
        <Welcome />
        <OrderList totalCost={getAndSendTotal} infoInApp={infoo} />
        <Header sendTot={total} tfInApp={settingTf} />
        {tORf && <div className='blur' onClick={() => { setTorF(false) }} />}
        {tORf && <OrderDetails can={(en) => { setTorF(en) }} inf={infoForSend} orderTotal={total} />}
      </div>
    </UserContext.Provider>
  );
}

export default App;

