package com.MMS.MMSv0.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MMS.MMSv0.annotations.CTRefId;
import com.MMS.MMSv0.model.CTRef;

public interface CTRefRepository extends JpaRepository<CTRef, CTRefId>{

}
