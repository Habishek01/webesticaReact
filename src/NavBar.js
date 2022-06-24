export default function NavBar() {
  return (
    <div>
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
    </div>
  );
}
