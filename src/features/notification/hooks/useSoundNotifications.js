import { useEffect, useRef } from "react";
import { useSoundSettings } from "../../sound/hooks/useSoundSettings";
import { notifications } from "../notifications";

export function useSoundNotifications() {
    const { soundOn } = useSoundSettings();

    const previous = useRef(soundOn);

    useEffect(() => {
        if (previous.current === soundOn) return;

        if (soundOn) {
            notifications.soundOn();
        } else {
            notifications.soundOff();
        }

        previous.current = soundOn;
    }, [soundOn]);
}