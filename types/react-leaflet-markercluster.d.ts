declare module "@changey/react-leaflet-markercluster" {
  import { FC, ReactNode } from "react";

  interface MarkerClusterGroupProps {
    children?: ReactNode;
    chunkedLoading?: boolean;
    maxClusterRadius?: number;
    spiderfyOnMaxZoom?: boolean;
    showCoverageOnHover?: boolean;
    zoomToBoundsOnClick?: boolean;
    disableClusteringAtZoom?: number;
    animate?: boolean;
    [key: string]: unknown;
  }

  const MarkerClusterGroup: FC<MarkerClusterGroupProps>;
  export default MarkerClusterGroup;
}
