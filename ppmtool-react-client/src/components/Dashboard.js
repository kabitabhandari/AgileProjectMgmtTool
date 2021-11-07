import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjectsAction } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjectsAction();
  }

  render() {
    //destructuring
    //const { projects } = this.props.project;
    const projects = this.props.project.projects;
    return (
      // Dashboard Component (Project Item included) -->
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      // End of Dashboard Component
    );
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectsAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.projectFromcombineReducers,
});
export default connect(mapStateToProps, { getProjectsAction })(Dashboard);
