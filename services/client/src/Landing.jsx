import { EXPRESS_BASE_URL } from "./config.js";

const Landing = () => {
  function handleSignInButtonClick(event) {
    event.preventDefault();
    window.location.href = `${EXPRESS_BASE_URL}/login/github`;
  }

  return (
    <>
      <h1 className="display-4">Reward yourself by doing</h1>
      <p className="lead">
        Whether you have a simple treat or a greater goal that you want to save
        towards, Penny Jar allows you to set tasks to help you reach those
        financial rewards.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleSignInButtonClick}
      >
        Sign in with GitHub
      </button>
    </>
  );
};

export default Landing;
