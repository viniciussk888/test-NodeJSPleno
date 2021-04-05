import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./styles.css";
import api from "../services/api";

const Marker = ({ children }) => children;

export default function App() {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getPoints() {
      const res = await api.get('points');
      setResults(res.data.points);
    }
    getPoints();
  }, [results]);

  const points = results.map((point) => ({
    type: "Feature",
    properties: {
      name: point.name,
      cluster: false,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(point.longitude), parseFloat(point.latitude)],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {results.length > 0 ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{ lat: -23.7653871, lng: -46.5967968 }}
          defaultZoom={6}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                    }}
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      mapRef.current.setZoom(expansionZoom);
                      mapRef.current.panTo({ lat: latitude, lng: longitude });
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={cluster.properties.cluster_id} 
                lat={latitude}
                lng={longitude}
              >
                <button className="point-marker">
                  <img src="/favicon.png" alt="Location" />
                </button>
              </Marker>
            );
          })}
        </GoogleMapReact>
      ) : (
        <div className="d-flex justify-content-center text-center mt-5">
          <div className="spinner-border text-primary mt-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
