import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

// import { Likes } from "./Components/likes";
import { Profile } from "./Components/profile";
// import { UploadFile } from "./Components/modal";
import { Settings } from "./Components/settings";
import { Login } from "./Components/login";
import { Signup } from "./Components/signup";
// import { uploadNewImage } from "./fetch/app";

// import { useSelector, useDispatch } from "react-redux";
// import { setImage, setUploadedImage } from "./redux/imageUpload";
// import { create } from "zustand";
// import { setUpdateUser } from "./redux/profile";

//Zustand
// import { useImageUploadState } from "./zucstand/store";

const App = () => {
  //   const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const { uploaded } = useImageUploadState();

  // useEffect(() => {
  //   if (uploaded) {
  //     setIsOpen(true);
  //   }
  // }, [uploaded]);

  // if (isLoading) {
  //   return (
  //     <div className="flex-c spinner">
  //       <Spinner animation="border" variant="primary" />
  //     </div>
  //   );
  // }
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
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          {/* <Route path="/likes" exact>
            <Likes />
          </Route> */}
          <Route path="/profile" exact>
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
