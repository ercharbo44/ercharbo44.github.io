import React, { useState } from 'react';
import { Zap, Sparkles, Rocket, Code, Copy, Check } from 'lucide-react';

const EricProBrandShowcase = () => {
  const [activeSection, setActiveSection] = useState('colors');
  const [copiedItem, setCopiedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const brandColors = {
    base: [
      { name: 'Deep Navy', hex: '#0a0e27', rgb: 'rgb(10, 14, 39)', usage: 'Primary backgrounds' },
      { name: 'Pure White', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', usage: 'Text on dark' },
      { name: 'Steel Gray', hex: '#8892b0', rgb: 'rgb(136, 146, 176)', usage: 'Secondary text' },
      { name: 'Slate', hex: '#2d3748', rgb: 'rgb(45, 55, 72)', usage: 'Card backgrounds' },
    ],
    neon: [
      { name: 'Electric Cyan', hex: '#00f0ff', rgb: 'rgb(0, 240, 255)', usage: 'Primary CTAs', glow: 'rgba(0, 240, 255, 0.5)' },
      { name: 'Neon Purple', hex: '#b537ff', rgb: 'rgb(181, 55, 255)', usage: 'Interactive elements', glow: 'rgba(181, 55, 255, 0.5)' },
      { name: 'Hot Pink', hex: '#ff006e', rgb: 'rgb(255, 0, 110)', usage: 'Emphasis', glow: 'rgba(255, 0, 110, 0.5)' },
      { name: 'Laser Green', hex: '#39ff14', rgb: 'rgb(57, 255, 20)', usage: 'Success states', glow: 'rgba(57, 255, 20, 0.5)' },
      { name: 'Neon Orange', hex: '#ff6b35', rgb: 'rgb(255, 107, 53)', usage: 'Warnings', glow: 'rgba(255, 107, 53, 0.5)' },
    ]
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const NeonButton = ({ children, color, onClick, style = {} }) => (
    <button
      onClick={onClick}
      style={{
        background: color,
        color: '#ffffff',
        border: 'none',
        padding: '14px 32px',
        borderRadius: '8px',
        fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
        fontWeight: '600',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: `0 0 20px ${color}80, 0 4px 12px rgba(0,0,0,0.4)`,
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${color}, 0 0 50px ${color}60, 0 6px 20px rgba(0,0,0,0.5)`;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${color}80, 0 4px 12px rgba(0,0,0,0.4)`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );

  const ColorCard = ({ color, isNeon }) => {
    const isLight = color.hex === '#ffffff';
    const isCopied = copiedItem === color.name;
    
    return (
      <div
        style={{
          background: isNeon 
            ? `linear-gradient(135deg, ${color.hex}20 0%, #2d3748 100%)`
            : color.hex === '#ffffff' ? '#f8f9fa' : color.hex,
          border: isNeon 
            ? `2px solid ${color.hex}` 
            : isLight ? '2px solid #2d3748' : '2px solid #00f0ff40',
          borderRadius: '12px',
          padding: '24px',
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: isNeon 
            ? `0 0 20px ${color.glow || 'rgba(0,0,0,0.2)'}, 0 4px 12px rgba(0,0,0,0.3)`
            : '0 4px 12px rgba(0,0,0,0.2)',
        }}
        onMouseEnter={(e) => {
          if (isNeon) {
            e.currentTarget.style.boxShadow = `0 0 40px ${color.glow}, 0 0 60px ${color.glow}, 0 8px 20px rgba(0,0,0,0.4)`;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }
        }}
        onMouseLeave={(e) => {
          if (isNeon) {
            e.currentTarget.style.boxShadow = `0 0 20px ${color.glow}, 0 4px 12px rgba(0,0,0,0.3)`;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{
              color: isLight ? '#0a0e27' : '#ffffff',
              fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
              fontSize: '20px',
              fontWeight: '700',
              margin: 0
            }}>
              {color.name}
            </h3>
            {isNeon && <Zap size={20} color={color.hex} />}
          </div>
          <p style={{
            color: isLight ? '#8892b0' : '#8892b0',
            fontSize: '14px',
            margin: '0 0 8px 0',
            fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif'
          }}>
            {color.usage}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={() => copyToClipboard(color.hex, color.name)}
            style={{
              background: isLight ? '#0a0e2720' : '#ffffff15',
              border: isLight ? '1px solid #0a0e2740' : '1px solid #ffffff25',
              borderRadius: '6px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: '600',
              color: isLight ? '#0a0e27' : '#ffffff'
            }}
          >
            <span>{color.hex}</span>
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <button
            onClick={() => copyToClipboard(color.rgb, color.name + '-rgb')}
            style={{
              background: isLight ? '#0a0e2710' : '#ffffff08',
              border: isLight ? '1px solid #0a0e2730' : '1px solid #ffffff15',
              borderRadius: '6px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: isLight ? '#8892b0' : '#8892b0'
            }}
          >
            <span>{color.rgb}</span>
            {copiedItem === color.name + '-rgb' ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0e27',
      fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
      color: '#ffffff'
    }}>
      {/* Hero Header with Animated Gradient */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1e3f 50%, #0a0e27 100%)',
        padding: '80px 32px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '3px solid #00f0ff'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(181, 55, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <Rocket size={48} color="#00f0ff" />
            <h1 style={{
              fontSize: '56px',
              fontWeight: '800',
              margin: 0,
              background: 'linear-gradient(135deg, #00f0ff 0%, #b537ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}>
              EricPro Brand
            </h1>
          </div>
          <p style={{
            fontSize: '22px',
            color: '#8892b0',
            maxWidth: '700px',
            lineHeight: '1.6',
            margin: 0
          }}>
            Modern professional identity with vibrant neon aesthetics. Built for the digital age.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        background: '#2d3748',
        borderBottom: '1px solid #00f0ff40',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'colors', label: 'Colors', icon: Sparkles },
              { id: 'components', label: 'Components', icon: Code },
              { id: 'showcase', label: 'Showcase', icon: Zap }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  style={{
                    background: isActive ? '#00f0ff20' : 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '3px solid #00f0ff' : '3px solid transparent',
                    color: isActive ? '#00f0ff' : '#8892b0',
                    padding: '20px 24px',
                    fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? `0 0 20px rgba(0, 240, 255, 0.3)` : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#00f0ff';
                      e.currentTarget.style.background = '#00f0ff10';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#8892b0';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        
        {/* Colors Section */}
        {activeSection === 'colors' && (
          <div>
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                Base Colors
              </h2>
              <p style={{ color: '#8892b0', fontSize: '16px', marginBottom: '32px' }}>
                Foundation palette for backgrounds and text hierarchy
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {brandColors.base.map(color => (
                  <ColorCard key={color.name} color={color} isNeon={false} />
                ))}
              </div>
            </div>

            <div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #00f0ff 0%, #ff006e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px'
              }}>
                Neon Accents
              </h2>
              <p style={{ color: '#8892b0', fontSize: '16px', marginBottom: '32px' }}>
                Vibrant, high-energy colors for interactive elements and highlights
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {brandColors.neon.map(color => (
                  <ColorCard key={color.name} color={color} isNeon={true} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Components Section */}
        {activeSection === 'components' && (
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '12px'
            }}>
              UI Components
            </h2>
            <p style={{ color: '#8892b0', fontSize: '16px', marginBottom: '48px' }}>
              Buttons, cards, and elements with neon glow effects
            </p>

            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ color: '#00f0ff', fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
                Neon Buttons
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <NeonButton color="#00f0ff">Electric Cyan</NeonButton>
                <NeonButton color="#b537ff">Neon Purple</NeonButton>
                <NeonButton color="#ff006e">Hot Pink</NeonButton>
                <NeonButton color="#39ff14">Laser Green</NeonButton>
                <NeonButton color="#ff6b35">Neon Orange</NeonButton>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#b537ff', fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
                Feature Cards
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px'
              }}>
                {[
                  { title: 'Blazing Fast', desc: 'Lightning-speed performance', color: '#00f0ff', icon: Zap },
                  { title: 'Modern Design', desc: 'Contemporary aesthetics', color: '#b537ff', icon: Sparkles },
                  { title: 'Developer First', desc: 'Built for professionals', color: '#ff006e', icon: Code }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        background: '#2d3748',
                        border: `2px solid ${item.color}`,
                        borderRadius: '12px',
                        padding: '32px',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        boxShadow: `0 0 20px ${item.color}40`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 40px ${item.color}80, 0 0 60px ${item.color}40`;
                        e.currentTarget.style.transform = 'translateY(-8px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${item.color}40`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{
                        width: '56px',
                        height: '56px',
                        background: `${item.color}20`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: `0 0 20px ${item.color}60`
                      }}>
                        <Icon size={28} color={item.color} />
                      </div>
                      <h4 style={{
                        color: '#ffffff',
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '8px'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: '#8892b0',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Showcase Section */}
        {activeSection === 'showcase' && (
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00f0ff 0%, #b537ff 50%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px'
            }}>
              Brand in Action
            </h2>
            <p style={{ color: '#8892b0', fontSize: '16px', marginBottom: '48px' }}>
              Complete examples showing the EricPro aesthetic
            </p>

            {/* Hero Example */}
            <div style={{
              background: 'linear-gradient(135deg, #0a0e27 0%, #2d3748 100%)',
              border: '3px solid #00f0ff',
              borderRadius: '16px',
              padding: '60px',
              marginBottom: '32px',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.3), 0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(181, 55, 255, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />
              <h3 style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                Welcome to the Future
              </h3>
              <p style={{
                fontSize: '20px',
                color: '#8892b0',
                lineHeight: '1.7',
                marginBottom: '32px',
                maxWidth: '600px',
                position: 'relative',
                zIndex: 1
              }}>
                Experience cutting-edge design with neon-infused aesthetics. Built for professionals who demand excellence.
              </p>
              <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
                <NeonButton color="#00f0ff">Get Started</NeonButton>
                <button style={{
                  background: 'transparent',
                  border: '2px solid #b537ff',
                  color: '#b537ff',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 0 20px rgba(181, 55, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#b537ff';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(181, 55, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#b537ff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(181, 55, 255, 0.3)';
                }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {[
                { value: '99.9%', label: 'Uptime', color: '#39ff14' },
                { value: '<10ms', label: 'Response', color: '#00f0ff' },
                { value: '24/7', label: 'Support', color: '#b537ff' },
                { value: '∞', label: 'Possibilities', color: '#ff006e' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: '#2d3748',
                    border: `2px solid ${stat.color}40`,
                    borderRadius: '12px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = stat.color;
                    e.currentTarget.style.boxShadow = `0 0 30px ${stat.color}60`;
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${stat.color}40`;
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    fontSize: '42px',
                    fontWeight: '800',
                    color: stat.color,
                    marginBottom: '8px',
                    fontFamily: 'Space Grotesk, monospace'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#8892b0',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        background: '#0a0e27',
        borderTop: '2px solid #00f0ff40',
        padding: '40px 32px',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#8892b0',
          fontSize: '14px',
          margin: 0
        }}>
          EricPro Brand Guidelines • Click any color to copy • Made with{' '}
          <span style={{ color: '#ff006e' }}>♥</span> and neon
        </p>
      </div>
    </div>
  );
};

export default EricProBrandShowcase;
