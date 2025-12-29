// =============================================================================
// ASSISTANT CONFIGURATION TEMPLATE
// =============================================================================
// Replace ALL PLACEHOLDER TEXT with your own information
// Remove these comment sections after customization

export const ASSISTANT_INSTRUCTIONS = `
You are Savia's AI portfolio assistant. You help visitors explore Ayelén Coria's 
professional experience through conversational interactions.

PERSONALITY & TONE:
- Professional yet approachable: You communicate with clarity, warmth, and a sense of calm confidence.
- Creative and human: You include light, tasteful humor when appropriate, and you maintain a positive, encouraging tone.
- Precise and structured: You explain design decisions, processes, and case studies in an organized way, using UX language that remains accessible.
- Empathetic: You adapt your explanations to the visitor’s level of expertise — from beginners to senior designers or recruiters.
- Multidisciplinary by nature: You reflect Ayelén’s blend of UX/UI design, BA in political science, MA in History, teaching, research experience and creativity, showing how her diverse background strengthens her problem-solving.

BACKGROUND CONTEXT:
- Freelance UX/UI Designer & Digital Marketing Specialist, based in Paris and fully open to relocating for the right opportunity.
- 1,5+ years of experience in UX/UI design, plus 8+ years of experience in teaching, academic research, and communication across multilingual environments.
- Expertise in: UX Research, UX/UI Design, heuristic evaluations, accessibility (WCAG), design systems, interaction design, and AI-assisted workflows.
- Education: UX/UI Design (IMMUNE Technology Institute, Madrid); Digital Marketing & Data (Paris); M.A. in Contemporary History (Université de Paris, France); B.A. in Political Science (University of Buenos Aires, Argentina).


CONVERSATION GUIDELINES:
- Use progressive disclosure - start broad, then dive deeper based on user interest
- Be enthusiastic about [AYELÉN]'s work and achievements
- Provide specific examples when discussing projects or experience
- Always offer to elaborate or explore related topics
- If asked about sensitive information (salary, personal details), politely redirect to professional topics

KEY TALKING POINTS:
- Biggest professional achievement: Leading a full UX/UI audit and heuristic analysis of La Roche-Posay’s French and Spanish websites, transforming the findings into a unified international Design System proposal (“Hydra”) that improves consistency, accessibility, and brand clarity across markets.
- Most interesting/challenging project: Designing Map&Go, a concept born from a full Design Thinking process to address the challenges of finding housing in Spain. I led user research, netnography, surveys, interviews, and journey mapping to uncover deep frustrations and hidden behaviors, especially the reliance on physical “For Rent” signs. From these insights, I defined a clear problem space, ideated multiple directions, and prototyped a solution that bridges analog and digital experiences. The biggest challenge was working within the limits of a structural housing crisis while creating something genuinely helpful, intuitive, and human-centered.
- Technologies/methodologies I specialize in: User research, heuristic analysis, accessibility standards (WCAG), design systems creation, UX flows, wireframing, interactive prototyping, usability testing, responsive design, and UI refinement. 
- Career goals or interests: To work on meaningful digital products where research-driven design and user wellbeing intersect. Interested in design systems, product design, health & wellness experiences, and shaping consistent, inclusive interfaces across international contexts.
- What makes Ayelén’s approach unique (versión integrada)
Ayelén has a multidisciplinary background that blends UX/UI design with years of teaching and a solid academic foundation in Political Science, sociology, history, and economics, giving her a heightened sense of empathy, clarity, and user-centered thinking. She brings a calm, structured, human-first approach to complex problems, communicating solutions in a way that feels accessible, warm, and thoughtful.
Her social sciences training allows her to understand users in context: not just as individuals, but as people shaped by cultural, social, and structural systems. This perspective helps her uncover the motivations, constraints, and invisible dynamics behind user behavior — going far beyond surface-level analysis.
She views design as inherently political: every interface and interaction includes choices about who is represented, who is excluded, and how people participate in digital spaces. This makes accessibility, ethical decision-making, and inclusive design central pillars of her work.
Her experience teaching in multilingual, multicultural environments strengthened her ability to communicate complex ideas clearly and adapt them to diverse audiences, a skill she brings to research, documentation, and stakeholder presentations.
Bridging qualitative insights with marketing and data analysis, she balances critical thinking, empathy, and evidence-based decision making to design solutions that are both realistic and genuinely meaningful for users.
`;

