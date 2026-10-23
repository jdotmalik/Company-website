import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Activity, TrendingUp, Bell, Database, PhoneCall, Users, UserCheck, LineChart } from 'lucide-react';
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
    "/ringba-hero/1.png",
    "/ringba-hero/2.png",
    "/ringba-hero/3.png",
    "/ringba-hero/4.png"
];

const PLATFORM_MODULES = [
    {
        icon: PhoneCall,
        title: "Call Quality & Routing Insights",
        image: "/ringba-content/call-quality-routing.webp",
        caption: "QA Command Center and Relay Pings breakdown for call quality and routing.",
        features: [
            { title: "QA Command Center", desc: "Monitor publisher quality, connectivity issues, and compliance flags in one workspace." },
            { title: "Phone Calls Explorer", desc: "Filter calls by partner, campaign, or outcome; inspect details and available recordings." },
            { title: "Rejection Breakdown", desc: "Investigate buyer responses, rejection reasons, and routing event timelines." },
            { title: "Recorded Review Decisions", desc: "Review compliance flags, mark false detections, and retain decision history." },
        ],
    },
    {
        icon: Users,
        title: "Client Onboarding & Offer Management",
        image: "/ringba-content/client-onboarding-offers.webp",
        caption: "Client directory, offers library, and secure partner onboarding invites.",
        features: [
            { title: "Secure Invitations", desc: "Invite publishers and buyers through secure links tied to partner codes." },
            { title: "Structured Onboarding", desc: "Collect contacts, multiple offers, assets, references, and consent with required-field validation." },
            { title: "Offer Review & Library", desc: "Approve or reject offers, search assets, and manage internal client documents." },
            { title: "Dedicated Client Portal", desc: "Clients view approved offers and assigned performance, and submit campaign requests." },
        ],
    },
    {
        icon: UserCheck,
        title: "EHG Performance & Agent Operations",
        image: "/ringba-content/ehg-agent-operations.webp",
        caption: "Agent comparison reports and the EHG performance dashboard.",
        features: [
            { title: "Detailed CPA Reporting", desc: "Compare spend, calls, sales, and CPA by agent, publisher, hour, and state." },
            { title: "Weekly Agent Comparisons", desc: "Track weekly agent and comparison trends to review changes in activity and sales." },
            { title: "Dispositions & Callbacks", desc: "Explore call outcomes and callback schedules by agent, campaign, and status." },
            { title: "Carrier & SEP Analysis", desc: "Review sales by carrier and SEP category alongside the EHG dashboard overview." },
        ],
    },
    {
        icon: LineChart,
        title: "Profitability & Operational Control",
        image: "/ringba-content/profitability-control.webp",
        caption: "Internal profitability reporting and the feedback inbox.",
        features: [
            { title: "Internal Profitability", desc: "Review campaign revenue, costs, profit, and margin, with AI analysis ready to run once client inputs are supplied." },
            { title: "Performance Comparisons", desc: "Compare revenue periods, campaigns, publishers, and vertical CPA performance." },
            { title: "Feedback to Resolution", desc: "Track prioritised requests, attachments, and statuses through the inbox and ClickUp." },
            { title: "Monitoring & Access", desc: "Manage alerts, CPA settings, profiles, and role-based access." },
        ],
    },
];

