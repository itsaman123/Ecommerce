import React from 'react';
import './Header.scss';
import logo6 from '../../assets/logo6.png';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';

const Header = ({currentUser}) => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <img src={logo6} alt="logo6" className="logo"/>
            </Link>
        <div className="options">
            {/* {
                currentUser ? <Link className="option">{`Hello, ${currentUser.displayName}..`}</Link> : <div className="option">Hello,User</div>
            } */}
        <Link to="/" className="option">
                Shop 
            </Link>
            <Link className="option" to="/checkout">
                Cart 
            </Link>
            <Link to="/orders" className="option">
                Orders 
            </Link>
            <Link className="option" to="/contact">
                Contact 
            </Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}> Sign Out </div> : <Link className="option" to="/register">
                Sign In
            </Link>
            }
            
        </div>
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
})

export default connect(mapStateToProps)(Header);