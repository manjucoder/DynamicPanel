export default function ButtonElement(props) {
  return (
    <div className="buttondiv">
      <button type="submit" className="btn btn-primary" onClick={props.action}>
        Add
      </button>
    </div>
  );
}
