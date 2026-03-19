import axios from "axios";
import React, {useState} from "react";

function NewPost(){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please log in to create a post");
    return;
  }
    try {
      const newPost = { title, content, imageUrl, tags: tags.split(",").map(tag => tag.trim()), author: user.id };
      const res = await axios.post("http://localhost:5000/api/posts/post", newPost);
      console.log("Post created:", res.data);
      alert("Post created successfully!");
      setTitle("");
      setContent("");
      setImageUrl("");
      setTags("");
    } catch (err) {
    console.error("Error creating post:", err.response?.data || err.message);
    alert("Error creating post: " + (err.response?.data?.message || err.message));
}

  };

    return (
        <div style={{backgroundColor: "#f7f7f7",minHeight: "100vh", padding: "30px" }}>
            <h1 style={{marginLeft: 20}}>Create A New Blog</h1><br></br>
            <div style={{display: "inline-flex"}}>
            <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your title here...." value={title} onChange={(e) => setTitle(e.target.value)} required style={{margin: "20px", padding: "10px 180px 10px 5px"}}></input> <br></br>
            <textarea placeholder="Enter your content here..." value={content} onChange={(e) => setContent(e.target.value)} required style={{margin: "10px 20px 20px 20px", padding: "10px 280px 200px 5px"}}></textarea><br></br>
            <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL (optional)" style={{margin: "10px 20px 20px 20px", padding: "10px 280px 10px 5px"}}></input><br></br>
            <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="Mention Tags..." required style={{margin: "10px 20px 20px 20px", padding: "10px 280px 10px 5px"}}></input><br></br>
            <button type="submit" style={{margin: "10px 20px 20px 400px", padding: "8px 15px 8px 15px", borderRadius: "10px", border: "none",cursor: "pointer",
                transition: "background-color 0.3s", backgroundColor: " #E0E0E0"}} onMouseEnter={e => e.target.style.backgroundColor = "#2980b9"}
              onMouseLeave={e => e.target.style.backgroundColor = " #E0E0E0"}>Publish</button>
            </form>
            </div>
            <div style={{margin: "auto 10px 10px 80px"}}>
              <h3 style={{padding:"0px 20px 5px 5px", fontSize: "20px"}}>Tips to help you write your blog!</h3>
              <img src="https://images.squarespace-cdn.com/content/v1/6070484cab8eb21ff507c873/bdc6f69f-6291-4bb9-8c21-5b87a13295fd/how-to-write-a-blog-post.png" alt="idea1" style={{height: "500px", width: "600px"}}></img> <br></br>
            </div>
            </div>
            <footer style={{backgroundColor: " #E0E0E0", color: "black", padding: "1px", textAlign: "center"}}>
            <p>Looking forward to provide services to you! &copy;</p>
        </footer>
        </div>
    );
}
export default NewPost; 