import "./header.css";
import dp from './dpp.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headName">Instagram</div>
      <div className="headIcons">
        <div className="icon">
          <i class="fa-solid fa-house"></i>Home
        </div>
        <div className="icon">
          <i class="fa-solid fa-magnifying-glass"></i>Search
        </div>
        <div className="icon">
          <i class="fa-regular fa-compass"></i>Explore
        </div>
        <div className="icon">
        <i class="material-icons">movie</i>
        Reels
        </div>
        <div className="icon">
        <i class="fa-regular fa-comment-dots"></i>Messages
        </div>
        <div className="icon">
        <i class="fa-regular fa-heart"></i>Notifications
        </div>
        <div className="icon">
        <i class="fa-regular fa-square-plus"></i>Create
        </div>
      </div>
      <div className="headProfile">
        <div className="dp"><img alt = "img" src ={dp}></img></div>
        <div className="profileName">Profile</div>
        </div>
        <div className="icon">
        <i class="fa-solid fa-bars"></i>More
        </div>
        <div className="line"></div>
    </div>
  );
}
