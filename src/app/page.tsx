'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Github,
  ExternalLink,
  Brain,
  Rocket,
  Database,
  Code2,
  BarChart3,
  Layers,
  GraduationCap,
  Briefcase,
  Cpu,
  Zap,
  FileText,
  ChevronRight,
  Globe,
  ArrowRight,
  Sparkles,
  Terminal,
  Trophy,
  Target,
  Flame,
  Hexagon
} from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const skills = [
  { name: 'Python', icon: Code2, level: 'Familiar', color: 'from-blue-500 to-cyan-500' },
  { name: 'Java', icon: Code2, level: 'Basic', color: 'from-orange-500 to-red-500' },
  { name: 'C', icon: Code2, level: 'Basic', color: 'from-purple-500 to-pink-500' },
  { name: 'HTML & CSS', icon: Globe, level: 'Intermediate', color: 'from-orange-400 to-yellow-500' },
  { name: 'Machine Learning', icon: Brain, level: 'Basics', color: 'from-green-500 to-emerald-500' },
  { name: 'Power BI', icon: BarChart3, level: 'Intermediate', color: 'from-yellow-500 to-orange-500' },
  { name: 'Figma', icon: Layers, level: 'Intermediate', color: 'from-pink-500 to-rose-500' },
  { name: 'Excel', icon: FileText, level: 'Intermediate', color: 'from-green-600 to-teal-500' },
  { name: 'Canva', icon: Layers, level: 'Intermediate', color: 'from-purple-600 to-indigo-500' },
  { name: 'Analytics', icon: Database, level: 'Intermediate', color: 'from-blue-600 to-violet-500' },
]

const tools = [
  'Power BI', 'Figma', 'Excel', 'Canva', 'Blogger & Spreadsheets', 'Git', 'TensorFlow', 'Keras'
]

const languages = [
  { name: 'English', level: 'Professional', flag: '🇬🇧' },
  { name: 'Tamil', level: 'Native', flag: '🇮🇳' }
]

const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Coimbatore, India',
    period: 'Internship',
    description: [
      'Converted raw datasets into meaningful formats by performing extensive pre-processing activities such as normalization and transformation.',
      'Enhanced data visualization capabilities for better decision-making with the use of advanced BI tools.'
    ],
    icon: '📊'
  },
  {
    title: 'Bootcamp Participant',
    company: 'Ernakulam, India',
    period: 'Innovation Development Environment phase-II',
    description: [
      'Skilled at working independently and collaboratively in a team environment.',
      'Joined the IDE Bootcamp, learning entrepreneurship while developing an innovative solution.'
    ],
    icon: '🚀'
  }
]

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence And Data Science',
    institution: 'Rathinam Technical Campus, Coimbatore',
    period: '2023 - 2027',
    details: 'Anna University Affiliated • 9.19 GPA/CGPA',
    icon: '🎓'
  }
]

