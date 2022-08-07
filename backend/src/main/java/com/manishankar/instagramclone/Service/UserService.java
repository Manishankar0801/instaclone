package com.manishankar.instagramclone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manishankar.instagramclone.Entity.Users;
import com.manishankar.instagramclone.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userRepo;
	
	public Users submitMetaDataOfUser(Users users) {
		return userRepo.save(users);
	}
	
	public Users displayUserMetaData(String userid) {
		return userRepo.findByUserId(userid);
	}
	
}
