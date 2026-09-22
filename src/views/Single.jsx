import { useLocation, useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const item = state.item;
  const navigate = useNavigate();

  return (
    <div>
      <h2>{item.title}</h2>

      <p>{item.description}</p>

      <p>Owner: {item.username}</p>

      {item.media_type === "video/mp4" ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}

      <br />

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
