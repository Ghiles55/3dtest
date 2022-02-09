import { color, padding } from "@mui/system";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const index = () => {
  let router=useRouter()
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    fadeIn: {
      y: 0,
      opacity: 1,
      transition: {
        daration: 1,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  let headerVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    fadeIn: {
      opacity: 1,
      y: 0,
    },
  };
  let titleBoxVariants = {
    initial: {
      opacity: 0,
      x: "-30vw",
    },
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        // duration:0.5,
        when: "beforeChildren",
      },
    },
  };
  let titleVariants = {
    initial: {
      opacity: 0,
      x: "-30vw",
    },
    fadeIn: {
      opacity: 1,
      x: 0,
    },
  };
  let textVariants = {
    initial: {
      opacity: 0,
      x: "-30vw",
    },
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  let buttonVariants = {
    initial: {
      y: "10rem",
      opacity: 0,
    },
    fadeIn: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
    whileHover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
    },
    whileTap: {
      scale: 0.9,
    },
  };
  let logoVariants = {
    initial: {
      x: 1000,
      opacity: "0",
    },
    fadeIn: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="landing_main_container"
      variants={containerVariants}
      initial="initial"
      animate="fadeIn"
    >
      <motion.div className="landing_header" variants={headerVariants}>
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
          <motion.button
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{
              scale:0.95
            }}
            style={{
              color: "white",
              marginRight: "2rem",
              width: "6rem",
              height: "3rem",
              border: "solid 1px #F6F7F9",
              fontSize: "1rem",
              borderRadius: "40px",
            }}
            onClick={() => {
              router.push("/register");
            }}
          >
            {" "}
            Sign Up
          </motion.button>
          <motion.button
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          whileTap={{
            scale:0.95
          }}
          onClick={() => {
            router.push("/login");
          }}
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
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="landing_title_box" variants={titleBoxVariants}>
        <motion.p variants={titleVariants}>Your Style,</motion.p>
        <motion.p variants={titleVariants}>Your Creation,</motion.p>
        <motion.div
          variants={titleVariants}
          style={{
            marginLeft: "2rem",
            display: "flex",
          }}
        >
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "4rem",
              fontWeight: "800",
            }}
          >
            Simply,{" "}
          </p>
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "4rem",
              fontWeight: "800",
              marginLeft: "1rem",
              color: "#00897B",
            }}
          >
            YOU
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="landing_text_box" variants={textVariants}>
        <p>
          We provide the best quality shirts and hoodies, and let the styling to
          you ! Using our online customisation tool, you can choose the color
          and prints on your clothing and we take care of the rest ! We only use
          bio-degradable and eco-friendly materials, you even have a 2 weeks
          warranty and exchange is completely free of charge !
        </p>
        <br />
        <p>
          You can start creating by clicking on the button below to create an
          account, jump in !
        </p>
        <br />
      </motion.div>
      <motion.img
        variants={logoVariants}
        src="/transparent_logo.png"
        className="landing_logo_main"
      />

      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="fadeIn"
        whileHover="whileHover"
        whileTap="whileTap"
        className="landing_main_btn"
        onClick={() => {
          router.push("/register");
        }}
      >
        {" "}
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default index;
