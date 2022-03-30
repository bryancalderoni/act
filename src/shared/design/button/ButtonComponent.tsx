import React from 'react';


function ButtonComponent(props: any) {
    let type: 'button' | 'submit' | 'reset' = props.type || "button";
    let classList =['btn', 'btn-primary'];
    let text = props.text || 'salva';

   


    return (
        <button onClick={props.clickAction} type={type} className={classList.join(' ')}>
            {props.children || text}
        </button>
    );
  }


  export default ButtonComponent;