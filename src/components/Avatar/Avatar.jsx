import "./Avatar.css";

const Avatar = (props) => {
    const { nickName, image } = props;
  return (
    <div className="avatar-box">
      <div className="avatar-img"><img src={image} /></div>
      <h2>Apodo: {nickName}</h2>

    </div>
  )
}

export default Avatar;
