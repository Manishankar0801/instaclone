package com.manishankar.instagramclone.Entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "Comments")
public class Comments {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String commentId;
	private String comment;
	private String userId;
	private String userName;
	private String postId;
	private Timestamp timeStamp;
	
	
	
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comments(int id, String commentId, String comment, String userId, String userName, String postId,
			Timestamp timeStamp) {
		super();
		this.id = id;
		this.commentId = commentId;
		this.comment = comment;
		this.userId = userId;
		this.userName = userName;
		this.postId = postId;
		this.timeStamp = timeStamp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCommentId() {
		return commentId;
	}

	public void setCommentId(String commentId) {
		this.commentId = commentId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPostId() {
		return postId;
	}

	public void setPostId(String postId) {
		this.postId = postId;
	}

	public Timestamp getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Timestamp timeStamp) {
		this.timeStamp = timeStamp;
	}
	
}
