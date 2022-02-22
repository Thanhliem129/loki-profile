import React, { Fragment } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { withRouter } from "react-router-dom";

const Home = ({ children }) => {

  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <Fragment>
        <div className='d-block'>
            <div className="hoplongtech">
                <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
                  <div className='col-md-12 p-0'>
                    <Header />
                    <div>{children}</div>
                    <Footer />
                  </div>
                </div>
            </div> 
        </div>
    </Fragment>
  );
};

export default withRouter(Home);
