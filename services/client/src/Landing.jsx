const EXPRESS_BASE_URL = process.env.EXPRESS_BASE_URL;

const Landing = () => {
  function handleSignInButtonClick(event) {
    event.preventDefault();
    window.location.href = `${EXPRESS_BASE_URL}/login/github`;
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Penny Jar</h1>
        <p className="h3">Reward yourself by doing</p>
        <p className="lead">
          Whether you have a simple treat or a greater goal that you want to
          save towards,{" "}
          <strong>
            <em>Penny Jar</em>
          </strong>{" "}
          allows you to set tasks to help you reach those financial rewards.
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleSignInButtonClick}
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
