import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <section className="form-section">
        <h1>Create a stream</h1>
        <StreamForm onSubmit={this.onSubmit} />
      </section>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
