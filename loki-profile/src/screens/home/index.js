import React, { Fragment, useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { withRouter } from "react-router-dom";
// import { _getSanctum, _getUser } from "../../api/auth";

const Home = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     _getSanctum();
//     _getUser().then(res => {
//       setCurrentUser(res)
//     })
//   }, []);

  return (
    <Fragment>
        <div className='d-block'>
            <div className="hoplongtech">
                <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
                  <div className='col-md-12 p-0'>
                    <Header />
                    <div className="container">{children}</div>
                    <Footer />
                  </div>

                </div>
            </div> 
        </div>
    </Fragment>
  );
};

export default withRouter(Home);
