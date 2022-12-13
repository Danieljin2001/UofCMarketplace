let txt = "Loading...";
function Loading({ props }) {
  console.log("loading props= ", props);
  return (
    <div className="loading_screen d-flex flex-column justify-content-center h-100 w-100">
      <div className="d-flex flex-row mx-auto">
        {props && props.length > 0 ? props : txt}
        <div className="spinner-border "> </div>
      </div>
    </div>
  );
}

export default Loading;
