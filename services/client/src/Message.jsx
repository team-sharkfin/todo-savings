import PropTypes from "prop-types";

const Message = ({ show, children }) => {
  if (!show) {
    return null;
  }

  return <h2 className="h5 mt-2 text-center">{children}</h2>;
};

Message.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Message;
