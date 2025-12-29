import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ASSISTANT_INSTRUCTIONS, PROGRESSIVE_CONTENT } from '@/data/assistant-config';
import { MotionGridDemo } from '@/components/sections/motion-grid-demo';
import { useQuickActions } from '@/hooks/useChat';
import ThumbnailCarousel from '@/components/chat/thumbnailcasestudy';
import Link from 'next/link';

// --------------------------------------
// Interfaces
// --------------------------------------

interface ChatButton {
  id: string;
  text: string;
  icon?: string;
  action: string;
  variant: 'primary' | 'secondary' | 'outline';
  linkType: 'internal' | 'external';
  url?: string;
  context?: any;
}

interface MessageContent {
  message: string;
  buttons?: ChatButton[];
  portfolio?: boolean;
  contact?: boolean;
  resume?: boolean;
  work?: boolean;
  metadata?: {
    level: number;
    section: string;
  };
}

interface Message {
  type: 'assistant' | 'user';
  content: MessageContent | string;
  isButtonAction?: boolean;
}

// --------------------------------------
// Skills Data
// --------------------------------------

type SkillSubItem = {
  id: string;
  label: string;
  description?: string;
};

type SkillCategory = {
  id: string;
  label: string;
  intro?: string;
  subskills: SkillSubItem[];
};

// Texto final para Skills → Research (sin chips)
const RESEARCH_OVERVIEW_TEXT = `
I study user needs, motivations, desires, pain points and behaviors to design products that are genuinely user centered. My research process usually follows these steps:

**Set a specific goal**  
I define what I need to learn from users or from the market. Different reasons require different research methods and different types of questions.

**Identify available resources**  
I consider time, constraints, budget and access to users to understand the depth and scope of the study.

**Select the right methodology**  
The method I choose depends on what we need to learn and where we are in the research process. In discovery, I explore the problem space through interviews, observations, surveys and competitor analysis to understand what users need, how they behave and why. In validation and testing, I use usability tests, concept evaluations, prototype walkthroughs and feedback analysis to check whether ideas actually work for real people. In post launch, I rely on analytics, heatmaps, surveys and behavioral data to see how the product performs in the real world and uncover opportunities for improvement.

4. **Collect and document data**  
I gather insights directly from users and the market to understand behaviors, expectations and opportunities. While collecting data, I also document everything clearly and keep it well organized, so that anyone on the team can access the findings and use them to guide decisions.

5. **Analyze my findings**   
I look for patterns, synthesize insights and turn them into direction for design and product decisions.
`;

// Textos para las macro chips de Design
const UX_SKILLS_TEXT = `
I focus on UX skills such as:

• User Research & Accessibility Research 
• Customer Journey Mapping  
• Wireframing & Prototyping  
• Usability Testing & Feedback Analysis  
• Heuristic Evaluation & Audits 
• Design Thinking & Agile Methodologies
`;

const UI_SKILLS_TEXT = `
On the UI side, I work on:

• Visual Branding  
• Cross-Platform Design 
• Accessibility (WCAG)
• Design System 
• Prototyping  
• User Flows & Information Architecture
`;

const MARKETING_STRATEGY_TEXT = `
From a marketing and strategy perspective, I work comfortably across content strategy, data driven design, SEO, automation and email marketing, always translating business goals into experiences that feel clear, human centered and genuinely useful for users.
`;

const COLLABORATION_TEXT = `
When it comes to collaboration & team work, I bring:

• Facilitating collaborative, in-depth conversations with cross-functional teams (XFN)  
• Strong communication skills (I speak Spanish, English and French)  
• Working in agile environments and adapting quickly to feedback  
`;

