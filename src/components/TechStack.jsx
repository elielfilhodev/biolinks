import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data';

const TechStack = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold mb-4 px-2">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="glass-panel flex flex-col items-center justify-center p-4 gap-2 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-1">
                            {typeof tech.icon === 'string' ? (
                                <motion.img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                    animate={tech.name === 'React' ? { rotate: 360 } : {}}
                                    transition={tech.name === 'React' ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
                                />
                            ) : (
                                <span className="text-xs">No Icon</span>
                            )}
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs text-text-muted">{tech.level}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
