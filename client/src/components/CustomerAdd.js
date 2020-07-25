import React, { Component } from "react";
import { post } from "axios";

class CustomerAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      username: "",
      birthday: "",
      gender: "",
      job: "",
      filename: "",
    };
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addCustomer().then((res) => {
      console.log(res.data);
    });
  };
  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      filename: e.target.value,
    });
  };
  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };
  addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("name", this.state.username);
    formData.append("birthday", this.state.birthday);
    formData.append("gender", this.state.gender);
    formData.append("job", this.state.job);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>Customer Add</h1>
        Profile Image:{" "}
        <input
          type="file"
          name="file"
          file={this.state.file}
          value={this.state.filename}
          onChange={this.handleFileChange}
        />
        <br />
        Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleValueChange}
        />
        <br />
        Birthday:{" "}
        <input
          type="text"
          name="birthday"
          value={this.state.birthday}
          onChange={this.handleValueChange}
        />
        <br />
        Gender:{" "}
        <input
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleValueChange}
        />
        <br />
        Job:{" "}
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default CustomerAdd;
