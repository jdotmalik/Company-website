
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Gamepad2, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import StoreBadges from '@/components/StoreBadges';
import CaseStudyHero from '@/components/CaseStudyHero';
import SectionShot from '@/components/SectionShot';

const CaseStudyCalmQuest = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <CaseStudyHero
        tags={['Gaming', 'Wellness', 'Mobile App']}
        titleAccent="Calm Quest:"
        title="A Journey Into Digital Serenity"
        tagline="Category: Health & Wellness, Casual Gaming | Platform: Android & iOS | Engine: Unity"
        images={['/calm-quest-hero/1.png', '/calm-quest-hero/2.png', '/calm-quest-hero/3.png', '/calm-quest-hero/4.png', '/calm-quest-hero/5.png']}
        altPrefix="Calm Quest"
      >
        <StoreBadges
          appStoreUrl="https://apps.apple.com/us/app/calm-quest-antistress/id6526489443"
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
                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">🧘‍♀️ Project Overview</h2>
                <p className="text-earth-700 mb-0">
                  Calm Quest is an internally developed, immersive mobile wellness application that merges casual gaming with mindfulness. Designed using Unity, it features 15+ relaxing mini-games that offer sensory delight, calming interaction, and stress relief. From tactile pop-its to the soft rhythm of vegetable chopping, Calm Quest is a carefully crafted digital space for emotional decompression and daily tranquility.
                </p>
              </div>

              <SectionShot
                variant="wide"
                src="/calm-quest-content/project-overview.webp"
                alt="Calm Quest project overview"
                caption="Project overview — Calm Quest at a glance."
              />

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-pink-50 to-pink-100 rounded-xl">
                  <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-pink-800 mb-2">Wellness-First</h3>
                  <p className="text-sm text-pink-700">Designed for stress relief and emotional well-being</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                  <Gamepad2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-800 mb-2">15+ Mini-Games</h3>
                  <p className="text-sm text-blue-700">Diverse collection of calming interactive experiences</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Sensory Design</h3>
                  <p className="text-sm text-purple-700">Carefully crafted visuals and audio for relaxation</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🧠 Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                In an increasingly overstimulated digital landscape, mobile users rarely find apps that help them slow down. Most casual games elevate engagement through intensity—leaving stress relief behind.
              </p>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                We set out to build an experience that's soothing, visually satisfying, and endlessly re-playable—a calming alternative rooted in psychological insights and game design best practices.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Design Principles</h3>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li><strong>Slow-paced interactions</strong> - No time pressure or competitive elements</li>
                  <li><strong>Tactile satisfaction</strong> - Haptic feedback and responsive touch interactions</li>
                  <li><strong>Visual harmony</strong> - Calming color palettes and smooth animations</li>
                  <li><strong>Audio therapy</strong> - Ambient sounds and ASMR-inspired audio design</li>
                  <li><strong>Mindful progression</strong> - Gentle reward systems without addiction mechanics</li>
                </ul>
              </div>

              <SectionShot
                variant="right"
                src="/calm-quest-content/in-app-gameplay.webp"
                alt="Calm Quest in-app gameplay"
                caption="In-app gameplay — the calming interactions in action."
              />

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Featured Mini-Games</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Pop-It Paradise",
                    desc: "Digital fidget toy with satisfying bubble-popping mechanics and customizable patterns",
                    icon: "🫧",
                    color: "bg-blue-50"
                  },
                  {
                    title: "Zen Garden",
                    desc: "Rake patterns in sand, place stones, and create peaceful landscapes with meditative interactions",
                    icon: "🪨",
                    color: "bg-amber-50"
                  },
                  {
                    title: "Veggie Slice",
                    desc: "Satisfying vegetable chopping with realistic sound effects and visual feedback",
                    icon: "🥕",
                    color: "bg-green-50"
                  },
                  {
                    title: "Cloud Watching",
                    desc: "Peaceful sky observation with shape-finding and gentle weather transitions",
                    icon: "☁️",
                    color: "bg-sky-50"
                  },
                  {
                    title: "Color Flow",
                    desc: "Hypnotic color mixing and gradient creation with fluid dynamics simulation",
                    icon: "🎨",
                    color: "bg-purple-50"
                  },
                  {
                    title: "Breathing Circle",
                    desc: "Guided breathing exercises with visual cues and customizable patterns",
                    icon: "💨",
                    color: "bg-teal-50"
                  }
                ].map((game, index) => (
                  <div key={index} className={`flex items-start gap-4 p-6 ${game.color} rounded-xl border`}>
                    <span className="text-3xl">{game.icon}</span>
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{game.title}</h4>
                      <p className="text-earth-700 text-sm">{game.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <SectionShot
                variant="left"
                src="/calm-quest-content/game-fearture.webp"
                alt="Calm Quest game features"
                caption="Game features — the mini-games that make up Calm Quest."
              />

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Implementation</h2>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Game Engine</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity 3D (2022.3 LTS)</li>
                      <li>• C# Scripting</li>
                      <li>• Universal Render Pipeline</li>
                      <li>• Addressable Assets</li>
                      <li>• Unity Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Audio & Visual</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• FMOD Audio Engine</li>
                      <li>• Particle Systems</li>
                      <li>• Shader Graph</li>
                      <li>• DOTween Animation</li>
                      <li>• Haptic Feedback SDK</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Platform</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• iOS (iOS 12+)</li>
                      <li>• Android (API 21+)</li>
                      <li>• Cloud Save Integration</li>
                      <li>• In-App Purchases</li>
                      <li>• Push Notifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">User Experience Design</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-800 mb-4">Mindful Onboarding</h3>
                  <ul className="space-y-2 text-rose-700 text-sm">
                    <li>• Gentle introduction to wellness concepts</li>
                    <li>• Personalized experience based on stress levels</li>
                    <li>• Tutorial-free discovery approach</li>
                    <li>• Optional mindfulness tips and guidance</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">Progress & Rewards</h3>
                  <ul className="space-y-2 text-indigo-700 text-sm">
                    <li>• Mood tracking and wellness insights</li>
                    <li>• Gentle achievement system</li>
                    <li>• Daily calm goals (optional)</li>
                    <li>• Reflection journal integration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Impact & Wellness Metrics</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">89%</div>
                    <div className="text-earth-700">Stress Reduction Reported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">15min</div>
                    <div className="text-earth-700">Average Session Length</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.9★</div>
                    <div className="text-earth-700">Wellness App Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">92%</div>
                    <div className="text-earth-700">7-Day Retention</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-green-800">User Testimonials</h3>
                <p className="text-green-700 mb-4">
                  "Finally, a mobile game that actually helps me relax instead of stressing me out! The pop-it game is my go-to during work breaks, and the breathing exercises have become part of my bedtime routine. Calm Quest feels like a warm hug in app form."
                </p>
                <p className="text-sm text-green-600 font-medium">- Alex Chen, Beta User & Mindfulness Advocate</p>
              </div>

              <SectionShot
                variant="wide"
                src="/calm-quest-content/other-services.webp"
                alt="Other Calm Quest services"
                caption="Other services — the wider support behind Calm Quest's launch."
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
              Ready to Create Wellness Experiences?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's build games and apps that prioritize user well-being and create positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                Explore Wellness Gaming
              </Button>
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

export default CaseStudyCalmQuest;
