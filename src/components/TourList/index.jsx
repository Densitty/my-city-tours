import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData,
    };
  }

  removeTour = (id) => {
    const newTours = this.state.tours.filter((tour) => {
      return tour.id !== id;
    });
    this.setState({
      tours: newTours,
    });
  };

  render() {
    // console.log(this.state);
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} tour={tour} removeTour={this.removeTour} />;
        })}
      </section>
    );
  }
}
