import React from 'react';

const EverydayMunchies = () => {
    return (
        <div className="logo-container">
            <div className="title-container">
            <h1 className="everyday"> E<span>veryday</span> </h1>
            <h1 className="everyday second"> M<span>unchies</span> </h1>
            <div className="sub-title">
                <h3 className="name">
                <p>Prepared By: </p>
                <span>Aimee Sia</span>
                </h3>
            </div>
            </div>
            <div className="icon-container">
            <span className="fa fa-facebook-square " />
            <span className="fa fa-instagram " />
            <p>everydaymunchiesph</p>
            </div>
            {/* <div className="image-container">
            <img src='https://i.ya-webdesign.com/images/desserts-drawing-1.png' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBDjnOwefYTilLTI8AP-vSKdmvDy62qpEZZQ&usqp=CAU' />
        </div> */}
        </div>
    )
}

export default EverydayMunchies;