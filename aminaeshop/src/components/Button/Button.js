import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

//css button properties
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
}) => {
    //button size and style
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ?  buttonStyle :
     STYLES[0];
     const checkButtonSize = SIZES.includes(buttonSize) 
     ?  buttonSize :
      SIZES[0];

      return(
          /*<Link to='/Checkout' className='btn-mobile'>
              <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                  {children}
              </button>
          </Link>*/
          <div>
              
          </div>
      )
}

export default Button;