import React from 'react';
import PropTypes from 'prop-types';

function ChangeUser({
  userId,
  setUserId,
  setUser,
  setUserPerformance,
  setUserSessions,
  setUserActivity,
}) {
  const onChange = () => {
    userId == 12 ? setUserId(18) : setUserId(12);
    setUser(null);
    setUserPerformance(null);
    setUserSessions(null);
    setUserActivity(null);
  };
  return (
    <button className="change-user" onClick={onChange}>
      Changer l&rsquo;utilisateur
    </button>
  );
}
ChangeUser.propTypes = {
  userId: PropTypes.number,
  setUserId: PropTypes.func,
  setUser: PropTypes.func,
  setUserPerformance: PropTypes.func,
  setUserSessions: PropTypes.func,
  setUserActivity: PropTypes.func,
};

export default ChangeUser;
