package com.MMS.MMSv0.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MMS.MMSv0.model.Shows;

@Repository
public interface ShowsRepository extends JpaRepository<Shows, Integer>{

	List<Shows> findByMovieId(int movieId);
	List<Shows> findByMovieIdAndShowDay(int movieId, Date showDay);
	List<Shows> findByShowDay(Date showDay);
}
