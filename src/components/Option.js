const Option = (props) => {
  const { Component } = props;
  return (
    <div
      style={{
        paddingTop: "30px",
      }}
    >
      <Component {...props} />
    </div>
  );
};

export default Option;
