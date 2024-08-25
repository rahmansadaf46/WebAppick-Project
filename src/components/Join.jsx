import greenHalfCircle from "../assets/images/greenHalfCircle.jpg";
import box2 from "../assets/images/box2.jpg";

const Join = () => {
  return (
    <div>
      <div className="join">
        <div className="container">
          <div style={{ position: "absolute", top: "130px", left: "0px" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={greenHalfCircle}
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12 py-5  mt-5 text-lg-start text-center">
              <h2>
                <span className="brown-text">
                  {" "}
                  <b> Improve</b>
                </span>{" "}
                <b>your skills, and reach your career as soon as possible</b>
              </h2>

              <div
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-20px",
                }}
                className="d-lg-none "
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={box2}
                  alt=""
                />
              </div>
            </div>
            <div
              style={{ position: "relative" }}
              className="col-lg-5 col-md-12 text-center"
            >
              <div className="join-button-container">
                <button
                  style={{ background: "#CB8461" }}
                  className="btn text-white p-2"
                >
                  <b>Join Now</b>
                </button>
                <button
                  style={{ background: "#245D51" }}
                  className="btn text-white p-2"
                >
                  <b>Subscribe Course</b>
                </button>
              </div>
              <div
                style={{ position: "absolute", bottom: "-170px", left: "0px" }}
                className="d-none d-lg-block "
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={box2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
