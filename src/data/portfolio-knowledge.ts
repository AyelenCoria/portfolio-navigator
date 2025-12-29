// =============================================================================
// PORTFOLIO KNOWLEDGE BASE TEMPLATE
// =============================================================================
// This file contains detailed information about your experience, projects, and skills
// that the AI assistant will reference during conversations.
// Replace ALL PLACEHOLDER TEXT with your actual information.

export const PORTFOLIO_KNOWLEDGE = {
  
  // =============================================================================
  // PERSONAL INFORMATION
  // =============================================================================
  personal: {
    name: "Ayelén Coria",
    title: "UX/UI Designer",
    location: "Paris, France",
    email: "[hello.ayelencoria@gmail.com.com]",
    linkedin: "www.linkedin.com/in/ayelencoria",
    Medium: "https://medium.com/@rayelencoria", // if applicable
    portfolio: "https://ayelencoria.framer.website/", // if applicable
    
    // Brief elevator pitch - 2-3 sentences about who you are
    elevator_pitch: `
    [Write a compelling 2-3 sentence summary of who you are professionally. 
    Example: "I'm a Franco-Argentinian UX/UI Designer creating empathetic digital products thought user-centered design"]
    `,
    
    // Your professional values and what drives you
    values: [
      "User-centered design and data driven decision-making",
      "Continuous learning and multidisciplinary thinking", 
      "Clear communication and cross-functional collaboration"
    ],
    
    // What you're passionate about in your field
    passions: [
      "Research-driven product design and understanding user behavior in context",
      "Accessibility and inclusive design",
      "Design systems and creating clear visual structures"
    ]
  },

  // =============================================================================
  // WORK EXPERIENCE
  // =============================================================================
  experience: {
    current_role: {
      title: "UX/UI Designer & Digital Marketing Specialist",
      company: "Freelancer", 
      duration: "2024 - Present",
      location: "Remote",
      
  description: `
    As a freelance UX/UI Designer and Digital Marketing Specialist, I design digital products for web and mobile that prioritize clarity, accessibility, and user-centered thinking. I work across research, strategy, and interface design: conducting user interviews and UX audits, building information architecture, designing wireframes, flows, and high-fidelity prototypes, and creating scalable design systems. I also support clients with content strategy, SEO, and visual communication to ensure consistency across touchpoints.
  `,
},
      
      key_achievements: [
        "Created and documented reusable design systems with tokens, style guides, and scalable UI patterns",
        "Delivered UX audits and heuristic evaluations that improved usability and clarified product strategy",
        "Redesigned web experiences and mobile interfaces that enhanced clarity, accessibility, and user satisfaction"
      ],
      
      technologies: [
        // List relevant technologies, tools, or methodologies
        "Figma",
        "Miro", 
        "Maze",
"WordPress",
"Framer",
"Salerforce",
"Asana",
"Zapier",
"HTML/CSS (basic)",
"AI tools (ChatGPT, Claude, Perplexity, Lovable, MagicPath)"
      ]
    },
    
previous_roles: [
  "Before transitioning fully into UX/UI, Ayelén worked for several years in education and research. She taught History and Political Science in international schools and universities, led student research projects, and collaborated in academic environments. This background shaped her analytical thinking, communication clarity, and human-centered design approach.",
  "Her background in Political Science and History enriches her design practice, something she explores in depth in her Medium article about why political sciences make her a better UX/UI designer."
],



  // =============================================================================
  // FEATURED PROJECTS
  // =============================================================================
    projects: {
    featured: [
      {
        name: "Hydra — Global Design System for La Roche-Posay",
        type: "Design System Case Study",
        company: "La Roche-Posay (L’Oréal Group)",
        timeframe: "2024",
        role: "UX/UI Designer",
        overview: `
Hydra is the global Design System I created for La Roche-Posay after uncovering severe fragmentation across their French and Spanish websites.
Through a full audit and heuristic analysis, I identified major accessibility gaps and inconsistencies that weakened the brand’s digital identity.
Hydra unifies components, foundations, and guidelines into a scalable system aligned with accessibility and global brand coherence.
        `,
        challenge: `
La Roche-Posay’s digital ecosystem was fragmented across markets: each country used different colors, typography, components, and UX patterns.
Core elements like primary CTAs failed WCAG contrast requirements, creating accessibility and usability issues for millions of users worldwide.
This fragmentation made the brand feel inconsistent, weakened trust, and increased design and development inefficiency across local teams.
        `,
        solution: `
I conducted a full audit and heuristic evaluation using Nielsen’s principles, mapping inconsistencies in color, typography, hierarchy, and component behavior.
A key design decision was separating brand color from functional UI after discovering the iconic blue failed WCAG contrast when used in CTAs.
I introduced an accessible dark CTA color, redefined foundations (color, type, grid, spacing), and built Hydra using Atomic Design, design tokens,
AutoLayout, and comprehensive documentation. This created a unified, scalable, and accessibility-first Design System for all markets.
        `,
        your_role: `
I led the project end-to-end: audit, heuristic analysis, accessibility exploration, creation of foundations, component architecture, and documentation.
I designed tokens, atoms, molecules, organisms, templates, and pages, and defined the global rules for accessibility and visual consistency.
I collaborated with another designer reviewing market differences and aligning structure across locales.
        `,
        technologies: ["Figma", "Design Tokens", "Atomic Design"],
        results: {
          metrics: [
            "Unified two fragmented digital systems into one global framework",
            "Ensured WCAG-compliant CTAs after switching from non-accessible brand blue",
            "Reduced design and development time through reusable components"
          ],
          impact: `
Hydra established a shared, accessible, and scalable digital ecosystem for La Roche-Posay’s international markets.
It improved accessibility compliance, strengthened brand consistency, and reduced cognitive load for users.
Internally, it provided teams with a single source of truth, cutting duplication and enabling faster, higher-quality delivery.
          `,
          learnings: [
            "Accessibility must guide visual decisions, not follow them",
            "A Design System succeeds only with strong foundations and clear documentation",
            "Fragmentation across markets often reveals deeper structural issues that a system can solve"
          ]
        },
        links: {
          live_site: "https://ayelencoria.framer.website/works/larocheposay",
          medium: "https://medium.com/@rayelencoria/hydra-the-design-system-for-la-roche-posay-878d2f9eec5e"
        }
      },

      {
        name: "Map&Go – Rethinking the Housing Search Experience",
        type: "UX Case Study / Design Thinking Project",
        company: "Self-initiated research (Housing in Spain)",
        timeframe: "8 weeks (2025)",
        role: "UX Researcher & Product Designer",
        overview: `
A human-centered project that applies Design Thinking to improve the experience of searching for housing in Spain.
Through research, synthesis and iterative testing, Map&Go turns physical “For Rent” signs into organized, geolocated opportunities,
bridging the gap between analog habits and digital tools.
        `,
        challenge: `
The housing crisis in Spain makes the search for a home exhausting, fragmented and emotionally draining.
Users deal with scattered information, lack of trust, and analog habits that digital platforms ignore.
The challenge was to design value within a problem too large to solve — improving the experience without pretending to fix the entire system.
        `,
        solution: `
Using the Double Diamond framework, I conducted deep user research, defined insights, ideated multiple paths, and developed Map&Go:
a mobile feature that scans street signs with OCR and organizes them directly in Google Maps.
The solution gives users clarity, control and an intuitive flow that integrates seamlessly into everyday behavior.
        `,
        your_role: `
UX Researcher & Product Designer.
I led user research (desk research, netnography, survey, interviews), synthesis (personas, empathy maps, journeys),
ideation, prototyping in Figma and user testing with 15 participants.
        `,
        technologies: ["Figma", "Mobile OCR (concept)", "Google Maps API (concept)"],
        results: {
          metrics: [
            "15 users tested — 100% found the flow intuitive",
            "Zero friction reported thanks to the integration with familiar tools",
            "High perceived usefulness across age and language groups"
          ],
          impact: `
Map&Go showed that even within a structural housing crisis, design can meaningfully improve how people navigate the search for a home,
adding clarity, simplicity and a sense of agency to a process often marked by frustration.
          `,
          learnings: [
            "Design cannot fix structural problems, but it can humanize the experience around them",
            "Small, behavior-based insights often lead to the most impactful solutions"
          ]
        },
        links: {
          live_site: "https://ayelencoria.framer.website/works/map-go",
          medium: "https://medium.com/@rayelencoria/simplifying-the-housing-struggle-cfc49ba69587"
        }
      },

      {
        name: "Oxzen Pilates App Redesign",
        type: "Heuristic Evaluation & UX/UI Redesign",
        company: "Oxzen Pilates (Buenos Aires)",
        timeframe: "May – June 2025",
        role: "UX/UI Designer",
        overview: `
A UX case study focused on evaluating and redesigning Oxzen Pilates’ mobile app using Jakob Nielsen’s 10 Usability Heuristics.
The goal was to transform a confusing, outdated experience into a clearer, calmer, and more consistent wellness platform.
        `,
        challenge: `
The app technically worked but lacked usability and guidance.
Users often faced empty screens, unclear actions, and inconsistent visuals.
The challenge was to identify these friction points and translate them into actionable design improvements aligned with Oxzen’s brand.
        `,
        solution: `
Through a heuristic evaluation, I mapped usability issues and redesigned key flows to improve clarity, hierarchy and navigation.
The new design applied the Empty State pattern to replace dead-end screens with helpful messages and clear next steps.
I also explored AI-assisted tools like MagicPath to imagine future calendar and booking flows.
        `,
        your_role: `
UX/UI Designer — responsible for research, analysis, wireframing, high-fidelity design and AI-assisted prototyping.
        `,
        technologies: ["Figma", "MagicPath AI", "Notion"],
        results: {
          metrics: [
            "Simplified navigation flow",
            "Improved task clarity through guided empty states"
          ],
          impact: `
The redesigned interface reduced confusion, strengthened brand consistency, and laid the foundation for future user testing and expanded flows.
          `,
          learnings: [
            "Designing for empty states is as important as designing for full ones",
            "AI tools can accelerate ideation while keeping the design human-centered"
          ]
        },
        links: {
          live_site: "https://ayelencoria.framer.website/works/pilates-app",
          case_study: "https://ayelens-organization.gitbook.io/heuristicas/",
          medium: "https://medium.com/@rayelencoria/a-blank-screen-a-confused-user-and-a-much-needed-redesign-b2f9c14648a3"
        }
      },

      {
        name: "Etna: AR for Climate Resilience",
        type: "UX/UI Case Study & MVP Validation",
        company: "Self-initiated project",
        timeframe: "4 weeks (2025)",
        role: "UX/UI Designer",
        overview: `
Etna is a conceptual AR tool designed to support wildfire prevention, emergency action and post-fire regeneration.
The project involved defining the value proposition, creating an interactive prototype, and developing a WordPress landing page to validate early interest.
        `,
        challenge: `
Wildfires are increasing in frequency and intensity, yet environmental professionals lack intuitive, real-time tools to anticipate risks and act quickly.
The challenge was to communicate a complex AR concept clearly and test whether the idea resonated with potential users.
        `,
        solution: `
We designed a responsive landing page to introduce Etna’s value proposition with clarity and impact.
Built in WordPress, the page integrated visual mockups, video and illustrative assets to explain core features.
The MVP approach enabled early validation through traffic, scroll depth and contact form submissions.
        `,
        your_role: `
UX/UI Designer — responsible for research, value proposition definition, wireframing, visual design, prototyping,
accessibility considerations and WordPress development.
        `,
        technologies: ["WordPress", "Figma"],
        results: {
          metrics: [
            "62 sessions and 44 unique users in 48 hours (organic traffic)",
            "51.32% average scroll depth and 1.3 min time on page"
          ],
          impact: `
Validated early interest in Etna’s concept, identified opportunities to improve visibility, storytelling flow and conversion,
and informed next steps for refining the MVP and AR prototype.
          `,
          learnings: [
            "MVP landing pages are powerful for validating early hypotheses",
            "Storytelling structure significantly influences mid-scroll engagement"
          ]
        },
        links: {
          live_site: "",
          case_study: ""
        }
      }
    ]
  },



  // =============================================================================
  // SKILLS & EXPERTISE
  // =============================================================================
  skills: {
  technical: {
    programming_languages: [
      {
         name: "Design Tools",
    specialization: "Figma, Zeroheight, Framer, Miro, Maze, Notion, WordPress, and AI tools such as ChatGPT, Claude, Perplexity, Lovable, and MagicPath — used regularly for design systems, UI design, prototyping, testing, documentation, and workflow optimization."
  }
],
    
    methodologies: [
      "Design Thinking",
      "Design Sprint",
      "Lean UX",
      "Human-Centered Design",
      "Agile Collaboration"
    ]
  },
  
  domain_expertise: [
    {
      area: "User Research",
      description: "Conducting interviews, usability tests, heuristic evaluations, and synthesizing insights to identify user needs and opportunities.",
      techniques: [
        "User Interviews",
        "Usability Testing",
        "Heuristic Analysis",
        "Surveys",
        "Journey Mapping"
      ]
    },
    {
      area: "UX/UI Design",
      description: "Designing end-to-end web and mobile experiences with a focus on accessibility, clarity, and consistency.",
      techniques: [
        "Wireframing",
        "User Flows",
        "Prototyping",
        "Design Systems",
        "Visual Design"
      ]
    },
    {
      area: "Content & Marketing",
      description: "Supporting brands through SEO strategy, content creation, storytelling, and performance analysis.",
      techniques: [
        "SEO",
        "Email Automation",
        "Social Content Strategy"
      ]
    }
  ],
  
  soft_skills: [
    {
      skill: "Cross-functional Collaboration",
      evidence: "Worked with developers, marketers, and stakeholders to clarify requirements and align user needs with business goals."
    },
    {
      skill: "Teaching & Communication",
      evidence: "Seven years of teaching experience in international schools and universities strengthened her ability to explain complex ideas clearly and adapt to different audiences."
    },
    {
      skill: "Research & Critical Thinking",
      evidence: "Academic background in Political Science and History enables deep problem framing, systemic analysis, and context-aware design decisions."
    },
    {
      skill: "Adaptability & Multilingual Communication",
      evidence: "Fluent in Spanish, English, and French, with functional Italian and Portuguese — useful for multicultural user research and global products."
    },
    {
      skill: "Teamwork",
      evidence: "Former competitive athlete in 400m and 4x100 relay,  where I learned to perform with focus and discipline on my own, and to coordinate seamlessly within a team. Sports taught me resilience, collaboration, and the ability to switch naturally between independent work and collective effort"
    }
  ]
},


  // =============================================================================
  // EDUCATION & BACKGROUND
  // =============================================================================
education: {
  formal: [
    {
      degree: "UX/UI Design",
      school: "IMMUNE Institute of Technology",
      location: "Madrid, Spain"
    },
    {
      degree: "Digital Marketing & Data",
      school: "Data Science",
      location: "Paris, France"
    },
    {
      degree: "M.A. in Contemporary History",
      school: "Paris University",
      location: "Paris, France"
    },
    {
      degree: "B.A. in Political Science",
      school: "University of Buenos Aires (UBA)",
      location: "Buenos Aires, Argentina"
    }
  ],

  certifications: [],

  continuous_learning: [
    "Accessibility and inclusive design",
    "Trying to learn at least one new AI tool per week (there are too many, send help)"
  ]
},
  // =============================================================================
  // CAREER NARRATIVE
  // =============================================================================
 career_story: {
  origin: `
  Ayelén grew up between Argentina and France, which sparked her curiosity about how people think, learn, and interact across cultures. Before discovering UX/UI, she spent several years teaching and doing research, experiences that taught her to listen deeply, simplify complex ideas, and understand people in context.
  `,
  
  key_transitions: [
    {
      from: "Education & Research",
      to: "UX/UI Design",
      reason: "She realized she wanted to combine analysis, creativity, and human behavior into something more hands-on and impactful.",
      outcome: "A design approach grounded in empathy, critical thinking, and clarity, strengthened by her background in Political Science and History."
    }
  ],
  
  current_focus: `
  She now focuses on designing user-centered, accessible digital products through research, clear structure, and thoughtful interfaces. Her work blends creativity with analytical thinking to solve real problems with intention.
  `,
  
future_goals: `
Ayelén wants to keep designing inclusive, thoughtful products that genuinely help people, while accepting that, sadly, she won’t be able to solve every problem in the world by herself (what an unfair responsibility to put on one person’s shoulders!). Still, through research, empathy, and solid UX practices, she hopes to make small but meaningful improvements wherever design can create clarity, accessibility, and a better experience for users.
`
},


  // =============================================================================
  // WORKING STYLE & PREFERENCES
  // =============================================================================
 working_style: {
  collaboration_approach: `
  I’m a flexible collaborator who adapts easily to different teams, workflows, and project rhythms. I enjoy working independently when needed, but I thrive in environments where ideas flow openly and everyone contributes to building something better together.
  `,
  
  problem_solving_process: `
  My process always starts with a good old to-do list — once everything is on paper, the path forward becomes clearer and I can break problems into manageable steps. From there, it’s a mix of research, iteration, and structure to move steadily toward solutions.
  `,
  
  communication_style: `
  My communication is clear, organized, and professional… with just enough humor to keep things human. I adapt my tone depending on the audience, ensuring that stakeholders, developers, and non-designers all feel included and informed.
  `,
  
  ideal_work_environment: `
  I do my best work in environments grounded in good communication and mutual respect, places where people listen, share, and collaborate without ego. A healthy team culture makes better products, and that’s the kind of space I aim to contribute to.
  `
},

  // =============================================================================
  // INTERESTS & PERSONAL TOUCHES
  // =============================================================================
 personal_interests: {
  professional_interests: [
    "AI ethics in design",
    "Accessibility and inclusive digital experiences"
  ],
  
  hobbies: [
    "Traveling (yes, the cliché is true: new and old places always inspire me)",
    "Inviting people over and cooking for the people I love"
  ],
  
  fun_facts: [
    "I can switch languages mid-sentence without realizing it, a side effect of growing up between cultures.",
    "I used to be a competitive athlete, which explains my love for structure and discipline"
  ]
},

};

