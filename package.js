Package.describe({
  name: "clinical:base-model",
  summary: "A model for all other models to inherit from ",
  version: "1.5.0",
  git: "https://github.com/clinical-meteor/clinical-base-model.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    "meteor-base",
    "mongo",
    "underscore"
  ]);
  api.use('ecmascript@0.12.4');
  
  api.use([
      "socialize:server-time@0.1.1",
      "aldeed:collection2@3.0.0",
      "matb33:collection-hooks@0.7.13"
    ]);

  api.imply(["meteor-base", "mongo", "underscore"]);

  api.imply([
      "tmeasday:publish-with-relations@0.2.0",
      "aldeed:collection2@3.0.0",
      "matb33:collection-hooks@0.7.13"
    ]);

  api.addFiles([
    "lib/BaseModel.js",
    "lib/security.js"
  ]);

  api.export("BaseModel");
});


Npm.depends({
  "simpl-schema": "1.5.3"
})