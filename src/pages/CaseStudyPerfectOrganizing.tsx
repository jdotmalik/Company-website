
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Puzzle, Heart, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import StoreBadges from '@/components/StoreBadges';
import CaseStudyHero from '@/components/CaseStudyHero';
import SectionShot from '@/components/SectionShot';

const CaseStudyPerfectOrganizing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <CaseStudyHero
        tags={['Gamification', 'Puzzle', 'Relaxation']}
        titleAccent="Perfect Organizing:"
        title="Calming Sorting & Puzzle Game"
        tagline="A Stress-Relieving Mobile Game Centered on Organizing, Sorting, and Mindful Activities"
        images={['/perfect-organizing-hero/1.png', '/perfect-organizing-hero/2.png', '/perfect-organizing-hero/3.png', '/perfect-organizing-hero/4.png']}
        altPrefix="Perfect Organizing"
      >
        <StoreBadges
          playStoreUrl="https://play.google.com/store/apps/details?id=com.perfect.organizing.tidy.games&hl=en"
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
                  Perfect Organizing is a stress-relieving mobile game centered on organizing, sorting, and arranging tasks that engage users with simple yet satisfying gameplay. Designed to appeal to a wide demographic seeking calming, mindful activities on their devices, it delivers a smooth, intuitive experience that grows progressively challenging while maintaining a relaxing atmosphere.
                </p>
              </div>

              <SectionShot
                variant="wide"
                src="/perfect-organizing-content/project-overview.webp"
                alt="Perfect Organizing project overview"
                caption="Project overview — the calming sorting and puzzle experience at a glance."
              />

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                  <Puzzle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2">Puzzle Mechanics</h3>
                  <p className="text-sm text-green-700">Diverse sorting mini-games with progressive difficulty</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                  <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-800 mb-2">Stress Relief</h3>
                  <p className="text-sm text-blue-700">Calming gameplay designed for relaxation</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Smooth Interactions</h3>
                  <p className="text-sm text-purple-700">Natural drag, tap, and slide mechanics</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🧩 Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                The client wanted to create a stress-relieving mobile game centered on organizing, sorting, and arranging tasks that could engage users with simple yet satisfying gameplay. The goal was to design a scalable game that appeals to a wide demographic seeking calming, mindful activities on their devices. The app had to deliver a smooth, intuitive experience that grows progressively challenging while maintaining a relaxing atmosphere.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Challenges</h3>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li>Designing diverse sorting mini-games that remain fresh and creative</li>
                  <li>Implementing smooth drag, tap, and slide mechanics for natural user interaction</li>
                  <li>Balancing difficulty to appeal to casual and puzzle enthusiasts alike</li>
                  <li>Seamlessly integrating monetization and engagement features without disrupting the calming user experience</li>
                  <li>Ensuring high performance across a range of mobile devices</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Solution</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Diverse Sorting Games",
                    desc: "Multiple organizing challenges: color sorting, shape matching, item categorization, and spatial puzzles",
                    icon: "🎯"
                  },
                  {
                    title: "Intuitive Controls",
                    desc: "Smooth drag-and-drop, tap-to-select, and swipe gestures optimized for satisfying interaction",
                    icon: "👆"
                  },
                  {
                    title: "Progressive Difficulty",
                    desc: "Carefully balanced challenge progression that maintains relaxation while increasing complexity",
                    icon: "📈"
                  },
                  {
                    title: "Calming Design",
                    desc: "Soft color palettes, gentle animations, and soothing sound effects for stress relief",
                    icon: "🌸"
                  },
                  {
                    title: "Mindful Monetization",
                    desc: "Non-intrusive ads and optional purchases that don't break the peaceful gameplay flow",
                    icon: "💎"
                  },
                  {
                    title: "Performance Optimization",
                    desc: "Lightweight engine ensuring smooth performance across all device specifications",
                    icon: "⚡"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-tribe-blue/5 rounded-xl">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{feature.title}</h4>
                      <p className="text-earth-700 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <SectionShot
                variant="left"
                src="/perfect-organizing-content/functionalites.webp"
                alt="Perfect Organizing functionalities"
                caption="Core functionality — sorting mini-games and intuitive controls in action."
              />

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Implementation</h2>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Game Engine</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity 3D</li>
                      <li>• C# Scripting</li>
                      <li>• UI System</li>
                      <li>• Animation Framework</li>
                      <li>• Audio Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Monetization</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity Ads</li>
                      <li>• Unity IAP</li>
                      <li>• Optional Hints</li>
                      <li>• Theme Unlocks</li>
                      <li>• Remove Ads Option</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">User Experience</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Gesture Recognition</li>
                      <li>• Haptic Feedback</li>
                      <li>• Progress Tracking</li>
                      <li>• Achievement System</li>
                      <li>• Accessibility Features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results & Impact</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.7★</div>
                    <div className="text-earth-700">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">92%</div>
                    <div className="text-earth-700">User Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">75K+</div>
                    <div className="text-earth-700">Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.1min</div>
                    <div className="text-earth-700">Avg Session</div>
                  </div>
                </div>
              </div>

              <SectionShot
                variant="right"
                src="/perfect-organizing-content/other-services.webp"
                alt="Other Perfect Organizing services and results"
                caption="Results and related services delivered alongside the game."
              />

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-green-800">Player Testimonial</h3>
                <p className="text-green-700 mb-4">
                  "Perfect Organizing has become my go-to app when I need to unwind after a stressful day. The sorting puzzles are incredibly satisfying and the gentle colors and sounds help me relax. It's like meditation through gaming!"
                </p>
                <p className="text-sm text-green-600 font-medium">- Michelle K., Stress Management Enthusiast</p>
              </div>
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
              Ready to Create Relaxing Experiences?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's build a calming, engaging game that provides stress relief and mindful entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Start Your Wellness Project
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

export default CaseStudyPerfectOrganizing;
