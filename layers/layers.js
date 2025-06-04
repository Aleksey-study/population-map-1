var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Граница субъекта',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> Граница субъекта'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Плотность населения чел/км²',
                interactive: true,
    title: 'Плотность населения чел/км²<br />\
    <img src="styles/legend/_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_1_2.png" /> 10 - 20<br />\
    <img src="styles/legend/_1_3.png" /> 20 - 3257<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Реки',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Реки'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Озера',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> Озера'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Города',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Города'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Среднемесячная зарплата руб.',
                interactive: true,
    title: 'Среднемесячная зарплата руб.<br />\
    <img src="styles/legend/_5_0.png" /> 31769 - 40000<br />\
    <img src="styles/legend/_5_1.png" /> 40000 - 50000<br />\
    <img src="styles/legend/_5_2.png" /> 50000 - 60000<br />\
    <img src="styles/legend/_5_3.png" /> 60000 - 70000<br />\
    <img src="styles/legend/_5_4.png" /> 70000 - 80000<br />\
    <img src="styles/legend/_5_5.png" /> 80000 - 90000<br />\
    <img src="styles/legend/_5_6.png" /> 90000 - 91983<br />' });
var group_ = new ol.layer.Group({
                                layers: [lyr__2,],
                                fold: 'close',
                                title: 'Реки'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr__1,group_,lyr__3,lyr__4,lyr__5];
lyr__0.set('fieldAliases', {'id': 'id', });
lyr__1.set('fieldAliases', {'name': 'name', 'Populati_1': 'Populati_1', 'area': 'area', 'dencity': 'dencity', });
lyr__2.set('fieldAliases', {'HYRIV_ID': 'HYRIV_ID', 'NEXT_DOWN': 'NEXT_DOWN', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH_KM': 'LENGTH_KM', 'DIST_DN_KM': 'DIST_DN_KM', 'DIST_UP_KM': 'DIST_UP_KM', 'CATCH_SKM': 'CATCH_SKM', 'UPLAND_SKM': 'UPLAND_SKM', 'ENDORHEIC': 'ENDORHEIC', 'DIS_AV_CMS': 'DIS_AV_CMS', 'ORD_STRA': 'ORD_STRA', 'ORD_CLAS': 'ORD_CLAS', 'ORD_FLOW': 'ORD_FLOW', 'HYBAS_L12': 'HYBAS_L12', });
lyr__3.set('fieldAliases', {'Hylak_id': 'Hylak_id', 'Lake_name': 'Lake_name', 'Country': 'Country', 'Continent': 'Continent', 'Poly_src': 'Poly_src', 'Lake_type': 'Lake_type', 'Grand_id': 'Grand_id', 'Lake_area': 'Lake_area', 'Shore_len': 'Shore_len', 'Shore_dev': 'Shore_dev', 'Vol_total': 'Vol_total', 'Vol_res': 'Vol_res', 'Vol_src': 'Vol_src', 'Depth_avg': 'Depth_avg', 'Dis_avg': 'Dis_avg', 'Res_time': 'Res_time', 'Elevation': 'Elevation', 'Slope_100': 'Slope_100', 'Wshd_area': 'Wshd_area', 'Pour_long': 'Pour_long', 'Pour_lat': 'Pour_lat', });
lyr__4.set('fieldAliases', {'id': 'id', 'Назва': 'Назва', 'зарпл': 'зарпл', });
lyr__5.set('fieldAliases', {'id': 'id', 'Назва': 'Назва', 'зарпл': 'зарпл', });
lyr__0.set('fieldImages', {'id': 'TextEdit', });
lyr__1.set('fieldImages', {'name': 'TextEdit', 'Populati_1': 'Range', 'area': 'TextEdit', 'dencity': 'TextEdit', });
lyr__2.set('fieldImages', {'HYRIV_ID': 'Range', 'NEXT_DOWN': 'Range', 'MAIN_RIV': 'Range', 'LENGTH_KM': 'TextEdit', 'DIST_DN_KM': 'TextEdit', 'DIST_UP_KM': 'TextEdit', 'CATCH_SKM': 'TextEdit', 'UPLAND_SKM': 'TextEdit', 'ENDORHEIC': 'Range', 'DIS_AV_CMS': 'TextEdit', 'ORD_STRA': 'Range', 'ORD_CLAS': 'Range', 'ORD_FLOW': 'Range', 'HYBAS_L12': 'TextEdit', });
lyr__3.set('fieldImages', {'Hylak_id': 'Range', 'Lake_name': 'TextEdit', 'Country': 'TextEdit', 'Continent': 'TextEdit', 'Poly_src': 'TextEdit', 'Lake_type': 'Range', 'Grand_id': 'Range', 'Lake_area': 'TextEdit', 'Shore_len': 'TextEdit', 'Shore_dev': 'TextEdit', 'Vol_total': 'TextEdit', 'Vol_res': 'TextEdit', 'Vol_src': 'Range', 'Depth_avg': 'TextEdit', 'Dis_avg': 'TextEdit', 'Res_time': 'TextEdit', 'Elevation': 'Range', 'Slope_100': 'TextEdit', 'Wshd_area': 'TextEdit', 'Pour_long': 'TextEdit', 'Pour_lat': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'Назва': 'TextEdit', 'зарпл': '', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'Назва': 'TextEdit', 'зарпл': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', });
lyr__1.set('fieldLabels', {'name': 'no label', 'Populati_1': 'hidden field', 'area': 'hidden field', 'dencity': 'header label - visible with data', });
lyr__2.set('fieldLabels', {'HYRIV_ID': 'no label', 'NEXT_DOWN': 'no label', 'MAIN_RIV': 'no label', 'LENGTH_KM': 'no label', 'DIST_DN_KM': 'no label', 'DIST_UP_KM': 'no label', 'CATCH_SKM': 'no label', 'UPLAND_SKM': 'no label', 'ENDORHEIC': 'no label', 'DIS_AV_CMS': 'no label', 'ORD_STRA': 'no label', 'ORD_CLAS': 'no label', 'ORD_FLOW': 'no label', 'HYBAS_L12': 'no label', });
lyr__3.set('fieldLabels', {'Hylak_id': 'no label', 'Lake_name': 'no label', 'Country': 'no label', 'Continent': 'no label', 'Poly_src': 'no label', 'Lake_type': 'no label', 'Grand_id': 'no label', 'Lake_area': 'no label', 'Shore_len': 'no label', 'Shore_dev': 'no label', 'Vol_total': 'no label', 'Vol_res': 'no label', 'Vol_src': 'no label', 'Depth_avg': 'no label', 'Dis_avg': 'no label', 'Res_time': 'no label', 'Elevation': 'no label', 'Slope_100': 'no label', 'Wshd_area': 'no label', 'Pour_long': 'no label', 'Pour_lat': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'Назва': 'no label', 'зарпл': 'no label', });
lyr__5.set('fieldLabels', {'id': 'hidden field', 'Назва': 'no label', 'зарпл': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});