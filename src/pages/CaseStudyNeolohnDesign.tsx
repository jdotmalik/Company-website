import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Minimize2, LayoutGrid, Type, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ZoomableImage from '@/components/ZoomableImage';
import CaseStudyHero from '@/components/CaseStudyHero';

const CaseStudyNeolohnDesign = () => {
    const sliderImages = [
        "/neolohn-content/1.webp",
        "/neolohn-content/2.webp",
        "/neolohn-content/3.webp",
        "/neolohn-content/4.webp"
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const designSteps = [
        {
            title: "Reductive Discovery",
            description: "We mapped the daily work of managers, HR, and payroll teams, then stripped every screen to the one task it exists to serve.",
            icon: <Minimize2 className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Systematic Whitespace",
            description: "Generous negative space and a strict grid give dense payroll and roster data room to breathe and stay readable.",
            icon: <LayoutGrid className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Typographic Precision",
            description: "A refined type scale turns tables, hours, and totals into a clear hierarchy — no ornament required.",
            icon: <Type className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Considered Motion",
            description: "Subtle, physics-based transitions between modules feel inevitable rather than decorative — motion with intent.",
            icon: <Sparkles className="h-6 w-6 text-tribe-blue" />
        }
    ];

    const beforeAfter = [
        {
            src: "/neolohn-content/7.webp",
            caption: "Sign-in — a heavy staging screen becomes a quiet, focused login.",
            alt: "NEOLOHN login screen: legacy interface versus the redesign"
        },
        {
            src: "/neolohn-content/8.webp",
            caption: "Employee overview — dense legacy tables give way to a scannable status dashboard.",
            alt: "NEOLOHN employee overview: before and after"
        },
        {
            src: "/neolohn-content/9.webp",
            caption: "Time tracking — cramped time entry reworked into a clear, roster-driven view.",
            alt: "NEOLOHN time tracking and duty roster: before and after"
        },
        {
            src: "/neolohn-content/10.webp",
            caption: "Employee records — personal, address, and bank details organised into calm columns.",
            alt: "NEOLOHN employee records: before and after"
        },
        {
            src: "/neolohn-content/11.webp",
            caption: "Absence & vacation — leave, sick days, and maternity tracked without the clutter.",
            alt: "NEOLOHN vacation and absence management: before and after"
        },
        {
            src: "/neolohn-content/12.webp",
            caption: "Payroll & documents — reports and paperwork reorganised into a legible payroll table.",
            alt: "NEOLOHN payroll and documents: before and after"
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <CaseStudyHero
                tags={['UI/UX Design', 'HR & Payroll', 'Minimalist Design']}
                titleAccent="NEOLOHN:"
                title="Workforce & Payroll, Refined to the Essentials"
                tagline="A clean, Apple-inspired admin dashboard that lets managers, HR, and payroll teams handle employees, shifts, work hours, payroll, and company rules from one calm, effortless workspace."
                images={sliderImages}
                altPrefix="NEOLOHN"
            />

            {/* Design Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">The Design Philosophy</h2>
                            <p className="text-earth-600 text-lg">Less, but better — how restraint made a dense HR system feel calm.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Less, but Better</h2>
                            <p className="mb-6">
                                NEOLOHN is a UI/UX design project for a German payroll and workforce-management dashboard, designed end-to-end in Figma (design only — no development). The goal was to transform a dense, cluttered legacy system into a clean, Apple-inspired, minimalist interface where managers, HR, and payroll teams can manage employees, shifts, work hours, payroll, documents, and company rules from one calm, effortless workspace.
                            </p>
                            <p className="mb-12">
                                Every screen was designed to defer to its content — a near-monochrome palette with a single accent, generous whitespace, and a refined, SF-inspired type scale keep the focus on the data that matters. It is all built on a disciplined, component-driven design system in Figma — with strict tokens, an 8px spacing grid, reusable data tables, and adaptive light and dark modes — so the minimalism stays consistent as the product scales across every module.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Simplicity is the ultimate sophistication — even a dense payroll dashboard can feel effortless."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <ZoomableImage
                                    src="/neolohn-content/5.webp"
                                    alt="NEOLOHN employee list, filters, and duty roster"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    The employee list, filters, and duty roster — stripped to what matters.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                The result is an interface that feels obvious in hindsight — the hallmark of great minimalist design. Managers, HR staff, payroll teams, and shift planners move through the product without friction because there's simply nothing extra in the way. Every screen answers one question, clearly, and then gets out of the way.
                            </p>

                            <div className="space-y-16 pt-8">
                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">One Consistent Layout</h3>
                                    <p className="text-earth-700">
                                        NEOLOHN keeps a single, consistent structure across the whole product: a persistent left sidebar for company context, month selection, employee search, the employee list, filters, and actions — paired with a top navigation for every major module. Learn one screen and you've learned them all.
                                    </p>
                                </section>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl overflow-hidden shadow-xl border border-earth-100"
                                >
                                    <ZoomableImage
                                        src="/neolohn-content/6.webp"
                                        alt="NEOLOHN monochrome dashboard with a single accent"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                        A monochrome canvas with a single, purposeful accent — Café Milliways in view.
                                    </div>
                                </motion.div>

                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">A Disciplined Design System</h3>
                                    <p className="text-earth-700 mb-6">
                                        A component-driven system in Figma keeps NEOLOHN consistent at every scale. Strict tokens and a tight type ramp mean the minimalism holds up as the product grows across modules — nothing drifts, nothing bloats.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            "SF-inspired type scale", "Monochrome + single accent", "8px spacing grid",
                                            "Soft depth & subtle blur", "Reusable data tables", "Adaptive light & dark"
                                        ].map(item => (
                                            <div key={item} className="p-3 bg-earth-50 rounded-xl border border-earth-100 text-sm font-medium text-earth-600 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="p-8 bg-earth-900 rounded-2xl text-white">
                                    <h3 className="text-2xl font-display font-bold mb-4">Design Principles</h3>
                                    <p className="text-gray-400 mb-6">
                                        Four rules guided every decision, keeping the dashboard calm and coherent from the first frame to the last:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-300">
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Clarity over decoration</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Deference to content</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Depth through subtlety</li>
                                        <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Consistency at every scale</li>
                                    </ul>
                                </section>

                                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-earth-100">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UI Philosophy</h3>
                                        <ul className="space-y-2 text-earth-600">
                                            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Restraint as a feature</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Content-first hierarchy</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Precision in spacing &amp; type</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Calm, purposeful motion</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">Project Expertise</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["UI/UX Design", "Minimalist Design", "Dashboard Design", "Figma", "Design Systems", "Prototyping", "Data-Dense UI"].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-earth-50 text-earth-600 rounded-lg text-xs font-bold border border-earth-100">
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

            {/* Before & After */}
            <section className="py-24 bg-earth-50 border-t border-earth-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="inline-block px-3 py-1 rounded-full bg-tribe-blue/10 text-tribe-blue text-sm font-bold mb-4">
                                The Transformation
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-earth-900">
                                Before &amp; After
                            </h2>
                            <p className="text-earth-600 text-lg leading-relaxed">
                                The same workflows, reimagined. On the left, the legacy interface — dense, blue, and heavy. On the right, NEOLOHN — the same data, made calm.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {beforeAfter.map((shot, idx) => (
                                <motion.figure
                                    key={shot.src}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5 }}
                                    className="rounded-2xl overflow-hidden shadow-xl border border-earth-100 bg-white"
                                >
                                    <ZoomableImage
                                        src={shot.src}
                                        alt={shot.alt}
                                        loading="lazy"
                                        className="w-full h-auto object-cover"
                                    />
                                    <figcaption className="flex items-center gap-3 p-4 md:p-5 border-t border-earth-100">
                                        <span className="text-xs font-bold text-tribe-blue bg-tribe-blue/10 px-2.5 py-1 rounded-md tabular-nums">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-sm md:text-base font-medium text-earth-700">
                                            {shot.caption}
                                        </span>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyNeolohnDesign;
