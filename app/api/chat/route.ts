import { NextRequest, NextResponse } from 'next/server';

// ===============================================================
// A. VIP QUESTIONS, TECH / RECRUITER / OFF-TOPIC HANDLERS
// ===============================================================

type VipCategory = {
  variants: string[];
  answer: string;
};

const VIP_QUESTIONS: Record<string, VipCategory> = {
  tell_me_about_yourself: {
    variants: [
      'tell me about yourself',
      'tell me about you',
      'who is ayelen',
      'who is ayelén',
      'who are you',
      'what is your name',
      "what's your name",
      'can you introduce yourself',
      'introduce yourself',
      'describe yourself',
      'what can you tell me about yourself'
    ],
    answer: `I'm Ayelén, a UX/UI Designer and UX Researcher with a background in Political Science (B.A.) and Contemporary History (M.A.).

I grew up between Argentina and France, which taught me to adapt quickly, switch cultures mid-conversation, and understand how people think and behave in different contexts.

Before design, I spent several years teaching and doing research. That experience trained me to explain complex ideas simply, listen deeply, and pay close attention to context, something I now bring into every design project I work on.

Today, I work as a freelance designer, but I'm also open to full-time opportunities if the right one appears. I focus on research-informed design, accessibility, and design systems.`
  },

  what_are_you_looking_for: {
    variants: [
      'what are you looking for',
      'what roles are you looking for',
      'what opportunities are you open to',
      'what do you want next',
      'what kind of job do you want',
      'what type of work are you seeking',
      'what are your career goals',
      'what is your next step',
      "what's your next step"
    ],
    answer: `I'm always looking for opportunities to create meaningful, human-centered digital experiences, especially in projects where design can make everyday interactions clearer, more inclusive, and genuinely helpful.

Whether it's improving accessibility in a global dermocosmetics brand, making innovative technology feel familiar and intuitive for everyday users, or redesigning a wellbeing app to support people in their daily routines, I care deeply about turning complexity into something usable, and trustworthy.

I thrive in teams with good communication, mutual respect, and a bit of humor.

I'm very comfortable owning a project end-to-end from research and flows to UI and documentation but I also love collaborating with developers and stakeholders to bring ideas to life.`
  },

  biggest_achievement: {
    variants: [
      "what's your biggest achievement",
      'what is your biggest achievement',
      'what are you most proud of',
      'your proudest moment',
      'your proudest achievement',
      'biggest milestone',
      'what accomplishment stands out',
      'tell me about your biggest achievement',
      'tell me about your proudest moment'
    ],
    answer: `One of my biggest achievements was moving alone to another city at 17 to pursue my studies and build the life I wanted.

A few years later, I made an even bigger move (from Argentina to France) once again on my own, starting from zero, adapting to a new culture, and rebuilding my entire life from scratch (if you've ever moved somewhere completely alone, you know exactly what I'm talking about).

Those choices taught me resilience, discipline, and the ability to navigate uncertainty. They also shaped one of my core strengths as a designer and as a person: adapting quickly, learning fast, and finding my footing in unfamiliar contexts.

In many ways, those experiences gave me the foundation I rely on every day in my work: curiosity, courage, and the mindset to keep moving forward.`
  },

  weakness: {
    variants: [
      "what's your weakness",
      'what is your weakness',
      'what are your weaknesses',
      'tell me your weakness',
      'tell me your weaknesses',
      'biggest weakness',
      'what do you struggle with',
      'what are you working on improving',
      "what's something you want to get better at",
      'what is something you want to get better at'
    ],
    answer: `I'm actively working on my patience, both professionally and in everyday life.

I naturally want everything to move faster: decisions, iterations, roadmaps… ideally the whole world, but I've accepted that's slightly out of scope.

To balance that, I rely a lot on structure and planning: breaking work into clear steps, setting realistic expectations, and staying focused.`
  },

  background: {
    variants: [
      "what's your background",
      'what is your background',
      'how did you get into ux',
      'how did you get into ui',
      'how did you become a designer',
      'how did you become a ux designer',
      'what did you do before ux',
      'what did you do before ui',
      "what's your story",
      'what is your story',
      "what's your journey",
      'what is your journey',
      'tell me about your background'
    ],
    answer: `My background is a blend of Social Sciences, education, and research and that path is much more connected to UX/UI than it looks at first glance.

Education:
• B.A. in Political Science — University of Buenos Aires (Argentina)  
• M.A. in Comparative History — University of Paris (France)  
• Diploma in Digital Marketing & Data Analysis — DataScientest, Paris  
• UX/UI Design Bootcamp — IMMUNE Technology Institute, Madrid  

I didn't start in design. Before transitioning into UX/UI, I spent several years teaching and doing research in international academic environments. That world taught me to analyze systems, understand people in context, and communicate complex ideas clearly, all of which turned out to be fundamental skills in product design.

The deeper I moved into UX/UI, the more obvious it became that Social Sciences and the Humanities have a lot to offer this field. I even wrote a Medium article about how Political Science strengthens your skills as a designer — you can read it here: <link>.

My journey from Social Sciences and research to digital design reflects a commitment to understanding both how people think and how technology can better respond to their needs.`
  },

  design_process: {
    variants: [
      'how do you work',
      'how do you usually work',
      'how do you approach projects',
      'how do you design',
      "what's your design process",
      'what is your design process',
      "what's your workflow like",
      'what is your workflow like',
      'explain your design process',
      'how do you start a project',
      'what is your methodology',
      "what's your methodology",
      'what is your method',
      "what's your method"
    ],
    answer: `My approach is research-informed, structured, and flexible, I follow a clear design process, but I always adapt it to the needs, constraints, and maturity of each project.

In most projects, my work flows through the stages you'll see in my “My Design Process” section:

Research and Discovery → Strategic Concepting → AI Assisted Ideation → React Prototyping → Usability Testing → Developer Collaboration → Post Launch Evaluation.

That said, no two projects are the same, I adjust the depth, methods, or order depending on timelines, goals, and the team I'm working with.`
  },

  where_based: {
    variants: [
      'where do you live',
      'where are you based',
      'where are you located',
      'where do you work from',
      'what city are you in',
      'do you live in france',
      'do you live in paris',
      'where are you from'
    ],
    answer: `I'm currently based in Paris, but I travel often and I work comfortably across time zones and international teams. I'm also fully open to relocating if the right opportunity comes along.`
  },

  strengths: {
    variants: [
      'what are your strengths',
      'what is your strength',
      'what are you good at',
      'what are you best at',
      "what's your superpower",
      'what is your superpower',
      'what do people rely on you for',
      'what are you naturally good at',
      'what makes you a strong designer',
      'tell me your strength',
      'tell me your strengths'
    ],
    answer: `One of my main strengths is adaptability, if there's something I don't know, I'll learn it and figure out how to solve it.

On a more human side, collaboration and communication are big parts of who I am. Years of teaching in multicultural environments taught me to adjust my language to different audiences, listen carefully, and create a space where stakeholders, developers, and designers feel comfortable raising questions or exploring ideas together.`
  },

  specialization: {
    variants: [
      'are you specialized in a specific field',
      'are you specialized in a specific area',
      'are you specialized in something',
      'do you specialize in something',
      'do you have a specialization',
      'what do you specialize in',
      'what is your specialization',
      "what's your specialization"
    ],
    answer: `My work is grounded in UX Research, because understanding real human needs is the key to solving the right problems. 

Accessibility is another core part of my practice. I believe inclusive design is not an add on, but a responsibility.

I also specialize in Design Systems, creating and documenting scalable foundations, tokens, and components that bring consistency, efficiency, and smoother collaboration with developers.

And although these are my main pillars, I adapt easily to the needs of each project. I’m naturally curious, I learn fast, and I enjoy diving into new tools or methods whenever the project calls for it.`
  },

  projects_overview: {
    variants: [
      'tell me about your projects',
      'tell me about your work',
      'can you tell me about your projects',
      'what projects have you worked on',
      'what kind of projects have you done',
      'show me your projects',
      'show me your work',
      'where can i see your projects',
      'where can i see your work'
    ],
    answer: `I’ve worked on projects that range from creating a global Design System for a dermocosmetics brand (after a full audit and heuristic analysis of their international platforms), to evaluating and redesigning a wellbeing app following Jakob Nielsen’s heuristics, to developing a mobile concept that simplifies the housing search in Spain through a full Design Thinking process. I also validated an AR concept through an MVP and a responsive landing page.

You can explore all of these in the My Work section. Each project includes a link to a full Medium case study, where I walk through the research, insights, decisions and outcomes in more detail.`
  }
};

