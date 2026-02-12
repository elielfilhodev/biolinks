import React from 'react';
import Layout from './components/Layout';
import ProfileHeader from './components/ProfileHeader';
import SocialLinks from './components/SocialLinks';
import TechStack from './components/TechStack';
import GamerProfile from './components/GamerProfile';
import SetupSpecs from './components/SetupSpecs';
import ProjectCard from './components/ProjectCard';
import { projects } from './data';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function App() {
    return (
        <Layout>
            <ProfileHeader />

            <div className="w-full h-px bg-white/5 my-2"></div>

            <SocialLinks />

            <div className="w-full flex flex-col gap-8 mt-6">
                {/* Projects Section */}
                <div className="w-full">
                    <h2 className="text-xl font-bold mb-4 px-2 flex items-center gap-2">
                        <Briefcase className="text-blue-500" size={20} /> Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

                <TechStack />

                <GamerProfile />

                <SetupSpecs />
            </div>

            <footer className="mt-12 mb-6 text-center text-xs text-text-muted">
                <p>© {new Date().getFullYear()} Eliel Filho. Built with React & Astro.</p>
            </footer>
        </Layout>
    );
}

export default App;
