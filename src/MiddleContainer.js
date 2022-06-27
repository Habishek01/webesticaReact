import Mc1Accounts from "./Mc1Accounts";
import MiddleContainer3 from "./MiddleContainer3";
import "./MiddleContainer.css";

export default function MiddleContainer() {
  return (
    <div className="middleContainer">
      <div className="middleContainer1">
        <div className="mc1 Post">
          <button className="mc1Button">
            <span className="material-icons"> add </span>
          </button>
          <div>Post a Story</div>
        </div>
        <Mc1Accounts
          src="https://social.webestica.com/assets/images/post/1by1/02.jpg"
          name="Judy Nguyen"
        />
        <Mc1Accounts
          src="https://social.webestica.com/assets/images/post/1by1/03.jpg"
          name="Samuel Bishop"
        />
        <Mc1Accounts
          src="https://social.webestica.com/assets/images/post/1by1/04.jpg"
          name="Carolyn Ortiz"
        />
        <Mc1Accounts
          src="https://social.webestica.com/assets/images/post/1by1/05.jpg"
          name="Amanda Reed"
        />
        <Mc1Accounts
          src="https://social.webestica.com/assets/images/post/1by1/01.jpg"
          name="Lori Stevens"
        />
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
            <button id="buttonmc2" className="mc22Icons">
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
      <MiddleContainer3 />
    </div>
  );
}
