import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return <div className="error">{error}</div>;
    }
  }
  renderInput = ({ input, label, id, meta }) => {
    // console.log(this.initalValues);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          id="title"
          name="title"
          component={this.renderInput}
          label="Enter a title"
        />
        <Field
          id="description"
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <input className="btn" type="submit" value="SUBMIT" />
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title must not be empty";
  }
  if (!formValues.description) {
    errors.description = "Description must not be empty";
  }
  return errors;
};
export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
