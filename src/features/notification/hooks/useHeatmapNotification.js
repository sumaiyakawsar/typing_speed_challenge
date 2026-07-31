import { useEffect, useRef } from "react";
import { notifications } from "../notifications";

export const useHeatmapNotification = (showHeatmap) => {

    const previousValue = useRef(showHeatmap);


    useEffect(() => {

        // Ignore initial render
        if (previousValue.current === showHeatmap) {
            return;
        }


        notifications.heatmapToggled(showHeatmap);

        previousValue.current = showHeatmap;

    }, [showHeatmap]);

};