// ===============================================================
// B. TECHNICAL / RECRUITER / OFF-TOPIC KEYWORDS + ANSWERS
// ===============================================================

const TECH_KEYWORDS: string[] = [
  'how do i build',
  'how do i code',
  'code this',
  'write code',
  'can you code',
  'react',
  'api',
  'backend',
  'integrate',
  'integration',
  'css',
  'html',
  'javascript',
  'typescript',
  'optimize',
  'debug',
  'fix this',
  'error',
  'figma tutorial',
  'how do i design',
  'step by step'
];

const RECRUITER_KEYWORDS: string[] = [
  "we're looking for",
  'we are looking for',
  'we are hiring',
  'we’re hiring',
  'we are searching for a designer',
  'we’re searching for a designer',
  'are you open to new roles',
  'are you open to new opportunities',
  'are you available for work',
  'do you take freelance projects',
  'do you take clients',
  'opportunity',
  'job position',
  'contract',
  'full-time',
  'full time',
  'part-time',
  'part time',
  'collaboration',
  'can we hire you',
  'we need a designer',
  'join our team'
];

const OFFTOPIC_KEYWORDS: string[] = [
  'politics',
  'election',
  'government',
  'depression',
  'anxiety',
  'therapy',
  'psychology',
  'religion',
  'god',
  'personal relationships',
  'relationship advice',
  'dating',
  'breakup',
  'finance',
  'crypto',
  'investment',
  'trading',
  'stock market',
  'quantum physics',
  'astrology',
  'horoscope',
  'zodiac',
  'gossip',
  'celebrity',
  'news',
  'health advice',
  'medicine',
  'medical diagnosis'
];

