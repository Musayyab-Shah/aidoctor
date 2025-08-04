import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Heart, 
  MessageCircle, 
  Stethoscope, 
  ShoppingBag, 
  BookOpen, 
  Send,
  Star,
  Clock,
  Shield,
  Users,
  Activity,
  Brain,
  Thermometer,
  Pill,
  Zap,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import heroBanner from './assets/images/hero-banner.jpg'
import doctorsGrid from './assets/images/doctors-grid.webp'
import doctor1 from './assets/images/doctor-1.jpg'
import doctor2 from './assets/images/doctor-2.jpg'
import doctor3 from './assets/images/doctor-3.webp'
import doctor4 from './assets/images/doctor-4.webp'
import product1 from './assets/images/product-1.jpg'
import product2 from './assets/images/product-2.jpg'
import product3 from './assets/images/product-3.jpg'
import product4 from './assets/images/product-4.jpg'
import product5 from './assets/images/product-5.jpg'

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-teal-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Wellness Leaks</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#ai-doctor" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">AI Doctor</a>
            <a href="#diseases" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Diseases</a>
            <a href="#doctors" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Doctors</a>
            <a href="#shop" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Shop</a>
            <a href="https://blog.wellnessleaks.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Blog</a>
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Talk to AI Doctor
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Home</a>
              <a href="#ai-doctor" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">AI Doctor</a>
              <a href="#diseases" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Diseases</a>
              <a href="#doctors" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Doctors</a>
              <a href="#shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Shop</a>
              <a href="https://blog.wellnessleaks.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Blog</a>
              <Button className="w-full mt-2 bg-teal-500 hover:bg-teal-600 text-white">
                Talk to AI Doctor
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Wellness <span className="text-teal-500">Leaks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your digital partner for a healthier life. Get instant health advice with our AI Doctor or connect with real professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroBanner} 
              alt="Healthcare Technology" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Doctor Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Key Features Component
