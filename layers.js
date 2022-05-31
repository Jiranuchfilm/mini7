var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ขอบเขต'
            });
var format_Hospitels_T_2 = new ol.format.GeoJSON();
var features_Hospitels_T_2 = format_Hospitels_T_2.readFeatures(json_Hospitels_T_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitels_T_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitels_T_2.addFeatures(features_Hospitels_T_2);
var lyr_Hospitels_T_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitels_T_2, 
                style: style_Hospitels_T_2,
                interactive: true,
                title: '<img src="styles/legend/Hospitels_T_2.png" /> Hospitels_T'
            });
var format_Hoapital_3 = new ol.format.GeoJSON();
var features_Hoapital_3 = format_Hoapital_3.readFeatures(json_Hoapital_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoapital_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoapital_3.addFeatures(features_Hoapital_3);
var lyr_Hoapital_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hoapital_3, 
                style: style_Hoapital_3,
                interactive: true,
                title: '<img src="styles/legend/Hoapital_3.png" /> Hoapital'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr_Hospitels_T_2.setVisible(true);lyr_Hoapital_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr_Hospitels_T_2,lyr_Hoapital_3];
lyr__1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Hospitels_T_2.set('fieldAliases', {'Hospitel': 'Hospitel', 'สังกัด': 'สังกัด', 'สิทธิ': 'สิทธิ', 'เบอร์': 'เบอร์', 'การบริการ': 'การบริการ', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Hoapital_3.set('fieldAliases', {'ชื่อโรงพยาบาล': 'ชื่อโรงพยาบาล', 'ประเภท': 'ประเภท', 'การบริการ': 'การบริการ', 'สิทธิ': 'สิทธิ', 'ลิงค์': 'ลิงค์', 'lat': 'lat', 'long': 'long', });
lyr__1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Hospitels_T_2.set('fieldImages', {'Hospitel': 'TextEdit', 'สังกัด': 'TextEdit', 'สิทธิ': 'TextEdit', 'เบอร์': 'TextEdit', 'การบริการ': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hoapital_3.set('fieldImages', {'ชื่อโรงพยาบาล': 'TextEdit', 'ประเภท': 'TextEdit', 'การบริการ': 'TextEdit', 'สิทธิ': 'TextEdit', 'ลิงค์': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr__1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Hospitels_T_2.set('fieldLabels', {'Hospitel': 'no label', 'สังกัด': 'no label', 'สิทธิ': 'no label', 'เบอร์': 'no label', 'การบริการ': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Hoapital_3.set('fieldLabels', {'ชื่อโรงพยาบาล': 'no label', 'ประเภท': 'no label', 'การบริการ': 'no label', 'สิทธิ': 'no label', 'ลิงค์': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_Hoapital_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});