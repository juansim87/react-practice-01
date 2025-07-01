import "./CitaFrase.css";


const CitaFrase = (props) => {

    const { author, quote } = props;

  return (
    <div className="celebrity-quote">
      <h1>{quote}</h1>
      <h2>{author}</h2>
    </div>
  )
}

export default CitaFrase;
