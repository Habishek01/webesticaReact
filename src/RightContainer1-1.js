export default function RightContainer1(props) {
  return (
    <div className="rightContainer1-1">
      <img alt="" className="rc1Image" src={props.src} />
      <div className="rightContainerName">
        <h4>{props.name}</h4>
        <p className="rc1Job">{props.job}</p>
      </div>
      <button className="rc1Button">
        <i className={"fa-solid " + (props.icon || "fa-plus")}></i>
      </button>
    </div>
  );
}
