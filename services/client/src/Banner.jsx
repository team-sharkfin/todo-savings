import PropTypes from "prop-types";

const Banner = ({ children }) => (
  <div className="row g-0" id="userBanner">
    <div className="col-sm-12 p-4">
      <h1 className="display-5" id="nameBanner">
        {children}
      </h1>
    </div>
  </div>
);

Banner.propTypes = {
  children: PropTypes.node,
};

export default Banner;
