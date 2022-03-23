import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import {
<<<<<<< HEAD
  FormikAbstractPage,
=======
  DynamicForm,
  FormikAbstraction,
>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
<<<<<<< HEAD
  DynamicForm
} from '../03-forms/pages';
=======
} from '../03-forms/pages'

>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik - Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik - Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik - Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>Formik - Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
<<<<<<< HEAD
              <NavLink to="/formik-dynamic" activeClassName="nav-active" exact>Dynamic Form</NavLink>
=======
              <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponentsPage />
          </Route>
          <Route path="/formik-abstract">
            <FormikAbstractPage />
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/formik-dynamic">
            <DynamicForm />
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}