import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900 blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[120px] animate-pulse-slow delay-1000"></div>
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            {/* Snow Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        initial={{
                            top: -10,
                            left: `${Math.random() * 100}%`,
                            width: Math.random() * 3 + 1 + "px",
                            height: Math.random() * 3 + 1 + "px",
                            opacity: Math.random() * 0.3 + 0.1,
                        }}
                        animate={{
                            top: "90%",
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10, // 10-25s duration (slow)
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 15, // Random start delay
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Background;
