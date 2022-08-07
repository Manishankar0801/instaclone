package com.manishankar.instagramclone.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manishankar.instagramclone.Entity.Post;
import com.manishankar.instagramclone.Entity.Status;
import com.manishankar.instagramclone.Repository.PostRepo;

@Service
public class PostService {
	
	@Autowired
	PostRepo postRepo;
	
	@Autowired
	UserService userService;
	
	public Post submitPostToDataBase(Post post) {
		//post.setUserName(userService.displayUserMetaData(post.getUserId()).getUserName());
		return postRepo.save(post);
	}
	
	public ArrayList<Post> retrivePostFromDB(){
		//return postRepo.findAll();
		ArrayList<Post> postList= postRepo.findAll();
		for(int i=0;i<postList.size();i++) {
			Post postItem = postList.get(i);
			postItem.setUserName(userService.displayUserMetaData(postItem.getUserId()).getUserName());
		}
		return postList;
		
	}
	
}
