import PropTypes from "prop-types";

const CollapsibleFooter = ({ id, buttonLabel, children }) => (
  <>
    <div id={id} className="collapse fixed-bottom">
      <div className="card bg-light px-4 pt-4 pb-5">{children}</div>
      <div className="pb-4"></div>
    </div>
    <nav
      className="navbar fixed-bottom navbar-dark"
      style={{ backgroundColor: "#5c6784" }}
    >
      <div className="container-fluid justify-content-center">
        <button
          className="navbar-toggler p-2"
          id="createBtn"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-controls={id}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {buttonLabel}
        </button>
      </div>
    </nav>
  </>
);

CollapsibleFooter.propTypes = {
  id: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleFooter;
