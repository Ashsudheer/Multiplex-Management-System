package com.MMS.MMSv0.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MMS.MMSv0.model.ScreenShape;

@Repository
public interface ScreenShapeRepository extends JpaRepository<ScreenShape, Integer>{

}
