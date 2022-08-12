package com.newsapp.register;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Subscriptions")
public class Subscription {
	
	@Id
	@Column(name="sid")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int sid;

	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@Column(name="subs")
	private String subString;

	
	
	public Subscription() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Subscription(int sid, String firstname, String lastname, String subString) {
		super();
		this.sid = sid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.subString = subString;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getSubString() {
		return subString;
	}

	public void setSubString(String subString) {
		this.subString = subString;
	}

	@Override
	public String toString() {
		return "Subscription [sid=" + sid + ", firstname=" + firstname + ", lastname=" + lastname + ", subString="
				+ subString + "]";
	}
	
	
	
	
}
