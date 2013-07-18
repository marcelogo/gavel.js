// Generated by CoffeeScript 1.6.3
var ExpectedHttpResponse, HttpResponse;

require('./mixins');

HttpResponse = HttpResponse = (function() {
  HttpResponse.actAsValidatable();

  function HttpResponse(_arg) {
    this.statusCode = _arg.statusCode, this.statusMessage = _arg.statusMessage, this.headers = _arg.headers, this.body = _arg.body, this.expected = _arg.expected;
  }

  return HttpResponse;

})();

ExpectedHttpResponse = ExpectedHttpResponse = (function() {
  function ExpectedHttpResponse(_arg) {
    this.statusCode = _arg.statusCode, this.statusMessage = _arg.statusMessage, this.headers = _arg.headers, this.body = _arg.body, this.headersSchema = _arg.headersSchema, this.bodySchema = _arg.bodySchema;
  }

  return ExpectedHttpResponse;

})();

module.exports = {
  HttpResponse: HttpResponse,
  ExpectedHttpResponse: ExpectedHttpResponse
};