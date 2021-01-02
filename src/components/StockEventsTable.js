import React from 'react'
import StockDetails from './StockDetails'


export default function StockEventsTable(props) {
  const {products, stockEvents} = props

  return (
    <div className='StockEventTable'>
      {products.map(product => {
        // const { id } = product

        const relevantStockEvents = stockEvents.filter(se => se.product.id === product.id)

        const stockTotal = relevantStockEvents.reduce((accumulator, currentElement) => {
          return accumulator + currentElement.qty
        }, 0)
        return (
          <div className="StockEventTable_ProductContainer">
            <StockDetails name={product.name} total={stockTotal} stockEvents={stockEvents} />
          </div>
        )
      })}
    </div>
  )
};
