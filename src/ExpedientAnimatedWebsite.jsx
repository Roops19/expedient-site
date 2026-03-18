import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp, SectionHeading, Services, Sectors, Framework, ThinkTank, WorkWithUs, Associates, Contact } from 'lucide-react';

const fadeUp = [ ... ]; // Your fadeUp data
const services = [
    { type: 'advisory', content: 'Content for advisory' },
    { type: 'resource', content: 'Content for resource' },
    { type: 'training', content: 'Content for training' },
];
const sectors = [/* Your sectors data */];
const workWithUsLevels = [/* Your workWithUsLevels data */];
const thinkTankContent = [/* Your thinkTankContent data */];
const threePs = [/* Your threePs data */];
const metrics = [/* Your metrics data */];
const frameworkNodePositions = [/* Your frameworkNodePositions data */];

const ExpedientAnimatedWebsite = () => {
    return (
        <div>
            <nav>
                {/* Header Navigation */}
            </nav>
            <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                {/* Hero Section */}
            </motion.header>
            <SectionHeading title="About" />
            <motion.section>
                {/* About Section */}
            </motion.section>
            <Services data={services} />
            <Sectors data={sectors} />
            <Framework data={frameworkNodePositions} />
            <ThinkTank data={thinkTankContent} />
            <WorkWithUs data={workWithUsLevels} />
            <Associates />
            <Contact />
        </div>
    );
};

export default ExpedientAnimatedWebsite;
