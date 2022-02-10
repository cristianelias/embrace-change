// Dependencies
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // This error boundary would allow us to catch any error that our
    // user had encountered and log relevant information.
    // I've read that we could log Redux information that would give
    // us important insights about what the user did
    console.log(
      `Something went really wrong, take a look. Error: ${error} Error info: ${errorInfo}`
    );
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
