import person from "../assets/images/person2.jpg";
import greenHalfCircle from "../assets/images/greenHalfCircle.jpg";
import greenHalfCircle2 from "../assets/images/greenHalfCircle2.jpg";
import box1 from "../assets/images/box1.jpg";
import box2 from "../assets/images/box2.jpg";
import box3 from "../assets/images/box3.jpg";

import circle1 from "../assets/images/circle1.jpg";

const Subscribe = () => {
  return (
    <div>
      <div className="subscribe">
        <div className="container">
          <div style={{ position: "absolute", top: "130px", left: "0px" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={greenHalfCircle}
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-7 py-5  mt-4 text-lg-start text-center">
              <h2>
                <b>Happy </b>
                <span style={{ color: "#CB8461" }}>
                  {" "}
                  <b> Chinese New Year,</b>
                </span>{" "}
                <b>20%</b>
              </h2>
              <h2>
                <b>discount for you today</b>
              </h2>
              <button
                style={{ background: "#245D51" }}
                className="btn text-white p-2 mt-3"
              >
                <b>Subscribe Course</b>
              </button>
              <div
                style={{ position: "absolute", bottom: "-100px", left: "50px" }}
                className="d-lg-none "
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={circle1}
                  alt=""
                />
              </div>
            </div>
            <div
              style={{ position: "relative" }}
              className="col-lg-5 d-none d-lg-block"
            >
              <div
                style={{ position: "absolute", top: "200px", left: "-10px" }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={box1}
                  alt=""
                />
              </div>
              <div
                style={{ position: "absolute", bottom: "30px", left: "40px" }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={circle1}
                  alt=""
                />
              </div>
              <img src={person} alt="" />
              <div
                style={{ position: "absolute", top: "180px", left: "330px" }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={box2}
                  alt=""
                />
              </div>
              <div
                style={{ position: "absolute", bottom: "50px", left: "280px" }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={box3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-130px", right: "0px" }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={greenHalfCircle2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