const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: 'skills_language',
    label: 'Language',
    intro:
      'I speak Spanish, English, and French. And when needed, I can also navigate Portuguese and Italian, with surprising charm and only minimal hand gestures.',
    subskills: [
      { id: 'skills_language_spanish', label: 'Spanish, native speaker' },
      { id: 'skills_language_english', label: 'English, fluent' },
      { id: 'skills_language_french', label: 'French, bilingual' },
    ],
  },
  {
    id: 'skills_design',
    label: 'Design',
    intro: 'Design skills I use to shape clear, accessible and human-centered digital experiences.',
    subskills: [],
  },
  {
    id: 'skills_research',
    label: 'Research',
    intro: 'Research methods I use to understand people, markets, and opportunities.',
    subskills: [],
  },
  {
    id: 'skills_tools',
    label: 'Tools',
    intro: 'Tools I use regularly across research, design, documentation, and automation.',
    subskills: [
      { id: 'skills_tools_figma', label: 'Figma', description: 'Main tool for UX/UI design and prototyping.' },
      { id: 'skills_tools_framer', label: 'Framer', description: 'Production ready prototypes and websites.' },
      { id: 'skills_tools_wordpress', label: 'WordPress', description: 'Blogs, websites, landing pages.' },
      { id: 'skills_tools_maze', label: 'Maze', description: 'Usability testing and validation.' },
      { id: 'skills_tools_miro', label: 'Miro', description: 'Mapping ideas and flows collaboratively.' },
      { id: 'skills_tools_zeroheight', label: 'Zeroheight', description: 'Documenting design systems.' },
      { id: 'skills_tools_notion', label: 'Notion', description: 'Documentation, research and workflows.' },
      { id: 'skills_tools_zapier', label: 'Zapier', description: 'Automating repetitive tasks.' },
      { id: 'skills_tools_ga', label: 'Google Analytics', description: 'User behavior and metrics.' },
      { id: 'skills_tools_ads', label: 'Google Ads', description: 'Managing campaigns and performance.' },
      { id: 'skills_tools_excel', label: 'Excel', description: 'Supporting basic data analysis.' },
      {
        id: 'skills_tools_htmlcss',
        label: 'HTML/CSS (basic)',
        description: 'Understanding frontend collaboration.',
      },
      { id: 'skills_tools_ai', label: 'AI Tools', description: 'ChatGPT, Claude, Perplexity, and others.' },
    ],
  },
];

// --------------------------------------
// Medium text
// --------------------------------------

const MEDIUM_EXPLANATION_TEXT = `
Medium is the platform where I publish my detailed case studies, design breakdowns and in depth research insights. You can explore my profile here:
[Visit my Medium profile](https://medium.com/@rayelencoria)

If you prefer a shorter overview of my work, you can always explore the "My Work", where I highlight selected projects in a more condensed way.
`;


// --------------------------------------
// Markdown cleaning
// --------------------------------------

