import Header from "../../Layout/Header";
import BackgroundImage from "../../assets/images/background-image.jpg";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="absolute overflow-hidden w-screen h-screen">
        <img
          src={BackgroundImage}
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        id="loginForm"
        className="relative flex justify-center items-center min-h-screen"
      >
        <form className="p-12 w-full max-w-md bg-black bg-opacity-80 text-white rounded-md">
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="block w-full p-4 my-4 bg-gray-800"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="block w-full p-4 my-4 bg-gray-800"
          />
          <button type="submit" className="block w-full p-4 my-8 rounded-md bg-red-700">
            Sign In
          </button>
          <p className="py-4 font-semibold">New to Netflix? Sign Up Now</p>
        </form>
      </div>
    </div>
  );
};

export default Home;
