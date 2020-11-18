package com.MMS.MMSv0.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MMS.MMSv0.model.Shapes;

@Repository
public interface ShapesRepository extends JpaRepository<Shapes, Integer>{

	List<Shapes> findByScreenId(int screenId);
}
