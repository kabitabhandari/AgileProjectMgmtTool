package com.advance.ppmtool.web;

import com.advance.ppmtool.domain.Project;
import com.advance.ppmtool.services.MapValidationErrorService;
import com.advance.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.Binding;
import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
}
