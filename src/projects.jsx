import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
            title: 'Bookstore Website',
            description: 'A dynamic and responsive bookstore website featuring a user-friendly interface for browsing, searching, and ordering books online.',
            explore: "https://github.com/kalpesh700/bookstore"
        },
        {
            title: 'UPI Fraud Detection',
            description: 'An AI-driven system for detecting fraudulent transactions in UPI payments, utilizing machine learning algorithms for real-time analysis.',
            explore: "https://github.com/kalpesh700/finalyearproject"
        },
        {
            title: 'Simon Game',
            description: 'An interactive twist on the classic Simon game, where players replicate sequences of colors and sounds to enhance memory and reaction skills.',
            explore: "https://github.com/kalpesh700/simon-game"
        },
    ];

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }} 
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                margin: "-100px",
                once: true
            }} 
            className="up_gap" 
            id="project"
        >
            <h2 className='heading1 down_gap'>Projects</h2>
            <div className="completely">
                <div className="grid">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            explore={card.explore}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
