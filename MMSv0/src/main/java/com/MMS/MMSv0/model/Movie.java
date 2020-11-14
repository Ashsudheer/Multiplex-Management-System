package com.MMS.MMSv0.model;

import java.sql.Date;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "Movie")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int movie_id;
	
	@Column(name = "movie_name")
	private String movie_name;
	
	@Column(name = "director")
	private String director;
	
	@Column(name = "duration")
	private int duration;
	
	@Column(name = "release_date")
	private Date release_date;
	
	@Column(name = "genre")
	private String genre;
	
	@Column(name = "language")
	private String language;
	
	@Column(name = "subtitle")
	private String subtitle;
	
	@Column(name = "actors")
	private String actors;
	
	@Column(name = "synopsis")
	private String synopsis;
	
	@Column(name = "distributor")
	private String distributor;
	
	@Lob
	@Column(name = "poster")
	private byte[] poster;
	
	/*
	@OneToOne(mappedBy = "Movie", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Screen screen;
	
	@OneToOne(mappedBy = "Movie", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Shows shows;
	*/
	
	public Movie(){
		
	}

	public Movie(int movie_id, String movie_name, String director, int duration, Date release_date, String genre,
			String language, String subtitle, String actors, String synopsis, String distributor, byte[] poster) {
		super();
		this.movie_id = movie_id;
		this.movie_name = movie_name;
		this.director = director;
		this.duration = duration;
		this.release_date = release_date;
		this.genre = genre;
		this.language = language;
		this.subtitle = subtitle;
		this.actors = actors;
		this.synopsis = synopsis;
		this.distributor = distributor;
		this.poster = poster;
	}


	public int getMovieId() {
		return movie_id;
	}

	public void setMovieId(int movie_id) {
		this.movie_id = movie_id;
	}

	public String getMovieName() {
		return movie_name;
	}

	public void setMovieName(String movie_name) {
		this.movie_name = movie_name;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public Date getReleaseDate() {
		return release_date;
	}

	public void setReleaseDate(Date release_date) {
		this.release_date = release_date;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public String getDistributor() {
		return distributor;
	}

	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}

	public byte[] getPoster() {
		return poster;
	}

	public void setPoster(byte[] poster) {
		this.poster = poster;
	}
	
	
	@Override
	public String toString() {
		return "Movie [movie_id=" + movie_id + ", movie_name=" + movie_name + ", director=" + director + ", duration="
				+ duration + ", release_date=" + release_date + ", genre=" + genre + ", language=" + language
				+ ", subtitle=" + subtitle + ", actors=" + actors + ", synopsis=" + synopsis + ", distributor="
				+ distributor + ", poster=" + Arrays.toString(poster) + "]";
	}
	

}
