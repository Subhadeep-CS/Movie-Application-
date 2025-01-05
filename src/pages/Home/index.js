import BackgroundImage from "../../assets/images/background-image.jpg";
import LoginForm from "../../components/LoginForm";

const Home = () => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={BackgroundImage}
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex justify-center items-center w-full min-h-screen">
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
