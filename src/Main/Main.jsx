import "./main.css";
import React, { useState } from "react";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    {
      img: "https://images.unsplash.com/photo-1678468826224-886aaccd22eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Harsh",
    },
    {
      img: "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shivam",
    },
    {
      img: "https://images.unsplash.com/photo-1611695946729-07ed17481973?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Muskaan",
    },
    {
      img: "https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Neha",
    },
    {
      img: "https://images.unsplash.com/photo-1670955304871-1399958446cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nish",
    },
    {
      img: "https://images.unsplash.com/photo-1683829989980-2f78a0ca9879?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Khushi",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1581250812663-f0b886e6e8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sakshi",
    },
  ];

  const maxVisibleStories = 5;

  const handleNextClick = () => {
    if (currentIndex + maxVisibleStories < stories.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "khushi_pawarr",
      profilePic:
        "https://images.unsplash.com/photo-1609432463625-9bcf935b2dab?q=80&w=1887",
      time: "2d",
      postImage:
        "https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934",
      caption: "🌟 🏔️",
      likeCount: 85,
      commentCount: 15,
      isLiked: false,
      comments: [],
    },
    {
      id: 2,
      username: "Shreya23",
      profilePic:
        "https://images.unsplash.com/photo-1678468826224-886aaccd22eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "7d",
      postImage:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840",
      caption: "🧘 Finding peace",
      likeCount: 70,
      commentCount: 10,
      isLiked: false,
      comments: [],
    },
  ]);
  const handleLikeClick = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };
  const handleCommentSubmit = (id, comment) => {
    const profileName = "Khushi";

    if (comment.trim() !== "") {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                comments: [...post.comments, `${profileName}: ${comment}`],
                commentCount: post.commentCount + 1,
              }
            : post
        )
      );
    } else {
      alert("Please enter a comment.");
    }
  };
  return (
    <>
      <div className="main">
        <div className="stories">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className="slider-button"
          >
            {"<"}
          </button>
          <div className="story">
            {stories
              .slice(currentIndex, currentIndex + maxVisibleStories)
              .map((story, index) => (
                <div className="story_item" key={index}>
                  <div className="story_prof">
                    <img src={story.img} alt={`Profile of ${story.name}`} />
                  </div>
                  <div className="story_name">{story.name}</div>
                </div>
              ))}
          </div>
          <button
            onClick={handleNextClick}
            disabled={currentIndex + maxVisibleStories >= stories.length}
            className="slider-button"
          >
            {">"}
          </button>
        </div>
        {/* Posts Section */}
        {posts.map((post) => (
          <div key={post.id} className="postContainer">
            <div className="post">
              <div className="post_dp">
                <img alt="Profile" src={post.profilePic} />
              </div>
              <div className="postName">{post.username}</div>
              <div className="postTime">{post.time}</div>
              <div className="postIcon">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="postImg">
              <img src={post.postImage} alt="Post" />
            </div>
            <div className="postEdit">
              <div
                className={`postLike ${post.isLiked ? "liked" : ""}`}
                onClick={() => handleLikeClick(post.id)}
              >
                <i class="fa-solid fa-heart"></i>{" "}
              </div>
              <div className="postLikeCount">{post.likeCount}</div>
              <div className="postCom">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div className="postComCount">{post.commentCount}</div>
              <div className="postSave">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="postCaption">
              <div className="postName">{post.username}</div>
              <div className="postCap">{post.caption}</div>
            </div>
            <div className="postViewCap">View all comments</div>
            <div className="commentSection">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements[`comment-${post.id}`].value;
                  handleCommentSubmit(post.id, comment);
                  e.target.reset();
                }}
                className="commentForm"
              >
                <textarea
                  name={`comment-${post.id}`}
                  placeholder="Add a comment"
                  rows="2"
                  className="commentBox"
                ></textarea>
                <button type="submit" className="postButton">
                  Post
                </button>
              </form>
              <div className="submittedComments">
                {post.comments.map((comment, idx) => (
                  <div key={idx} className="comment">
                    {comment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
