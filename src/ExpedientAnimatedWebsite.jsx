import { Fade } from 'framer-motion';
import { Navigation, Header, HeroSection, ServicesSection, SectorsSection, ThinkTankSection, WorkWithUsSection, AssociatesSection, ContactForm } from './components';

const services = [
    'Advisory',
    'Resource Solutions',
    'Training',
];

const sectors = [
    'Finance',
    'Health',
    'Technology',
    'Education',
];

const workWithUsLevels = [
    'Level 1',
    'Level 2',
    'Level 3',
];

const threePs = {
    play: 'Play Description',
    process: 'Process Description',
    performance: 'Performance Description',
};

const ExpedientAnimatedWebsite = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Header />
            <Navigation />
            <HeroSection />
            <Fade>
                <div className="p-4">
                    <ServicesSection services={services} />
                    <SectorsSection sectors={sectors} />
                    <ThinkTankSection />
                    <WorkWithUsSection levels={workWithUsLevels} />
                    <AssociatesSection />
                    <ContactForm />
                </div>
            </Fade>
        </div>
    );
};

export default ExpedientAnimatedWebsite;