import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Palette, Layout, Eye, Search, Map, Wallet, Compass, Users, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ZoomableImage from '@/components/ZoomableImage';
import CaseStudyHero from '@/components/CaseStudyHero';

const SLIDER_IMAGES = [
    "/splittrip/11.png",
    "/splittrip/12.png",
    "/splittrip/13.png"
];

const CaseStudySplitTripDesign = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const designSteps = [
        {
            title: "Safe Journeys",
            description: "Designing verified traveler profiles and real-time route maps for a secure road trip experience.",
            icon: <CheckCircle className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Dark-Mode Foundation",
            description: "Utilizing a high-contrast dark foundation paired with vibrant action colors for high visibility and trust.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Atomic Mobility",
            description: "Building a structured and reusable Figma component system tailored for mobility interfaces.",
            icon: <Layers className="h-6 w-6 text-tribe-blue" />
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <CaseStudyHero
                tags={['UI/UX Design', 'Travel Mobility', 'Figma']}
                titleAccent="Split-Trip:"
                title="Safe & Social Road Trips"
                tagline="A sleek, user-centered travel app interface designed to make road trips safe, social, and efficient through real-time trip listings and a modern dark-mode experience."
                images={SLIDER_IMAGES}
                altPrefix="Split-Trip"
            />

            {/* Design Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">Designing for Groups</h2>
                            <p className="text-earth-600 text-lg">How to balance individual preferences with collective planning.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Modern Mobility Experience</h2>
                            <p className="mb-6">
                                Split-Trip's design language focuses on transparency and ease of navigation. We implemented a dark-mode foundation to provide a modern, premium feel that also reduces glare during night-time navigation, paired with vibrant accent colors to highlight critical actions.
                            </p>
                            <p className="mb-12">
                                The inclusion of verified traveler profiles and detailed route maps directly addresses user concerns about safety and efficiency. Every screen is part of a scalable project built in Figma, ensuring that the interface is as functional as it is visually striking.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Travel planning should be the start of the fun, not a chore. We designed for the joy of discovery."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <ZoomableImage
                                    src="/splittrip/12.png"
                                    alt="Split-Trip User Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Clean, intuitive expense sharing and itinerary planning.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                The design language focuses on transparency and ease of use. By combining social interaction with financial tools, we created a collaborative environment that makes travel planning part of the journey itself.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <ZoomableImage
                                    src="/splittrip/13.png"
                                    alt="Split-Trip Expense Management"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Simplifying group finances with elegant, easy-to-read visualizations.
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-earth-100">
                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UX Process</h3>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Strategy", text: "Information architecture & user journey mapping for road trip logic." },
                                            { title: "Wireframing", text: "Usability-focused content placement for complex route data." },
                                            { title: "Hi-Fi UI", "text": "Pixel-perfect Figma designs with a mobile-first responsive layout." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tribe-blue/10 text-tribe-blue flex items-center justify-center font-bold text-sm">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-earth-900">{item.title}</h4>
                                                    <p className="text-sm text-earth-600">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">Usability & Accessibility</h3>
                                    <p className="text-earth-700 text-sm mb-6">
                                        Designed for high performance and accessibility in varying mobility environments.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Clear interaction feedback", "Logical navigation patterns",
                                            "Color contrast compliance", "Touch-friendly interaction spacing"
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-earth-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="mt-16 pt-16 border-t border-earth-100">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900 text-center">Project Expertise</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {["UI/UX Design", "Figma", "Travel Mobility Design", "Responsive Layouts", "Information Architecture", "Prototyping"].map(skill => (
                                        <span key={skill} className="px-5 py-2.5 bg-earth-50 text-earth-900 rounded-2xl text-[13px] font-bold border border-earth-100 shadow-sm hover:shadow-md transition-shadow">
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

export default CaseStudySplitTripDesign;
