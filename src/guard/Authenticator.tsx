// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { authenticateUser } from './api'; // import your authenticateUser function

// export const withAuthentication = (WrappedComponent) => {
//   return (props) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const history = useHistory();

//     useEffect(() => {
//       const token = localStorage.getItem('token'); // get the token from local storage or from where you have stored it
//       if (!token) {
//         history.push('/login'); // redirect to login page if there is no token
//       } else {
//         authenticateUser(token)
//           .then(() => setIsAuthenticated(true))
//           .catch((error) => {
//             console.error(error);
//             history.push('/login'); // redirect to login page if authentication fails
//           });
//       }
//     }, [history]);

//     return isAuthenticated ? <WrappedComponent {...props} /> : null;
//   };
// };
// import React, { ComponentType, FC, useEffect, useState, } from 'react';
// import { NavigateFunction, useNavigate } from 'react-router-dom';
// import { authenticateUser } from '../auth';
// import { AxiosResponse } from 'axios';

// type AuthenticatorProps<P> = {
//     Component: ComponentType<P>;
//     componentProps?: P
// };

// const Authenticator: FC<AuthenticatorProps<unknown>> = ({ Component, componentProps }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
//     const navigate: NavigateFunction = useNavigate()
    
//     useEffect(() => {
//         const token: string | null = localStorage.getItem('token');
//         if (token === null) {
//             navigate("/login");
//         } else {
//             authenticateUser(token)
//                 .then(() => setIsAuthenticated(true))
//                 .catch(() => navigate("/login"));
//         }
//     }, [navigate]);

//     if (!isAuthenticated) {
//         return null; // or a loading spinner, etc.
//     }

//     return <Component {...componentProps} />;
// };