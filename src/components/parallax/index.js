import React from 'react';
import uid from 'uid';

const Parallax = () => {
    return (
        <section className="parallax">
            {['ashes', 'ashes', 'ashes'].map(item => 
                <div key={uid()} className={item} />
            )}
        </section>
    )
}

export default Parallax;