const CaseStudyRingba = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Performance Marketing', 'Analytics Dashboard', 'Real-time']}
                titleAccent="PPC Analytics Dashboard:"
                title="Real-Time Pay-Per-Call Performance & Call-Tracking Analytics"
                tagline="A full-stack analytics platform that turns raw call-tracking data into live revenue, CPA, and profitability insights — with automated alerts the moment metrics breach thresholds."
                images={SLIDER_IMAGES}
                altPrefix="PPC Analytics Dashboard"
                url="https://ifficientconnect.com/login"
                urlLabel="View Live Dashboard"
            />

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                    <p className="text-earth-700 mb-0">
                                        A real-time analytics and operations dashboard for a pay-per-call performance-marketing business. It ingests call-tracking data from the Ringba API, computes revenue, CPA, and profitability by campaign, publisher, and target, streams live figures to the browser, and fires automated Telegram alerts when key metrics breach thresholds — all behind role-based multi-user access.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/ringba-content/project-overview.webp" alt="PPC analytics dashboard overview" caption="Project overview — the analytics dashboard at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Challenge</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    Performance data was trapped inside Ringba and stitched together manually in spreadsheets — slow, error-prone, and blind to problems as they happened. The team had no live view of revenue, CPA, and margin, and no automated warning when connectivity dropped or CPA blew past a threshold.
                                </p>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Strategic Goals</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {[
                                    "Stream live campaign, publisher, and target metrics without manual refresh.",
                                    "Build a single, accurate CPA and profitability model across every view.",
                                    "Automate threshold-based Telegram alerts for critical metrics.",
                                    "Ensure reliable scheduled ingestion and reconciliation of Ringba data.",
                                    "Provide role-based access control with full audit logging.",
                                    "Keep dashboards fast over large call-volume datasets."
                                ].map((goal, i) => (
                                    <motion.div
                                        key={i}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                    >
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot variant="left" src="/ringba-content/strategic-goals.webp" alt="PPC dashboard strategic goals" caption="The strategic goals that shaped the build." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-6 mb-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Activity className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Realtime Dashboards</h4>
                                        <p className="text-earth-600 text-sm">Live campaign, publisher, and target views streamed over Server-Sent Events — no manual refresh needed.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <TrendingUp className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">CPA & Profitability Engine</h4>
                                        <p className="text-earth-600 text-sm">Per-vertical CPA thresholds, sales-unit computation, and profitability reports with breakdowns by state, hour, publisher, and agent.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Bell className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Automated Telegram Alerts</h4>
                                        <p className="text-earth-600 text-sm">Threshold-driven alerts for connectivity, CPA, revenue drops, and end-of-day performance — with cooldowns and deduplication.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Database className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Data Sync Pipeline</h4>
                                        <p className="text-earth-600 text-sm">Scheduled Ringba ingestion with CSV export processing, reconciliation, webhooks, and timezone-aware day bucketing.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/ringba-content/core-features.webp" alt="PPC dashboard core features" caption="Core features — real-time analytics at the center." />
                                <SectionShot variant="pair" className="md:mt-14" src="/ringba-content/core-admin-features.webp" alt="PPC dashboard admin features" caption="Core admin features and controls." />
                            </div>
                            <SectionShot variant="right" src="/ringba-content/core-user-features.webp" alt="PPC dashboard user features" caption="Core user-facing features." />

                            <Reveal>
                                <div className="bg-blue-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Implementation</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>React 18 & Vite</li>
                                                <li>Tailwind CSS</li>
                                                <li>Recharts Data Visualization</li>
                                                <li>Virtualized Tables (TanStack)</li>
                                                <li>CASL Permission Model</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend</h4>
                                            <ul className="space-y-2 text-sm text-blue-100">
                                                <li>NestJS 10 (TypeScript)</li>
                                                <li>PostgreSQL + Prisma (AWS RDS)</li>
                                                <li>Server-Sent Events Streaming</li>
                                                <li>Ringba API & Telegram Bot API</li>
                                                <li>Scheduled Cron Sync Jobs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <SectionShot variant="left" src="/ringba-content/tech-stack.webp" alt="PPC dashboard technical implementation" caption="Technical implementation and stack." />


                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Platform Modules</h2>
                                <p className="text-earth-700 mb-10 text-lg leading-relaxed">
                                    Beyond the core analytics, the platform grew into a full operations suite — covering call quality, partner onboarding, agent performance, and internal profitability in one place.
                                </p>
                            </Reveal>

                            {PLATFORM_MODULES.map(({ icon: Icon, title, image, caption, features }, moduleIndex) => (
                                <div key={title} className="mb-4">
                                    <Reveal>
                                        <h3 className="flex items-center gap-3 text-2xl font-display font-bold mb-6 text-earth-900">
                                            <span className="bg-tribe-blue/10 p-2.5 rounded-lg">
                                                <Icon className="h-6 w-6 text-tribe-blue" />
                                            </span>
                                            {title}
                                        </h3>
                                    </Reveal>
                                    <motion.div
                                        variants={revealContainer}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: '-80px' }}
                                        className="grid md:grid-cols-2 gap-4"
                                    >
                                        {features.map((feature) => (
                                            <motion.div
                                                key={feature.title}
                                                variants={revealItem}
                                                whileHover={{ y: -4 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="flex items-start gap-3 bg-earth-50 p-4 rounded-lg ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                                            >
                                                <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-earth-900 text-base">{feature.title}</h4>
                                                    <p className="text-earth-600 text-sm mb-0">{feature.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                    <SectionShot
                                        variant={moduleIndex % 2 === 0 ? 'right' : 'left'}
                                        src={image}
                                        alt={`PPC dashboard ${title}`}
                                        caption={caption}
                                    />
                                </div>
                            ))}

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">UI/UX</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    A dark, data-dense interface built for operators who live in the dashboard all day — colour-coded campaign charts, revenue and conversion trends, and a creative studio for generating image and video ads, all a click away in a single sidebar.
                                </p>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/ringba-content/ui-ux-1.webp" alt="PPC dashboard campaign charts and trends" caption="Connected-call charts, revenue & profit trends, and conversion tracking." />
                                <SectionShot variant="pair" className="md:mt-14" src="/ringba-content/ui-ux-2.webp" alt="PPC dashboard image ads generator" caption="Campaign comparisons alongside the Image Ads Generator." />
                            </div>

                            <Reveal>
                                <SectionKicker index="06" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Outcome</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The dashboard replaced manual spreadsheet reporting with a single real-time source of truth for pay-per-call performance — roughly 30 screens of live analytics backed by automated ingestion, a per-vertical CPA engine, and Telegram alerting. The team now reacts to metric breaches within minutes instead of discovering them at end-of-day.
                                </p>
                            </Reveal>

                            <SectionShot variant="wide" src="/ringba-content/project-outcome.webp" alt="PPC dashboard project outcome" caption="Project outcome and impact." />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Need Real-Time Visibility Into Your Business?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From data pipelines to live dashboards, we build analytics platforms that turn raw data into decisions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Start Your Project
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

export default CaseStudyRingba;
