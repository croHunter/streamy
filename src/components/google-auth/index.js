import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
// import handleError from "../../helper/handleError";
class GoogleAuth extends React.Component {
  componentDidMount() {
    try {
      window.gapi.load("client:auth2", async () => {
        await window.gapi.client.init({
          clientId:
            "166942275219-qjem0csg4t493gcpv62spmjhocbjgjcp.apps.googleusercontent.com",
          scope: "email",
        });
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  onSigninClick = () => {
    this.auth.signOut();
  };
  onSignoutClick = () => {
    this.auth.signIn();
  };
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  renderGoogleBtn = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSigninClick}>LOGOUT</button>;
    } else {
      return <button onClick={this.onSignoutClick}>LOGIN</button>;
    }
  };
  render() {
    return <div>{this.renderGoogleBtn()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
