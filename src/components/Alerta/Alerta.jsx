import "./Alerta.css";

const Alerta = (props) => {
  const { type, message } = props;

  if (type === "error") {
    return (
      <div className="error">
        <p>{message}</p>
      </div>
    );
  } else if (type === "info") {
    return (
      <div className="info">
        <p>{message}</p>
      </div>
    );
  } else  {
    return (
      <div className="success">
        <p>{message}</p>
      </div>
    );
  }
};

export default Alerta;
