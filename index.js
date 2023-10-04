import { key } from './registration.js'

ej.base.registerLicense(key)
 
 var map = new ej.maps.Maps({
    /* titleSettings: {
        text: 'Poc Planigrupo',
    }, */
    zoomSettings:{
        enable:false,
        zoomFactor:1
    },
    centerPosition: {
        latitude: 24.54244147012483,
        longitude: -100.62646484375
    },
   layers: [{
        shapeData: mexico_map,
        dataSource: [
            {  "Country": "Mexico", "Mexico": "true"}
        ],
        shapePropertyPath: 'name',
        shapeDataPath: 'Country',
        highlightSettings: {
            enable: true,
            fill: 'blue',
         },
        shapeSettings: {
            colorValuePath: 'Mexico',
            colorMapping: [
            {
                value: 'true', color: '#aaAAff'
            },
            {
                value: 'Non-Permanent', color: '#003300'
            }]
        }
        }
    ]
});

map.appendTo('#element');