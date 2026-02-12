import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data';

const SocialLinks = () => {
    return (
        <div className="grid grid-cols-2 gap-3 w-full">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel flex items-center gap-3 p-4 group hover:bg-white/5 transition-colors no-underline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                    style={{
                        '--hover-color': link.color
                    }}
                >
                    <div
                        className="p-2 rounded-lg bg-white/5 text-white transition-colors duration-300 group-hover:text-[var(--hover-color)] group-hover:bg-[var(--hover-color)]/10"
                    >
                        <link.icon size={20} />
                    </div>
                    <span className="font-medium text-sm text-text-primary group-hover:text-white transition-colors">
                        {link.platform}
                    </span>
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;
