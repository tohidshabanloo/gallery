import "./Image.css";
import Likes from "../Likes/Likes";
const Image = ({ data, setLoading }) => {
  return (
    <div className={`image-container`}>
      <img src={data?.urls?.regular} alt="" onLoad={() => setLoading(false)} />
      <Likes data={data?.likes} />
    </div>
  );
};

export default Image;
