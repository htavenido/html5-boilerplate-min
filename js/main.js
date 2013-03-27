require.config({
  paths: {
    jquery: 'libs/jquery-1.9.0.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    app: 'app'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});
