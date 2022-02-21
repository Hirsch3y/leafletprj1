var map = L.map('map').setView([44.3967, -122.48], 8);

var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', 
	{attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',maxZoom: 16}).addTo(map);

$.getJSON("https://raw.githubusercontent.com/Hirsch3y/leafletprj1/main/volc2.geojson",function(data){
  var vIcon = L.icon({iconUrl: 'https://preview.pixlr.com/images/800wm/1264/2/1264100780.jpg',iconSize: [25,25]}); 
  var volcanos= L.geoJson(data  ,{pointToLayer: function(Feature,latlng){
  var marker = L.marker(latlng,{icon: vIcon});
  marker.bindPopup(Feature.properties.Location + '<br/>' + Feature.properties + '<br/>' + Feature.properties);return marker;}
    });
  var clusters = L.markerClusterGroup();clusters.addLayer(volcanos);map.addLayer(clusters);
    });

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Crater Lake",
        "Type": "Caldera",
        "Last Erupted": "4,800 BP",
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.1844482421875,
              42.99410122501033
            ],
            [
              -122.18994140624999,
              42.897094603161904
            ],
            [
              -121.98394775390625,
              42.88803956056295
            ],
            [
              -121.98257446289062,
              42.98907873036066
            ],
            [
              -122.11715698242188,
              43.01067254527255
            ],
            [
              -122.1844482421875,
              42.99410122501033
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "Stratovolcano",
        "Prominent Volcano": "Mount Rainier",
        "Last Erupted": 1894,
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -121.84936523437499,
              46.922131240914
            ],
            [
              -121.88610076904295,
              46.89210855010362
            ],
            [
              -121.86790466308594,
              46.813218976041945
            ],
            [
              -121.72885894775389,
              46.793948571014326
            ],
            [
              -121.64165496826172,
              46.83177783787415
            ],
            [
              -121.66534423828125,
              46.912750956378915
            ],
            [
              -121.78756713867189,
              46.95096532787357
            ],
            [
              -121.84936523437499,
              46.922131240914
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Mount St. Helens",
        "Last Erupted": "2008/1980",
        "Type": "Stratovolcano",
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.23731994628905,
              46.233765396707966
            ],
            [
              -122.26341247558594,
              46.213813247100184
            ],
            [
              -122.2562026977539,
              46.17079646832833
            ],
            [
              -122.18204498291014,
              46.14059332394566
            ],
            [
              -122.13123321533203,
              46.16746780081259
            ],
            [
              -122.135009765625,
              46.206210520818985
            ],
            [
              -122.17243194580078,
              46.23780244949404
            ],
            [
              -122.23731994628905,
              46.233765396707966
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Glacier",
        "Type": "Statovolcano",
        "Last Erupted": 1700,
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -121.02813720703125,
              48.106284930862884
            ],
            [
              -121.0205841064453,
              48.15463478013122
            ],
            [
              -121.06040954589844,
              48.179822811961785
            ],
            [
              -121.15207672119139,
              48.1498247496202
            ],
            [
              -121.18434906005858,
              48.13218411348939
            ],
            [
              -121.1795425415039,
              48.10261673469398
            ],
            [
              -121.16340637207033,
              48.07693203139914
            ],
            [
              -121.13971710205077,
              48.051004999484974
            ],
            [
              -121.07345581054688,
              48.05398842015609
            ],
            [
              -121.02813720703125,
              48.106284930862884
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Mount Shasta",
        "Type": "Stratovolcano",
        "Last Erupted": 1250,
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.3382568359375,
              41.44272637767212
            ],
            [
              -122.2613525390625,
              41.36031866306708
            ],
            [
              -122.091064453125,
              41.32938883149378
            ],
            [
              -122.1185302734375,
              41.481833430076065
            ],
            [
              -122.27783203125,
              41.51269075845857
            ],
            [
              -122.3382568359375,
              41.44272637767212
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Lassen Peak",
        "Type": "Stratovolcano",
        "Last Erupted": 1921,
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -121.52801513671875,
              40.49448156204837
            ],
            [
              -121.5252685546875,
              40.48560404594876
            ],
            [
              -121.50569915771484,
              40.47763939256439
            ],
            [
              -121.48406982421875,
              40.4850818025475
            ],
            [
              -121.49093627929689,
              40.49683129620263
            ],
            [
              -121.51411056518555,
              40.504271578130336
            ],
            [
              -121.52801513671875,
              40.49448156204837
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Mount Hood",
        "Type": "Stratovolcano",
        "Last Erupted": 1866,
        "Volcanic Arc": "Cascade"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -121.80198669433592,
              45.431226220334516
            ],
            [
              -121.92901611328125,
              45.35021505925909
            ],
            [
              -121.7340087890625,
              45.295177069395706
            ],
            [
              -121.62208557128906,
              45.30676845797069
            ],
            [
              -121.57196044921875,
              45.36179519142128
            ],
            [
              -121.59599304199217,
              45.4379719091347
            ],
            [
              -121.70860290527342,
              45.48131779814123
            ],
            [
              -121.80198669433592,
              45.431226220334516
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Prominent Volcano": "Mount Baker",
        "Type": "Stratovolcano",
        "Volcanic Arc": "Cascade",
        "Last Erupted": 1846
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -121.88318252563477,
              48.80991588198182
            ],
            [
              -121.88404083251952,
              48.761960114986245
            ],
            [
              -121.84764862060547,
              48.7433988946352
            ],
            [
              -121.7676544189453,
              48.74396488684373
            ],
            [
              -121.75529479980467,
              48.791033113791144
            ],
            [
              -121.78653717041016,
              48.81805476264432
            ],
            [
              -121.88318252563477,
              48.80991588198182
            ]
          ]
        ]
      }
    }
  ]
};   
function onEachFeature(Feature, layer) {
	if (Feature.properties && Feature.properties["Prominent Volcano"]+"<br/>"+Feature.properties["Volcanic Arc"]+"<br/>"+Feature.properties["Last Erupted"]+"<br/>"+Feature.properties["Type"]) 
    {layer.bindPopup(Feature.properties["Prominent Volcano"]+"<br/>"+Feature.properties["Volcanic Arc"]+"<br/>"+Feature.properties["Last Erupted"]+"<br/>"+Feature.properties["Type"]);}}
var feat = L.geoJSON(geojsonFeature, {onEachFeature: onEachFeature}).addTo(map);
