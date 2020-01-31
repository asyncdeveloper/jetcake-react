// Layout Types
import DefaultLayout from "./layouts/Default";
// Route Views
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage,
    alias : "Home"
  },
  {
    path: "/profile",
    layout: DefaultLayout,
    component: ProfilePage,
    alias : "Profile"
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: LoginPage,
    alias : "Login"
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: RegisterPage,
    alias : "Sign Up"
  }

];
