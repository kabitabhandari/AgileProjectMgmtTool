import React, { Component } from "react";

class AddProject extends Component {
  constructor() {
    super();
    //Initial state is set from the constructor and then we create a function that allows us to update the state.
    this.state = {
      projectName: "",
      projectIdentifier: "",
      projectDescription: "",
      start_date: "",
      end_date: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    // for each of name take each of its value and set as new state.
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    alert("A Record was submitted");
    //by default when we click Submit button it will refresh the page and we wont get project object. so we dont want this behaviour so prevent the default behaviour.
    event.preventDefault();
    //create new object onSubmit
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    console.log(newProject);
  }

  render() {
    return (
      <div>
        {
          //check name attribute <input> tag fields ], should match with postman/@Entity fields
          //create constructor
          //set initial state in constructor
          //set value on input fields
          //create onChange function
          //set onChange on each input field
          //bind on constructor
          //check state change in the react extension
        }
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description in short"
                      name="projectDescription"
                      value={this.state.projectDescription}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddProject;
