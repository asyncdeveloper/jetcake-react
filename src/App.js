import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import ProfilePage from "./component/ProfilePage";
import Footer from "./component/Footer";
import SignInAndSignUpPage from "./component/SignInAndSignUpPage";
import EditProfilePage from "./component/EditProfilePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={SignInAndSignUpPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/edit-profile' component={EditProfilePage} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
