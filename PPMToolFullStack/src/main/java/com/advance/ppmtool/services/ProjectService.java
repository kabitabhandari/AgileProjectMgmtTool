package com.advance.ppmtool.services;

import com.advance.ppmtool.domain.Project;
import com.advance.ppmtool.exception.ProjectIdException;
import com.advance.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch(Exception ex){
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase()+"' is duplicated");
        }

    }

    public Project findProjectByIdentifier(String identifier){
        Project project = projectRepository.findByProjectIdentifier(identifier.toUpperCase());
        if(project == null){
            throw new ProjectIdException("Project ID '" + identifier.toUpperCase()+"' does not " +
                    "exist");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
       return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String identifier){
        Project project = projectRepository.findByProjectIdentifier(identifier.toUpperCase());
        if(project == null){
            throw new ProjectIdException("Cannot Delete Project ID '" + identifier.toUpperCase()+"' as it does not " +
                    "exist");
        }
        projectRepository.delete(project);
    }

}
