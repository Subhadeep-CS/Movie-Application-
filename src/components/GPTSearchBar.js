import { useSelector } from "react-redux";
import lang from "../config/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.language.language);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
