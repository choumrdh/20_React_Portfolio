import React, { Component } from "react";
import projects from "./projects.json";
import ProjectCard from "./ProjectCard";
import "./Project.css";
class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <div className="container-sm ">
        <div className="card mx-auto">
          <div className="card-header">
            <h3>Projects</h3>
          </div>
          <div className="card-body">
            <div className="row text-center mb-5">
              {this.state.projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  library={project.libraries}
                  deployLink={project.linkToApp}
                  githubLink={project.githubReop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
