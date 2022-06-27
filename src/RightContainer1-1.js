export default function RightContainer1(props) {
  return (
    <div className="rContainer1-1">
      <img alt="" className="rc1Image" src={props.src} />
      <div className="rContainerName">
        <p>{props.name}</p>
        <p className="rc1Job">{props.job}</p>
      </div>
      <button className="rc1Button">
        <i className={"fa-solid " + (props.icon || "fa-plus")}></i>
      </button>
    </div>
  );
}
