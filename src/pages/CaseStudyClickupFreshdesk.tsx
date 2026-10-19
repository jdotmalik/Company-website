import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Network, KeyRound, RefreshCw, Code2, Activity, ShieldAlert, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionShot from '@/components/SectionShot';
import SectionKicker from '@/components/SectionKicker';
import CaseStudyHero from '@/components/CaseStudyHero';
import ReadingProgress from '@/components/ReadingProgress';
import Reveal, { revealContainer, revealItem } from '@/components/Reveal';

const SLIDER_IMAGES = [
    "/clickup-freshdesk-hero/1.png",
    "/clickup-freshdesk-hero/2.png",
    "/clickup-freshdesk-hero/3.png",
    "/clickup-freshdesk-hero/4.png"
];

const AUDIT_GOALS = [
    { icon: Network, title: "Architecture Soundness", desc: "Confirm the webhook → serverless → API design is the right shape for production." },
    { icon: KeyRound, title: "Security & Secrets", desc: "Assess how API tokens and webhook secrets are stored, scoped, and rotated." },
    { icon: RefreshCw, title: "Reliability", desc: "Review retries, idempotency, and behaviour when either platform is unavailable." },
    { icon: Code2, title: "Code Quality", desc: "Evaluate structure, readability, error handling, and long-term maintainability." },
    { icon: Activity, title: "Operability", desc: "Check logging, monitoring, and how easily the team can run and recover it." },
];

const AUDIT_COVERAGE = [
    "Architecture review of the full event-driven pipeline",
    "Security assessment of secrets, tokens, and access scope",
    "Codebase audit of the Vercel serverless function",
    "Data flow & field mapping between ClickUp and Freshdesk",
    "Failure-mode analysis — timeouts, rate limits, and duplicates",
    "Deployment and environment configuration review",
];

const KEY_FINDINGS = [
    { tone: "good", title: "Sound Serverless Design", desc: "The webhook → Vercel → Freshdesk API v2 pipeline is lean, cost-efficient, and well suited to the workload." },
    { tone: "risk", title: "Secret-Management Risk", desc: "No defined process for rotating or revoking API tokens — a single leaked key had no clear recovery path." },
    { tone: "risk", title: "Resilience Gaps", desc: "Limited retry and idempotency handling meant failed or repeated events could drop or duplicate tickets." },
    { tone: "risk", title: "Limited Observability", desc: "Sparse structured logging made it hard to trace a single event end to end or spot silent failures." },
    { tone: "good", title: "Maintainable Codebase", desc: "A small, readable function that is straightforward to harden without a rewrite." },
];

const DELIVERABLES = [
    { title: "Architecture Report", desc: "A walkthrough of the pipeline, data flow, and design trade-offs." },
    { title: "Security Report", desc: "Findings on secrets, token scope, and access, ranked by severity." },
    { title: "Codebase Report", desc: "Code-quality review with prioritised refactoring and hardening steps." },
    { title: "Operational Runbooks", desc: "Step-by-step procedures for secret rotation, revocation, and incident recovery." },
];

const CaseStudyClickupFreshdesk = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Audit', 'Serverless', 'Integration']}
                titleAccent="ClickUp → Freshdesk:"
                title="Serverless Integration & Architecture Audit"
                tagline="An independent audit of a ClickUp-to-Freshdesk sync — architecture, security, and code — plus the runbooks to operate it safely."
                images={SLIDER_IMAGES}
                altPrefix="ClickUp to Freshdesk audit"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                    <p className="text-earth-700 mb-4">
                                        ClickUp → Freshdesk is a serverless integration that keeps the two tools in sync, forwarding events from a ClickUp webhook through a Vercel function into the Freshdesk API v2.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        We were engaged to audit the integration rather than build it — tracing the full event flow, scrutinising how secrets were handled, and reviewing error handling to confirm it was safe and reliable for production.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/clickup-freshdesk-content/project-overview.webp" alt="ClickUp to Freshdesk project description" caption="Project description — the ClickUp → Vercel → Freshdesk pipeline under review." />

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

                            <SectionShot variant="right" src="/clickup-freshdesk-content/audit-goals.webp" alt="ClickUp to Freshdesk audit goals" caption="Audit goals — architecture, security, reliability, code quality, and operability." />

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

                            <SectionShot variant="left" src="/clickup-freshdesk-content/audit-coverage.webp" alt="ClickUp to Freshdesk audit coverage" caption="Audit coverage — every layer from webhook to Freshdesk ticket." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Findings</h2>
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

                            <SectionShot variant="wide" src="/clickup-freshdesk-content/key-findings.webp" alt="ClickUp to Freshdesk key findings" caption="Key findings — a sound design with clear gaps in secrets, resilience, and observability." />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Solution</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    Beyond reporting what we found, we gave the client a clear path to act on it. Every finding came with a prioritised hardening recommendation, and the engagement's real differentiator was a set of operational runbooks — a repeatable process for rotating and revoking secrets and recovering the integration safely when something goes wrong.
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
                                            <BookOpen className="h-6 w-6 text-tribe-blue" />
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
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Tech Stack Audited</h3>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Source</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>ClickUp Webhooks</li>
                                                <li>ClickUp API</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Integration Layer</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>Vercel Serverless Functions</li>
                                                <li>Node.js</li>
                                                <li>Environment-based secrets</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Destination</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>Freshdesk API v2</li>
                                                <li>Ticket create / update</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/clickup-freshdesk-content/solution-tech-stack.webp" alt="ClickUp to Freshdesk solution and tech stack" caption="The solution and the serverless stack behind the integration." />
                                <SectionShot variant="pair" className="md:mt-14" src="/clickup-freshdesk-content/ui.webp" alt="ClickUp to Freshdesk interface" caption="How the synced work surfaces across ClickUp and Freshdesk." />
                            </div>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Audit Outcome</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The client came away with confidence that the integration's design was right, a clear, prioritised list of what to harden before scaling, and runbooks that turn secret rotation and incident recovery from guesswork into a repeatable routine.
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
                                Need an Independent Audit?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From integrations to full platforms, we review architecture, security, and code — and hand you a clear plan to act on.
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

export default CaseStudyClickupFreshdesk;
