import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        //Will to position [0,0] of window
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}