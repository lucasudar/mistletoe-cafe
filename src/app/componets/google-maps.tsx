"use client"

import {useEffect, useRef} from "react";
import {Loader} from "@googlemaps/js-api-loader";

function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      });
      const {Map} = await loader.importLibrary("maps");
      const {Marker} = await loader.importLibrary("marker") as google.maps.MarkerLibrary;
      if (!mapRef.current) {
        return;
      }
      const position = {
        lat: 12.957638058430854,
        lng: 100.89173524589309
      }
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "e7e7e7e7e7e7e7e7",
        disableDefaultUI: true,
        zoomControl: true,
      }
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new google.maps.marker.AdvancedMarkerElement({
        title: "Mistletoe Flour & Thyme",
        position,
        map,
      })
    }
    initMap();
  }, []);

  return <div className="w-full h-full" ref={mapRef}/>;
}

export default GoogleMap;
