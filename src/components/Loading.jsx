import "../pages/SelectFlight.css";
import loading from "/Loading.png";

function Loading() {
  return (
    <>
      <p className="">Mencari penerbangan terbaik...</p>
      <img src={loading} />
    </>
  );
}

export default Loading;
