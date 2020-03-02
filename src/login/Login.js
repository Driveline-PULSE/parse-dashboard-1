/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import LoginForm from 'components/LoginForm/LoginForm.react';
import LoginRow  from 'components/LoginRow/LoginRow.react';
import React     from 'react';
import styles    from './Login.scss';
import { setBasePath }    from 'lib/AJAX';

export default class Login extends React.Component {
  constructor(props) {
    super();

    let errorDiv = document.getElementById('login_errors');
    if (errorDiv) {
      this.errors = errorDiv.innerHTML;
    }

    let use2FADiv = document.getElementById('use2FA');
    this.use2FA = use2FADiv !== undefined;

    this.state = {
      forgot: false
    };
    setBasePath(props.path);
  }

  render() {
    const {path, use2FA} = this.props;

    return (
      <LoginForm
        header='Access your Dashboard'
        action='Log In'
        endpoint={`${path}login`}
        >
        <LoginRow
          label='Username'
          input={<input name='username' type='username' autoFocus />} />
        <LoginRow
          label='Password'
          input={<input name='password' type='password' />} />
        {this.use2FA ?
        <LoginRow
          label='F2A'
          input={<input name='code' type='text' />} /> : null}
        {this.errors ?
          <div className={styles.error}>
            {this.errors}
          </div> : null}
      </LoginForm>
    );
  }
}
