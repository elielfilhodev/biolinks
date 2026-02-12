import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data';
import { ExternalLink } from 'lucide-react';

const SocialLinks = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-8">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel flex items-center justify-between p-4 group hover:bg-white/5 no-underline"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white relative overflow-hidden bg-white/5 p-2"
                            style={{ backgroundColor: `${link.color}20` }}
                        >
                            {typeof link.icon === 'string' ? (
                                <img
                                    src={link.icon}
                                    alt={link.platform}
                                    className="w-full h-full object-contain"
                                    style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.2))" }}
                                />
                            ) : (
                                <link.icon size={20} style={{ color: link.color }} />
                            )}
                        </div>
                        <span className="font-medium text-white">{link.platform}</span>
                    </div>

                    <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;
