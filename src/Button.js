 import React from 'react'
 
//  function Button({title}) {
//      return (
//          <div>
//              <button>{title}</button>
//          </div>
//      )
//  }

function Button(props) {
    return (
        <div>
            <button>{props.title}</button>
        </div>
    )
}

 export default Button
 