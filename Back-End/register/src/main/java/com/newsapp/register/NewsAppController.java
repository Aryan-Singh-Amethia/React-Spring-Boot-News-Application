package com.newsapp.register;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewsAppController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	SubscriptionRepository subscriptionRepository;
	
	@Autowired
	PlansRepository plansRepository;

	@PostMapping(value = "/register-user")
	public String registerUser(@RequestBody User user) {
		System.out.println(user.toString());
		userRepository.save(user);
		return user.toString();
	}

	@GetMapping(value = "/show-all-users")
	public String showAllUsers() {
		return userRepository.findAll().toString();
	}

	@PostMapping(value = "/subscribe-new-user")
	public String registerUser(@RequestBody Subscription subscription) {
		System.out.println(subscription.toString());
		subscriptionRepository.save(subscription);
		return subscription.toString();
	}

	@PostMapping(value = "/get-this-user")
	public String getSpecificUser(@RequestBody User user) {

		System.out.println(user.toString());
		List<User> userList = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());

		System.out.println(userList);
		if (userList.size() > 0)
			return "user-found";
		return "user-not-found";

	}
	
	@PostMapping(value="/add-sub-plans")
	public String addSubPlanstoH2(@RequestBody Plans plan) {
        plansRepository.save(plan);
        return "subscription added";
	}
	
	@GetMapping(value="/get-all-subs")
	public List<Plans> getAllSubs(){
		return plansRepository.findAll();
	}
	
	@GetMapping(value="/delete-all-subs")
	public String deleteAllSubs() {
		plansRepository.deleteAll();
		return "deleted";
	}

}
