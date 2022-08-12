package com.newsapp.register;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plans")
public class Plans {
	
	@Id
	@Column(name="pid")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int pid;
	
	@Column(name="description")
	private String description;

	
	
	public Plans() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Plans(int pid, String description) {
		super();
		this.pid = pid;
		this.description = description;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Plans [pid=" + pid + ", description=" + description + "]";
	}
	
	
	
	

}
