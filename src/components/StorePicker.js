import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
    //1. stop the form from submitting

    //2. get the text from that input

    // 3. change the page to /store/whatever-they entered
    // can use: and dont need to bind !!!!
    // goToStore = event => {
    //  event.preventDefault();
    // console.log(this);
    //}
  };

  /*comment*/
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
