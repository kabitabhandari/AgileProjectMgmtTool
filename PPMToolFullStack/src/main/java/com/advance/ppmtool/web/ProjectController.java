package com.advance.ppmtool.web;

import com.advance.ppmtool.domain.Project;
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

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
      /*[BindingResult] is Spring’s object that holds the result of the validation and binding
       and contains errors that may have occurred. The BindingResult must come right after
       the model object that is validated or else Spring will fail to validate the object and throw
       an exception.*/
      if(result.hasErrors()){
        Map<String, String> errorMap = new HashMap<>();
        for(FieldError error : result.getFieldErrors()) {
          errorMap.put(error.getField(), error.getDefaultMessage());
        }
        return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
      }

      Project project1 = projectService.saveOrUpdateProject(project);
      return new ResponseEntity<Project>(project1, HttpStatus.CREATED);

    }
}
