// src/components/About.tsx

import React from 'react';

const About: React.FC = () => {
    return (
        <div className="space-y-4">
            <p>About me:</p>
            <p className="mb-4">
                I’m a software developer who loves tackling tough problems and learning new things along the way. Over the last few years, I’ve been focused on security and data projects, doing everything from scanning for vulnerabilities to automating exposure analysis. I get excited about the challenge of turning complex issues into elegant solutions.
            </p>

            <p className="mb-4">
                Right now, I work on building cloud-based services, mostly using Go and Python. I spend a lot of time designing, developing, and deploying microservices that help secure systems and data, all while collaborating with a great team. We use tools like Kubernetes and AWS to make sure everything runs smoothly and can scale when needed.
            </p>

            <p className="mb-4">
                Before this, I worked on identity verification systems and secure data sharing platforms, and even dove into machine learning for spotting interesting data trends. I’ve also had hands-on experience with cloud platforms like Google Cloud and AWS, as well as tools like Terraform to manage infrastructure. It’s been a rewarding ride, learning new tools and diving into big problems.
            </p>

            <p className="mb-4">
                I started out in support and systems administration, which gave me a solid understanding of how things work behind the scenes. From managing upgrades to handling user support, those early years taught me a lot about systems and how to keep things running smoothly.
            </p>

            <h2 className="text-lg font-semibold mb-2">Education</h2>

            <p className="mb-2">
                <b>BSc in Computer Science</b> University of London - Birkbeck College
            </p>

            <p className="mb-2">
                <b>BA in Philosophy</b> University of East Anglia
            </p>

            <h2 className="text-lg font-semibold mb-2">Technologies Used Professionally</h2>
            <p className="mb-2">
                Go  | Python  | JavaScript  | React | PostgreSQL  | Terraform | AWS | Kubernetes | Linux
            </p>

            <h2 className="text-lg font-semibold mb-2">Technologies I am interested in</h2>
            <p className="mb-2">
                Big Data | Rust | IAC | Elixir | Haskell | Nix | IoT
            </p>

            <h2 className="text-lg font-semibold mb-2">Where to find me:</h2>
            <div className="space-y-2">
                <a
                    href="https://github.com/adumbdinosaur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-green-300"
                >
                    GitHub
                </a>
                <p></p>
                <a
                    href="https://www.linkedin.com/in/william-heywood-ba727235b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-green-300"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default About;
