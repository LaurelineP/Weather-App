import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
      <div className="inputs-button-div">
        <input id='city' className='input_form' autoComplete='off' onFocus={props.onFocus} onBlur={props.onBlur}  type='text' name="city" placeholder ="City ..." />
        <input id='country' className='input_form' autoComplete='off' onFocus={props.onFocus} onBlur={props.onBlur} type='text' name="country" placeholder="Country ..." />
      <button className= 'btn_form'>Get Weather</button>
    </div>
    </form>
    )
 export default Form;


// no dropdown menu onfocus within textarea :
    //add attribute autocomplete='off' but not allowed to
    // down or up previous entering
