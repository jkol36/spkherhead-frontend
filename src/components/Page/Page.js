import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount, children }) => (
    <div>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section>
        {children}
    </section>
    </div>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
