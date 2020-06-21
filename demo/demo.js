import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Cui from "../src/react-cui";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  render() {
    return (
      <Fragment>
        <section>
          <div>
            <p>Let's add avatar and theme</p>
            <Cui
              uid="d6wXaD"
              theme="blue"
              avatar="https://i.imgur.com/6jr3M0j.png"
              height="400"
            />
            {this.state.show && (
              <Cui
                uid="Sb1WbK"
                theme="red"
                avatar="https://i.imgur.com/6jr3M0j.png"
                height="400"
              />
            )}
            <span onClick={this.handleOnClick}>
              Click to {this.state.show ? "hide" : "show"}
            </span>
          </div>
        </section>
        <section>
          <Cui
            uid="d6wXaD"
            theme="blue"
            avatar="https://i.imgur.com/6jr3M0j.png"
            height="400"
            mode="pill"
            pillButtonColor="blue"
          />
        </section>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
