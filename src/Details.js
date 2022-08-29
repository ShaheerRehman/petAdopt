import { useParams } from "react-router-dom";

import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { useSelector } from "react-redux";

class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }
  state = { loading: true, showModal: false };
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    // throw new Error("lmao you crashed");
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} - {state}
          </h2>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bit.ly/pet-adopt"
                    onClick={() => this.toggleModal()}
                    style={{ backgroundColor: this.props.theme }}
                  >
                    Yes
                  </a>
                  <button
                    onClick={() => this.toggleModal()}
                    style={{ backgroundColor: this.props.theme }}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const WrappedDetails = () => {
  const theme = useSelector(({ theme }) => theme.theme);
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} theme={theme} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
