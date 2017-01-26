import React from 'react';
import { connect } from 'react-redux';
import { openAuthAnonimously, logoutUser } from '../actions/auth';
import RaisedButton from 'material-ui/RaisedButton';

let Auth = ({
  status,
  uid,
  //actions
  openAuthAnonimously,
  logoutUser
}) => {

  const getAuthJsx = () => {
    switch (status) {
      case 'AUTH_ANONYMOUS':
        return (
           <RaisedButton
            label='Войти'
            onClick={openAuthAnonimously}
          />
        );
      case 'AUTH_AWAITING_RESPONSE':
        return <label>Подключение...</label>;
      case 'AUTH_LOGGED_IN':
        return (
          <div>
            <span style={{marginRight: '8px'}}>{uid}</span>
            <RaisedButton
              label='Выйти'
              onClick={logoutUser}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{display: 'flex', flex: '1 1 100%', flexDirection: 'row-reverse'}}>
      {getAuthJsx()}
    </div>
  );

};

export default connect(
  state => ({ ...state.auth }),
  { openAuthAnonimously, logoutUser }
)(Auth);
