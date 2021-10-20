import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="create">
          <Link to="/streams/new" className="btn green">
            Create Stream
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }
  renderAdmin(stream) {
    if (stream.uid === this.props.currentUserId) {
      return (
        <div className="admin-btn">
          <Link to={`/streams/delete/${stream.id}`}>
            <div className="btn red">Delete</div>
          </Link>

          <Link to={`/streams/edit/${stream.id}`}>
            <div className="btn">Edit</div>
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="stream" key={stream.id}>
          <div>
            <Link to={`/streams/${stream.id}`}>
              <h3>{stream.title}</h3>
            </Link>

            <p>{stream.description}</p>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }

  render() {
    return (
      <section className="stream-list">
        <h1>Streams</h1>
        {this.renderList()}
        {this.renderCreate()}
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.uid,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
