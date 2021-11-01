package com.advance.ppmtool.services;

import com.advance.ppmtool.domain.Project;
import com.advance.ppmtool.exception.ProjectIdException;
import com.advance.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        try{
            return projectRepository.save(project);
        }catch(Exception ex){
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase()+"' is duplicated");
        }

    }

}