const formatMessage = (message: string): string => {
  if (!message) return '';

  const cleanedMessage = message
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    // línea que borraba los links, eliminada
    .replace(/^[-*_]{3,}$/gm, '')
    .replace(/^>\s*/gm, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();

  const paragraphs = cleanedMessage.split('\n\n');

  return paragraphs
    .map((paragraph) => {
      if (paragraph.trim().match(/^[\-\*•]\s/)) {
        const lines = paragraph.split('\n');
        return lines
          .map((line) =>
            line.trim().match(/^[\-\*•]\s/)
              ? `• ${line.trim().replace(/^[\-\*•]\s/, '')}`
              : line
          )
          .join('\n');
      } else if (paragraph.trim().match(/^\d+\.\s/)) {
        const lines = paragraph.split('\n');
        let counter = 1;
        return lines
          .map((line) =>
            line.trim().match(/^\d+\.\s/)
              ? `${counter++}. ${line.trim().replace(/^\d+\.\s/, '')}`
              : line
          )
          .join('\n');
      }
      return paragraph;
    })
    .join('\n\n');
};

// ==================================================================
// COMPONENT
// ==================================================================

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: {
        message:
          "Hi! I'm Ayelén, a UX/UI Designer and UX Researcher. What would you like to explore?",
        buttons: [
          {
            id: 'my-work',
            text: 'My Work',
            action: 'work',
            variant: 'outline',
            linkType: 'internal',
          },
          {
            id: 'experience',
            text: 'Experience',
            action: 'experience',
            variant: 'outline',
            linkType: 'internal',
          },
          {
            id: 'skills',
            text: 'Skills',
            action: 'skills',
            variant: 'outline',
            linkType: 'internal',
          },
          {
            id: 'about-me',
            text: 'About Me',
            action: 'about',
            variant: 'outline',
            linkType: 'internal',
          },
          {
            id: 'contact',
            text: 'Contact',
            action: 'CONTACT_ME',
            variant: 'outline',
            linkType: 'internal',
          },
          {
            id: 'resume',
            text: 'Resume',
            action: 'DOWNLOAD_RESUME',
            variant: 'outline',
            linkType: 'internal',
          },
        ],
      },
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { quickActions } = useQuickActions();

  // --- Simple click sound (Web Audio) ---
  const audioContextRef = useRef<any>(null);

  const playClick = () => {
    if (typeof window === 'undefined') return;

    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioCtx();
    }

    const ctx = audioContextRef.current as AudioContext;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(800, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  };

  // AUTO SCROLL: al inicio del último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [messages]);

  // ==================================================================
  // On SUBMIT message
  // ==================================================================

  const handleUserInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    playClick();

    const userInputText = userInput.trim();
    const lower = userInputText.toLowerCase();

    const userMessage: Message = {
      type: 'user',
      content: userInputText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');

    // QUICK COMMANDS
    if (lower.includes('resume')) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: 'I would be happy to share my resume with you. Here is a download link:',
            resume: true,
          },
        },
      ]);
      setIsLoading(false);
      return;
    }

    if (lower.includes('contact')) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: 'Here is how you can get in touch with me:',
            contact: true,
          },
        },
      ]);
      setIsLoading(false);
      return;
    }

    if (lower.includes('case study') || lower.includes('case studies')) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message:
              'Here are some of my case studies. You can click any thumbnail to explore the full project.',
            portfolio: true,
          },
        },
      ]);
      return;
    }

    // texto libre "medium"
    if (lower.includes('medium')) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: MEDIUM_EXPLANATION_TEXT,
          },
        },
      ]);
      setIsLoading(false);
      return;
    }

    if (lower.includes('work')) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message:
              'Here are two ways to explore my work: you can browse selected projects here in the chat, or read my in depth case studies on Medium.',
            work: true,
            portfolio: true,
            buttons: [
              {
                id: 'my_design_process',
                text: 'My Design Process',
                action: 'MY_DESIGN_PROCESS',
                variant: 'secondary',
                linkType: 'internal',
              },
              {
                id: 'medium_profile',
                text: 'Medium',
                action: 'MEDIUM',
                variant: 'secondary',
                linkType: 'internal',
              },
            ],
          },
        },
      ]);
      setIsLoading(false);
      return;
    }

    if (lower.includes('skills')) {
      const topLevelButtons: ChatButton[] = SKILLS_CATEGORIES.map((cat) => ({
        id: cat.id,
        text: cat.label,
        action: cat.id,
        variant: 'secondary',
        linkType: 'internal',
      }));

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: '**Skills overview**\n\nHere are the main skill groups I usually work with.',
            buttons: topLevelButtons,
          },
        },
      ]);

      setIsLoading(false);
      return;
    }

    // Backend CALL
    const startTime = Date.now();
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userInput.trim(),
          messages: [...messages, userMessage],
          instructions: ASSISTANT_INSTRUCTIONS,
        }),
      });
      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      if (data.message) {
        const elapsed = Date.now() - startTime;
        const MIN_THINKING = 1500;
        const delayAfterThinking = Math.max(0, MIN_THINKING - elapsed) + 50;

        if (typeof data.message === 'string') {
          setTimeout(() => {
            setMessages((prev) => [...prev, { type: 'assistant', content: data.message }]);
          }, delayAfterThinking);
        } else {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                type: 'assistant',
                content: {
                  message: data.message.message || '',
                  buttons: data.message.buttons,
                  portfolio: data.message.portfolio,
                  work: data.message.work,
                  contact: data.message.contact,
                  resume: data.message.resume,
                },
              },
            ]);
          }, delayAfterThinking);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content:
            "I am sorry, I am having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      const elapsed = Date.now() - startTime;
      const MIN_THINKING = 1500;

      if (elapsed < MIN_THINKING) {
        setTimeout(() => setIsLoading(false), MIN_THINKING - elapsed);
      } else {
        setIsLoading(false);
      }
    }
  };

  // ==================================================================
  // Handle clicks on buttons
  // ==================================================================

  const handleButtonClick = async (button: ChatButton) => {
    playClick();
    if (isLoading) return;

    const buttonMessage: Message = {
      type: 'user',
      content: button.text,
      isButtonAction: true,
    };

    setMessages((prev) => [...prev, buttonMessage]);

    // MY DESIGN PROCESS, pantalla 2
    if (button.action === 'MY_DESIGN_PROCESS') {
      const processButtons: ChatButton[] = [
        {
          id: 'process_research_discovery',
          text: 'Research & Discovery',
          action: 'PROCESS_RESEARCH_DISCOVERY',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_strategic_concepting',
          text: 'Strategic Concepting',
          action: 'PROCESS_STRATEGIC_CONCEPTING',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_ai_assisted_ideation',
          text: 'AI Assisted Ideation',
          action: 'PROCESS_AI_ASSISTED_IDEATION',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_prototyping',
          text: 'Prototyping',
          action: 'PROCESS_PROTOTYPING',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_usability_testing',
          text: 'Usability Testing',
          action: 'PROCESS_USABILITY_TESTING',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_collaboration_devs',
          text: 'Collaboration with Developers',
          action: 'PROCESS_COLLABORATION_DEVS',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_post_launch',
          text: 'Post Launch Evaluation',
          action: 'PROCESS_POST_LAUNCH',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'process_back_to_work',
          text: '← Back to My Work',
          action: 'work',
          variant: 'secondary',
          linkType: 'internal',
        },
      ];

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message:
              'My design process bridges user needs with technical constraints through a collaborative and flexible approach. Depending on the project, the path can change, but it usually follows this flow: Research and Discovery → Strategic Concepting → AI Assisted Ideation → React Prototyping → Usability Testing → Developer Collaboration → Post Launch Evaluation.',
            buttons: processButtons,
          },
        },
      ]);

      return;
    }

    // Design Process, pantallas 3 (solo texto + back, sin repetir título)

    if (button.action === 'PROCESS_RESEARCH_DISCOVERY') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_research',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
