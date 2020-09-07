import React from 'react';

import PrevLogo from 'assets/images/prev-logo.png';

const Navigation = () => {

    const onClick = (event) => {
        console.log('test');
        console.log(event.type); 
        const eventType = event.type; 
      
        setTimeout(function() {
          console.log(event.type); 
          console.log(eventType); 
        }, 0);
      }

      console.log(<div />)

    return (
        <nav className="navigation" onClick={onClick}>
            <img src={PrevLogo} alt="Paul Reggie Valenzuela" />
            Navigation
            <p>{false}</p>
            <p>{true}</p>
            <p>{undefined}</p>
            <p>{String(null)}</p>
        </nav>
    )
}

export default Navigation;