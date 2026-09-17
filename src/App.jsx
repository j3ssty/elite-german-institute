import "./App.css";
function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">ELITE GERMAN INSTITUTE</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
  <div className="hero-content">

    <p className="small-title">
      ELITE GERMAN INSTITUTE
    </p>

    <h1>
      Learn German.
      <br />
      Open New Opportunities.
    </h1>

    <p>
      Build your German language skills with professional
      courses from A1 to B2. Online and physical classes
      are available.
    </p>

    <div className="hero-buttons">

      <a
        href="https://wa.me/254741331186"
        target="_blank"
        rel="noreferrer"
        className="primary-btn"
      >
        Book Now
      </a>

      <a href="#courses" className="secondary-btn">
        View Courses
      </a>

    </div>

  </div>

  <div className="hero-image">
    <img
      src="/profile.jpg"
      alt="Elite German Institute"
    />
  </div>
</section>
<section id="about" className="about-section">
  <div className="about-container">

    <div className="about-text">

      <p className="section-label">
        ABOUT ELITE GERMAN INSTITUTE
      </p>

      <h2>
        Learn German With Confidence
      </h2>

      <p>
        Elite German Institute is dedicated to helping students
        develop practical German language skills through structured
        and engaging learning.
      </p>

      <p>
        We offer German language courses from A1 to B2, providing
        learners with a clear path to improve their communication
        skills step by step.
      </p>

      <p>
        Students can choose between online and physical classes
        depending on their learning needs.
      </p>

      <a href="#courses" className="primary-btn">
        Explore Our Courses
      </a>

    </div>

    <div className="about-card">

      <div className="about-icon">🇩🇪</div>

      <h3>
        Online & Physical Classes
      </h3>

      <p>
        Learn German in a learning environment that works for you,
        whether online or through physical classes.
      </p>

    </div>

  </div>
</section>
<section id="courses" className="courses-section">
  <div className="section-heading">
    <p className="section-label">GERMAN LANGUAGE COURSES</p>

    <h2>Choose Your German Level</h2>

    <p>
      Learn German step by step with courses from A1 to B2.
      Online and physical classes are available.
    </p>
  </div>

  <div className="course-grid">

    <div className="course-card">
      <div className="level">A1</div>

      <h3>German Beginner</h3>

      <div className="course-duration">
        Duration: <strong>1½ Months</strong>
      </div>

      <p>
        Start your German journey by building a strong foundation
        in basic German language skills.
      </p>

      <a href="#contact">Book Now →</a>
    </div>


    <div className="course-card">
      <div className="level">A2</div>

      <h3>German Elementary</h3>

      <div className="course-duration">
        Duration: <strong>1½ Months</strong>
      </div>

      <p>
        Continue developing your German skills and become more
        comfortable with everyday communication.
      </p>

      <a href="#contact">Book Now →</a>
    </div>


    <div className="course-card featured">
      <div className="level">B1</div>

      <h3>German Intermediate</h3>

      <div className="course-duration">
        Duration: <strong>2 Months</strong>
      </div>

      <p>
        Strengthen your German communication skills and improve
        your confidence in speaking and understanding German.
      </p>

      <a href="#contact">Book Now →</a>
    </div>


    <div className="course-card">
      <div className="level">B2</div>

      <h3>German Upper Intermediate</h3>

      <div className="course-duration">
        Duration: <strong>2½ Months</strong>
      </div>

      <p>
        Develop stronger German language skills and communicate
        more confidently in different situations.
      </p>

      <a href="#contact">Book Now →</a>
    </div>

  </div>
</section>
<section className="tips-section">
  <div className="section-heading">
    <p className="section-label">GERMAN LEARNING TIPS</p>

    <h2>Start Learning German</h2>

    <p>
      Simple tips to help you build your German language
      skills step by step.
    </p>
  </div>

  <div className="tips-grid">

    <div className="tip-card">
      <div className="tip-number">01</div>

      <h3>Learn Basic Vocabulary</h3>

      <p>
        Start with common German words and phrases that
        you can use in everyday conversations.
      </p>
    </div>

    <div className="tip-card">
      <div className="tip-number">02</div>

      <h3>Practice Speaking</h3>

      <p>
        Regular speaking practice can help you become more
        comfortable and confident using German.
      </p>
    </div>

    <div className="tip-card">
      <div className="tip-number">03</div>

      <h3>Be Consistent</h3>

      <p>
        Regular practice and attending lessons can help
        you gradually improve your German skills.
      </p>
    </div>

  </div>
</section>
<section className="why-section">
  <div className="section-heading">
    <p className="section-label">WHY LEARN GERMAN?</p>

    <h2>More Than Just a Language</h2>

    <p>
      Learning German can help you communicate confidently,
      explore new opportunities and connect with German-speaking culture.
    </p>
  </div>

  <div className="benefits-grid">
    <div className="benefit-card">
      <div className="benefit-icon">🎓</div>
      <h3>Education</h3>
      <p>
        Develop German language skills that can support your
        educational goals.
      </p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">💼</div>
      <h3>Career</h3>
      <p>
        Build language skills that can be useful in professional
        and international environments.
      </p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">✈️</div>
      <h3>Travel</h3>
      <p>
        Communicate more comfortably when visiting German-speaking
        countries.
      </p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">🌍</div>
      <h3>Culture</h3>
      <p>
        Discover German-speaking culture through language and
        communication.
      </p>
    </div>
  </div>
