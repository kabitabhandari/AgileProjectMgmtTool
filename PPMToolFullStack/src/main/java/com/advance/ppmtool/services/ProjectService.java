package com.advance.ppmtool.services;

import com.advance.ppmtool.domain.Project;
import com.advance.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        //Logics

        return projectRepository.save(project);
    }

}
