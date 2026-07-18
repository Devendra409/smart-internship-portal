package com.smartinternship.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartinternship.backend.entity.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

}