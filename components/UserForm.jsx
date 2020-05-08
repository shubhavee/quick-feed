import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchHistory from "./SearchHistory";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true,
      feeds: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    const value = e.target.value;
    //console.log(this.state.feeds);
    if (value !== "") {
      this.setState({ enabled: false, feeds: [...this.state.feeds, value] });
    } else {
      this.setState({ enabled: true });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.getFeed}>
          <Input
            style={{ margin: "20px auto", display: "block" }}
            type="text"
            name="feed_url"
            onChange={this.handleSearchChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={this.state.enabled}
          >
            Submit
          </Button>
          {this.props.past ? (
              <SearchHistory history={this.props.previous_feeds} />
          ) : (
            <div></div>
          )}
        </form>
      </div>
    );
  }
}

export default UserForm;
