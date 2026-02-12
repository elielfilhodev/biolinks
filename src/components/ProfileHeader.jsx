import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';
import { MapPin } from 'lucide-react';

const ProfileHeader = () => {
    const nameLetters = profileData.name.split('');

    // Glitch animation variants
    const glitchVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
            }
        }),
        glitch: {
            textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "-2px 0px 0px rgba(255,0,0,0.7), 2px 0px 0px rgba(0,0,255,0.7)",
                "0px 0px 0px rgba(0,0,0,0)",
                "2px 0px 0px rgba(255,0,0,0.7), -2px 0px 0px rgba(0,0,255,0.7)",
                "0px 0px 0px rgba(0,0,0,0)"
            ],
            x: [0, -2, 2, -1, 0],
            y: [0, 1, -1, 0],
            skewX: [0, 10, -10, 0],
            opacity: [1, 0.8, 1, 0.9, 1],
            transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: Math.random() * 3 + 2, // Random delay between glitches
                ease: "linear"
            }
        }
    };

    return (
        <div className="flex flex-col items-center text-center gap-4 relative z-10 w-full mb-4">

            {/* Banner Section */}
            <div className="absolute top-[-4rem] left-1/2 -translate-x-1/2 w-[120%] h-64 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                    alt="Banner"
                    className="w-full h-full object-cover opacity-40 mask-image-gradient"
                    style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }}
                />
            </div>

            <motion.div
                className="relative group mt-16"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-500 to-gray-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="p-1 w-32 h-32 rounded-full border-2 border-white/10 relative z-10 object-cover shadow-2xl bg-[#0a0a0a]"
                />
                <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-[#0a0a0a] z-20" title="Online / Open to work"></div>
            </motion.div>

            <div className="space-y-2 p-3 relative z-10">
                <h1 className="text-3xl font-bold text-white relative z-10 flex justify-center overflow-hidden m-4">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            variants={glitchVariants}
                            initial="hidden"
                            animate={["visible", "glitch"]}
                            className="inline-block relative"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </h1>

                <motion.div
                    className="flex items-center justify-center gap-2 text-text-secondary text-sm"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                        {profileData.role}
                    </span>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-2 text-text-muted text-xs uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <MapPin size={12} />
                    {profileData.location}
                </motion.div>
            </div>
        </div>
    );
};

export default ProfileHeader;
