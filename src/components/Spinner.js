import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = ({isLoading}) => {
    console.log(isLoading);
  const css = {
    position: "absolute",
    margin: "0 auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", 
  };

  return (
    <PacmanLoader
      color="rgba(255, 0, 0, 1)"
      loading={isLoading} 
      size={25}
      cssOverride={css} 
    />
  );
};

export default Spinner;
