import "./sugg.css";
import dp from "./dpp.jpg";

export default function Suggested() {
  
  return (
    <div className="sugg_con">
      <div className="sugg_prof">
        <div className="dpp">
          <img alt="img" src={dp}></img>
        </div>
        <div className="sugg_profInfo">
          <div className="sugg_id">khushi_pawarr</div>
          <div className="sugg_name">Khushi</div>
        </div>
        <div className="switch">Switch</div>
      </div>
      <div className="suggestions">
        <div className="sugg_for">
          Suggested for you <div className="sugg_more">See all</div>
        </div>
      </div>
      <div className="sugg_prof">
        <div className="dpp">
          <img src="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="sugg_profInfo">
          <div className="sugg_id">krissh_23</div>
          <div className="sugg_name">Krishika</div>
        </div>
        <div className="switch">Follow</div>
      </div>
      <div className="sugg_prof">
        <div className="dpp">
          <img src="https://images.unsplash.com/photo-1526313199968-70e399ffe791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="sugg_profInfo">
          <div className="sugg_id">Mokshh37</div>
          <div className="sugg_name">Moksh</div>
        </div>
        <div className="switch">Follow</div>
      </div>
      <div className="sugg_prof">
        <div className="dpp">
          <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="sugg_profInfo">
          <div className="sugg_id">Varunn_pvt</div>
          <div className="sugg_name">Varun</div>
        </div>
        <div className="switch">Follow</div>
      </div>
    </div>
  );
}
