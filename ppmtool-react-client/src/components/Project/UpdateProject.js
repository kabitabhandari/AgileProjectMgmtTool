import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { action_update} from "../../actions/actions";
import { action_post } from "../../actions/actions";
import classnames from "classnames";


class UpdateProject extends Component {
  constructor() {
    super();
    //Initial state is set from the constructor and then we create a function that allows us to update the state.
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      projectDescription: "",
      start_date: "",
      end_date: "",
      mapped_errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(newProps) {
    if (newProps.mapped_errors) {
      this.setState({ mapped_errors: newProps.mapped_errors });
    }
    const {
      id,
      projectName,
      projectIdentifier,
      projectDescription,
      start_date,
      end_date,
    } = newProps.update;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      projectDescription,
      start_date,
      end_date,
    });
  }
  componentDidMount() {
    const projectIdentifier = this.props.match.params.projectIdentifier;
    this.props.updateProjectAction(projectIdentifier, this.props.history);
  }
  onChange(event) {
    // for each of name take each of its value and set as new state.
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    //by default when we click Submit button it will refresh the page and we wont get project object. so we dont want this behaviour so prevent the default behaviour.
    event.preventDefault();
    //create new object onSubmit
    const updatedProjectInfo = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    console.log(updatedProjectInfo);
    this.props.createProjectAction(updatedProjectInfo, this.props.history);
  }

  render() {
    const errors = this.state.mapped_errors;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.projectName
                    })}
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                  {errors.projectName && (
                      <div className="invalid-feedback">{errors.projectName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectDescription
                      })}
                    name="projectDescription"
                    value={this.state.projectDescription}
                    onChange={this.onChange}
                  />
                  {errors.projectDescription && (
                      <div className="invalid-feedback">{errors.projectDescription}</div>
                  )}
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
    );
  }
}

UpdateProject.propTypes = {
  createProjectAction: PropTypes.func.isRequired,
  update: PropTypes.object.isRequired,
  updateProjectAction: PropTypes.func.isRequired,
  mapped_errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  update: state.projects_in_state.project,
  mapped_errors: state.errors_in_state,
});
export default connect(mapStateToProps, { updateProjectAction: action_update,  createProjectAction: action_post })(UpdateProject);
