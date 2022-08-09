import {
    interaction,layer,custom,control,
    Interactions,Overlays,Controls,
    Map,Layers,Overlay,util
} from "react-openlayers";

const MapBox = () => {
    return (
        <Map view = {{center:[0,0],zoom:2}}>
            <Layers>
                <layer.Tile></layer.Tile>
            </Layers>
        </Map>
    );
}

export default MapBox;