I run end to end, mixed methods research, and the way I work always adapts to the stage, constraints and goals of the project. I start by identifying what we need to learn, selecting the right methodology, collecting the data and turning those findings into product direction.

I combine qualitative and quantitative methods such as in depth interviews, observations, contextual inquiry, diary studies, surveys, focus groups, benchmarking and UX audits. This allows me to understand how people behave, what motivates them and how the market currently approaches similar problems.

Once the data is collected, I synthesize everything through affinity mapping, user personas and journey mapping.

I also document the research process clearly so it remains accessible, organized and scalable for anyone who needs it. AI also supports documentation by helping generate interview scripts, summarize notes or evaluate multiple solutions. It does not replace design judgment, but it speeds up exploration and frees time for deeper thinking.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_STRATEGIC_CONCEPTING') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_concepting',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
At this stage I turn insights into direction. I clarify the problem we need to solve, identify the opportunities with the highest impact and decide where to focus next.

From there, I explore early concepts through user flows and information architecture, using techniques like card sorting when needed. I then move into low and high fidelity wireframes using tools such as Figma or Excalidraw to compare different directions and refine the structure before advancing to detailed design.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_AI_ASSISTED_IDEATION') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_ai',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
I use AI driven exploration to accelerate ideation and test variations quickly. Tools like Lovable, Magic Path or Figma Make help generate early UI directions, explore flows, compare alternatives and refine concepts without slowing down iteration.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_PROTOTYPING') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_prototyping',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
I build interactive prototypes using Figma to validate ideas in a more realistic way. Instead of static screens, I create prototypes that behave like the final product, which helps identify usability issues earlier.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_USABILITY_TESTING') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_testing',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
Before developing anything, we need to make sure it actually works for real people. I run moderated and unmoderated usability tests, quick concept evaluations, prototype walkthroughs and heuristic reviews to identify pain points, understand user behavior and iterate when needed.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_COLLABORATION_DEVS') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_devs',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
I work closely with developers to make sure designs are feasible, clear and correctly implemented. This includes preparing structured handoffs, clarifying interactions, documenting decisions and staying available during implementation to avoid misalignment.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'PROCESS_POST_LAUNCH') {
      const backButton: ChatButton = {
        id: 'back_my_design_process_from_post_launch',
        text: '← Back to My Design Process',
        action: 'MY_DESIGN_PROCESS',
        variant: 'secondary',
        linkType: 'internal',
      };

      const body = `
After launch, I monitor how the product performs. I combine surveys, heatmaps, analytics and user feedback to understand real behavior, validate our decisions and identify opportunities for improvement. This feeds the next cycle of iteration and supports continuous discovery.
`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: body,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    // SKILLS (primer nivel)
    if (button.action === 'skills') {
      const topButtons: ChatButton[] = SKILLS_CATEGORIES.map((cat) => ({
        id: cat.id,
        text: cat.label,
        action: cat.id,
        variant: 'secondary',
        linkType: 'internal',
      }));

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: '**Skills overview**\n\nTap a category to explore more.',
            buttons: topButtons,
          },
        },
      ]);

      return;
    }

    // WORK (igual que comando de texto)
    if (button.action === 'work') {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message:
              'Here are two ways to explore my work: you can browse selected projects here in the chat, or read my in depth case studies on Medium.',
            work: true,
            portfolio: true,
            buttons: [
              {
                id: 'my_design_process',
                text: 'My Design Process',
                action: 'MY_DESIGN_PROCESS',
                variant: 'secondary',
                linkType: 'internal',
              },
              {
                id: 'medium_profile',
                text: 'Medium',
                action: 'MEDIUM',
                variant: 'secondary',
                linkType: 'internal',
              },
            ],
          },
        },
      ]);
      return;
    }

    // MEDIUM chip
    if (button.action === 'MEDIUM') {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: MEDIUM_EXPLANATION_TEXT,
          },
        },
      ]);
      return;
    }

    // ABOUT (vista general)
    if (button.action === 'about') {
      const aboutDetails: any = (PROGRESSIVE_CONTENT as any).about_details;

      if (aboutDetails) {
        const aboutButtons: ChatButton[] = Object.entries(aboutDetails).map(
          ([key, item]: [string, any]) => ({
            id: `chip_${key}`,
            text: item.buttonText || item.title || key,
            action: key,
            variant: 'secondary',
            linkType: 'internal',
          })
        );

        setMessages((prev) => [
          ...prev,
          {
            type: 'assistant',
            content: {
              message:
                (PROGRESSIVE_CONTENT as any).about_intro ||
                'Here is a bit more about me. Choose what you would like to know:',
              buttons: aboutButtons,
            },
          },
        ]);

        return;
      }
    }

    // EXPERIENCE (vista general)
    if (button.action === 'experience') {
      const expDetailsRoot: any = (PROGRESSIVE_CONTENT as any).experience_details;

      if (expDetailsRoot) {
        const expButtons: ChatButton[] = Object.entries(expDetailsRoot).map(
          ([key, item]: [string, any]) => ({
            id: `chip_${key}`,
            text: item.buttonText || item.title || key,
            action: key,
            variant: 'secondary',
            linkType: 'internal',
          })
        );

        setMessages((prev) => [
          ...prev,
          {
            type: 'assistant',
            content: {
              message:
                (PROGRESSIVE_CONTENT as any).experience_intro ||
                'Here is a quick overview of my experience.',
              buttons: expButtons,
            },
          },
        ]);

        return;
      }
    }

    // --------- DESIGN (nuevo flujo) ---------

    if (button.action === 'skills_design') {
      const backButton: ChatButton = {
        id: 'back_to_skills_from_design',
        text: '← Back to Skills',
        action: 'skills',
        variant: 'secondary',
        linkType: 'internal',
      };

      const designMacroButtons: ChatButton[] = [
        {
          id: 'skills_design_ux',
          text: 'UX Skills',
          action: 'skills_design_ux',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'skills_design_ui',
          text: 'UI Skills',
          action: 'skills_design_ui',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'skills_design_marketing',
          text: 'Marketing & Strategy',
          action: 'skills_design_marketing',
          variant: 'secondary',
          linkType: 'internal',
        },
        {
          id: 'skills_design_collaboration',
          text: 'Collaboration & Team Work',
          action: 'skills_design_collaboration',
          variant: 'secondary',
          linkType: 'internal',
        },
      ];

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message:
              'Design skills I use to shape clear, accessible and human-centered digital experiences.',
            buttons: [backButton, ...designMacroButtons],
          },
        },
      ]);

      return;
    }

    if (button.action === 'skills_design_ux') {
      const backButton: ChatButton = {
        id: 'back_to_design_from_ux',
        text: '← Back to Design',
        action: 'skills_design',
        variant: 'secondary',
        linkType: 'internal',
      };

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: UX_SKILLS_TEXT,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'skills_design_ui') {
      const backButton: ChatButton = {
        id: 'back_to_design_from_ui',
        text: '← Back to Design',
        action: 'skills_design',
        variant: 'secondary',
        linkType: 'internal',
      };

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: UI_SKILLS_TEXT,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'skills_design_marketing') {
      const backButton: ChatButton = {
        id: 'back_to_design_from_marketing',
        text: '← Back to Design',
        action: 'skills_design',
        variant: 'secondary',
        linkType: 'internal',
      };

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: MARKETING_STRATEGY_TEXT,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    if (button.action === 'skills_design_collaboration') {
      const backButton: ChatButton = {
        id: 'back_to_design_from_collab',
        text: '← Back to Design',
        action: 'skills_design',
        variant: 'secondary',
        linkType: 'internal',
      };

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: COLLABORATION_TEXT,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    // --------- RESEARCH (skills, sin chips internos) ---------

    if (button.action === 'skills_research') {
      const backButton: ChatButton = {
        id: 'back_to_skills_from_research',
        text: '← Back to Skills',
        action: 'skills',
        variant: 'secondary',
        linkType: 'internal',
      };

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: RESEARCH_OVERVIEW_TEXT,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    // CATEGORY → SUBSKILLS para Language / Tools
    const categoryFromId = SKILLS_CATEGORIES.find(
      (cat) => cat.id === button.action && cat.id !== 'skills_design' && cat.id !== 'skills_research'
    );

    if (categoryFromId) {
      const subButtons: ChatButton[] = categoryFromId.subskills.map((s) => ({
        id: s.id,
        text: s.label,
        action: s.id,
        variant: 'secondary',
        linkType: 'internal',
      }));

      const backButton: ChatButton = {
        id: `back_${categoryFromId.id}`,
        text: '← Back to Skills',
        action: 'skills',
        variant: 'secondary',
        linkType: 'internal',
      };

      const introText =
        categoryFromId.intro ||
        `Here are some of the ${categoryFromId.label.toLowerCase()} skills I work with.`;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: introText,
            buttons: [backButton, ...subButtons],
          },
        },
      ]);

      return;
    }

    // SUBSKILL detalle, solo para Language / Tools
    const categoryForSub = SKILLS_CATEGORIES.find((cat) =>
      cat.subskills.some((s) => s.id === button.action)
    );

    if (categoryForSub) {
      const currentSub = categoryForSub.subskills.find((s) => s.id === button.action)!;

      const backButton: ChatButton = {
        id: `back_${categoryForSub.id}`,
        text: '← Back to Skills',
        action: 'skills',
        variant: 'secondary',
        linkType: 'internal',
      };

      const mainText = currentSub.description || currentSub.label;

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: mainText,
            buttons: [backButton],
          },
        },
      ]);

      return;
    }

    // ABOUT → detalle
    const aboutDetails: any = (PROGRESSIVE_CONTENT as any).about_details;
    if (aboutDetails && button.action in aboutDetails) {
      const content = aboutDetails[button.action];

      const remainingButtons: ChatButton[] = Object.entries(aboutDetails)
        .filter(([key]) => key !== button.action)
        .map(([key, item]: [string, any]) => ({
          id: `chip_${key}`,
          text: item.buttonText || item.title || key,
          action: key,
          variant: 'secondary',
          linkType: 'internal',
        }));

      const backButton: ChatButton = {
        id: 'back_about',
        text: '← Back to About',
        action: 'about',
        variant: 'secondary',
        linkType: 'internal',
      };

      const mainText = content.description || '';

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: mainText,
            buttons: [backButton, ...remainingButtons],
          },
        },
      ]);

      return;
    }

    // EXPERIENCE → detalle
    const expDetails: any = (PROGRESSIVE_CONTENT as any).experience_details;
    if (expDetails && button.action in expDetails) {
      const content = expDetails[button.action];

      const remainingButtons: ChatButton[] = Object.entries(expDetails)
        .filter(([key]) => key !== button.action)
        .map(([key, item]: [string, any]) => ({
          id: `chip_${key}`,
          text: item.buttonText || item.title || key,
          action: key,
          variant: 'secondary',
          linkType: 'internal',
        }));

      const backButton: ChatButton = {
        id: 'back_experience',
        text: '← Back to Experience',
        action: 'experience',
        variant: 'secondary',
        linkType: 'internal',
      };

      const mainText = content.description || '';

      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: mainText,
            buttons: [backButton, ...remainingButtons],
          },
        },
      ]);

      return;
    }

    // CONTACT
    if (button.action === 'CONTACT_ME') {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: 'Here is how you can get in touch with me:',
            contact: true,
          },
        },
      ]);
      setShowContactForm(true);
      return;
    }

    // RESUME
    if (button.action === 'DOWNLOAD_RESUME') {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: {
            message: 'Here is my resume download:',
            resume: true,
          },
        },
      ]);
      return;
    }

    // FALLBACK → API
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `[BUTTON_ACTION: ${button.action}]`,
          messages: [...messages, buttonMessage],
          instructions: ASSISTANT_INSTRUCTIONS,
          buttonAction: button.action,
        }),
      });

      const data = await response.json();

      if (data.message) {
        setMessages((prev) => [
          ...prev,
          {
            type: 'assistant',
            content:
              typeof data.message === 'string'
                ? data.message
                : {
                    message: data.message.message || '',
                    buttons: data.message.buttons,
                  },
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ==================================================================
  // RENDER MESSAGE
  // ==================================================================

  const renderMessage = (message: Message, index: number, isLast: boolean) => {
    // 1) Mensaje como string
    if (typeof message.content === 'string') {
      const text = message.content as string;

      return (
        <div
          key={index}
          ref={isLast ? messagesEndRef : undefined}
          className={`message ${message.type}-message`}
        >
          {message.type === 'assistant' ? (
            <div className="assistant-row">
              {/* Avatar AC */}
              <div
                className="assistant-avatar"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-avatar-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-avatar-text)',
                  fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                AC
              </div>

              {/* Texto */}
              <div className="message-content">
                <ReactMarkdown
                  components={{
                    a: (props) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                  }}
                >
                  {formatMessage(text)}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="message-content">{formatMessage(text)}</div>
          )}
        </div>
      );
    }

    // 2) Mensaje como objeto (MessageContent)
    const content = message.content as MessageContent;

    // Reordenamos el texto SOLO cuando es "work"
    let mainText = content.message;
    if (content.work) {
      mainText =
        "I am a UX/UI Designer and UX Researcher who loves creating empathetic digital products thought user-centered design.\n\n" +
        content.message;
    }

    return (
      <div
        key={index}
        ref={isLast ? messagesEndRef : undefined}
        className={`message ${message.type}-message`}
      >
        {/* ASSISTANT */}
        {message.type === 'assistant' && (
          <div className="assistant-row">
            {/* Avatar AC */}
            <div
              className="assistant-avatar"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-avatar-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-avatar-text)',
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              AC
            </div>

            {/* Texto + chips */}
            <div className="flex-1">
              <div className="message-content">
                <ReactMarkdown
                  components={{
                    a: (props) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                  }}
                >
                  {formatMessage(mainText)}
                </ReactMarkdown>
              </div>

              {/* CHIPS */}
              {content.buttons && content.buttons.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginTop: '1.75rem',
                  }}
                >
                  {content.buttons.map((button) => (
                    <button
                      key={button.id}
                      onClick={() => handleButtonClick(button)}
                      disabled={isLoading}
                      className="chip-button"
                      style={{ padding: '8px 16px' }}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* USER */}
        {message.type === 'user' && (
          <div className="message-content">
            {formatMessage(
              typeof content === 'string'
                ? (content as unknown as string)
                : (message.content as string)
            )}
          </div>
        )}

        {/* PORTFOLIO CARDS */}
        {content.portfolio && (
          <div className="portfolio-display mt-4">
            <ThumbnailCarousel />
          </div>
        )}

        {/* CONTACT */}
        {content.contact && (
          <div className="contact-display mt-4">
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <a href="mailto:hello.ayelencoria@gmail.com" className="contact-link">
                  hello.ayelencoria@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-label">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/ayelencoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/ayelencoria
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-label">Medium</div>
                <a
                  href="https://medium.com/@rayelencoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  medium.com/@rayelencoria
                </a>
              </div>
            </div>

            <div className="message-content" style={{ marginTop: '1rem' }}>
              I am always open to discussing design challenges, new opportunities or simply
              connecting with fellow designers and researchers. Feel free to reach out.
            </div>
          </div>
        )}

        {/* RESUME */}
        {content.resume && <div className="resume-display">{/* link o botón de CV */}</div>}
      </div>
    );
  };

  // ==================================================================
  // MAIN JSX
  // ==================================================================

  return (
    <div
      className="chat-interface"
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
      }}
    >
      {/* HEADER */}
      <div className="chat-header">
        <div className="header-left">
          {/* AVATAR AC */}
          <div className="avatar-container">
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-avatar-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-avatar-text)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              AC
            </div>
          </div>

          <div className="chat-title">Ayelén Coria</div>
        </div>

        <button
          className="chat-cta-button"
          onClick={() => {
            playClick();
            const container = document.querySelector('.chat-messages');
            if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="chat-cta-dots">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="chat-cta-dot" />
            ))}
          </span>
          <span className="chat-cta-label">Chat with me</span>
        </button>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">
        {messages.map((message, index) =>
          renderMessage(message, index, index === messages.length - 1)
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* THINKING INDICATOR */}
      {isLoading && (
        <div className="thinking-animation loading-indicator" style={{ padding: '12px 20px' }}>
          <div className="assistant-row">
            <div
              className="assistant-avatar"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-avatar-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-avatar-text)',
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              AC
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span
                style={{
                  color: '#c8d2da',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                }}
              >
                Thinking...
              </span>
            </div>
          </div>
        </div>
      )}

      {/* INPUT + MAIN BUTTONS */}
      <div className="chat-input-and-buttons-container">
        {/* INPUT */}
        <div className="chat-input-container">
          <form onSubmit={handleUserInputSubmit} className="chat-input-form">
            <div className="input-wrapper">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me about my work, experience, skills, or background..."
                className="chat-input"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="send-button"
                disabled={!userInput.trim() || isLoading}
              >
                <LucideIcons.Send size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* BOTTOM MENU BUTTONS */}
        <div className="button-grid main-menu-buttons flex flex-wrap gap-3 mt-4 justify-start">
          {[
            { id: 'btn_work', text: 'My Work', action: 'work' },
            { id: 'btn_experience', text: 'Experience', action: 'experience' },
            { id: 'btn_skills', text: 'Skills', action: 'skills' },
            { id: 'btn_about', text: 'About Me', action: 'about' },
            { id: 'btn_contact', text: 'Contact Me', action: 'CONTACT_ME' },
            { id: 'btn_resume', text: 'my-resume.pdf', action: 'DOWNLOAD_RESUME' },
          ].map((button) => (
            <button
              key={button.id}
              className="btn flex-shrink-0"
              onClick={() =>
                handleButtonClick({
                  id: button.id,
                  text: button.text,
                  action: button.action,
                  variant: 'outline',
                  linkType: 'internal',
                })
              }
              disabled={isLoading}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