export const PROGRESSIVE_CONTENT = {
  // Level 1: High-level overview topics
  overview: {
    work: {
      title: "My Work & Projects",
      description:
        "Featured UX/UI case studies and research-driven projects across multiple platforms",
      buttonText: "Show me your work",
      nextLevel: "project_categories",
    },
    experience: {
      title: "UX/UI Design Experience",
      description:
        "I transitioned from teaching and social sciences into UX/UI design, bringing with me everything I learned about communication, research, empathy, and understanding people in context. Today, that foundation shapes the way I analyze problems and design meaningful, user-centered experiences.",
      buttonText: "Tell me about your experience",
      nextLevel: "experience_details",
    },
    projects: {
      title: "Featured Projects",
      description:
        "Audits, heuristic analysis, mobile app redesigns, design systems, web design, and landing pages, all focused on user-centered design and supported by methodologies such as Design Thinking, Design Sprint, and Lean UX",
      buttonText: "Show me your projects",
      nextLevel: "project_categories",
    },
    skills: {
      title: "Skills & Expertise",
      description:
        "User research, in-depth interviews, customer journey mapping, wireframing, prototyping, usability testing, feedback analysis, heuristic evaluation and diagnosis, Design Thinking, Lean UX and Agile methodologies, visual branding, cross-platform design, accessible interfaces, design systems, atomic design principles, user flows, information architecture, content strategy, content creation, data-driven design, SEO, automation and email marketing, translating business goals into human-centered design, facilitating cross-functional collaboration, strong multilingual communication skills, agile teamwork, and creating accessible, inclusive experiences",
      buttonText: "What are your skills?",
      nextLevel: "skills_breakdown",
    },
    background: {
      title: "Background & Education",
      description:
        "UX/UI Design – IMMUNE Institute of Technology (Madrid). Digital Marketing & Data – Paris, France. M.A. in Contemporary History – Paris University (France). B.A. in Political Science – University of Buenos Aires, UBA (Argentina)",
      buttonText: "Tell me your background",
      nextLevel: "background_details",
    },
    about: {
      title: "About Me",
      description:
        "I'm a UX/UI Designer who grew up between Argentina and France. Before design, I spent years teaching and doing research around the world, which now shapes my analytical, human-centered approach to creating inclusive, accessible digital products.",
      buttonText: "Tell me about yourself",
      nextLevel: "about_details",
    },
  },

 // Level 2: More detailed categories
experience_details: {
  current_role: {
    title:
      "Freelance UX/UI Designer (also known as “happily open to contracts, collaborations, and cool projects”)",
    description:
  "I’m a freelance UX/UI Designer and UX Researcher (open to long term collaborations and fixed contracts when the right opportunity comes up) designing empathetic digital products with a strong research driven approach, focusing on user centered clarity and clean interfaces.\n\nI’ve redesigned applications through heuristic analysis, designed apps to help people find housing faster and in a more human way, created design systems for fragmented brands, run UX audits and helped brands improve their product experience with simple, thoughtful design.",
    buttonText: "Current role details",
    nextLevel: "current_role_deep",
  },

previous_roles: {
  title: "Previous Experience",
  description:
    "Before becoming a UX/UI Designer, I worked for 8+ years in education and research, teaching History and Political Science in international schools and universities in Paris and Buenos Aires. Coming from the social sciences shaped the core of how I design: it taught me to question assumptions, understand people within their cultural and structural contexts, and look for the invisible systems shaping behavior.\n\nThat background didn’t take me away from design, it prepared me for it, it gave me the analytical depth, critical thinking, and human lens that guide my UX practice today..\n\nIf you’d like to know more about how my background in political science strengthens my design practice, you can read my article here: [Why my background in Political Sciences makes me a better UX/UI Designer](https://medium.com/@rayelencoria/why-my-background-in-political-sciences-makes-me-a-better-ux-ui-designer-5e20ab0ad8f6).",
  buttonText: "Previous experience",
  nextLevel: "career_progression",
},


  achievements: {
    title: "Not everything is about work",
    description:
      "I’m a former 400m champion in Argentina, something I’m incredibly proud of not just the medal, but the journey behind it. Athletics taught me discipline and perseverance, lessons (and good memories) I still carry with me.",
    buttonText: "Major achievements",
    nextLevel: "achievement_details",
  },
},



   // Level 2: About Me → chips
about_details: {
  journey_into_design: {
    title: "Journey into Design",
    description:
      "My path to UX/UI wasn’t linear, but it was inevitable. With a BA in Political Science and an MA in History, plus years working in teaching and research, studying people, culture, and systems quietly prepared me for a career centered on understanding humans and improving their digital worlds.\n\nEverything I learned in education, research, and living between cultures (I grew up between Argentina & France) now shapes the way I design: with context, empathy, and curiosity.\n\nAfter spending years studying how people think, learn, and interact with the world, design became the place where I could turn that understanding into something tangible and meaningful.",
    buttonText: "Journey into design",
    nextLevel: null,
  },

design_philosophy: {
  title: "Design Philosophy",
  description: `My design philosophy revolves around empathy, accessibility, and a research-driven approach.\n\n
• Accessibility First: I focus on designing for the most vulnerable users first, ensuring cognitive load and technical literacy are considered, and testing with assistive technologies.\n\n
• Bridge Builder: I connect user needs with technical constraints, reducing friction between design and development by speaking both design and technical languages.\n\n
• Iterative Improvement: I start with user research, prototype quickly, and continuously refine based on real user feedback.\n\n
• Scalable Systems: I create reusable components and patterns for consistency and efficiency, documenting decisions for future team members.\n\n
• Human-Centered Technology: I design technology to serve people, considering the full user journey and maintaining empathy throughout the process.\n\n
• Systems & Society Awareness: From my background in political science, I learned that every system—whether a government, a law, or a public policy—is built on choices that shape people's lives. Years later, I realized the same is true for design: every product, every flow, every button carries a decision about who is included, who is excluded, and how people experience the world through technology.\n\n
• Research-Driven Strategy: I use design research to learn about people, clarify problems, and build a strategy—what we should do, and why.\n\n
I'm excited about using AI to accelerate design workflows while maintaining a human-centered approach. It's essential that technology genuinely improves people's lives by bridging the gap between complex technology and human needs.`,
  buttonText: "Design philosophy",
  nextLevel: null,
},




  interests: {
    title: "Interests",
    description:
      "I used to be a national 400m champion in Argentina, and movement is still a big part of my life. Outside of design, I love running, learning languages, exploring cities, and anything that helps me stay curious and grounded. These interests often influence my design process — bringing discipline, balance, and fresh perspective into my work.",
    buttonText: "Interests",
    nextLevel: null,
  },
},


  project_categories: {
    featured_project_1: {
      title: "La Roche-Posay: Hydra Design System",
      description:
        "A global audit and heuristic analysis that uncovered major accessibility and consistency issues across La Roche-Posay’s international sites. I created Hydra, a unified Design System built to solve fragmentation, improve accessibility, and streamline design and development across markets.",
      buttonText: "Learn about La Roche-Posay's Design System",
      nextLevel: "project_1_details",
    },
    featured_project_2: {
      title: "Map&Go: Rethinking the Housing Search Experience",
      description:
        "A human-centered project addressing Spain’s housing crisis through Design Thinking. I led user research, synthesized insights, and designed Map&Go — a concept that bridges analog and digital worlds by turning physical ‘For Rent’ signs into organized, geolocated opportunities. The result: a simple, intuitive way to bring clarity and control to one of life’s most stressful experiences.",
      buttonText: "Learn about Learn about Map&Go",
      nextLevel: "project_2_details",
    },
    featured_project_3: {
      title: "Wellbeing App Redesign",
      description:
        "A heuristic evaluation and UX/UI redesign of a wellness app. I identified key usability issues and redesigned the interface to improve clarity, navigation, and visual consistency, turning confusing empty screens into guided, user-centered experiences. The project also explored AI-assisted prototyping to expand future design flows",
      buttonText: "Learn about Oxzen Pilates",
      nextLevel: "project_3_details",
    },
    featured_project_4: {
      title: "Etna: AR for Climate Resilience",
      description:
        "A UX/UI case study exploring how design and technology can support wildfire prevention, action, and regeneration. Through research, prototyping, and a Minimum Viable Product (MVP), we defined Etna’s value proposition and validated early user interest via an interactive landing page built in WordPress. The project also applied accessibility and responsive design principles to ensure an inclusive, cross-platform experience.",
      buttonText: "Learn about Etna",
      nextLevel: "project_4_details",
    },
  },

  skills_breakdown: {
    technical_skills: {
      title: "Technical Skills",
      description:
        "Figma, Framer, Wordpress, Maze, Miro, Zeroheight, Notion, Asana, Salesforce, Zapier, Google Analytics, Google Ads, Excel, HTML/CSS (basic), and AI tools such as ChatGPT, Claude, Perplexity, Lovable, Figma Make, and MagicPath.",
      buttonText: "Technical expertise",
      nextLevel: "tech_stack_details",
    },
    design_skills: {
      title: "Design Skills",
      description:
        "User Experience Design, User Interface Design, A11y (Accessibility), Design System, Mobile App Design, Web Design, Responsive Design, Responsive Web Applications, Product Design, Design Thinking, Interaction Design, Style Guide, Typography, Wireframing, Ideation, Rapid Prototyping, User Testing, Usability Testing, Human-Centered Design, Visual Design, Documentatio",
      buttonText: "Design expertise",
      nextLevel: "design_skills_details",
    },
    Research_skills: {
      title: "Research",
      description:
        "User Research, User Interviews, Audit, Heuristic Analysis, Persona Creation, Journey Mapping, Surveys, Information Architecture, Usability Testing, Iterative Testing, Data Analysis",
      buttonText: "Research skills",
      nextLevel: "research_skills_details",
    },
    Communication_skills: {
      title: "Languages",
      description:
        "Spanish: native. English: fluent. French: bilingual. And if the situation requires it, I can also charm my way through Italian and Portuguese without causing international incidents",
      buttonText: "Communication skills",
      nextLevel: "communication_skills_details",
    },
  },

  // Level 3: Deep dives into specific areas
  current_role_deep: {
    responsibilities: {
      title: "Day-to-Day Responsibilities",
      description:
        "Working on UX case studies, documenting design systems, improving my portfolio… and, in parallel, serving as my mother's unpaid personal tech assistant for absolutely anything involving a screen",
      buttonText: "What do you do day-to-day?",
      nextLevel: "responsibility_examples",
    },
    team_impact: {
      title: "Team & Company Impact",
      description:
        "Collaborating with peers, mentors, and stakeholders in reviews, integrating feedback, and iterating on design solutions.",
      buttonText: "Your impact",
      nextLevel: "impact_metrics",
    },
    learning_growth: {
      title: "Learning & Growth",
      description:
        "Continuously improving in design systems, accessibility, research methods, and AI-assisted workflows, while trying to keep up with the 47 new AI tools that seem to appear every week",
      buttonText: "Current learning",
      nextLevel: "growth_examples",
    },
  },

  project_1_details: {
    challenge: {
      title: "[Project 1] - The Challenge",
      description:
        "[What problem this project solved, why it was important]",
      buttonText: "The problem",
      nextLevel: "project_1_solution",
    },
    solution: {
      title: "La Roche-Posay - The Solution",
      description:
        "I conducted a full audit and heuristic analysis to diagnose the brand’s fragmented digital experience across markets. Using these insights, I designed Hydra, a global Design System grounded in accessibility, unified foundations, and reusable components. A key decision was separating brand color from functional UI, introducing an accessible dark CTA to replace the non-compliant blue",
      buttonText: "How you solved it",
      nextLevel: "project_1_results",
    },
    results: {
      title: "La Roche-Posay - Results & Impact",
      description:
        "Hydra unified La Roche-Posay’s fragmented digital ecosystem by establishing consistent, accessible foundations and reusable components across markets. The new accessible CTA color ensured WCAG and EAA compliance, improved legibility, and reduced user friction. Internally, teams gained a scalable system that cuts design and development time, strengthens brand cohesion, and elevates the overall digital experience",
      buttonText: "Results achieved",
      nextLevel: "project_1_learnings",
    },
  },

  // Level 4: Granular details and specifics
  responsibility_examples: {
    example_1: {
      title: "[Specific Responsibility Example 1]",
      description:
        "[Detailed example of a responsibility with context and outcomes]",
      buttonText: "Example details",
      nextLevel: null,
    },
    example_2: {
      title: "[Specific Responsibility Example 2]",
      description:
        "[Another detailed example with metrics or results]",
      buttonText: "Another example",
      nextLevel: null,
    },
  },

  project_1_solution: {
    approach: {
      title: "Design Approach",
      description:
        "I conducted a full audit and heuristic evaluation of the French and Spanish sites using Nielsen’s principles to identify accessibility, consistency, and usability issues. Based on these insights, I created Hydra—a global Design System built with Atomic Design, design tokens, accessibility standards, and documented workflows to unify teams and platforms",
      buttonText: "Design approach",
      nextLevel: null,
    },
    challenges_overcome: {
      title: "Challenges Overcome",
      description:
        "The biggest challenge was the brand’s fragmented digital ecosystem: each market used different colors, typography, and components. Accessibility failures—especially the non-compliant blue CTAs—further increased friction. I resolved this by redefining foundations, introducing an accessible dark CTA color, and creating a unified system structure that could scale across markets",
      buttonText: "Challenges overcome",
      nextLevel: null,
    },
  },
};

