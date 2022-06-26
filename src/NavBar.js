import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <div className="leftContainer">
          <img
            alt=""
            src="https://social.webestica.com/assets/images/logo.svg"
          />
          <form className="search-container">
            <span className="material-symbols-outlined"> search </span>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>

        <div className="rightContainer">
          <div className="link">
            <span>Demo</span>
            <span className="material-icons dropDown"> expand_more </span>
          </div>
          <div className="link">
            <span>Pages</span>
            <span className="material-icons dropDown"> expand_more </span>
          </div>
          <div className="link">
            <span>Account</span>
            <span className="material-icons dropDown"> expand_more </span>
          </div>
          <div className="link">
            <span>My Network</span>
          </div>

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
  );
}
