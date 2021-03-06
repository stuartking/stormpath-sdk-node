'use strict';

var utils = require('./../utils');

function ResourceError(responseBody) {
  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.status = responseBody.status;
  this.code = responseBody.code;
  this.userMessage = responseBody.message;
  this.developerMessage = responseBody.developerMessage;
  this.moreInfo = responseBody.moreInfo;
  this.stack = '';

  this.message = 'HTTP ' + this.status +
    ', Stormpath ' + this.code + ' (' + this.moreInfo + '): ' +
    this.developerMessage;

  if (responseBody.error) {
    this.error = responseBody.error;
  }
}
utils.inherits(ResourceError, Error);

module.exports = ResourceError;
