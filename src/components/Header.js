import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/ducks/auth';

export const Header = ({ startLogout }) => (
  <header className="header container">
    <div className="content-container ">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Brand</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
