import "../styles/Option.css";

const Option = (props) => {
  const { Component } = props;
  return (
    <div className="option">
      <Component {...props} />
    </div>
  );
};

export default Option;
