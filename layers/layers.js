var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIGrayModeGelap_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (Mode Gelap)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BAUPrediksi2046_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BAU Prediksi 2046<br />\
    <img src="styles/legend/BAUPrediksi2046_3_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/BAUPrediksi2046_3_1.png" /> Hutan<br />\
    <img src="styles/legend/BAUPrediksi2046_3_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/BAUPrediksi2046_3_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/BAUPrediksi2046_3_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/BAUPrediksi2046_3_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/BAUPrediksi2046_3_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BAUPrediksi2046_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_BAUPrediksi2041_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BAU Prediksi 2041<br />\
    <img src="styles/legend/BAUPrediksi2041_4_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/BAUPrediksi2041_4_1.png" /> Hutan<br />\
    <img src="styles/legend/BAUPrediksi2041_4_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/BAUPrediksi2041_4_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/BAUPrediksi2041_4_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/BAUPrediksi2041_4_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/BAUPrediksi2041_4_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BAUPrediksi2041_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_BAUPrediksi2036_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BAU Prediksi 2036<br />\
    <img src="styles/legend/BAUPrediksi2036_5_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/BAUPrediksi2036_5_1.png" /> Hutan<br />\
    <img src="styles/legend/BAUPrediksi2036_5_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/BAUPrediksi2036_5_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/BAUPrediksi2036_5_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/BAUPrediksi2036_5_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/BAUPrediksi2036_5_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BAUPrediksi2036_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_BAUPrediksi2031_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BAU Prediksi 2031<br />\
    <img src="styles/legend/BAUPrediksi2031_6_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/BAUPrediksi2031_6_1.png" /> Hutan<br />\
    <img src="styles/legend/BAUPrediksi2031_6_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/BAUPrediksi2031_6_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/BAUPrediksi2031_6_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/BAUPrediksi2031_6_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/BAUPrediksi2031_6_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BAUPrediksi2031_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_SustainabilityPrediksi2046_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sustainability Prediksi 2046<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_1.png" /> Hutan<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/SustainabilityPrediksi2046_7_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SustainabilityPrediksi2046_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_SustainabilityPrediksi2041_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sustainability Prediksi 2041<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_1.png" /> Hutan<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/SustainabilityPrediksi2041_8_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SustainabilityPrediksi2041_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_SustainabilityPrediksi2036_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sustainability Prediksi 2036<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_1.png" /> Hutan<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/SustainabilityPrediksi2036_9_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SustainabilityPrediksi2036_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_SustainabilityPrediksi2031_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sustainability Prediksi 2031<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_0.png" /> Tubuh Air<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_1.png" /> Hutan<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_2.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/SustainabilityPrediksi2031_10_6.png" /> Padang Rumput / Semak Belukar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SustainabilityPrediksi2031_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_VIIRSNighttimeLightNTT_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'VIIRS Nighttime Light NTT<br />\
    <img src="styles/legend/VIIRSNighttimeLightNTT_11_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/VIIRSNighttimeLightNTT_11_1.png" /> Rendah<br />\
    <img src="styles/legend/VIIRSNighttimeLightNTT_11_2.png" /> Sedang<br />\
    <img src="styles/legend/VIIRSNighttimeLightNTT_11_3.png" /> Tinggi<br />\
    <img src="styles/legend/VIIRSNighttimeLightNTT_11_4.png" /> Sangat Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/VIIRSNighttimeLightNTT_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.188373, 13937850.281313, -866460.590276]
        })
    });
var lyr_KepadatanFasilitasEkonomiNTT_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kepadatan Fasilitas Ekonomi NTT<br />\
    <img src="styles/legend/KepadatanFasilitasEkonomiNTT_12_0.png" /> Kepadatan POI Sangat Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasEkonomiNTT_12_1.png" /> Kepadatan POI Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasEkonomiNTT_12_2.png" /> Kepadatan POI Sedang<br />\
    <img src="styles/legend/KepadatanFasilitasEkonomiNTT_12_3.png" /> Kepadatan POI Rendah<br />\
    <img src="styles/legend/KepadatanFasilitasEkonomiNTT_12_4.png" /> Kepadatan POI Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KepadatanFasilitasEkonomiNTT_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.156405, 13937373.289457, -898352.873637]
        })
    });
