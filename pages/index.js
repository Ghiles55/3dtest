import { color, padding } from "@mui/system";

const index = () => {
  return (
    <div className="landing_main_container">
      <div className="landing_header">
        <div
          style={{
            width: "30%",
            padding: " 1rem",
            color: "white",
          }}
        >
          Brand Name
        </div>
        <div
          style={{
            width: "40%",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              color: "white",
              marginRight: "2rem",
              width: "6rem",
              height: "3rem",
              border: "solid 1px #F6F7F9",
              fontSize: "1rem",
              borderRadius: "40px",
            }}
          >
            {" "}
            Sign Up
          </button>
          <button
            style={{
              color: "white",
              marginRight: "2rem",
              width: "6rem",
              height: "3rem",
              fontSize: "1rem",
              backgroundColor: "#24292E",
              borderRadius: "0.375rem",
            }}
          >
            {" "}
            Login{" "}
          </button>
        </div>
      </div>

      <div
        className="landing_title_box"
      >
        <p>Your Style,</p>
        <p>Your Creation,</p>
        <div style={{
            marginLeft:'2rem',
            display:'flex'
        }}>
          <p style={{
              fontFamily:'Raleway',
              fontSize:'4rem',
              fontWeight:'800'
          }}>Simply, </p>
          <p style={{
              fontFamily:'Raleway',
              fontSize:'4rem',
              fontWeight:'800',
              marginLeft:'1rem',
              color:"#00897B"
          }}>YOU</p>
        </div>
      </div>
      <div className="landing_text_box">
          <p>We provide the best quality shirts and hoodies, and let the styling to you !</p><br/>
          <p>Using our online customisation tool, you can choose the color and prints on your clothing and we take care of the rest !</p><br/>
          <p>We only use bio-degradable and eco-friendly materials, you even have a 2 weeks warranty and exchange is completely free of charge !</p><br/>
          <p>You can start creating by clicking on the button below to create an account, jump in !</p><br/>
      </div>
    </div>
  );
};

export default index;
