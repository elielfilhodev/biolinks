import React from 'react';
import { motion } from 'framer-motion';
import { setupSpecs } from '../data';
import { Cpu, Monitor, Zap } from 'lucide-react';

const SetupSpecs = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold mb-4 px-2 flex items-center gap-2">
                <Zap className="text-yellow-500" size={20} /> Setup Specs
            </h2>
            <motion.div
                className="glass-panel overflow-hidden p-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="divide-y divide-white/5">
                    {setupSpecs.map((spec, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                        >
                            <span className="text-sm text-text-muted flex items-center gap-2">
                                {spec.category === 'CPU' || spec.category === 'GPU' ? <Cpu size={14} /> :
                                    spec.category === 'Monitor' ? <Monitor size={14} /> :
                                        <div className="w-3.5 h-3.5 rounded-full bg-white/10" />}
                                {spec.category}
                            </span>
                            <span className="text-sm font-medium text-right">{spec.item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SetupSpecs;
