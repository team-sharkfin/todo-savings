const Landing = () => {
  function handleSignInButtonClick(event) {
    event.preventDefault();
    window.location.href = "http://localhost:3000/login/github";
  }

  return (
    <div className="fadein">
      <nav
        className="navbar sticky-top navbar-dark"
        style={{ backgroundColor: "#5c6784" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Penny Jar
          </a>
        </div>
      </nav>
      <div className="container mt-1">
        <h1 className="display-4">Reward yourself by doing</h1>
        <p className="lead">
          Whether you have a simple treat or a greater goal that you want to
          save towards, Penny Jar allows you to set tasks to help you reach
          those financial rewards.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleSignInButtonClick}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Landing;