function KeyFeatures() {
  const features = [
    {
      icon: <MessageCircle className="h-12 w-12 text-teal-500" />,
      title: "AI Doctor",
      description: "24/7 AI-powered health advice and instant medical consultations"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "Disease Database",
      description: "Comprehensive information on common illnesses and conditions"
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-green-500" />,
      title: "Real Doctor Consultations",
      description: "Connect with certified medical professionals for expert care"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Wellness Leaks?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our comprehensive platform designed for your wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Health Tips Component
function HealthTips() {
  const tips = [
    {
      title: "The Importance of Hydration",
      description: "Stay healthy by drinking 8-10 glasses of water daily",
      icon: <Activity className="h-8 w-8 text-blue-500" />
    },
    {
      title: "5-Minute Morning Stretches",
      description: "Start your day with simple stretches to boost energy",
      icon: <Zap className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Mindfulness for Better Sleep",
      description: "Practice meditation for improved sleep quality",
      icon: <Brain className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Balanced Nutrition Tips",
      description: "Eat a rainbow of fruits and vegetables daily",
      icon: <Heart className="h-8 w-8 text-red-500" />
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness Tips</h2>
          <p className="text-xl text-gray-600">Simple daily practices for a healthier lifestyle</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  {tip.icon}
                  <CardTitle className="text-lg font-semibold">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// AI Doctor Chat Component
function AIDoctorChat() {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your AI Doctor. How can I help you today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: 'user', content: inputMessage }])
      setInputMessage('')
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Thank you for your question. This is a demo response. In a real implementation, this would connect to the Gemini API for intelligent health advice.' 
        }])
      }, 1000)
    }
  }

  return (
    <section id="ai-doctor" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Doctor Consultation</h2>
          <p className="text-xl text-gray-600 mb-6">Get instant health advice from our AI-powered medical assistant</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm text-yellow-800">
              <Shield className="inline h-4 w-4 mr-1" />
              <strong>Disclaimer:</strong> This AI Doctor provides general health information and is not a substitute for professional medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.
            </p>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-teal-500" />
              Chat with AI Doctor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs ${
                    message.type === 'user' 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Type your health question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-teal-500 hover:bg-teal-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Diseases Section Component
function DiseasesSection() {
  const diseases = [
    { name: 'Common Cold', icon: <Thermometer className="h-6 w-6" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Flu', icon: <Activity className="h-6 w-6" />, color: 'bg-red-100 text-red-600' },
    { name: 'Diabetes', icon: <Pill className="h-6 w-6" />, color: 'bg-green-100 text-green-600' },
    { name: 'Hypertension', icon: <Heart className="h-6 w-6" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Migraine', icon: <Brain className="h-6 w-6" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Asthma', icon: <Activity className="h-6 w-6" />, color: 'bg-teal-100 text-teal-600' },
    { name: 'Allergies', icon: <Shield className="h-6 w-6" />, color: 'bg-orange-100 text-orange-600' },
    { name: 'Depression', icon: <Brain className="h-6 w-6" />, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Anxiety', icon: <Heart className="h-6 w-6" />, color: 'bg-pink-100 text-pink-600' },
    { name: 'High Cholesterol', icon: <Activity className="h-6 w-6" />, color: 'bg-red-100 text-red-600' },
    { name: 'Arthritis', icon: <Zap className="h-6 w-6" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Back Pain', icon: <Activity className="h-6 w-6" />, color: 'bg-green-100 text-green-600' },
    { name: 'Sinusitis', icon: <Thermometer className="h-6 w-6" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'GERD', icon: <Pill className="h-6 w-6" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Eczema', icon: <Shield className="h-6 w-6" />, color: 'bg-teal-100 text-teal-600' }
  ]

  return (
    <section id="diseases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Diseases & Conditions</h2>
          <p className="text-xl text-gray-600">Comprehensive information on common health conditions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {diseases.map((disease, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 rounded-full ${disease.color} flex items-center justify-center mx-auto mb-3`}>
                  {disease.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{disease.name}</h3>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    Ask AI Doctor
                  </Button>
                  <Button size="sm" className="w-full text-xs bg-teal-500 hover:bg-teal-600">
                    <Stethoscope className="mr-1 h-3 w-3" />
                    Real Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Doctors Section Component
function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. Anya Sharma',
      specialty: 'General Practitioner',
      experience: '10+ years',
      degrees: 'M.B.B.S., M.D. (Internal Medicine)',
      certification: 'Certified by the American Board of Internal Medicine',
      bio: 'Dr. Sharma believes in holistic healthcare and patient-centered treatment approaches.',
      image: doctor1,
      rating: 4.9
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      experience: '15+ years',
      degrees: 'M.D., Ph.D. (Cardiology)',
      certification: 'Board Certified Cardiologist',
      bio: 'Specializing in preventive cardiology and advanced heart disease management.',
      image: doctor2,
      rating: 4.8
    },
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Dermatologist',
      experience: '8+ years',
      degrees: 'M.D. (Dermatology)',
      certification: 'American Board of Dermatology',
      bio: 'Expert in skin health, cosmetic dermatology, and dermatological surgery.',
      image: doctor3,
      rating: 4.9
    },
    {
      name: 'Dr. David Rodriguez',
      specialty: 'Pediatrician',
      experience: '12+ years',
      degrees: 'M.D. (Pediatrics)',
      certification: 'American Board of Pediatrics',
      bio: 'Dedicated to providing comprehensive healthcare for children and adolescents.',
      image: doctor4,
      rating: 4.7
    }
  ]

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect with Our Doctors</h2>
          <p className="text-xl text-gray-600">Consult with certified medical professionals for expert healthcare</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-teal-600 font-medium">{doctor.specialty}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <p>{doctor.degrees}</p>
                      <p className="text-xs">{doctor.certification}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{doctor.bio}</p>
                
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Wellness Shop Component
function WellnessShop() {
  const products = [
    {
      name: 'Organic Hemp Seed Oil',
      description: 'Premium quality organic hemp seed oil for daily wellness and nutrition support.',
      price: '$24.99',
      image: product1,
      rating: 4.5
    },
    {
      name: '10X Health Multivitamin',
      description: 'Complete 34-in-1 methylated multivitamin formula with essential nutrients.',
      price: '$39.99',
      image: product2,
      rating: 4.7
    },
    {
      name: 'Premium Vitamin Complex',
      description: 'High-quality vitamin supplements for optimal health and energy support.',
      price: '$19.99',
      image: product3,
      rating: 4.3
    },
    {
      name: 'Wellness Hair Mask Set',
      description: 'Organic deep hydrating hair mask with natural ingredients for healthy hair.',
      price: '$29.99',
      image: product4,
      rating: 4.6
    },
    {
      name: 'Organic Curl Defining Cream',
      description: 'Natural curl defining cream for beautiful, healthy, and manageable hair.',
      price: '$16.99',
      image: product5,
      rating: 4.4
    }
  ]

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellness Shop</h2>
          <p className="text-xl text-gray-600">Curated selection of premium health and wellness products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-teal-600">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm">
                  <ShoppingBag className="mr-1 h-3 w-3" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-teal-500 mr-2" />
              <span className="text-2xl font-bold">Wellness Leaks</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your digital partner for a healthier life. Connecting you with AI-powered health advice and certified medical professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-teal-400">Home</a></li>
              <li><a href="#ai-doctor" className="hover:text-teal-400">AI Doctor</a></li>
              <li><a href="#diseases" className="hover:text-teal-400">Diseases</a></li>
              <li><a href="#doctors" className="hover:text-teal-400">Doctors</a></li>
              <li><a href="#shop" className="hover:text-teal-400">Shop</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-400">Medical Disclaimer</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest health tips and wellness insights.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Visit Our Blog
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Wellness Leaks. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Shield className="inline h-4 w-4 mr-1" />
            This platform provides general health information and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <KeyFeatures />
      <HealthTips />
      <AIDoctorChat />
      <DiseasesSection />
      <DoctorsSection />
      <WellnessShop />
      <Footer />
    </div>
  )
}

export default App

