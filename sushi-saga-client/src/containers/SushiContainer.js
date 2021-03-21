import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    sushis: [],
    startIndex: 0
  };

  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/sushis")
    const sushis = await res.json()
    this.setState({ sushis })
  }

  filteredSushi = () => this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)

  moreSushis = () => {
    let startIndex = this.state.startIndex + 4;

    if (startIndex >= this.state.sushis.length) {
      startIndex = 0;
    }

    this.setState({ startIndex });
  }

  render() {

    return (
      <Fragment>
        <div className="belt">
          {this.filteredSushi().map(sushi => <Sushi onClick={() => this.props.eatSushis(sushi)} sushi={sushi} key={sushi.id}/>)}
          <MoreButton onClick={this.moreSushis} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
