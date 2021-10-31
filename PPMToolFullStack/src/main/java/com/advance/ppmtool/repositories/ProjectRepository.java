package com.advance.ppmtool.repositories;

import com.advance.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;

import javax.annotation.Resource;

@Resource
public interface ProjectRepository extends CrudRepository<Project, Long> {

}