// Contact and action buttons
export const CONTACT_INFO = {
  email: "hello.ayelencoria@gmail.com",
  phone: "+33 7 69 24 67 22",
  location: "Paris, FRA",
  linkedin: "www.linkedin.com/in/ayelencoria",
  Medium: "https://medium.com/@rayelencoria", // if applicable
  portfolio: "https://ayelencoria.framer.website/", // if you have a separate portfolio site
  resume:
    "https://docs.google.com/document/d/1CgTaVLNQMHWtC_KAH13paMyy32stQDmjLCQyhaqKvfQ/edit?usp=drive_link", // Path to your resume file
  website: "https://ayelencoria.framer.website/",
};

export const ACTION_BUTTONS = {
  resume: {
    text: "Download Resume",
    action: "download_resume",
  },
  contact: {
    text: "Get in Touch",
    action: "show_contact",
  },
  portfolio: {
    text: "View Full Portfolio",
    action: "external_portfolio", // if you have a separate portfolio site
  },
};



// =============================================================================
// CUSTOMIZATION INSTRUCTIONS:
// =============================================================================
// 1. Replace all [PLACEHOLDER TEXT] with your actual information
// 2. Update the ASSISTANT_INSTRUCTIONS personality to match your style
// 3. Modify the progressive content structure to match your experience
// 4. Add or remove content levels based on what you want to showcase
// 5. Update contact information and file paths
// 6. Remove these instruction comments when done
// =============================================================================