const TECHNICAL_FALLBACK_ANSWER = `Great question! This chat isn’t meant to provide step-by-step technical guidance, but if you’re exploring a project or need UX/UI support, feel free to get in touch, I’m always happy to talk through real design challenges.`;

const RECRUITER_FALLBACK_ANSWER = `That sounds great! If you’re looking for a UX/UI Designer or UX Researcher, feel free to reach out, I’d be happy to learn more about what you’re building and see if there’s a good fit.`;

const OFFTOPIC_FALLBACK_ANSWER = `I love talking about topics like that, and we can absolutely discuss them one-to-one, feel free to contact me and we can chat about it.

Here I keep the conversation mostly around my UX/UI work, research, and experience.  
If you'd like to explore any of that, I’m here.`;

// ===============================================================
// C. HELPERS
// ===============================================================

function includesAny(haystack: string, needles: string[]): boolean {
  return needles.some((needle) => haystack.includes(needle));
}

function detectVipAnswer(lowerMessage: string): string | null {
  // 1) prioridad, preguntas sobre proyectos, work
  const projectsCategory = VIP_QUESTIONS.projects_overview;
  if (includesAny(lowerMessage, projectsCategory.variants)) {
    return projectsCategory.answer;
  }

  // 2) resto de categorías VIP
  for (const [key, category] of Object.entries(VIP_QUESTIONS)) {
    if (key === 'projects_overview') continue;
    if (includesAny(lowerMessage, category.variants)) {
      return category.answer;
    }
  }
  return null;
}

function detectTechnicalQuestion(lowerMessage: string): boolean {
  return includesAny(lowerMessage, TECH_KEYWORDS);
}

function detectRecruiterQuestion(lowerMessage: string): boolean {
  return includesAny(lowerMessage, RECRUITER_KEYWORDS);
}

function detectOffTopicQuestion(lowerMessage: string): boolean {
  return includesAny(lowerMessage, OFFTOPIC_KEYWORDS);
}

// ===============================================================
// D. MAIN POST HANDLER, MINIMAL LOGIC
// ===============================================================

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    const lowerMessage: string = (message || '').toLowerCase();

    // 1) VIP QUESTIONS
    const vipAnswer = detectVipAnswer(lowerMessage);
    if (vipAnswer) {
      return NextResponse.json({
        message: {
          message: vipAnswer,
          portfolio: false
        },
        timestamp: new Date().toISOString()
      });
    }

    // 2) TECHNICAL
    if (detectTechnicalQuestion(lowerMessage)) {
      return NextResponse.json({
        message: {
          message: TECHNICAL_FALLBACK_ANSWER,
          portfolio: false,
          contact: true
        },
        timestamp: new Date().toISOString()
      });
    }

    // 3) RECRUITER
    if (detectRecruiterQuestion(lowerMessage)) {
      return NextResponse.json({
        message: {
          message: RECRUITER_FALLBACK_ANSWER,
          portfolio: false,
          contact: true
        },
        timestamp: new Date().toISOString()
      });
    }

    // 4) OFF-TOPIC
    if (detectOffTopicQuestion(lowerMessage)) {
      return NextResponse.json({
        message: {
          message: OFFTOPIC_FALLBACK_ANSWER,
          portfolio: false,
          contact: true
        },
        timestamp: new Date().toISOString()
      });
    }

    // 5) DEFAULT WELCOME, cuando no matchea nada de lo anterior
    const response = formatWelcomeResponse();

    return NextResponse.json({
      message: {
        message: response,
        portfolio: false,
        contact: true
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

// ===============================================================
// E. SIMPLE WELCOME RESPONSE
// ===============================================================

function formatWelcomeResponse(): string {
  return `Thanks for your message! I'm here to help you learn more about my work and experience. You can ask me about:

• My Work: case studies, projects and my design process.  
• Experience: background and career journey. 
• Skills: languages, design, research and tools.  
• **About**, my story and how I work  

If you didn’t find what you were looking for, you can always contact me.`;
}

// Simple health check
export async function GET() {
  return NextResponse.json({
    status: 'Chat API is running',
    timestamp: new Date().toISOString()
  });
}




