export default function RightContainer2(props) {
  return (
    <div className="rightContainer2">
      <ul>
        <li>{props.news}</li>
        <p>{props.time}</p>
      </ul>
    </div>
  );
}
