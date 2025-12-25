import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your BuildCraft assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickReplies = [
    "Tell me about your services",
    "What's your pricing?",
    "How long does a project take?",
    "Schedule a consultation"
  ];

  const handleSendMessage = (text = null) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return {
        id: messages.length + 2,
        text: "We offer comprehensive remodeling services including kitchen remodeling, bathroom renovation, basement finishing, luxury flooring, painting & drywall, and outdoor living spaces. Which service interests you?",
        sender: 'bot',
        timestamp: new Date()
      };
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return {
        id: messages.length + 2,
        text: "Our pricing varies based on project scope and requirements. We offer free consultations and estimates. Would you like to schedule a free design quote? I can help you get started!",
        sender: 'bot',
        timestamp: new Date()
      };
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('how long') || lowerMessage.includes('duration')) {
      return {
        id: messages.length + 2,
        text: "Project timelines depend on the scope of work. A typical kitchen remodel takes 6-12 weeks, while bathroom renovations usually take 4-8 weeks. We'll provide a detailed timeline during your consultation.",
        sender: 'bot',
        timestamp: new Date()
      };
    }
    
    if (lowerMessage.includes('consultation') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
      return {
        id: messages.length + 2,
        text: "Great! You can schedule a free consultation by filling out our quote form or calling us at (512) 555-0123. Would you like me to take you to the quote form?",
        sender: 'bot',
        timestamp: new Date()
      };
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        id: messages.length + 2,
        text: "Hello! Welcome to BuildCraft Home Solutions. I'm here to help answer any questions about our remodeling services. What would you like to know?",
        sender: 'bot',
        timestamp: new Date()
      };
    }
    
    // Default response
    return {
      id: messages.length + 2,
      text: "That's a great question! Our team would be happy to discuss this with you in detail. Would you like to schedule a free consultation or get a quote? You can also call us at (512) 555-0123.",
      sender: 'bot',
      timestamp: new Date()
    };
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-accent-orange text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-green rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-32 md:bottom-24 right-6 z-50 w-[calc(100vw-3rem)] md:w-96 h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-navy-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-accent-orange p-2 rounded-lg">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">BuildCraft Assistant</h3>
                  <p className="text-xs text-navy-300">We're here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent-orange transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-navy-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        message.sender === 'user'
                          ? 'bg-accent-orange text-white'
                          : 'bg-navy-900 text-white'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-accent-orange text-white'
                          : 'bg-white text-navy-900 shadow-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-6 pb-4 space-y-2">
                <p className="text-xs text-navy-500 font-medium uppercase tracking-wider">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-white border border-navy-200 text-navy-700 px-3 py-1.5 rounded-full hover:bg-navy-50 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-navy-50 border-0 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-accent-orange text-white p-3 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

