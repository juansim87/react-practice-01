import "./BotonPersonalizado.css"

const BotonPersonalizado = (props) => {

  const { message } = props;
  return (
    <div>
      <button className="custom-button">
        <p>{message}</p>
      </button>
    </div>
  );
};

export default BotonPersonalizado;
