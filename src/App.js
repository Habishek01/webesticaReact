// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="totalArea">
        <div className="fnavBar">
          <div id="navBar">
            <div id="navBar1">
              <img
                alt=""
                src="https://social.webestica.com/assets/images/logo.svg"
              />
              <form className="input-container">
                <span className="material-symbols-outlined"> search </span>
                <input
                  className="input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
            </div>
            <div id="navBar2">
              <div className="link">
                <span>Demo</span>
                <span className="material-icons"> expand_more </span>
              </div>
              <div className="link">
                <span>Pages</span>
                <span className="material-icons"> expand_more </span>
              </div>
              <div className="link">
                <span>Account</span>
                <span className="material-icons"> expand_more </span>
              </div>
              <div className="link">
                <span>My Network</span>
              </div>
            </div>
            <div id="navBar3">
              <button className="button">
                <span className="material-icons"> chat </span>
              </button>
              <button className="button">
                <span className="material-icons"> settings </span>
              </button>
              <button className="button">
                <span className="material-icons"> notifications </span>
              </button>
              <img
                id="avatar"
                src="https://social.webestica.com/assets/images/avatar/07.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="leftContainer">
            <div>
              <div className="leftContainer1">
                <img alt="" id="backgroundImg" src="./01.jpg" />
                <img
                  id="avatar2"
                  src="https://social.webestica.com/assets/images/avatar/07.jpg"
                  alt=""
                />
              </div>
              <div className="leftContainer2">
                <h3>Sam Lanson</h3>
                <p className="commentsText">Web Developer at Webestica</p>
                <p className="pText">
                  I'd love to change the world, but they won’t give me the
                  source code.
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

          <div className="middleContainer">
            <div className="middleContainer1">
              <div className="mc1 Post">
                <button className="mc1Button">
                  <span className="material-icons"> add </span>
                </button>
                <div>Post a Story</div>
              </div>
              <div className="mc1 Accounts">
                <img
                  alt=""
                  className="mc1Image"
                  src="https://social.webestica.com/assets/images/post/1by1/02.jpg"
                />
                <p className="mc1Name">Judy Nguyen</p>
              </div>
              <div className="mc1 Accounts1">
                <img
                  alt=""
                  className="mc1Image"
                  src="https://social.webestica.com/assets/images/post/1by1/03.jpg"
                />
                <p className="mc1Name">Samuel Bishop</p>
              </div>
              <div className="mc1 Accounts1">
                <img
                  alt=""
                  className="mc1Image"
                  src="	https://social.webestica.com/assets/images/post/1by1/04.jpg"
                />
                <p className="mc1Name">Carolyn Ortiz</p>
              </div>
            </div>
            <div className="middleContainer2">
              <div className="mc2">
                <div className="mc21">
                  <img
                    alt=""
                    className="mc2Image"
                    src="https://social.webestica.com/assets/images/avatar/03.jpg"
                  />
                  <textarea
                    className="mc2TextArea"
                    rows="2"
                    data-autoresize=""
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>
                <div className="mc2Icons">
                  <button id="buttonmc2">
                    <i className="fa-solid fa-image" id="mc2Icon1"></i>
                    <span className="mc2Text">Photo</span>
                  </button>
                  <button id="buttonmc2" className="mc22Icons">
                    <i className="fa-solid fa-video" id="mc2Icon2"></i>
                    <span className="mc2Text">Video</span>
                  </button>
                  <button id="buttonmc2" className="mc22Icons">
                    <i className="fa-solid fa-calendar" id="mc2Icon3"></i>
                    <span className="mc2Text">Event</span>
                  </button>
                  <button id="buttonmc2" className="mc22Icons">
                    <i className="fa-solid fa-face-smile" id="mc2Icon4"></i>
                    <span className="mc2Text">Feeling/Activity</span>
                  </button>
                  <button id="buttonmc21">
                    <span id="mc2Icon5" className="material-icons">
                      more_horiz
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="middleContainer3">
              <div className="mc3Content1">
                <img
                  alt=""
                  className="mc3Image"
                  src="	https://social.webestica.com/assets/images/avatar/04.jpg"
                />
                <div className="mc3Name">
                  <h3>Lori Ferguson</h3>
                  <span className="center-dot">·</span>
                  <span id="mc3Name2">2 hr</span>
                </div>
              </div>
              <div className="mc3Content2">
                <p>Web Developer at Webestica</p>
                <button className="mc3button">
                  <span id="mc2Icon5" className="material-icons">
                    more_horiz
                  </span>
                </button>
              </div>
              <div className="mc3Content3">
                <div>
                  I'm thrilled to share that I've completed a graduate
                  certificate course in project management with the president's
                  honor roll.
                </div>
                <div>
                  <img
                    alt=""
                    className="mc3Image2"
                    src="https://social.webestica.com/assets/images/post/3by2/01.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="rightContainer1">
              <h3 className="rc1H3">Who to follow</h3>
              <div className="rightContainer1-1">
                <img
                  alt=""
                  className="rc1Image"
                  src="https://social.webestica.com/assets/images/avatar/04.jpg"
                />
                <div className="rightContainerName">
                  <h4>Judy Nguyen</h4>
                  <p className="rc1Job">News Anchor</p>
                </div>
                <button className="rc1Button">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="rightContainer1-1">
                <img
                  alt=""
                  className="rc1Image"
                  src="https://social.webestica.com/assets/images/avatar/05.jpg"
                />
                <div className="rightContainerName">
                  <div>
                    <h4>Amanda Reed</h4>
                  </div>
                  <div>
                    <p className="rc1Job">Web Developer</p>
                  </div>
                </div>
                <button className="rc1Button">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="rightContainer1-1">
                <img
                  alt=""
                  className="rc1Image"
                  src="https://social.webestica.com/assets/images/avatar/11.jpg"
                />
                <div className="rightContainerName">
                  <h4>Billy Vasquez</h4>
                  <p className="rc1Job">News Anchor</p>
                </div>
                <button className="rc1Button">
                  <i className="fa-solid fa-user-check"></i>
                </button>
              </div>
              <div className="rightContainer1-1">
                <img
                  alt=""
                  className="rc1Image"
                  src="	https://social.webestica.com/assets/images/avatar/01.jpg"
                />
                <div className="rightContainerName">
                  <h4>Lori Ferguson</h4>
                  <p className="rc1Job">Web Developer</p>
                </div>
                <button className="rc1Button">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="rightContainer1-1">
                <img
                  alt=""
                  className="rc1Image"
                  src="	https://social.webestica.com/assets/images/avatar/placeholder.jpg"
                />
                <div className="rightContainerName">
                  <h4>Carolyn Ortiz</h4>
                  <p className="rc1Job">News Anchor</p>
                </div>
                <button className="rc1Button">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
