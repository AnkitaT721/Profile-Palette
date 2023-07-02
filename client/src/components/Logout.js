import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from "../App";

const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    //promises

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/signout", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({type:"USER", payload:false});
            navigate('/signin', { replace: true });
            if (!res.ok) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch ((err) => {
            console.log(err);
        });
    });


  return (
    <>
      <h5>logging out...</h5>
    </>
  );
}

export default Logout;
