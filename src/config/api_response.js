function sendApiResponse(res, ...args) {
  const response = { success: true };
  let statusCode = 200;

  args.forEach((arg) => {
    if (typeof arg === 'string') {
      if (!response.message) {
        response.message = arg;
      }
    }
    if (arg && Array.isArray(arg)) {
      (response.success = false), (response.errors = arg);
    }
    if (arg && arg.data) {
      response.data = arg.data;
    }
    if (arg && arg.error) {
      response.success = false;
      statusCode = 500;
      response.message = 'Internal server error';
      response.errors = [{ field: 'General error', error: arg.error }];
    }
    if (typeof arg === 'boolean') {
      response.success = arg;
    }
    if (typeof arg === 'number') {
      response.errors = [];
      statusCode = arg;
    }
  });

  if (
    statusCode === 400 &&
    (!response.errors || response.errors.length === 0)
  ) {
    response.errors = [
      { field: 'General error', error: response.message || 'Bad Request' },
    ];
  }

  return res.status(statusCode).json(response);
}

module.exports = { sendApiResponse };
