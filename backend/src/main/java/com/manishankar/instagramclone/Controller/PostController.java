package com.manishankar.instagramclone.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manishankar.instagramclone.Entity.Post;
import com.manishankar.instagramclone.Entity.Status;
import com.manishankar.instagramclone.Service.PostService;
import com.manishankar.instagramclone.Service.StatusService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("")
	public Post submitUserPost(@RequestBody Post post) {
		return postService.submitPostToDataBase(post);
	}
	
	@GetMapping("")
	public ArrayList<Post> getAllPosts(){
		return postService.retrivePostFromDB();
	}
	
}
