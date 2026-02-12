import React from 'react';
import { motion } from 'framer-motion';
import { gamerStats } from '../data';
import { Gamepad2, Trophy, Crosshair } from 'lucide-react';

const GamerProfile = () => {
    return (
        <motion.div
            className="glass-panel w-full relative overflow-hidden min-h-[360px] flex flex-col justify-end group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Background Image - COD MW3 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/cod.jpg"
                    alt="COD MW3"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
            </div>

            <div className="absolute top-3 right-3 z-20 text-yellow-500 animate-pulse-slow drop-shadow-lg">
                <Trophy size={24} fill="currentColor" />
            </div>

            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10 w-full text-white drop-shadow-md">
                <Gamepad2 className="text-green-500" /> Gamer Profile
            </h2>

            <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 hover:bg-black/60 transition-colors">


                </div>

                <div>
                    <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                        <Trophy size={14} /> Top Games Played
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {gamerStats.topGames.map((game, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors cursor-default border border-white/5"
                            >
                                {game}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GamerProfile;
