import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactSection = () => {
    const [viewport, setViewport] = React.useState({
        width: "100%",
        height: "400px",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const MAPBOX_TOKEN = "seu_token_aqui"; // Substitua "seu_token_aqui" pelo seu token de acesso do Mapbox

    return (
        <div>
            <h1>Contact</h1>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                <Marker latitude={37.7577} longitude={-122.4376}>
                    <div>You are here</div>
                </Marker>
            </ReactMapGL>
        </div>
    );
}

export default ContactSection;