</section>
<section className="teaching-section">
  <div className="teaching-container">

    <div className="teaching-intro">
      <p className="section-label">WHY CHOOSE US</p>

      <h2>
        A Structured Approach to Learning German
      </h2>

      <p>
        At Elite German Institute, learners progress through
        structured German language courses designed to develop
        their skills step by step from A1 to B2.
      </p>
    </div>

    <div className="teaching-points">

      <div className="teaching-point">
        <span>01</span>

        <div>
          <h3>Structured Courses</h3>

          <p>
            Follow a clear learning path through the German
            language levels from A1 to B2.
          </p>
        </div>
      </div>


      <div className="teaching-point">
        <span>02</span>

        <div>
          <h3>Flexible Learning</h3>

          <p>
            Choose between online and physical classes based
            on your preferred learning environment.
          </p>
        </div>
      </div>


      <div className="teaching-point">
        <span>03</span>

        <div>
          <h3>Progress Step by Step</h3>

          <p>
            Develop your German language skills progressively
            as you move through the different course levels.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="cta-section">
  <div className="cta-content">
    <p className="section-label">START YOUR JOURNEY</p>

    <h2>Ready to Start Learning German?</h2>

    <p>
      Take the first step toward improving your German language
      skills and communicating with confidence.
    </p>

    <a href="#contact" className="cta-btn">
      Get Started
    </a>
  </div>
</section>
<section className="testimonials-section">
  <div className="section-heading">
    <p className="section-label">STUDENT FEEDBACK</p>

    <h2>What Students Say</h2>

    <p>
      A few words from students about their German learning experience.
    </p>
  </div>

  <div className="testimonial-grid">
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>

      <p>
        "The lessons are easy to understand and I became much more
        confident speaking German."
      </p>

      <h4>— Student A</h4>
    </div>

    <div className="testimonial-card">
      <div className="stars">★★★★★</div>

      <p>
        "I really enjoy the practical approach. German grammar is
        much easier for me now."
      </p>

      <h4>— Student B</h4>
    </div>

    <div className="testimonial-card">
      <div className="stars">★★★★★</div>

      <p>
        "The lessons are engaging and the explanations are very clear."
      </p>

      <h4>— Student C</h4>
    </div>
  </div>
</section>
<section className="faq-section">
  <div className="section-heading">
    <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>

    <h2>Have Questions?</h2>

    <p>
      Here are some common questions about learning German
      at Elite German Institute.
    </p>
  </div>

  <div className="faq-container">

    <div className="faq-item">
      <h3>Which German levels do you offer?</h3>
      <p>
        We offer German language courses from A1 to B2.
      </p>
    </div>

    <div className="faq-item">
      <h3>How long does each course take?</h3>
      <p>
        A1 takes 1½ months, A2 takes 1½ months,
        B1 takes 2 months, and B2 takes 2½ months.
      </p>
    </div>

    <div className="faq-item">
      <h3>Are online classes available?</h3>
      <p>
        Yes. Elite German Institute offers both online
        and physical classes.
      </p>
    </div>

    <div className="faq-item">
      <h3>Can I contact the institute before enrolling?</h3>
      <p>
        Yes. You can contact the institute through WhatsApp
        or email to ask about the courses.
      </p>
    </div>

  </div>
</section>
<section id="contact" className="contact-section">
  <div className="contact-container">

    <div className="contact-info">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h2>
        Start Your German Learning Journey
      </h2>

      <p>
        Interested in learning German? Contact Elite German
        Institute to find out more about our courses and
        available classes.
      </p>

      <div className="contact-details">

        <div className="contact-item">
          <span>📱</span>

          <div>
            <h4>WhatsApp / Phone</h4>
            <p>+254 741 331 186</p>
          </div>
        </div>

        <div className="contact-item">
          <span>✉️</span>

          <div>
            <h4>Email</h4>
            <p>instituteelitegerman@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <span>🎓</span>

          <div>
            <h4>Classes Available</h4>
            <p>Online & Physical Classes</p>
          </div>
        </div>

        <div className="contact-item">
          <span>🎵</span>

          <div>
            <h4>TikTok</h4>
            <p>@germaninstitute1</p>
          </div>
        </div>

      </div>

    </div>


    <div className="contact-card">

      <h3>
        Have Questions?
      </h3>

      <p>
        Get in touch with Elite German Institute directly
        through WhatsApp and ask about our German courses.
      </p>

      <a
        href="https://wa.me/254741331186"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        Chat on WhatsApp
      </a>

    </div>

  </div>
</section>
<footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">
      <h3>Elite German Institute</h3>

      <p>
        German language courses from A1 to B2.
      </p>

      <p>
        Online & Physical Classes Available
      </p>
    </div>


    <div className="footer-links">

      <a href="#home">Home</a>

      <a href="#about">About</a>

      <a href="#courses">Courses</a>

      <a href="#contact">Contact</a>

    </div>


    <div className="footer-contact">

      <p>📱 +254 741 331 186</p>

      <p>✉️ instituteelitegerman@gmail.com</p>

      <p>🎵 @germaninstitute1</p>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Elite German Institute. All rights reserved.
    </p>

  </div>

</footer>
    </div>
  );
}

export default App;