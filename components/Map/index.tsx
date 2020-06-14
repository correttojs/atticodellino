import GoogleMapReact from "google-map-react";
import { Home, Indicator } from "grommet-icons";
import { Box, Text } from "grommet";
import { useGlobal } from "../withGrommetTheme";
import { useInView } from "react-intersection-observer";

export const Map: React.FC<{ title: string }> = ({ title }) => {
  const { apartment } = useGlobal();
  const [ref, inView] = useInView();
  const { lat, lng } =
    apartment === "GARDA"
      ? {
          lat: parseFloat(process.env.NEXT_PUBLIC_MAP_GARDA_LAT),
          lng: parseFloat(process.env.NEXT_PUBLIC_MAP_GARDA_LON),
        }
      : {
          lat: parseFloat(process.env.NEXT_PUBLIC_MAP_VR_LAT),
          lng: parseFloat(process.env.NEXT_PUBLIC_MAP_VR_LON),
        };
  return (
    // Important! Always set the container height explicitly
    <div ref={ref} style={{ height: "100vh", width: "100%" }}>
      {inView && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_KEY }}
          defaultCenter={[lat, lng]}
          defaultZoom={16}
        >
          <Box {...{ lat, lng }} direction="row">
            <Indicator color="brand" /> <Text>{title}</Text>
          </Box>
        </GoogleMapReact>
      )}
    </div>
  );
};
