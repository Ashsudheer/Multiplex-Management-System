package com.MMS.MMSv0.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MMS.MMSv0.model.Shows;

@Repository
public interface ShowsRepository extends JpaRepository<Shows, Integer>{

}