// =============================================================================
// CONVERSATION CONTEXT
// =============================================================================
// This section helps the AI understand how to talk about your experience

export const CONVERSATION_GUIDANCE = {
  // Tone and personality guidelines
  communication_style: {
    tone: "Professional, approachable, and warm — with small touches of light humor when appropriate.",
    voice: "Clear, thoughtful, and human. Structured when explaining design decisions, but never robotic.",
    avoid: "Overly technical jargon, sounding too formal or distant, minimizing achievements, or giving excessively long academic explanations."
  },
  
  // Key messages you want to convey
  key_messages: [
    "I'm passionate about accessible, user-centered design grounded in research and real human needs.",
    "My multidisciplinary background strengthens my approach, combining analysis, empathy, and creativity.",
    "I value clarity and thoughtful problem-solving in every project."
  ],
  
  // Common questions and how to handle them
  frequently_asked: {
    "Tell me about yourself": `
      Reference the elevator pitch and connect it to her journey from teaching and research 
      into UX/UI design, highlighting empathy, multicultural perspective, and her current focus.
    `,
    
    "What's your biggest achievement?": `
      Instead of highlighting a project, emphasize a personal milestone: moving alone to another city  at 17 to pursue her studies. Even while missing home and  struggling at first, she persisted because she knew it was the path toward creating the life she dreamed of. Keep it confident but humble.
    `,
    
    "What are you looking for?": `
      Explain that Ayelén is open to meaningful UX/UI opportunities where she can contribute 
      to accessible, thoughtful, research-informed design , ideally in teams with good 
      communication, respect and good sense of humor.
    `,
    "What's your weakness?": `
     Ayelén is actively working on her patience, especially in moments when she wants everything to move faster (projects, processes, people, deadlines… the whole world). She’s learning to slow down, trust the process, and give ideas the time they need to mature, using structure, planning, and a bit of humor to stay grounded.
    `
  }
};


// =============================================================================
// CUSTOMIZATION CHECKLIST:
// =============================================================================
// □ Replace all [PLACEHOLDER TEXT] with your actual information
// □ Update the skills section to match your field (technical/design/business)
// □ Add or remove project examples based on what you want to showcase
// □ Customize the conversation guidance to match your personality
// □ Review all sections for accuracy and completeness
// □ Remove these instruction comments when done
// =============================================================================

// Instructions for updating this file:
// 1. Keep content factual and based on your actual experience
// 2. Add more detail than what's in progressive disclosure for AI context
// 3. Include project details, methodologies, and outcomes
// 4. Use markdown formatting for structure
// 5. Update as you complete new projects or gain new skills
// 6. This content helps the AI give better responses for complex questions
