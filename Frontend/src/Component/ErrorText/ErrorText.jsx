const ErrorText = (props) => {
  return (
    <div className="Error-Container">
      <p className="Error">{props.error}</p>
    </div>
  );
};

export default ErrorText;
