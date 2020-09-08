import React from 'react';

import PrevLogo from 'assets/images/prev-logo.png';

const Navigation = () => {

  return (
        <nav className="navigation">
            <img src={PrevLogo} alt="Paul Reggie Valenzuela" />
            <div>
              EN | ZH
            </div>
        </nav>
    )
}

export default Navigation;