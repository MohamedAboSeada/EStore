import React, { useEffect, useState } from 'react';

function useInnerWidth() {
    const getInnerWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0);

    let [innerWidth, setInnerWidth] = useState(getInnerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(getInnerWidth());
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return innerWidth;
}

export default useInnerWidth;
