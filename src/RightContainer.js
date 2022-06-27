import RightContainer1 from "./RightContainer1-1";
import RightContainer2 from "./RightContainer1-2";
import "./RightContainer.css";

export default function RightContainer() {
  const people = [
    {
      name: "Judy Nguyen",
      job: "News Anchor",
      src: "https://social.webestica.com/assets/images/avatar/04.jpg",
    },
    {
      name: "Amanda Reed",
      job: "Web Developer",
      src: "https://social.webestica.com/assets/images/avatar/05.jpg",
    },
    {
      name: "Billy Vasquez",
      job: "News Anchor",
      src: "https://social.webestica.com/assets/images/avatar/11.jpg",
      icon: "fa-user-check",
    },
    {
      name: "Lori Ferguson",
      job: "Web Developer",
      src: "https://social.webestica.com/assets/images/avatar/01.jpg",
    },
    {
      name: "Carolyn Ortiz",
      job: "News Anchor",
      src: "https://social.webestica.com/assets/images/avatar/placeholder.jpg",
    },
  ];
  const news = [
    { news: "Ten questions you should answer truthfully", time: "2hr" },
    { news: "Five unbelievable facts about money", time: "3hr" },
    { news: "Best Pinterest Boards for learning about business", time: "4hr" },
    { news: "Skills that you can learn from business", time: "6hr" },
  ];
  return (
    <div className="rContainer">
      <div className="rContainer1">
        <p className="rc1H3">Who to follow</p>
        {people.map((user, index) => (
          <RightContainer1
            src={user.src}
            name={user.name}
            job={user.job}
            icon={user.icon}
          />
        ))}
        <div className="rContainer1-2">
          <button className="rc2Button">View More</button>
        </div>
      </div>
      <div className="rContainer2">
        <h3 className="rc3h">Today's news</h3>
        {news.map((contents, index) => (
          <RightContainer2 news={contents.news} time={contents.time} />
        ))}

        <div className="rContainer2-2">
          <span id="rc2span" className="material-icons">
            more_horiz
          </span>
          <span id="rc2p">View all latest news</span>
        </div>
      </div>
    </div>
  );
}