const projects = [
  {
    title: 'AI Video Generator',
    role: 'For Education Content',
    subtitle: 'Text to Video Converter',
    description: 'Automates the creation of educational videos from text documents using AI. Features include LLM-powered scene generation, Manim animations, voice synchronization, and automated video rendering with error handling and retry mechanisms.',
    icon: Video,
    tech: ['Python', 'OpenAI API', 'Manim', 'FFmpeg', 'LaTeX', 'Gradio'],
    features: [
      'LLM-based Manim code generation',
      'Voice synchronization with animations',
      'Real-time video processing pipeline',
      'Support for multiple deployment strategies'
    ],
    deployment: ['Hugging Face Spaces', 'Render/Railway', 'YouTube Automation API'],
    gradient: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'AETHER',
    role: 'Lead AI & Data Science Engineer',
    subtitle: 'Autonomous Earth & Telemetry Heuristic Evaluation & Recognition',
    description: 'Full-stack Deep Learning Mission Control System for real-time aerospace telemetry monitoring. Simulates live spacecraft data streams and uses LSTM Neural Networks to predict engine failures before they occur.',
    icon: Rocket,
    tech: ['TensorFlow/Keras', 'LSTM Networks', 'AWS S3', 'Streamlit', 'Python'],
    features: [
      'Advanced LSTM Deep Learning model',
      'AWS Cloud Architecture with S3',
      'Real-time interactive dashboard',
      'Automated PDF incident reports',
      'Visual and audio alert system'
    ],
    domain: 'Aerospace / Predictive Maintenance / IoT',
    gradient: 'from-orange-500 to-red-500',
    featured: true
  },
  {
    title: 'Smart Tonometer',
    role: 'IoT Project',
    description: 'Built a Raspberry Pi-based tonometer with a force-sensitive sensor for accurate IOP measurement, featuring a real-time dashboard for patient data visualization.',
    icon: Cpu,
    tech: ['Python', 'Raspberry Pi', 'IoT', 'Sensors'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Intelligence Document Summarizer',
    role: 'NLP Project',
    description: 'Developed a Python tool using NLTK and Sumy to generate concise document summaries, offering practical NLP experience and scalable potential.',
    icon: FileText,
    tech: ['Python', 'NLTK', 'Sumy', 'NLP'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Mini AI Voice Agent',
    role: 'AI/ML Project',
    description: 'Created a functional AI voice agent with Python and LiveKit, providing an interactive beginner-friendly introduction to real-time AI applications.',
    icon: Zap,
    tech: ['Python', 'LiveKit', 'AI/ML', 'Real-time Communication'],
    gradient: 'from-yellow-500 to-orange-500'
  }
]

function Video({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

// Custom Cursor Component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('[data-hoverable]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full border-2 border-orange-500 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.5
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 rounded-full bg-orange-500 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
    </>
  )
}

// Advanced Particle System
function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 10,
    rotation: Math.random() * 360
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white via-50% to-amber-50 dark:from-orange-950/30 dark:via-gray-950 dark:to-orange-950/20" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `linear-gradient(135deg, rgba(249, 115, 22, ${0.1 + Math.random() * 0.3}), rgba(245, 158, 11, ${0.1 + Math.random() * 0.2}))`
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, particle.rotation, 0],
            scale: [1, 1 + Math.random() * 0.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

// Animated Geometric Shapes
function GeometricShapes() {
  const shapes = [
    { type: 'circle', size: 300, color: 'from-orange-400/5 to-amber-500/5' },
    { type: 'circle', size: 200, color: 'from-purple-500/5 to-pink-500/5' },
    { type: 'circle', size: 150, color: 'from-cyan-500/5 to-blue-500/5' }
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

// 3D Card Tilt Effect
function TiltCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -5
    const rotateYValue = ((x - centerX) / centerX) * 5
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic Button Component
function MagneticButton({ children, asChild = false, ...props }: React.ComponentProps<typeof Button>) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = ref.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Button ref={ref} asChild={asChild} {...props}>
      {children}
    </Button>
  )
}

// Scroll Progress Indicator
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

// Glowing Text Component
function GlowingText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-orange-400 to-amber-400"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </span>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50/30 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/20 overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <ParticleField />
      <GeometricShapes />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="text-3xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent relative z-10">
              RV
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 blur-2xl opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
              <a href="https://www.linkedin.com/in/ranjith-v-b368952b7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </MagneticButton>
            <MagneticButton asChild variant="outline" size="sm" className="border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/20">
              <a href="/upload/Ranjith%20resume1.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
              className="relative inline-block mb-8"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 flex items-center justify-center text-6xl font-black text-white shadow-2xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <span className="relative z-10">RV</span>
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Welcome to my portfolio
                </Badge>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <GlowingText className="block bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                  Ranjith V
                </GlowingText>
                <motion.span
                  className="block text-4xl md:text-5xl font-bold text-muted-foreground mt-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  AI & Data Science Engineer
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Transforming complex data into intelligent solutions. Passionate about{' '}
                <span className="text-orange-600 dark:text-orange-400 font-semibold">AI/ML</span>,{' '}
                <span className="text-orange-600 dark:text-orange-400 font-semibold">Deep Learning</span>, and{' '}
                <span className="text-orange-600 dark:text-orange-400 font-semibold">Innovation</span>.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mt-12"
            >
              <MagneticButton asChild size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white border-0 shadow-lg shadow-orange-500/25 px-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ranjithvasu499@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </MagneticButton>
              <MagneticButton asChild size="lg" variant="outline" className="border-2 hover:bg-orange-50 dark:hover:bg-orange-950/20 px-8">
                <a href="/upload/Ranjith%20resume1.pdf" download="Ranjith_Resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap gap-6 justify-center text-muted-foreground"
            >
              {[
                { icon: Mail, text: 'ranjithvasu499@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ranjithvasu499@gmail.com' },
                { icon: Phone, text: '+91 9943865176', href: 'tel:+919943865176' },
                { icon: MapPin, text: 'Coimbatore, TN, India', href: 'https://www.google.com/maps/search/?api=1&query=Coimbatore,+TN,+India' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-orange-300/50 transition-all cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950/20"
                >
                  <item.icon className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-orange-500"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Brain className="w-3.5 h-3.5 mr-1.5" />
              My Arsenal
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Equipped with cutting-edge tools to build intelligent solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Technical Skills */}
            <TiltCard>
              <Card className="h-full border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/20 backdrop-blur-sm overflow-hidden group hover:border-orange-400 dark:hover:border-orange-700 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg group-hover:scale-110 transition-transform">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Technical Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group/item"
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-all border border-border/30 hover:border-orange-300/50">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                              <skill.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold">{skill.name}</span>
                          </div>
                          <Badge className={`bg-gradient-to-r ${skill.color} text-white border-0`}>
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>

            {/* Tools */}
            <TiltCard>
              <Card className="h-full border-2 border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-950/20 backdrop-blur-sm overflow-hidden group hover:border-purple-400 dark:hover:border-purple-700 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Tools Stack</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="cursor-default"
                      >
                        <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-lg text-foreground">
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>

            {/* Languages */}
            <TiltCard>
              <Card className="h-full border-2 border-cyan-200 dark:border-cyan-900 bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-950/20 backdrop-blur-sm overflow-hidden group hover:border-cyan-400 dark:hover:border-cyan-700 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Languages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-1 gap-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-300 dark:border-cyan-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{lang.flag}</span>
                            <div>
                              <div className="font-bold text-lg">{lang.name}</div>
                              <div className="text-sm text-muted-foreground">{lang.level}</div>
                            </div>
                          </div>
                          <Hexagon className="h-8 w-8 text-cyan-500/30" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Projects Section - Bento Grid */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Rocket className="w-3.5 h-3.5 mr-1.5" />
              Featured Work
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Projects & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions that push the boundaries of technology
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Featured Projects - Span 2 columns */}
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="md:col-span-2 lg:col-span-2"
              >
                <TiltCard>
                  <Card className={`h-full border-2 bg-gradient-to-br from-orange-50/80 to-white dark:from-gray-900/80 dark:to-gray-950/80 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 relative`} style={{ borderColor: 'rgba(249, 115, 22, 0.3)' }}>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl`}
                          >
                            <project.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                                <Trophy className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                              {project.domain && (
                                <Badge variant="outline" className="border-orange-300 dark:border-orange-700">
                                  {project.domain}
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-3xl font-bold mb-2">{project.title}</CardTitle>
                            <CardDescription className={`text-lg ${project.gradient.includes('purple') ? 'text-purple-600 dark:text-purple-400' : 'text-orange-600 dark:text-orange-400'} font-semibold`}>
                              {project.role}
                            </CardDescription>
                            {project.subtitle && (
                              <CardDescription className="text-base mt-1">
                                {project.subtitle}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {project.features && (
                          <div className="mb-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                              <Flame className="h-5 w-5 text-orange-500" />
                              Key Highlights
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {project.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-2 p-3 rounded-lg bg-background/50 border border-border/30"
                                >
                                  <ChevronRight className={`h-5 w-5 flex-shrink-0 mt-0.5 ${project.gradient.includes('purple') ? 'text-purple-500' : 'text-orange-500'}`} />
                                  <span className="text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.deployment && (
                          <div className="mb-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                              <Target className="h-5 w-5 text-orange-500" />
                              Deployment
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.deployment.map((dep, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge variant="outline" className="px-3 py-1.5 text-sm">
                                    {dep}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge className={`bg-gradient-to-r ${project.gradient}/10 text-foreground border-${project.gradient.includes('purple') ? 'purple' : 'orange'}-300 dark:border-${project.gradient.includes('purple') ? 'purple' : 'orange'}-700`}>
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}

            {/* Regular Projects */}
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <TiltCard>
                  <Card className={`h-full border-2 bg-gradient-to-br from-background to-white dark:to-gray-950 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 relative`} style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }}>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg w-fit mb-3`}
                        >
                          <project.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-bold mb-1">{project.title}</CardTitle>
                        <CardDescription className={project.gradient.includes('purple') ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-orange-600 dark:text-orange-400 font-medium'}>
                          {project.role}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Experience Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Briefcase className="w-3.5 h-3.5 mr-1.5" />
              Journey So Far
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional milestones and career highlights
            </p>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border-4 border-background z-10 shadow-lg"
                />

                <div className="w-full md:w-1/2 md:px-8">
                  <TiltCard>
                    <Card className="border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50/50 to-white dark:from-orange-950/20 dark:to-gray-950 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-3xl">{exp.icon}</span>
                              <CardTitle className="text-2xl">{exp.title}</CardTitle>
                            </div>
                            <CardDescription className={`text-base ${exp.icon === '🚀' ? 'text-purple-600 dark:text-purple-400' : 'text-orange-600 dark:text-orange-400'} font-semibold`}>
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 whitespace-nowrap">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.4 + idx * 0.1 }}
                              >
                                <ChevronRight className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Education Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
              Academic Background
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Foundations of knowledge and continuous learning
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <TiltCard>
                  <Card className="border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50/80 to-white dark:from-orange-950/20 dark:to-gray-950/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl"
                          >
                            <span className="text-4xl">{edu.icon}</span>
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-3xl font-bold mb-2">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg text-orange-600 dark:text-orange-400 font-semibold mb-2">
                              {edu.field}
                            </CardDescription>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-base">
                                {edu.period}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 text-base">
                                {edu.details}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center gap-3 text-lg text-muted-foreground p-4 rounded-xl bg-background/50 border border-border/30">
                          <MapPin className="h-5 w-5 text-orange-500" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Contact Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Get In Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Always open to discussing new opportunities, collaborations, and innovative projects.
              Let's create something amazing together!
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <MagneticButton asChild size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white border-0 shadow-xl shadow-orange-500/30 px-10 text-lg">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ranjithvasu499@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </MagneticButton>
              <MagneticButton asChild size="lg" variant="outline" className="border-2 hover:bg-orange-50 dark:hover:bg-orange-950/20 px-10 text-lg">
                <a href="https://www.linkedin.com/in/ranjith-v-b368952b7" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </MagneticButton>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-muted-foreground mb-16">
              {[
                { icon: Mail, text: 'ranjithvasu499@gmail.com', label: 'Email' },
                { icon: Phone, text: '+91 9943865176', label: 'Phone' },
                { icon: MapPin, text: 'Coimbatore, TN, India', label: 'Location' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-gradient-to-br from-orange-50/80 to-white dark:from-orange-950/20 dark:to-gray-950 backdrop-blur-sm border border-orange-200 dark:border-orange-900 hover:border-orange-400 dark:hover:border-orange-700 transition-all group hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6 text-orange-500 mb-2" />
                  </motion.div>
                  <span className="font-semibold text-lg">{item.label}</span>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-4 border-t border-border bg-gradient-to-r from-orange-50/80 via-white to-amber-50/80 dark:from-gray-950/80 dark:via-gray-900 dark:to-orange-950/20 backdrop-blur-xl">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">
                Ranjith V
              </div>
              <p className="text-muted-foreground text-lg">
                AI & Data Science Engineer
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground text-center">
                Building the future with technology and innovation
              </p>
              <div className="flex gap-4">
                <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                  <a href="https://www.linkedin.com/in/ranjith-v-b368952b7" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </MagneticButton>
                <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                  <a href="/upload/Ranjith%20resume1.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5" />
                  </a>
                </MagneticButton>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ranjith V
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                All rights reserved. Made with ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
