import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container about-container">
        <div className="about-image">
          <img
            src={aboutImage}
            alt="Corporate Team Meeting"
          />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="about-content">
          <h2>Why Choose NovaDashboard?</h2>
          <p className="lead">We combine industry expertise with innovative thinking to deliver measurable results.</p>
          <p>At NovaDashboard, we believe that every business has the potential to achieve greatness. Our team of experienced consultants works closely with you to understand your unique challenges and develop tailored solutions that drive growth and efficiency.</p>

          <ul className="feature-list">
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Data-driven decision making</span>
            </li>
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Global network of experts</span>
            </li>
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Customized strategic planning</span>
            </li>
            <li>
              <CheckCircle size={20} className="check-icon" />
              <span>Proven track record of success</span>
            </li>
          </ul>

          <button className="btn btn-primary">Meet Our Team</button>
        </div>
      </div>

      <style>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .about-image img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }
        .experience-badge {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .years {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
        }
        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .lead {
          font-size: 1.25rem;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .about-content p {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }
        .feature-list {
          list-style: none;
          margin-bottom: 2.5rem;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        .check-icon {
          color: var(--color-accent);
        }

        @media (min-width: 992px) {
          .about-container {
            grid-template-columns: 1fr 1fr;
          }
          .about-image {
            order: 2;
          }
          .about-content {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
