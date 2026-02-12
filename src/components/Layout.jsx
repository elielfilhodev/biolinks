import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <>
            <Background />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="app-container"
            >
                {children}
            </motion.main>
        </>
    );
};

export default Layout;
