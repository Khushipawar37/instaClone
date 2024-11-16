import "./main.css";
import dp from "./dpp.jpg";
export default function Main() {
  return (
    <>
      <div className="stories">
        <div className="story">
          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1678468826224-886aaccd22eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Aakash"
              />
            </div>
            <div className="story_name">Harsh</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Priya"
              />
            </div>
            <div className="story_name">Shivam</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1611695946729-07ed17481973?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Raj"
              />
            </div>
            <div className="story_name">Muskaan</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Neha"
              />
            </div>
            <div className="story_name">Neha</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1670955304871-1399958446cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Amit"
              />
            </div>
            <div className="story_name">Nish</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/photo-1683829989980-2f78a0ca9879?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Simran"
              />
            </div>
            <div className="story_name">Khushi</div>
          </div>

          <div className="story_item">
            <div className="story_prof">
              <img
                src="https://images.unsplash.com/flagged/photo-1581250812663-f0b886e6e8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile of Ravi"
              />
            </div>
            <div className="story_name">Sakshi</div>
          </div>
        </div>
        <div className="post">
          <div className="post_dp">
            <img alt="img" src={dp}></img>
          </div>
          <div className="postName">khushi_pawarr</div>
          <div className="postTime">2d</div>
          <div className="postIcon"><i class="fa-solid fa-ellipsis"></i></div>
        </div>
        <div className="postImg"><img src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
        <div className="postEdit">
          <div className="postLike"><i class="fa-regular fa-heart"></i></div>
          <div className="postLikeCount">85</div>
          <div className="postCom"><i class="fa-regular fa-comment"></i></div>
          <div className="postComCount">15</div>
          <div className="postSave"><i class="fa-regular fa-bookmark"></i></div>
        </div>
        <div className="postCaption">
          <div className="postName">Khushi</div>
          <div className="postCap"><span class="emoji">🌟</span>    <span class="mountain-emoji">🏔️</span>
          </div>
        </div>
        <div className="postViewCap">View all comments</div>
      </div>
    </>
  );
}
