package com.MMS.MMSv0.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MMS.MMSv0.model.Classes;

@Repository
public interface ClassesRepository extends JpaRepository<Classes, Integer>{

}
