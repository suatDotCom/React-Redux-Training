import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes/mainRoutes.js";

import "./assets/css/main.css";
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds
} from "arwes";
import soundSettings from "./variables/soundSettings.jsx";
import { LoaderGeneral } from "./components/LoaderComponents";


// import { createStore } from "redux";
// import { rootReducer } from "./redux/reducers";


// import { store, history } from "./store";
// import { ConnectedRouter } from "connected-react-router";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { store
 } from "./redux/store.jsx";

export class App extends Component {
  componentWillMount() {
    setTimeout(() => {
      ReactDOM.render(<LoaderGeneral />, document.getElementById("app"));
    }, 1);
  }

  componentDidMount() {
    setTimeout(() => {
      ReactDOM.render(
        <Provider store={store}>
          <ThemeProvider theme={createTheme()}>
            <SoundsProvider sounds={createSounds(soundSettings)}>
              {/* <ConnectedRouter history={history}> */}
              <Routes />
              {/* </ConnectedRouter> */}
            </SoundsProvider>
          </ThemeProvider>
        </Provider>,
        document.getElementById("app")
      );
    }, 1500);
  }
  render() {
    return <div />;
  }
}

export default App;
