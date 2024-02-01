require([
      "esri/WebMap",
      "esri/views/MapView"
    ], function(WebMap, MapView) {
      var webmap = new WebMap({
        portalItem: {
          id: "354a1cf20db149f4985ec786beadf09b"
        }
      });

      var view = new MapView({
        map: webmap,
        container: "viewDiv"
      });
    });