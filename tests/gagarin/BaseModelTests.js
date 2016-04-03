describe('clinical:base-model', function () {
  var server = meteor();
  var client = browser(server);

  it('BaseModel exist on the client', function () {
    return client.execute(function () {
      expect(BaseModel).to.exist;
    });
  });
  it('BaseModel exist on the server', function () {
    return server.execute(function () {
      expect(BaseModel).to.exist;
    });
  });
});
