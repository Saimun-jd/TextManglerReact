import React from 'react'

export default function Alers(props) {
    
    const capitalizeFirst = (txt)=>{
        var newTxt = txt.toLowerCase();
        return newTxt.charAt(0).toUpperCase() + (newTxt.slice(1));
    }

  return (
    props.alert && 
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalizeFirst(props.alert.type)}: </strong> {props.alert.msg}
    </div>
  );
}
