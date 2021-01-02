import {React, useState} from 'react'

  export default function StockDetails(props) {

    const [show, setShow] = useState(false)
    const {name, total, stockEvents} = props

    const handleVisibility = () => {
      setShow(!show)
    }
    
    return (
        <div className='StockDetail' onClick={handleVisibility}>
            <h2>Product: {name} | Total: {total}</h2>
            {show && 
            <div>
                {stockEvents.map((event, i) => (
                <div key={i} className="StockEventTable_Card">
                    <p>ID: {event.id}</p>
                    <p>Type: {event.type}</p>
                    <p>Quantity: {event.qty}</p>
                </div>
            ))}
            </div> 
            }
        </div>
    )
  };
  