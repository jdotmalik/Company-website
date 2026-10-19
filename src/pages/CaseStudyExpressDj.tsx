import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Gauge, ShieldCheck, Code2, Database, Accessibility, ShieldAlert, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionKicker from '@/components/SectionKicker';
import CaseStudyHero from '@/components/CaseStudyHero';
import ReadingProgress from '@/components/ReadingProgress';
import Reveal, { revealContainer, revealItem } from '@/components/Reveal';

// Placeholder cover until the project's own images are supplied.
const SLIDER_IMAGES = ["/express-dj-hero/1.png"];

const AUDIT_GOALS = [
    { icon: Gauge, title: "Performance & Load", desc: "Measure real page speed and how the platform behaves under concurrent booking traffic." },
    { icon: ShieldCheck, title: "Security Posture", desc: "Review authentication, authorization, transport security, and exposed attack surface." },
    { icon: Code2, title: "Code & Architecture", desc: "Assess Laravel structure, PSR-12 conformance, and dependency health." },
    { icon: Database, title: "Database Health", desc: "Inspect schema design, indexing, and referential integrity." },
    { icon: Accessibility, title: "Accessibility", desc: "Check the booking journey against WCAG with automated and manual testing." },
];

const AUDIT_COVERAGE = [
    "Performance testing with Lighthouse, PageSpeed Insights & GTmetrix",
    "Load testing of key booking flows with Apache JMeter",
    "Security review of auth, headers, transport, and rate limiting",
    "Laravel code audit against PSR-12 and framework best practices",
    "Accessibility testing with WAVE and Axe",
    "Reproducible bug log across the full user journey",
];

const METRICS = [
    { value: "32/100", label: "Lighthouse Performance" },
    { value: "8.5s", label: "Speed Index" },
    { value: "21", label: "Reproducible Bugs" },
    { value: "69", label: "Pending Dependency Updates" },
];

const KEY_FINDINGS = [
    { tone: "good", title: "Strong Authentication", desc: "Laravel Sanctum with bcrypt hashing — authorization scored A+ on our scorecard." },
    { tone: "risk", title: "Slow Front-End Delivery", desc: "GTmetrix showed a 2.3s load with a 1.2MB page and 45 requests; Lighthouse scored 32/100." },
    { tone: "risk", title: "Security Hardening Gaps", desc: "Missing enforced HTTPS, a Content Security Policy, and rate limiting on sensitive endpoints." },
    { tone: "risk", title: "Database Integrity", desc: "Missing indexes and foreign keys put query speed and data consistency at risk as bookings grow." },
    { tone: "risk", title: "No End-to-End Testing", desc: "E2E coverage scored F — regressions in the booking flow could ship unnoticed." },
];

const DELIVERABLES = [
    { title: "Audit Scorecard", desc: "Graded results from A+ to F across every audited area." },
    { title: "Bug Register", desc: "21 reproducible issues with steps, severity, and evidence." },
    { title: "Prioritised Roadmap", desc: "Quick wins first, then structural fixes, ordered by impact and effort." },
    { title: "Modernisation Paths", desc: "Two options: a Next.js front end on the existing Laravel API, or a full MERN rebuild." },
];

const CaseStudyExpressDj = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Audit', 'Laravel', 'Performance & Security']}
                titleAccent="Express:"
                title="Full-Stack Audit of a DJ & Talent Booking Platform"
                tagline="A performance, security, and code audit that gave a Laravel booking platform a graded scorecard and a clear roadmap forward."
                images={SLIDER_IMAGES}
                altPrefix="Express DJ audit"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                    <p className="text-earth-700 mb-4">
                                        Express is a Laravel-based platform for discovering and booking DJs and live talent. As the platform grew, the client needed an honest, independent view of how it performed, how secure it was, and whether the codebase could support what came next.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        We ran a full-stack audit — performance, load, security, code, database, and accessibility — and turned the results into a graded scorecard, a bug register, and a prioritised roadmap.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Audit Goals</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {AUDIT_GOALS.map(({ icon: Icon, title, desc }) => (
                                    <motion.div
                                        key={title}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex gap-4 bg-earth-50 p-5 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                                    >
                                        <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                            <Icon className="h-5 w-5 text-tribe-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-earth-900">{title}</h4>
                                            <p className="text-earth-600 text-sm mb-0">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Audit Coverage</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {AUDIT_COVERAGE.map((item) => (
                                    <motion.div
                                        key={item}
                                        variants={revealItem}
                                        className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-md"
                                    >
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Findings</h2>
                                <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {METRICS.map(({ value, label }) => (
                                        <div key={label} className="bg-blue-900 text-white rounded-xl p-5 text-center shadow-lg">
                                            <div className="text-3xl font-display font-bold text-tribe-blue mb-1">{value}</div>
                                            <div className="text-xs text-blue-100 leading-snug">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="space-y-4 mb-12"
                            >
                                {KEY_FINDINGS.map(({ tone, title, desc }) => (
                                    <motion.div
                                        key={title}
                                        variants={revealItem}
                                        className={`flex gap-4 p-5 rounded-xl border-l-4 ${tone === 'good' ? 'bg-emerald-50 border-emerald-400' : 'bg-amber-50 border-amber-400'}`}
                                    >
                                        {tone === 'good'
                                            ? <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                                            : <ShieldAlert className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />}
                                        <div>
                                            <h4 className="font-bold text-earth-900">{title}</h4>
                                            <p className="text-earth-700 text-sm mb-0">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Solution</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    We translated every finding into action. The client received a graded scorecard and a reproducible bug register, a roadmap that sequences quick performance and security wins ahead of deeper structural work, and two clear modernisation paths to choose from.
                                </p>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-6 mb-12"
                            >
                                {DELIVERABLES.map(({ title, desc }) => (
                                    <motion.div
                                        key={title}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors hover:shadow-lg"
                                    >
                                        <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                            <Map className="h-6 w-6 text-tribe-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-earth-900">{title}</h4>
                                            <p className="text-earth-600 text-sm mb-0">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <Reveal>
                                <div className="bg-blue-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Tech Stack & Toolchain</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Platform Audited</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>Laravel (PHP)</li>
                                                <li>Laravel Sanctum & bcrypt</li>
                                                <li>Eloquent ORM</li>
                                                <li>MySQL</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Audit Toolchain</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>Lighthouse, PageSpeed Insights & GTmetrix</li>
                                                <li>Apache JMeter</li>
                                                <li>WAVE & Axe</li>
                                                <li>Composer dependency audit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Audit Outcome</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    Express went from an unclear picture to a measurable baseline: what was strong, what was at risk, and exactly what to fix first. The scorecard and roadmap gave the team a shared plan to speed up the booking experience, close security gaps, and modernise with confidence.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Want to Know Where Your Platform Stands?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                We audit performance, security, and code, then give you a scorecard and a roadmap you can act on straight away.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Request an Audit
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                        View More Case Studies
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyExpressDj;
