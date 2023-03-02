import React from 'react'

function Car(props) {
  return (
    <div>
        <table>
            <tr>
                <td>Id</td><td><strong>{ props.car_id }</strong></td>
            </tr>
            <tr>
                <td>Brand</td><td><strong>{ props.brand }</strong></td>
            </tr>
            <tr>
                <td>Serie</td><td><strong>{ props.serie }</strong></td>
            </tr>
            <tr>
                <td>Origin</td><td><strong>{ props.origin }</strong></td>
            </tr>
            <tr>
                <td>Price</td><td><strong>{ props.price }</strong></td>
            </tr>
        </table>
    </div>
  )
}

export default Car
