import "./navBar.css";

export default function NavBar() {
  return (
    <div className="nb-container">
      <div className="navbar">
        <div className="leftContainer">
          <img
            alt=""
            src="https://social.webestica.com/assets/images/logo.svg"
          />
          <form className="searchForm">
            <span className="material-symbols-outlined searchIcon">
              {" "}
              search{" "}
            </span>
            <input
              className="searchInput"
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
            <span className="material-icons iconButton"> chat </span>
          </button>
          <button className="button">
            <span className="material-icons iconButton"> settings </span>
          </button>
          <button className="button">
            <span className="material-icons iconButton"> notifications </span>
          </button>
          <img
            className="avatar"
            src="https://social.webestica.com/assets/images/avatar/07.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
