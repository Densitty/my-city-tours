import React from "react";
import "./tour.scss";

class Tour extends React.Component {
  state = {
    showInfo: false,
  };

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // console.log(this.props);
    const { id, city, name, img, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={`city of ${city}`} />
          <span onClick={removeTour.bind(this, id)} className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.toggleInfo}>
              <i
                className={`fas ${
                  this.state.showInfo
                    ? "fa-caret-square-up"
                    : "fa-caret-square-down"
                }`}
              ></i>
            </span>
          </h5>
          <p>{this.state.showInfo && info}</p>
        </div>
      </article>
    );
  }
}

export default Tour;
