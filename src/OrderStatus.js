/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Table from 'react-bootstrap/Table'

import { db } from './firebase';

function OrderStatus() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    let ordersRef = db.collection('orders')
    ordersRef.get()
      .then(snapshot => {
        const firebaseOrders = []
        snapshot.docs.forEach(doc => {
          const order = doc.data()
          firebaseOrders.push(order)
        })
        setOrders(firebaseOrders)
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }, [])

  return (
    <div id="orderStatus">
      <h1>Total # of Orders: {orders.length}</h1><br/>
      <a href="https://console.firebase.google.com/u/1/project/order-form-6a274/database/firestore/data~2Forders~2F2rdd0c4Eip8rLFjRfue5">firebase</a>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th><span>&#128129;</span></th>
            <th><span>&#127968;</span></th>
            <th><span>&#128241;</span></th>
            <th><span>&#128176;</span></th>
          </tr>
        </thead>
        {orders && orders.map((order, index) => {
          return (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{order.name} <br/><strong>@{order.username}</strong></td>
                <td>{order.address}</td>
                <td>0{order.mobile}</td>
                <td>{order.paymentMethod}</td>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}

export default OrderStatus;