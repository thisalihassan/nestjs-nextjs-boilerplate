import { HttpException } from '@nestjs/common';

export default {
  fail(message = '', error = null, status = 400) {
    throw new HttpException(
      {
        message: message ? message : 'Operation failed.',
        errors: error ? [error] : null,
      },
      status,
    );
  },
};
