import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel block group no-underline relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >


            <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                {project.title}
            </h3>

            <p className="text-sm text-text-secondary mb-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-text-muted border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};

export default ProjectCard;
