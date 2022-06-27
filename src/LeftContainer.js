import "./leftContainer.css";

export default function LeftContainer() {
  return (
    <div className="appLeft">
      <div className="lcMain">
        <div className="leftContainer1">
          <img
            alt=""
            className="backgroundImg"
            src={process.env.PUBLIC_URL + "/01.jpg"}
          />
          <img
            className="avatar2"
            src="https://social.webestica.com/assets/images/avatar/07.jpg"
            alt=""
          />
        </div>
        <div className="leftContainer2">
          <h3>Sam Lanson</h3>
          <p className="commentsText">Web Developer at Webestica</p>
          <p className="pText">
            I'd love to change the world, but they won't give me the source
            code.
          </p>
        </div>
        <div className="leftContainer3">
          <div className="item1">
            <div className="item1-1">256</div>
            <div className="item1-2">Post</div>
            <div className="hr"></div>
          </div>
          <div className="item2">
            <div className="item1-1">2.5K</div>
            <div className="item1-2">Followers</div>
            <div className="hr"></div>
          </div>
          <div className="item3">
            <div className="item1-1">365</div>
            <div className="item1-2">Following</div>
            <div className="hr"></div>
          </div>
        </div>
        <div className="bottomBorder"></div>

        <div className="leftContainer4">
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="	https://social.webestica.com/assets/images/icon/home-outline-filled.svg"
            />
            <span className="iconText">Feed</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="	https://social.webestica.com/assets/images/icon/person-outline-filled.svg"
            />
            <span className="iconText">Connections</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="https://social.webestica.com/assets/images/icon/earth-outline-filled.svg"
            />
            <span className="iconText">Latest News</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="	https://social.webestica.com/assets/images/icon/calendar-outline-filled.svg"
            />
            <span className="iconText">Events</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="https://social.webestica.com/assets/images/icon/chat-outline-filled.svg"
            />
            <span className="iconText">Groups</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="https://social.webestica.com/assets/images/icon/notification-outlined-filled.svg"
            />
            <span className="iconText">Notifications</span>
          </div>
          <div className="leftContainer4Content">
            <img
              alt=""
              className="leftContainer4Images"
              src="	https://social.webestica.com/assets/images/icon/cog-outline-filled.svg"
            />
            <span className="iconText">settings</span>
          </div>
        </div>
        <div className="seperatingLine"></div>
        <div className="profile">View Profile</div>
      </div>

      <div className="leftContainer5">
        <div className="leftContainer5Content">
          <span>About</span>
          <span>Settings</span>
          <span>Support</span>
          <span>Docs</span>
        </div>
        <div className="leftContainer5Content1">
          <span>Help</span>
          <span>Privacy & terms</span>
        </div>
        <div className="leftContainer5Content2">©2022 Webestica</div>
      </div>
    </div>
  );
}
