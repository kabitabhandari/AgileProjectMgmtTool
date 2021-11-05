package com.advance.ppmtool.web;

import com.advance.ppmtool.domain.Project;
import com.advance.ppmtool.services.MapValidationErrorService;
import com.advance.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("api/project")
public class ProjectController {
  @Autowired
  private ProjectService projectService;

  @Autowired
  private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
      ResponseEntity<Map<String, String>> errorMap = mapValidationErrorService.mapValidationService(result);
      if(errorMap!=null){
        return errorMap;
      }
      Project project1 = projectService.saveOrUpdateProject(project);
      return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }


    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId){
      Project project = projectService.findProjectByIdentifier(projectId);
      return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

  @GetMapping("/all")
  public Iterable<Project> getAllProjects(){
    Iterable<Project> project = projectService.findAllProjects();
    return project;
  }

  @DeleteMapping("/{projectId}")
  public ResponseEntity<?> deleteProjectById(@PathVariable String projectId){
    projectService.deleteProjectByIdentifier(projectId);
    return new ResponseEntity<String>("Project with ID " + projectId+ " was deleted ", HttpStatus.OK);
  }

}
