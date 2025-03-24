import React from 'react';
import { ArrowRight, FileText, Shield, Brain, BarChart3, MessageSquareText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold">FinWise</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button className="hover:text-emerald-400 transition">HOME</button>
            <button className="hover:text-emerald-400 transition">TAX OPTIMIZATION</button>
            <button className="hover:text-emerald-400 transition">AUDIT ASSISTANCE</button>
            <button className="hover:text-emerald-400 transition">TAX FILING</button>
            <button className="hover:text-emerald-400 transition">AI CHATBOT</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simplify Your Tax Filing with AI-Powered Assistance
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Navigate Indian tax laws effortlessly with our intelligent tax optimization platform. Save money, time, and stay compliant.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
                alt="Tax Planning"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Tax Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-emerald-500" />}
              title="AI-Powered Tax Optimization"
              description="Get personalized tax-saving strategies based on your financial profile and latest tax laws."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-emerald-500" />}
              title="Audit Assistance"
              description="Stay prepared with automated audit trails and expert guidance for compliance."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-emerald-500" />}
              title="Real-time Analytics"
              description="Track your tax savings and get insights into your financial health."
            />
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Upload Documents</h2>
          <p className="text-gray-600 mb-8">
            Securely upload your financial documents for quick analysis and processing
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 bg-white">
            <div className="flex flex-col items-center">
              <FileText className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500 mb-2">Drag and drop files here</p>
              <p className="text-gray-400 mb-4">- OR -</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition">
                Browse Files
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot CTA */}
      <div className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <MessageSquareText className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Need Help? Ask Our AI Tax Expert</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get instant answers to your tax-related queries with our AI-powered chatbot
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;