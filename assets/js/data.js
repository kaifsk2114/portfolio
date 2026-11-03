/*
 * PORTFOLIO CONTENT — START HERE
 * Edit the text in this file to personalize the entire site.
 * Replace empty social/resume/image links only when you have real public URLs.
 * Projects and articles are editable starting points: verify every detail before publishing.
 */
window.PORTFOLIO = {
  name: 'Kaif Shaikh',
  initials: 'KS',
  eyebrow: 'ENGINEER  /  MAKER  /  PROBLEM SOLVER',
  headline: 'Turning ideas into things that work.',
  role: 'Electronics Engineer · Embedded Systems & Automation',
  intro: 'I work at the intersection of electronics, embedded systems, and industrial automation—designing practical solutions, studying how things work, and building better versions.',
  aboutIntro: 'My interests span embedded electronics, industrial automation, product development, and the thoughtful engineering that connects them. I enjoy taking a complex system apart, understanding its logic, and putting it back together with purpose.',
  philosophy: 'A good idea becomes valuable when it works reliably in the real world.',
  location: 'Pune, India', // Change or remove if desired; do not include a street address.
  email: '',               // e.g. 'hello@example.com' (leave empty to hide email link)
  github: '',              // e.g. 'https://github.com/username'
  linkedin: '',            // e.g. 'https://www.linkedin.com/in/username/'
  youtubeVideo: '',        // 2–5 minute introduction video URL for assignment
  resume: '',              // e.g. 'assets/resume.pdf', after adding your PDF
  avatar: '',              // e.g. 'assets/images/profile.jpg' (optional)
  availability: 'Open to engineering conversations & collaboration',
  education: [
    { degree: 'B.E. in Electronics & Telecommunication', school: 'Sinhgad Academy of Engineering · SPPU', note: 'Engineering' },
    { degree: 'Embedded Systems Training', school: 'Vector Institute · Hyderabad', note: 'Specialized training' },
    { degree: 'Diploma in Electronics & Telecommunication', school: 'PCP College', note: 'Diploma' }
  ],
  skillGroups: [
    { title: 'Embedded & Electronics', skills: ['Microcontrollers', 'C / C++', 'Sensors & Interfaces', 'Circuit Analysis', 'PCB Design'] },
    { title: 'Automation & Control', skills: ['PLC Ladder Logic', 'HMI Development', 'Pneumatics', 'Motor Control', 'Industrial I/O'] },
    { title: 'Tools & Workflow', skills: ['KiCad', 'EasyEDA', 'WPLSoft', 'DOPSoft', 'Logic Analyzer', 'Oscilloscope'] }
  ],
  projects: [
    {
      id: 'chess-board', number: '01', category: 'embedded', categoryLabel: 'Embedded Systems', title: 'The Thinking Board', subtitle: 'Automated Chess Board',
      short: 'A physical chessboard that uses an XY mechanism and electromagnet to move pieces, bringing software decisions into the real world.',
      problem: 'How can a traditional board game be turned into an interactive electromechanical system?',
      solution: 'A Core-XY-style motion platform positions an electromagnet beneath the board. A microcontroller coordinates motion and the gameplay interface.',
      stack: ['Arduino Nano', 'Stepper Motors', 'A4988', 'Reed Switches', 'C / C++'],
      outcome: 'Designed as a final-year engineering project combining motion control, sensing, and game logic.',
      github: '', image: ''
    },
    {
      id: 'press-fit', number: '02', category: 'automation', categoryLabel: 'Industrial Automation', title: 'Press-Fit Automation', subtitle: 'PLC-Controlled Assembly Cell',
      short: 'A linear pneumatic concept for feeding, placing, pressing, inspecting, and sorting assembled components.',
      problem: 'How can a repetitive manual press-fit operation become more consistent and traceable?',
      solution: 'A Delta PLC sequences part detection, cylinder movement, press dwell, vision inspection, and OK/NG handling, with HMI monitoring.',
      stack: ['Delta PLC', 'WPLSoft', 'HMI', 'Pneumatics', 'Machine Vision'],
      outcome: 'Developed the control sequence, I/O mapping, and ladder-logic workflow for the machine.',
      github: '', image: ''
    },
    {
      id: 'desk-controller', number: '03', category: 'research', categoryLabel: 'Electronics Research', title: 'Intelligent Desk Control', subtitle: 'Height-Adjustable Table Study',
      short: 'Studying a dual-motor desk system to understand motion feedback, PWM drive, balance, and obstacle detection.',
      problem: 'How can two actuators move in sync while responding safely to obstacles and uneven movement?',
      solution: 'Investigated Hall feedback, relay direction control, PWM motor drive, and accelerometer-based movement detection.',
      stack: ['Motor Control', 'PWM', 'Hall Sensors', 'Accelerometer', 'Oscilloscope'],
      outcome: 'Documented controller behavior and explored an embedded control architecture for testing.',
      github: '', image: ''
    },
    {
      id: 'air-purifier', number: '04', category: 'embedded', categoryLabel: 'Product Electronics', title: 'Smart Air Purifier', subtitle: 'Electronic System Architecture',
      short: 'An electronics architecture study covering air-quality sensing, fan control, user interface, and power distribution.',
      problem: 'What does it take to integrate sensing, airflow, power, and connectivity into a practical air-purification product?',
      solution: 'Mapped the AC-to-DC power chain, sensor interfaces, microcontroller signals, fan drive, and filter-life measurement approaches.',
      stack: ['PM2.5 Sensors', 'I²C / UART', 'BLDC Fan', 'Power Design', 'System Diagrams'],
      outcome: 'Prepared component comparisons and system-level signal and power architecture.',
      github: '', image: ''
    }
  ],
  blogs: [
    {
      id: 'automation-lesson', category: 'Engineering Notes', readTime: '4 MIN READ', date: 'DRAFT · EDIT BEFORE PUBLISHING',
      title: 'What an automation cycle taught me about good engineering',
      excerpt: 'Thinking beyond movement: the small checks that make a machine dependable.',
      paragraphs: [
        'When I first started thinking about an automated assembly machine, it was tempting to focus only on the visible actions: pick up a component, move it into position, press it into place, and repeat. But the real engineering questions appeared between those steps. What happens if a part never arrives? What if a cylinder is still moving? How should the system respond when inspection fails?',
        'Mapping the cycle into distinct states made the problem much clearer. Each movement needed a reason to begin and a signal to confirm completion. Sensors were not just accessories; they were the evidence the controller needed before taking the next action. I also began to appreciate the role of interlocks, stop conditions, and clear operator feedback in making a system predictable.',
        'The biggest lesson was that automation is not simply making something move without a person. It is designing a sequence that remains understandable when something goes wrong. A reliable machine needs useful error information, safe behavior, and a process that can be tested one step at a time. That way of thinking now influences how I approach every control-system project.'
      ],
      image: ''
    },
    {
      id: 'reverse-engineering', category: 'Learning Journal', readTime: '4 MIN READ', date: 'DRAFT · EDIT BEFORE PUBLISHING',
      title: 'Why studying an existing circuit can be as valuable as building one',
      excerpt: 'A closer look at what measurements, signals, and unexpected behavior can teach us.',
      paragraphs: [
        'There is a particular kind of curiosity that begins when a familiar product is opened up. Suddenly a simple function—such as moving a table up and down—becomes a collection of decisions made by the designer. There are sensors, drivers, protection components, timing choices, and communication signals, each solving a different part of the same problem.',
        'While studying motor-control electronics, I learned to resist the urge to guess what a component was doing based on its appearance alone. A circuit diagram, a multimeter reading, and an oscilloscope waveform each tell a different part of the story. When those pieces agree, the system starts to make sense. When they do not, that difference becomes the next useful question.',
        'This process also changed how I think about product development. Reverse engineering is not about copying a board; it is about understanding the trade-offs behind it. Why choose one form of feedback over another? How is protection implemented? Which parts of the design are essential, and which can be simplified? Careful observation leads to better questions, and better questions lead to stronger designs.'
      ],
      image: ''
    }
  ]
};
