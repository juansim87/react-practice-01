
const ContadorClicks = (props) => {

    const { quantity, message } = props;
  return (
    <div>
      <h2>{quantity}</h2>
      <button>{message}</button>
    </div>
  )
}

export default ContadorClicks;
