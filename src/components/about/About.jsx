import "./about.css";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi i am just another ordinary guy triying to learn new thhings
          i like to follow my CURIOSITY rather than PASSION
        </p>
        <p className="a-desc">
          As an EEE student i am curious about many things although i may not be a master of any particular skill 
          i want to be a jack of all trades , i want to learn new skills . Presently i am tryiying to learn coding,
          web development , blender animation , photography and also a tiny bit of instrumental keyboaard.
        </p>
        
      </div>
    </div>
  );
};

export default About;
