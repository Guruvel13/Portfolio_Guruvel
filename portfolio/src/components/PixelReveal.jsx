import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const PixelReveal = () => {
    const [pixels, setPixels] = useState([]);

    useEffect(() => {
        // Create a 20x10 grid (200 pixels) for better coverage
        const blocks = Array.from({ length: 200 }, (_, i) => i);
        // Shuffle them for a random "digital noise" reveal
        setPixels(shuffle(blocks));
    }, []);

    // Animation variants
    const anim = {
        initial: {
            opacity: 1
        },
        open: (i) => ({
            opacity: 0,
            transition: {
                duration: 0,
                delay: 0.05 * i  // This might be too slow for 200 items. 
                // Let's rely on CSS grid staggered fade or just standard random delay.
            }
        })
    }

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-wrap">
            {pixels.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: Math.random() * 1.5, // Random delay between 0s and 1.5s
                        ease: [0.33, 1, 0.68, 1]
                    }}
                    className="w-[5vw] h-[10vh] bg-background border-[0.5px] border-background" // 20 cols = 5vw, 10 rows=10vh
                />
            ))}
        </div>
    );
};

export default PixelReveal;