var lyr_KepadatanFasilitasKesehatanNTT_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kepadatan Fasilitas Kesehatan NTT<br />\
    <img src="styles/legend/KepadatanFasilitasKesehatanNTT_13_0.png" /> Kepadatan POI Sangat Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasKesehatanNTT_13_1.png" /> Kepadatan POI Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasKesehatanNTT_13_2.png" /> Kepadatan POI Sedang<br />\
    <img src="styles/legend/KepadatanFasilitasKesehatanNTT_13_3.png" /> Kepadatan POI Rendah<br />\
    <img src="styles/legend/KepadatanFasilitasKesehatanNTT_13_4.png" /> Kepadatan POI Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KepadatanFasilitasKesehatanNTT_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.156405, 13937373.289457, -898352.873637]
        })
    });
var lyr_KepadatanFasilitasPendidikanNTT_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kepadatan Fasilitas Pendidikan NTT<br />\
    <img src="styles/legend/KepadatanFasilitasPendidikanNTT_14_0.png" /> Kepadatan POI Sangat Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasPendidikanNTT_14_1.png" /> Kepadatan POI Tinggi<br />\
    <img src="styles/legend/KepadatanFasilitasPendidikanNTT_14_2.png" /> Kepadatan POI Sedang<br />\
    <img src="styles/legend/KepadatanFasilitasPendidikanNTT_14_3.png" /> Kepadatan POI Rendah<br />\
    <img src="styles/legend/KepadatanFasilitasPendidikanNTT_14_4.png" /> Kepadatan POI Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KepadatanFasilitasPendidikanNTT_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.156405, 13937373.289457, -898352.873637]
        })
    });
var lyr_MultiCriteriaEvaluationNTT_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Multi Criteria Evaluation NTT<br />\
    <img src="styles/legend/MultiCriteriaEvaluationNTT_15_0.png" /> Kepadatan Sangat Tinggi<br />\
    <img src="styles/legend/MultiCriteriaEvaluationNTT_15_1.png" /> Kepadatan Tinggi<br />\
    <img src="styles/legend/MultiCriteriaEvaluationNTT_15_2.png" /> Kepadatan Sedang<br />\
    <img src="styles/legend/MultiCriteriaEvaluationNTT_15_3.png" /> Kepadatan Rendah<br />\
    <img src="styles/legend/MultiCriteriaEvaluationNTT_15_4.png" /> Kepadatan Sangat Rendah<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MultiCriteriaEvaluationNTT_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13236852.033401, -1232973.156405, 13937373.289457, -898352.873637]
        })
    });
var format_OriginDestinationLine_16 = new ol.format.GeoJSON();
var features_OriginDestinationLine_16 = format_OriginDestinationLine_16.readFeatures(json_OriginDestinationLine_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OriginDestinationLine_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OriginDestinationLine_16.addFeatures(features_OriginDestinationLine_16);
var lyr_OriginDestinationLine_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OriginDestinationLine_16, 
                style: style_OriginDestinationLine_16,
                popuplayertitle: 'Origin Destination Line',
                interactive: false,
                title: '<img src="styles/legend/OriginDestinationLine_16.png" /> Origin Destination Line'
            });
var format_BatasAdministrasiKabupatenKotaProvinsiNTT_17 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupatenKotaProvinsiNTT_17 = format_BatasAdministrasiKabupatenKotaProvinsiNTT_17.readFeatures(json_BatasAdministrasiKabupatenKotaProvinsiNTT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_17.addFeatures(features_BatasAdministrasiKabupatenKotaProvinsiNTT_17);
var lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupatenKotaProvinsiNTT_17, 
                style: style_BatasAdministrasiKabupatenKotaProvinsiNTT_17,
                popuplayertitle: 'Batas Administrasi Kabupaten/Kota Provinsi NTT',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKabupatenKotaProvinsiNTT_17.png" /> Batas Administrasi Kabupaten/Kota Provinsi NTT'
            });
