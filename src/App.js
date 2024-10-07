import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/profile/profile";
import Settings from "./Components/settings/settings";

const App = () => {
  return (
    <Router>
      <div>
        <div className="mod">
          {/* <UploadFile
            open={isOpen}
            // close={closeModal} save={submit}
          /> */}
        </div>
        <Switch>
          {/* <Route path="/" exact>
            <Login />
          </Route> */}
          {/* <Route path="/signup" exact>
            <Signup />
          </Route> */}
          {/* <Route path="/likes" exact>
            <Likes />
          </Route> */}
          <Route path="/" exact>
            <Profile />
          </Route>
          <Route path="/edit" exact>
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
