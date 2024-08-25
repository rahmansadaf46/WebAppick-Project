import person from "../assets/images/person2.jpg";
import Box1 from "./common/Box1";
import Box2 from "./common/Box2";
import Box3 from "./common/Box3";
import Circle1 from "./common/Circle1";
import Cube from "./common/Cube";

const Subscribe = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon2}></div>

      <div style={{ position: "absolute", right: "400px" }}>
        <Circle1 />
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
      <div style={styles.leftSection}>
        <h1 style={styles.text}>
          Happy <span style={styles.highlightedText}>Chinese New Year</span>,
          20% discount for you today
        </h1>
        <button style={styles.button}>Subscribe Course</button>
      </div>

      <div style={styles.rightSection}>
        <img src={person} alt="Child with books" style={styles.image} />
      </div>
      <Cube />
      <div style={styles.icon1}></div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    backgroundColor: "#f4ede6",
    padding: "20px",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: "10px 90px",
  },
  leftSection: {
    flex: 1,
    marginRight: "20px",
  },
  mainIcon: {
    width: "56px",
    height: "57px",
    backgroundColor: "#244d42",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "normal",
    margin: "0 0 20px 0",
    color: "#333",
  },
  highlightedText: {
    color: "#d4653f",
  },
  button: {
    backgroundColor: "#244d42",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
  rightSection: {
    flexShrink: 0,
  },
  image: {
    width: "200px",
    height: "auto",
    position: "relative",
  },
  // Background icons
  icon1: {
    position: "absolute",
    bottom: "-15px",
    right: "-15px",
    width: "60px",
    height: "60px",
    backgroundColor: "#244d42",
    borderRadius: "50%",
    transform: "rotate(20deg)",
  },
  icon2: {
    position: "absolute",
    top: "-15px",
    left: "-15px",
    width: "60px",
    height: "60px",
    backgroundColor: "#244d42",
    borderRadius: "50%",
    border: "1px solid #244d42",
    transform: "rotate(-15deg)",
  },
  icon3: {
    position: "absolute",
    top: "25%",
    right: "5%",
    width: "60px",
    height: "60px",
    backgroundColor: "#244d42",
    borderRadius: "8px",
    transform: "rotate(-10deg)",
  },
};

export default Subscribe;
