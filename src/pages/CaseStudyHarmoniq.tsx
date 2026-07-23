
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CaseStudyHero from '@/components/CaseStudyHero';
import StoreBadges from '@/components/StoreBadges';
import SectionShot from '@/components/SectionShot';

const CaseStudyHarmoniq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <CaseStudyHero
        tags={['Social Media', 'React Native', 'Performance Optimization']}
        titleAccent="Harmoniq:"
        title="From Lagging App to Scalable Product"
        tagline="How TTT Transformed a React Native iOS App Into a Modern, Future-Proof Platform"
        images={[
          '/harmoniq-hero/1.png',
          '/harmoniq-hero/2.png',
          '/harmoniq-hero/3.png',
          '/harmoniq-hero/4.png',
          '/harmoniq-hero/5.png',
          '/lovable-uploads/ebc03188-4dc2-480f-a081-b9f1b76e6706.png',
        ]}
        altPrefix="Harmoniq"
      >
        <StoreBadges
          appStoreUrl="https://apps.apple.com/us/app/harmoniq-music/id6468933926"
          className="mb-8"
        />
      </CaseStudyHero>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                <p className="text-earth-700 mb-0">
                  What started as a small UI/UX tune-up became a full-system transformation—re-architected for speed, scale, and serious product growth.
                </p>
              </div>

              <SectionShot
                variant="wide"
                src="/harmoniq-content/project-overview.webp"
                alt="Harmoniq project overview"
                caption="Project overview — the Harmoniq app transformation at a glance."
              />

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Situation: Quick Fix? Not Quite.</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                The client came to us with a simple ask: improve some screens and boost performance. The app worked—but just barely. Users were frustrated by slow load times, clunky transitions, and unexpected crashes. The backend hadn't been touched in years, and the team struggled to build confidently or ship quickly.
              </p>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                We performed a deep audit, and it was clear: surface-level fixes wouldn't cut it. If they wanted to grow, they needed to modernize from the ground up.
              </p>

              <p className="text-earth-700 mb-12 text-lg leading-relaxed font-semibold">
                So we pitched a bold move: rethink the stack, rethink the future. They said yes. We got to work.
              </p>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">Key Challenges Addressed</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">Performance Bottlenecks</h4>
                      <p className="text-earth-700 text-sm">Slow load times and memory leaks affecting user experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">Outdated Architecture</h4>
                      <p className="text-earth-700 text-sm">Legacy codebase hindering development velocity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">User Experience Issues</h4>
                      <p className="text-earth-700 text-sm">Clunky transitions and unexpected crashes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">Scalability Concerns</h4>
                      <p className="text-earth-700 text-sm">Infrastructure unable to support growth plans</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Solution</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                We implemented a comprehensive modernization strategy that included:
              </p>

              <ul className="list-disc pl-6 mb-8 text-earth-700 space-y-2">
                <li><strong>Complete architecture overhaul</strong> - Rebuilt the app with modern React Native best practices</li>
                <li><strong>Performance optimization</strong> - Implemented lazy loading, image optimization, and memory management</li>
                <li><strong>UI/UX redesign</strong> - Created smooth, intuitive interfaces that users love</li>
                <li><strong>Backend modernization</strong> - Updated APIs and database structure for better performance</li>
                <li><strong>Testing infrastructure</strong> - Established comprehensive testing to prevent future issues</li>
              </ul>

              <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                <SectionShot
                  variant="pair"
                  src="/harmoniq-content/functionalites-1.webp"
                  alt="Harmoniq app functionality view 1"
                  caption="Core app functionality after the rebuild."
                />
                <SectionShot
                  variant="pair"
                  className="md:mt-14"
                  src="/harmoniq-content/functionalites-2.webp"
                  alt="Harmoniq app functionality view 2"
                  caption="Rebuilt screens with smoother transitions."
                />
              </div>

              <SectionShot
                variant="left"
                src="/harmoniq-content/functionalites-3.webp"
                alt="Harmoniq app functionality view 3"
                caption="Modernized UI patterns across the app."
              />

              <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                <SectionShot
                  variant="pair"
                  src="/harmoniq-content/functionalites-4.webp"
                  alt="Harmoniq app functionality view 4"
                  caption="Optimized flows built for scale."
                />
                <SectionShot
                  variant="pair"
                  className="md:mt-14"
                  src="/harmoniq-content/functionalites5.webp"
                  alt="Harmoniq app functionality view 5"
                  caption="The finished, production-ready experience."
                />
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">75%</div>
                    <div className="text-earth-700">Faster Load Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">90%</div>
                    <div className="text-earth-700">Crash Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">3x</div>
                    <div className="text-earth-700">Development Speed</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technologies Used</h2>

              <div className="flex flex-wrap gap-3 mb-12">
                {['React Native', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL', 'AWS', 'Jest', 'Detox'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                <SectionShot
                  variant="pair"
                  src="/harmoniq-content/tech-stack-frontend.webp"
                  alt="Harmoniq frontend tech stack"
                  caption="Frontend stack powering the rebuilt app."
                />
                <SectionShot
                  variant="pair"
                  className="md:mt-14"
                  src="/harmoniq-content/tech-stack-backend.webp"
                  alt="Harmoniq backend tech stack"
                  caption="Backend stack behind the modernized platform."
                />
              </div>

              <SectionShot
                variant="wide"
                src="/harmoniq-content/deployment.webp"
                alt="Harmoniq deployment pipeline"
                caption="The deployment pipeline supporting continuous delivery."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Transform Your App?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you modernize your application and scale for growth.
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyHarmoniq;
