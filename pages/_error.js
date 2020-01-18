const CustomError = ({ statusCode }) => (
  <p>
    {statusCode ? `Custom ${statusCode} error` : 'Client side error'}
  </p>
);

CustomError.getInitialProps = ({ res, err }) => {
  const errorStatusCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errorStatusCode;

  return { statusCode };
}

export default CustomError;
