/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

export function useInactivityTimer(timeout: number, resetCallback: () => void) {
    const [_timeLeft, setTimeLeft] = useState(timeout);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const events = useRef(["click", "touchstart", "drag"]);

    const resetInactivityTimer = useCallback(() => {
        setTimeLeft(timeout);
    }, [timeout]);

    const countDown = useCallback(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                clearInterval(intervalRef.current!);
                resetCallback();
                return 0;
            }
            return prev - 1;
        });
    }, [resetCallback]);

    useEffect(() => {
        intervalRef.current = setInterval(countDown, 1000);

        const handleUserActivity = () => resetInactivityTimer();

        events.current.forEach((event) => window.addEventListener(event, handleUserActivity));

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            events.current.forEach((event) => window.removeEventListener(event, handleUserActivity));
        };
    }, [countDown, resetInactivityTimer]);
}
