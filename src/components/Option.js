const Option = (props) => {
  const { Component } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <Component {...props} />
    </div>
  );
};

export default Option;
