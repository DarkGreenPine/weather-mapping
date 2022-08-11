import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition.js';
import {createStringXY} from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import coordinate from 'ol/coordinate.js';
import {fromLonLat} from 'ol/proj.js';
import Projection from 'ol/proj/Projection.js';

import TileWMS from 'ol/source/TileWMS.js';
import ImageWMS from 'ol/source/ImageWMS.js';
import Image from 'ol/layer/Image.js'; // for displaying the imagewms as an image
import 'ol/ol.css';

import React, { useState, useEffect, useRef } from "react";

const MapBox = () => {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(() => {
        const initialMap = new Map({
          target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
        setMap(initialMap);
        console.log("Set map");
    }, []);



    const url = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WmsServer?";
    const layer = "9";
    const addWMSLayer = (url, layer) => {
        
        let source = new ImageWMS({
            url: url,
            params: {'LAYERS': layer}
        })

        let wmsLayer = new Image({
            title: 'Test',
            zIndex: 1,
            visible: true,
            source: source,
            opacity: 0.6
        });
        console.log("in addwms");
        setMap(map.addLayer(wmsLayer));
        mapElement.current = map;
    }
    

    return (
        <div className="test">
            <div style={{height:'100vh', width:'100%'}}ref={mapElement}></div>
            <button onClick={addWMSLayer}>Buttons</button>
        </div>
    )

}

export default MapBox;
//const url = "https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WmsServer?";
//const layer = "9";

/*
const [map, setMap] = useState();
const mapElement = useRef();
const mapRef = useRef();
mapRef.current = map;

useEffect(() => {
        const initialMap = new Map({
          target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
        setMap(initialMap);
        console.log("Set map");
    }, []);




const addWMSLayer = (url, layer) => {
        
        let source = new ImageWMS({
            url: url,
            params: {'LAYERS': layer}
        })

        let wmsLayer = new Image({
            title: 'Test',
            zIndex: 1,
            visible: true,
            source: source,
            opacity: 0.6
        });
        console.log("in addwms");
        setMap(map.addLayer(wmsLayer));
        mapElement.current = map;
    }

<div style={{height:'100vh', width:'100%'}}ref={mapElement}></div>
*/