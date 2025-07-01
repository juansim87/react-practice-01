import "./Alerta.css";

const Alerta = (props) => {
  const { type, message } = props;

  if (type === "error") {
    return (
      <div className="alert--error">
        <h1>{message}</h1>
      </div>
    );
  } else if (type === "info") {
    return (
      <div className="alert--info">
        <h1>{message}</h1>
      </div>
    );
  } else if (type === "success"){
    return (
      <div className="alert--success">
        <h1>{message}</h1>
      </div>
    );
  }
};

export default Alerta;
