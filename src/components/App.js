import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import StorePicker from "./StorePicker";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
          <div className="nenu">
          <Header tagline="Fresh Seafood Market!" />
          </div>
            <Order />
            <Inventory />

      </div>
    );
  }
}

export default App;
