import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Palette, Eye, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/CaseStudyHero';

const SLIDER_IMAGES = [
    "/harmoniq design/14.png",
    "/harmoniq design/15.png",
    "/harmoniq design/16.png",
];

const CaseStudyHarmoniqDesign = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const designSteps = [
        {
            title: "Bold Dark Theme",
            description: "Implementing a deep, immersive dark theme with vibrant accents to enhance visual focus and flow.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Real-Time Discovery",
            description: "Designing features for real-time playback and interactive social discovery within the streaming experience.",
            icon: <Eye className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Mobile-First Kit",
            description: "Utilizing a scalable, mobile-first component system in Figma for maximum flexibility and performance.",
            icon: <Layers className="h-6 w-6 text-tribe-blue" />
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <CaseStudyHero
                tags={['UI/UX Design', 'Music Streaming', 'Social Discovery']}
                titleAccent="Harmoniq:"
                title="Elevated Social Music Streaming"
                tagline="A sleek, immersive music app interface that blends streaming with social engagement, featuring a bold dark theme and vibrant accents."
                images={SLIDER_IMAGES}
                altPrefix="Harmoniq"
            />

            {/* Design Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">The Harmoniq Philosophy</h2>
                            <p className="text-earth-600 text-lg">Creating a digital space where music becomes a visual conversation.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Syncing Sound and Sight</h2>
                            <p className="mb-6">
                                Harmoniq's design challenge was unique: how to visualize social music interactions without distracting from the audio content. We focused on dark-mode aesthetics to make album art and visualization components pop, using a glassmorphic UI to provide depth and clarity.
                            </p>
                            <p className="mb-12">
                                We designed a novel "Music Feed" that prioritizes current listening activity and discovery. By integrating real-time audio analysis into the UI, we created a living, breathing application that resonates with the user's personal soundtrack.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Design should be felt as much as it's seen especially when music is involved."</h3>
                            </div>

                            <div className="space-y-16 pt-8">
                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">Scalable Design System</h3>
                                    <p className="text-earth-700 mb-6">
                                        A component-driven design system was built inside Figma to ensure consistency and long-term maintainability for Harmoniq. This human-centered design methodology allowed for rapid iteration while keeping the brand's bold aesthetic cohesive.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            "Typography hierarchy", "Color tokens", "8px spacing grid",
                                            "Reusable UI components", "Variants & states", "Iconography system"
                                        ].map(item => (
                                            <div key={item} className="p-3 bg-earth-50 rounded-xl border border-earth-100 text-sm font-medium text-earth-600 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="p-8 bg-earth-900 rounded-2xl text-white">
                                    <h3 className="text-2xl font-display font-bold mb-4">Technical Collaboration</h3>
                                    <p className="text-gray-400 mb-6">
                                        The final design files were delivered development-ready, reducing friction and improving build accuracy:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-300">
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Organized Figma file structure</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Named components & variants</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Responsive frame breakdown</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Design tokens implementation</li>
                                    </ul>
                                </section>

                                <div className="text-center pt-8 border-t border-earth-100">
                                    <p className="text-earth-500 font-display font-bold text-lg mb-12">
                                        Redesigned interface improved <span className="text-tribe-blue">usability, visual consistency, and user flow clarity</span>.
                                    </p>

                                    <div className="max-w-2xl mx-auto">
                                        <h3 className="text-xl font-display font-bold mb-6 text-earth-900">Project Expertise</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {["UI/UX Design", "Figma", "High-Fidelity UI", "Prototyping", "Design Systems", "Interaction Design", "Mobile App Design"].map(skill => (
                                                <span key={skill} className="px-4 py-2 bg-earth-50 text-earth-600 rounded-xl text-xs font-bold border border-earth-100 shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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

export default CaseStudyHarmoniqDesign;
