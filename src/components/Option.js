const Option = (props) => {
  const { Component } = props;
  return (
    <div
      className="row list-group-item"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        border: "1px solid",
      }}
    >
      <Component {...props} />
    </div>
  );
};

export default Option;
