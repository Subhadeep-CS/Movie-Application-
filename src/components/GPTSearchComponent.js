import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
import BackgroundImage from "../assets/images/background-image.jpg";
const GPTSearchComponent = () => {
  return (
    <div className="w-full">
      <div className="fixed -z-10 w-full">
        <img
          className="h-screen object-cover w-full"
          src={BackgroundImage}
          alt="logo"
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearchComponent;
