import { Spinner } from 'react-bootstrap';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { allcontext } = useAuth();
  const { user, loading } = allcontext;
  // console.log(loading);
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner className="text-center" animation="border" variant="danger" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={() => (user.email ? children : <Navigate to="login"></Navigate>)}
    ></Route>
  );
};

export default PrivateRoute;
