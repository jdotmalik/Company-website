import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/CaseStudyHero';
import ZoomableImage from '@/components/ZoomableImage';

const SLIDER_IMAGES = [
    "/talkitotz design/7.png",
    "/talkitotz design/8.png",
    "/talkitotz design/9.png",
    "/talkitotz design/10.png"
];

const CaseStudyTalkieTotzDesign = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const designSteps = [
        {
            title: "Emotional Warmth",
            description: "Designing an interface that focuses on emotional connection and intuitive interaction for young learners.",
            icon: <Sparkles className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Growth Identity",
            description: "Implementing a soft green visual identity that symbolizes growth, mirroring the child's learning journey.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Structured Design",
            description: "Using a scalable Figma design system to ensure consistency across all learning modules and interactions.",
            icon: <Layout className="h-6 w-6 text-tribe-blue" />
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <CaseStudyHero
                tags={['UI/UX Design', 'Early Learning', 'Figma']}
                titleAccent="TalkieTotz:"
                title="Enhancing Early Language Learning"
                tagline="A modern, child-friendly mobile app interface designed to enhance early language learning through a soft green visual identity that symbolizes growth and development."
                images={SLIDER_IMAGES}
                altPrefix="TalkieTotz"
            />

            {/* Design Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">Designing for Play</h2>
                            <p className="text-earth-600 text-lg">Creating an educational platform that feels like an adventure.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {designSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-earth-50 rounded-2xl border border-earth-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-earth-600 text-sm leading-relaxed">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="prose prose-lg max-w-none text-earth-700">
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Psychology of Growth</h2>
                            <p className="mb-6">
                                TalkieTotz required a design strategy that prioritizes emotional warmth and clarity. We chose a soft green visual identity to symbolize growth and development, creating an environment where children feel encouraged and safe to explore language.
                            </p>
                            <p className="mb-12">
                                Every layout is built with intuitive interaction in mind, ensuring that both children and parents can navigate the platform with ease. Progress-driven feedback is integrated throughout the journey, celebrating every small win in the learning process.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"We didn't just design an app; we designed a bridge for families to learn together."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <ZoomableImage
                                    src="/talkitotz design/9.png"
                                    alt="TalkieTotz Playful Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Vibrant, high-contrast layouts designed for maximum engagement for young learners.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                We chose a color palette that is stimulating but not overwhelming, ensuring that the primary educational content always remains the center of attention. Every button, icon, and illustration was crafted to be friendly and approachable.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <ZoomableImage
                                    src="/talkitotz design/10.png"
                                    alt="TalkieTotz Progress Dashboard"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Intelligent progress tracking for parents, made simple and visual.
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-earth-100">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UI Philosophy</h3>
                                    <p className="text-earth-700 text-sm mb-6 leading-relaxed">
                                        The visual direction focused on conversion-oriented layout structures and frictionless user navigation, ensuring every interface decision was aligned with usability and accessibility.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Human-centered design methodology"
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Performance-oriented layouts"
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Minimalism with purpose"
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-earth-50 rounded-2xl border border-earth-100 shadow-inner">
                                    <h3 className="text-xl font-display font-bold mb-4 text-earth-900">Agency-Ready Handoff</h3>
                                    <p className="text-earth-600 text-sm mb-4">
                                        Reducing development friction through organized developer documentation and named components.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Auto-layout enabled", "Design tokens", "Figma Inspect ready", "Responsive breakdown"
                                        ].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-earth-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-earth-400">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-16 border-t border-earth-100">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900 text-center">Project Expertise</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["UI/UX Design", "Figma", "Early Learning UX", "Prototyping", "Design Systems", "Mobile App Design", "Information Architecture"].map(skill => (
                                        <span key={skill} className="px-4 py-2 bg-tribe-blue/5 text-tribe-blue border border-tribe-blue/10 rounded-xl text-xs font-bold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyTalkieTotzDesign;