var group_AnalisisOriginDestination = new ol.layer.Group({
                                layers: [lyr_OriginDestinationLine_16,],
                                fold: 'close',
                                title: 'Analisis Origin-Destination'});
var group_AnalisisMultiCriteriaEvaluationNTT = new ol.layer.Group({
                                layers: [lyr_VIIRSNighttimeLightNTT_11,lyr_KepadatanFasilitasEkonomiNTT_12,lyr_KepadatanFasilitasKesehatanNTT_13,lyr_KepadatanFasilitasPendidikanNTT_14,lyr_MultiCriteriaEvaluationNTT_15,],
                                fold: 'close',
                                title: 'Analisis Multi Criteria Evaluation NTT'});
var group_PrediksiPerubahanLahanSkenarioSustainability = new ol.layer.Group({
                                layers: [lyr_SustainabilityPrediksi2046_7,lyr_SustainabilityPrediksi2041_8,lyr_SustainabilityPrediksi2036_9,lyr_SustainabilityPrediksi2031_10,],
                                fold: 'close',
                                title: 'Prediksi Perubahan Lahan Skenario Sustainability'});
var group_PrediksiPerubahanLahanSkenarioBAU = new ol.layer.Group({
                                layers: [lyr_BAUPrediksi2046_3,lyr_BAUPrediksi2041_4,lyr_BAUPrediksi2036_5,lyr_BAUPrediksi2031_6,],
                                fold: 'close',
                                title: 'Prediksi Perubahan Lahan Skenario BAU'});

lyr_ESRISatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(false);lyr_ESRIGrayModeGelap_2.setVisible(false);lyr_BAUPrediksi2046_3.setVisible(false);lyr_BAUPrediksi2041_4.setVisible(false);lyr_BAUPrediksi2036_5.setVisible(false);lyr_BAUPrediksi2031_6.setVisible(false);lyr_SustainabilityPrediksi2046_7.setVisible(true);lyr_SustainabilityPrediksi2041_8.setVisible(false);lyr_SustainabilityPrediksi2036_9.setVisible(false);lyr_SustainabilityPrediksi2031_10.setVisible(false);lyr_VIIRSNighttimeLightNTT_11.setVisible(false);lyr_KepadatanFasilitasEkonomiNTT_12.setVisible(false);lyr_KepadatanFasilitasKesehatanNTT_13.setVisible(false);lyr_KepadatanFasilitasPendidikanNTT_14.setVisible(false);lyr_MultiCriteriaEvaluationNTT_15.setVisible(false);lyr_OriginDestinationLine_16.setVisible(true);lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_ESRIGrayModeGelap_2,group_PrediksiPerubahanLahanSkenarioBAU,group_PrediksiPerubahanLahanSkenarioSustainability,group_AnalisisMultiCriteriaEvaluationNTT,group_AnalisisOriginDestination,lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17];
lyr_OriginDestinationLine_16.set('fieldAliases', {'fid': 'fid', 'origin': 'origin', 'destination': 'destination', 'flow': 'flow', 'dist_km': 'dist_km', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'UUPP': 'UUPP', });
lyr_OriginDestinationLine_16.set('fieldImages', {'fid': 'TextEdit', 'origin': 'TextEdit', 'destination': 'TextEdit', 'flow': 'TextEdit', 'dist_km': 'TextEdit', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_OriginDestinationLine_16.set('fieldLabels', {'fid': 'hidden field', 'origin': 'hidden field', 'destination': 'hidden field', 'flow': 'hidden field', 'dist_km': 'header label - always visible', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17.set('fieldLabels', {'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'WADMKK': 'no label', 'UUPP': 'hidden field', });
lyr_BatasAdministrasiKabupatenKotaProvinsiNTT_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});