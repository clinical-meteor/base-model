Package.describe({
  name: "clinical:base-model",
  summary: "A model for all other models to inherit from ",
  version: "1.3.5",
  git: "https://github.com/clinical-meteor/clinical-base-model.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    "meteor-platform",
    "mongo",
    "underscore"
  ]);

  api.use([
      "socialize:server-time@0.1.1",
      "tmeasday:publish-with-relations@0.2.0",
      "aldeed:simple-schema@1.3.3",
      "aldeed:collection2@2.5.0",
      "matb33:collection-hooks@0.7.13"
    ]);

  api.imply(["meteor-platform", "mongo", "underscore"]);

  api.imply([
      "tmeasday:publish-with-relations@0.2.0",
      "aldeed:simple-schema@1.3.3",
      "aldeed:collection2@2.5.0",
      "matb33:collection-hooks@0.7.13"
    ]);

  api.addFiles([
    "lib/BaseModel.js",
    "lib/security.js"
  ]);

  api.export("BaseModel");
});
