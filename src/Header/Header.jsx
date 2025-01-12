import "./header.css";
import dp from './dpp.jpg';

export default function Header({ onHomeClick, onProfileClick }) {
  return (
    <div className="header">
      <div className="headName">Instagram</div>
      <div className="headIcons">
      <div className="icon" onClick={onHomeClick}>
          <i className="fa-solid fa-house"></i>
          <div className="iconNmae">Home</div>
        </div>
        <div className="icon">
          <i class="fa-solid fa-magnifying-glass"></i><div className="iconNmae">Search</div>
        </div>
        <div className="icon">
          <i class="fa-regular fa-compass"></i><div className="iconNmae">Explore</div>
        </div>
        <div className="icon">
        <i class="material-icons">movie</i>
        <div className="iconNmae">Reels</div>
        </div>
        <div className="icon">
        <i class="fa-regular fa-comment-dots"></i><div className="iconNmae">Messages</div>
        </div>
        <div className="icon">
        <i class="fa-regular fa-heart"></i><div className="iconNmae">Notifications</div>
        </div>
        <div className="icon">
        <i class="fa-regular fa-square-plus"></i><div className="iconNmae">Create</div>
        </div>
        {/* <div className="icon">
        <i class="fa-solid fa-bars"></i><div className="iconNmae">More</div>
        </div> */}
      </div>
      <div className="headProfile" onClick={onProfileClick}>
        <div className="dp">
          <img alt="img" src={dp} />
        </div>
        <div className="profileName">Profile</div>
        </div>
        <div className="line"></div> 
    </div>
  );
}
