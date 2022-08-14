import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasErrors: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasErrors: true };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  componentDidUpdate() {
    if (this.state.hasErrors) {
      setTimeout(() => this.setState({ redirect: true }), 3000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasErrors) {
      return (
        <h2>
          There was an error. <Link to="/">Click here</Link> to go back to the
          homepage. Or we will redirect you in 3 seconds
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
