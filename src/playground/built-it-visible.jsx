console.log("siema");

const appRoot = document.getElementById("app");

let visible = false;
let text = "cos do pokazania";

const showDetails = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={showDetails}>
        {!visible ? "show details" : "hide details"}
      </button>
      {visible && <p>{text}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
