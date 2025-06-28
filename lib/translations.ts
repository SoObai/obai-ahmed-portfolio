// Define the structure of our translations
export interface Translations {
  [key: string]: {
    [key: string]: string | string[] | Record<string, any> | any[]
  }
}

// Define the Project interface used in the ProjectsSection
export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

// Define the Reference interface used in the FooterSection
export interface Reference {
  name: string;
  title: string;
  contact: string;
}

// Define all the translations for both languages
export const translations: Translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      volunteer: "Volunteer",
      contact: "Contact",
    },

    // Hero section
    hero: {
      title: "Obai Ahmed",
      subtitle: "Data Scientist | Machine Learning Engineer | AI Enthusiast",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      profileImage: "/Obai_no_background.png",
      stats: {
        languages: "Programming Languages",
        internships: "Internships",
        projects: "Projects",
        leadership: "Leadership Roles",
      },
      images: [
        {
          url: "/Obai_no_background.png",
          width: 1200,
          height: 630,
          alt: "Obai Ahmed - Data Scientist",
        },
      ],
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Transforming complex data into actionable insights",
      paragraph1:
        "I'm an aspiring Data Scientist with a Bachelor's in Computer Science specializing in Data Science.",
      
      paragraph2: "My passion for data science was ignited during my university years, where I discovered the power of extracting meaningful patterns from complex datasets. I approach each project with curiosity and methodical analysis.",
      paragraph3: "",
      sectionHeadings: {
        journey: "My Journey",
        careerHighlights: "Career Highlights",
        techStack: "Tech Stack",
        careerGoals: "Career Goals",
        personalAttributes: "Personal Attributes"
      },
      highlights: [
        {
          id: "education",
          title: "Academic Excellence",
          description: "Graduated with distinction in Computer Science specialized in Data Science, with a focus on machine learning and statistical analysis techniques."
        },
        {
          id: "internship",
          title: "Experience in Data Analysis and Systems",
          description: "Worked at Brithol Michcoma and INVWSTORS GP LDA in data analysis and system development."
        },
        {
          id: "skills",
          title: "Technical Proficiency",
          description: "Mastered a diverse technical stack including Python, R, TensorFlow, and data visualization tools while continuously expanding knowledge in emerging AI fields."
        }
      ],
      careerGoals: [
        "Become a lead data scientist specializing in predictive analytics",
        "Pursue advanced certifications in machine learning and AI",
        "Contribute to open-source projects in the data science community"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "Analytical Thinker",
          description: "Approach problems methodically and systematically"
        },
        continuousLearner: {
          title: "Continuous Learner",
          description: "Constantly seeking new knowledge and skills"
        },
        detailOriented: {
          title: "Detail-Oriented",
          description: "Meticulous attention to data accuracy and quality"
        },
        adaptable: {
          title: "Adaptable",
          description: "Quickly adjust to new technologies and challenges"
        }
      },
      contactCTA: "Let's discuss how I can contribute to your team",
      resume: "/Obai_Ahmed_Data_Scientist_Resume.pdf",
    },

    // Skills section
    skills: {
      title: "Skills",
      subtitle: "Expertise across the data science spectrum",
      tabs: {
        technical: "Technical Skills",
        soft: "Soft Skills",
      },
      categories: {
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        toolsFrameworks: "Tools & Frameworks",
      },
      softSkills: {
        communication: {
          name: "Communication",
          description: "Effectively conveying complex data insights to stakeholders",
        },
        teamwork: {
          name: "Teamwork",
          description: "Collaborating across departments to achieve project goals",
        },
        problemSolving: {
          name: "Problem Solving",
          description: "Breaking down complex problems into manageable components",
        },
        criticalThinking: {
          name: "Critical Thinking",
          description: "Analyzing information objectively to make reasoned judgments",
        },
        timeManagement: {
          name: "Time Management",
          description: "Prioritizing tasks and meeting deadlines efficiently",
        },
        creativity: {
          name: "Creativity",
          description: "Developing innovative approaches to data challenges",
        },
        adaptability: {
          name: "Adaptability",
          description: "Quickly adjusting to new technologies and methodologies",
        },
        leadership: {
          name: "Leadership",
          description: "Guiding teams and projects to successful outcomes",
        },
      },
      hoverMessage: "Hover over skill bars for more details",
    },

    // Projects section
    projects: {
      title: "Projects",
      subtitle: "Innovative solutions with measurable impact",
      showMore: "Show More",
      showLess: "Show Less",
      overview: "Overview",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      featuredProject: "Featured Project",
      
      projectList: [
        {
          id: "arabic-sign-language",
          title: "Arabic Sign Language Comparative Analysis",
          badge: "Deep Learning",
          description: "Applied CNNs and LSTMs with transfer learning to improve recognition accuracy for Arabic sign language.",
          tags: ["CNNs", "LSTMs", "Image Processing", "Deep Learning", "Transfer Learning"],
          detailedDescription: "Developed a comprehensive system for Arabic sign language recognition using advanced deep learning techniques. The project combines Convolutional Neural Networks (CNNs) for feature extraction from sign language images with Long Short-Term Memory (LSTM) networks for temporal sequence modeling.",
          challenges: [
            "Complex hand gesture recognition in varying lighting conditions",
            "Limited dataset availability for Arabic sign language",
            "Real-time processing requirements for practical applications"
          ],
          solutions: [
            "Implemented transfer learning using pre-trained CNN models to overcome limited data",
            "Applied data augmentation techniques to improve model robustness",
            "Optimized model architecture for real-time inference"
          ],
          results: [
            "Achieved significant improvement in recognition accuracy compared to baseline models",
            "Successfully implemented transfer learning to work with limited training data",
            "Created a scalable framework for sign language recognition"
          ],
          githubUrl: "https://github.com/obai-ahmed/arabic-sign-language",
          image: "/Artificial intelligence-amico.png",
          featured: true
        },
        {
          id: "fifa-player-prediction",
          title: "FIFA 2022 Player Release Clause Prediction",
          badge: "Machine Learning",
          description: "Built multi-linear regression models with feature engineering to predict player release clauses.",
          tags: ["Regression Analysis", "Python", "Data Wrangling", "Feature Engineering"],
          detailedDescription: "Developed predictive models to estimate player release clauses in FIFA 2022 using comprehensive player statistics and market data. The project involved extensive feature engineering and multiple regression techniques.",
          challenges: [
            "Complex relationship between player attributes and market value",
            "Handling missing data and outliers in player statistics",
            "Feature selection from large number of player attributes"
          ],
          solutions: [
            "Applied feature engineering to create meaningful composite features",
            "Used multiple regression models and ensemble methods",
            "Implemented robust data preprocessing and validation techniques"
          ],
          results: [
            "Achieved high prediction accuracy for player release clauses",
            "Identified key factors influencing player market value",
            "Created a reliable model for sports analytics applications"
          ],
          githubUrl: "https://github.com/obai-ahmed/fifa-prediction",
          image: "/Data analysis-amico.png"
        },
        {
          id: "car-detection-system",
          title: "Real-Time Car Detection System",
          badge: "Computer Vision",
          description: "Implemented YOLO algorithm for object detection in real-time car detection.",
          tags: ["YOLO", "OpenCV", "Python", "Computer Vision", "Real-time Processing"],
          detailedDescription: "Built a real-time car detection system using the YOLO (You Only Look Once) algorithm. The system can detect and track vehicles in video streams with high accuracy and speed.",
          challenges: [
            "Real-time processing requirements for video streams",
            "Handling varying lighting and weather conditions",
            "Optimizing detection accuracy while maintaining speed"
          ],
          solutions: [
            "Implemented YOLO v5 for efficient real-time object detection",
            "Applied OpenCV for video processing and visualization",
            "Optimized model parameters for car-specific detection"
          ],
          results: [
            "Achieved real-time car detection with high accuracy",
            "Successfully processed video streams in various conditions",
            "Created a scalable system for traffic monitoring applications"
          ],
          githubUrl: "https://github.com/obai-ahmed/car-detection",
          image: "/Visual data-bro.png"
        },
        {
          id: "sentiment-analysis-ecommerce",
          title: "Sentiment Analysis Tool for E-commerce",
          badge: "NLP",
          description: "Developed sentiment analysis system for e-commerce customer feedback and reviews.",
          tags: ["RNNs", "NLP", "Sentiment Classification", "E-commerce"],
          detailedDescription: "Created a comprehensive sentiment analysis tool specifically designed for e-commerce applications. The system analyzes customer reviews and feedback to provide insights for business decision-making.",
          challenges: [
            "Handling domain-specific language in e-commerce reviews",
            "Processing large volumes of unstructured text data",
            "Achieving high accuracy in sentiment classification"
          ],
          solutions: [
            "Implemented Recurrent Neural Networks (RNNs) for sequence modeling",
            "Applied advanced NLP techniques for text preprocessing",
            "Used transfer learning with pre-trained language models"
          ],
          results: [
            "Achieved high accuracy in sentiment classification for e-commerce reviews",
            "Successfully processed large datasets of customer feedback",
            "Provided actionable insights for business improvement"
          ],
          githubUrl: "https://github.com/obai-ahmed/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        },
        {
          id: "covid-forecasting",
          title: "COVID-19 Seasonal Impact Forecasting",
          badge: "Predictive Analytics",
          description: "Developed predictive models to forecast infection trends using supervised learning techniques.",
          tags: ["Supervised Learning", "Time Series", "Predictive Modeling", "Healthcare"],
          detailedDescription: "Built predictive models to forecast COVID-19 infection trends and seasonal impacts. The project used various supervised learning techniques to analyze patterns and predict future infection rates.",
          challenges: [
            "Complex temporal patterns in COVID-19 data",
            "Handling uncertainty and variability in infection rates",
            "Incorporating multiple factors affecting transmission"
          ],
          solutions: [
            "Applied time series analysis and forecasting techniques",
            "Used ensemble methods combining multiple prediction models",
            "Incorporated seasonal and environmental factors in predictions"
          ],
          results: [
            "Developed accurate forecasting models for COVID-19 trends",
            "Identified seasonal patterns in infection rates",
            "Provided valuable insights for public health planning"
          ],
          githubUrl: "https://github.com/obai-ahmed/covid-forecasting",
          image: "/Data analysis-amico.png"
        },
        {
          id: "financial-reporting",
          title: "Financial Reporting Automation",
          badge: "Python",
          description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
          tags: ["Python", "Microsoft Fabric", "Automation"],
          detailedDescription: "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
          challenges: [
            "Manual reporting process was time-consuming and error-prone",
            "Data needed to be validated and transformed before reporting"
          ],
          solutions: [
            "Implemented Python scripts to automate data extraction and transformation",
            "Used Microsoft Fabric for workflow orchestration and scheduling"
          ],
          results: [
            "Reduced reporting time from 2 days to 2 hours",
            "Eliminated manual errors and improved data accuracy"
          ],
          githubUrl: "https://github.com/obai-ahmed/financial-reporting",
          image: "/Audit-amico.png"
        },
        {
          id: "sentiment-analysis",
          title: "Sentiment Analysis Tool",
          badge: "NLP",
          description: "NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.",
          tags: ["Python", "NLP", "Text Analysis"],
          detailedDescription: "Created a sentiment analysis system that processes customer reviews and social media posts to determine sentiment and extract key themes.",
          challenges: [
            "Handling context-specific language and sarcasm in text data",
            "Processing large volumes of unstructured text efficiently"
          ],
          solutions: [
            "Implemented a hybrid approach combining lexicon-based and machine learning methods",
            "Used parallel processing to handle large datasets efficiently"
          ],
          results: [
            "Achieved 85% accuracy in sentiment classification",
            "Identified key customer pain points that informed product improvements"
          ],
          githubUrl: "https://github.com/obai-ahmed/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        }
      ],

      // Project details
      financialReporting: {
        description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
        detailedDescription:
          "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
        challenges: {
          1: "Manual reporting process was time-consuming and error-prone",
          2: "Data needed to be validated and transformed before reporting",
        },
        solutions: {
          1: "Implemented Python scripts to automate data extraction and transformation",
          2: "Used Microsoft Fabric for workflow orchestration and scheduling"
        },
        results: {
          1: "Reduced reporting time from 2 days to 2 hours",
          2: "Eliminated manual errors and improved data accuracy"
        },
      },

      sentimentAnalysis: {
        description: "NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.",
        detailedDescription:
          "Created a sentiment analysis system that processes customer reviews and social media posts to determine sentiment and extract key themes.",
        challenges: {
          1: "Handling context-specific language and sarcasm in text data",
          2: "Processing large volumes of unstructured text efficiently"
        },
        solutions: {
          1: "Implemented a hybrid approach combining lexicon-based and machine learning methods",
          2: "Used parallel processing to handle large datasets efficiently"
        },
        results: {
          1: "Achieved 85% accuracy in sentiment classification",
          2: "Identified key customer pain points that informed product improvements"
        },
      },
    },

    // Experience section
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      timeline: [
        {
          title: "Data Analyst, IT Department",
          company: "Brithol Michcoma",
          period: "07/2024 - 11/2024",
          description: [
            "Analysed networking data to identify patterns and optimization opportunities",
            "Performed exploratory data analysis (EDA) to uncover actionable insights",
            "Configured and deployed over 200 Microtek routers across Mozambique client locations",
            "Deployed and configured PBX and VoIP systems utilizing Ylink and Cisco phones for 200+ employees, decreasing internal communication latency by 60% and saving approximately 10 hours per employee annually",
            "Monitored device performance using syslog-server tools and assisted in VSAT installations for remote connectivity",
            "Collaborated with interdisciplinary teams to support data-driven decision-making"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["Data Analysis", "Network Configuration", "VoIP Systems", "System Monitoring", "IT Infrastructure"],
        },
        {
          title: "IT System Analyst | Data Entry Clerk | Call Officer, IT Department",
          company: "INVSTORS GP LDA",
          period: "05/2022 - 05/2024",
          description: [
            "Monitored system performance and analysed real-time logistics data to support operations",
            "Designed dashboards to track fleet deployment, fuel usage, and delivery schedules",
            "Collaborated with procurement and IT teams to improve data accuracy and reporting workflows",
            "Entered and maintained critical operational data in company systems with high accuracy",
            "Handled customer calls, resolved inquiries, and documented complaints for escalation and service improvement",
            "Supported hardware/software troubleshooting and maintained technical documentation",
            "Logged and tracked customer complaints and technical issues, improving service quality",
            "Assisted in system documentation and record-keeping for audits and internal evaluations"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["System Analysis", "Data Entry", "Customer Service", "Technical Support", "Documentation"],
        },
        {
          title: "Bachelor of Computer Science",
          institution: "Multimedia University",
          period: "2020 - 2024",
          description: [
            "Specialized in Data Science",
            "Relevant coursework: Machine Learning, Data Mining, Statistical Analysis, Big Data Analytics",
            "Participated in various data science competitions and hackathons",
          ],
          type: "education",
          location: "Cyberjaya, Selangor",
          skills: ["Data Science", "Machine Learning", "Statistical Analysis"],
          achievements: [{ text: "Data Science Specialization" }],
        },
      ],
    },

    // Volunteer section
    volunteer: {
      title: "Volunteer Experience",
      subtitle: "Leadership and community engagement roles",
      responsibilities: "Responsibilities",
      keyAchievements: "Key Achievements",
      leadershipExperience: "Leadership Experience",
      roles: [
        {
          title: "Co Founder and Consultant",
          organization: "Sudanese Culture Society - MMU",
          period: "08/2023 - 10/2024",
          description: [
            "Consulted in organized cultural and charity events, significantly enhancing community engagement",
            "Represented MMU's Sudanese community at conferences and national-level meetings",
            "Contributed to fundraising efforts for displaced Sudanese communities",
          ],
          achievements: [
            "Successfully organized 5+ cultural events with 100+ attendees",
            "Raised funds for humanitarian causes",
            "Established partnerships with other cultural organizations",
          ],
        },
      ],
    },

    // Contact section
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your next project",
      email: "Email",
      emailAddress: "obaialid45@gmail.com",
      phone: "Phone",
      phoneNumber: "WS : +601137939422 | Phone : +971561647714",
      linkedin: "LinkedIn",
      linkedinHandle: "obai-ahmed-b7697433a",
      linkedinUrl: "http://www.linkedin.com/in/obai-ahmed-b7697433a/",
      github: "GitHub",
      githubHandle: "SoObai",
      githubUrl: "http://github.com/SoObai",
      getInTouch: "Get in Touch",
      sendMessage: "Send Me a Message",
      responseTime: "Quick Response Time",
      responseMessage: "I typically respond to messages within 24-48 hours. For urgent matters, consider reaching out via phone or LinkedIn.",
      messageSent: "Message Sent Successfully!",
      thankYouMessage: "Thank you for your message. I'll get back to you as soon as possible.",
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Your Email",
        emailPlaceholder: "Enter your email address",
        subject: "Subject",
        subjectPlaceholder: "What is this regarding?",
        message: "Message",
        messagePlaceholder: "Tell me about your project, requirements, or any questions you have...",
        submit: "Send Message"
      }
    },

    // Footer
    footer: {
      description: "Data Scientist specializing in machine learning and AI solutions.",
      quickLinks: "Quick Links",
      references: "References",
      copyright: "© 2025 Obai Ahmed. All rights reserved.",
      referenceList: [
        {
          name: "Mr. Chadreque",
          title: "IT Department, Brithol Michcoma",
          contact: "Phone: +258 84 302 0123"
        },
        {
          name: "Mr. Mohammed Manni",
          title: "INVWSTORS GP LDA, Av. 24 de Junho, nº 1113",
          contact: "Email: info@investorgp.co.mz | Phone: +258 84 292 9475"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/obai_ahmed",
        github: "http://github.com/SoObai",
        linkedin: "http://www.linkedin.com/in/obai-ahmed-b7697433a/"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },

  ar: {
    // Navigation
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      education: "التعليم",
      volunteer: "العمل التطوعي",
      contact: "اتصل بي",
    },

    // Hero section
    hero: {
      title: "Obai Ahmed",
      subtitle: "عالم بيانات | مهندس تعلم آلي | مهتم بالذكاء الاصطناعي",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      profileImage: "/Obai_no_background.png",
      stats: {
        languages: "لغات البرمجة",
        internships: "التدريب العملي",
        projects: "المشاريع",
        leadership: "أدوار قيادية",
      },
      images: [
        {
          url: "/Obai_no_background.png",
          width: 1200,
          height: 630,
          alt: "Obai Ahmed - Data Scientist",
        },
      ],
    },

    // About section
    about: {
      title: "نبذة عني",
      subtitle: "تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ",
      paragraph1:
        "أنا عالم بيانات طموح حاصل على بكالوريوس في علوم الكمبيوتر متخصص في علوم البيانات. لدي خبرة شاملة في تحليل البيانات والتعلم الآلي والتصور.",
      paragraph2:
        "متمكن في تطوير ونشر حلول قائمة على البيانات، وإنشاء لوحات معلومات تفاعلية، وتطبيق تقنيات التعلم العميق. لقد أظهرت مهارات القيادة ورواية القصص والعرض من خلال قيادة مبادرات ومشاريع المجتمع.",
      paragraph3: "اشتعلت شغفي بعلوم البيانات خلال سنوات الجامعة، حيث اكتشفت قوة استخراج أنماط ذات معنى من مجموعات البيانات المعقدة. أتناول كل مشروع بفضول وتحليل منهجي، سعياً لتقديم حلول توفر قيمة عملية ملموسة.",
      sectionHeadings: {
        journey: "مسيرتي",
        careerHighlights: "أبرز الإنجازات المهنية",
        techStack: "المهارات التقنية",
        careerGoals: "الأهداف المهنية",
        personalAttributes: "السمات الشخصية"
      },
      highlights: [
        {
          id: "education",
          title: "التميز الأكاديمي",
          description: "تخرجت بتفوق في علوم الكمبيوتر متخصصاً في علوم البيانات، مع التركيز على تقنيات التعلم الآلي والتحليل الإحصائي."
        },
        {
          id: "internship",
          title: "خبرة في تحليل البيانات والأنظمة",
          description: "عملت في Brithol Michcoma و INVWSTORS GP LDA في تحليل البيانات وتطوير الأنظمة وتحسين العمليات."
        },
        {
          id: "skills",
          title: "الكفاءة التقنية",
          description: "أتقنت مجموعة متنوعة من التقنيات بما في ذلك Python و R و TensorFlow وأدوات تصور البيانات مع توسيع المعرفة باستمرار في مجالات الذكاء الاصطناعي الناشئة."
        }
      ],
      careerGoals: [
        "أن أصبح عالم بيانات رئيسي متخصص في التحليلات التنبؤية",
        "السعي للحصول على شهادات متقدمة في التعلم الآلي والذكاء الاصطناعي",
        "المساهمة في مشاريع مفتوحة المصدر في مجتمع علوم البيانات"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "مفكر تحليلي",
          description: "معالجة المشكلات بشكل منهجي ومنظم"
        },
        continuousLearner: {
          title: "متعلم مستمر",
          description: "البحث باستمرار عن المعرفة والمهارات الجديدة"
        },
        detailOriented: {
          title: "مهتم بالتفاصيل",
          description: "اهتمام دقيق بدقة البيانات وجودتها"
        },
        adaptable: {
          title: "قابل للتكيف",
          description: "التكيف السريع مع التقنيات والتحديات الجديدة"
        }
      },
      contactCTA: "دعنا نناقش كيف يمكنني المساهمة في فريقك",
      resume: "/Obai_Ahmed_Data_Scientist_Resume.pdf",
    },

    // Skills section
    skills: {
      title: "المهارات",
      subtitle: "خبرة في مختلف مجالات علوم البيانات",
      tabs: {
        technical: "المهارات التقنية",
        soft: "المهارات الشخصية",
      },
      categories: {
        technicalSkills: "المهارات التقنية",
        programmingLanguages: "لغات البرمجة",
        toolsFrameworks: "الأدوات والأطر",
      },
      softSkills: {
        communication: {
          name: "التواصل",
          description: "نقل رؤى البيانات المعقدة بفعالية إلى أصحاب المصلحة",
        },
        teamwork: {
          name: "العمل الجماعي",
          description: "التعاون عبر الإدارات لتحقيق أهداف المشروع",
        },
        problemSolving: {
          name: "حل المشكلات",
          description: "تقسيم المشكلات المعقدة إلى مكونات قابلة للإدارة",
        },
        criticalThinking: {
          name: "التفكير النقدي",
          description: "تحليل المعلومات بموضوعية لاتخاذ أحكام منطقية",
        },
        timeManagement: {
          name: "إدارة الوقت",
          description: "تحديد أولويات المهام وتلبية المواعيد النهائية بكفاءة",
        },
        creativity: {
          name: "الإبداع",
          description: "تطوير نهج مبتكر لتحديات البيانات",
        },
        adaptability: {
          name: "القدرة على التكيف",
          description: "التكيف السريع مع التقنيات والمنهجيات الجديدة",
        },
        leadership: {
          name: "القيادة",
          description: "توجيه الفرق والمشاريع نحو نتائج ناجحة",
        },
      },
      hoverMessage: "ضع المؤشر فوق المهارات لمزيد من التفاصيل",
    },

    // Projects section
    projects: {
      title: "المشاريع",
      subtitle: "حلول مبتكرة ذات تأثير قابل للقياس",
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
      overview: "نظرة عامة",
      challenges: "التحديات",
      solutions: "الحلول",
      results: "النتائج",
      featuredProject: "مشروع مميز",
      
      projectList: [
        {
          id: "arabic-sign-language",
          title: "تحليل مقارن لللغة الإشارية العربية",
          badge: "تعلم عميق",
          description: "تطبيق CNNs و LSTMs مع تعلم النقل لتحسين دقة التعرف على اللغة الإشارية العربية.",
          tags: ["CNNs", "LSTMs", "معالجة البيانات", "تعلم عميق", "تعلم النقل"],
          detailedDescription: "تطوير نظام شامل لتعرف اللغة الإشارية العربية باستخدام تقنيات تعلم عميق متقدمة. المشروع يجمع بين شبكات عصرية عصرية (CNNs) لاستخراج الميزات من صور اللغة الإشارية مع شبكات التسلسل القصيرة الطويلة (LSTMs) لتصميم النمط الزمني.",
          challenges: [
            "تعرف المفعول الإشاري المعقد في ظروف الإضاءة المتغيرة",
            "حصول على مجموعة بيانات متاحة مقيدة للغة الإشارية العربية",
            "متطلبات معالجة الوقت الحقيقي لتطبيقات عملية"
          ],
          solutions: [
            "تنفيذ تعلم النقل باستخدام نماذج CNN مدربة مسبقًا لتجاوز البيانات المقيدة",
            "تطبيق تقنيات توسيع البيانات لتحسين تحمل النموذج",
            "تحسين بنية النموذج للتنبؤ الحقيقي"
          ],
          results: [
            "تحقيق تحسين مهم في دقة التعرف على المقارن مع النماذج الأساسية",
            "تنفيذ تعلم النقل بنجاح للعمل مع بيانات التدريب المقيدة",
            "إنشاء منظومة متطورة لتعرف اللغة الإشارية"
          ],
          githubUrl: "https://github.com/obai-ahmed/arabic-sign-language",
          image: "/Artificial intelligence-amico.png",
          featured: true
        },
        {
          id: "fifa-player-prediction",
          title: "تنبؤ عقد اللاعب في فيفا 2022",
          badge: "تعلم آلي",
          description: "إنشاء نماذج تحليل متعددة الخطية مع تصميم الميزة لتنبؤ عقد اللاعب.",
          tags: ["تحليل الانحدار", "Python", "تنظيف البيانات", "تصميم الميزة"],
          detailedDescription: "تطوير نماذج تنبؤية لتقدير عقود اللاعبين في فيفا 2022 باستخدام الإحصائيات الكاملة لللاعبين وبيانات السوق. المشروع تضمن تصميم الميزة المعنية لإنشاء ميزات مركبة معنية وتطبيق تقنيات الانحدار المتعددة وتقنيات معالجة البيانات الموثوقة.",
          challenges: [
            "علاقة معقدة ما بين سمات اللاعب وقيمة السوق",
            "التعامل مع البيانات المفقودة والقيم المتطرفة في إحصائيات اللاعبين",
            "اختيار الميزة من عدد كبير من سمات اللاعبين"
          ],
          solutions: [
            "تطبيق تصميم الميزة لإنشاء ميزات مركبة معنية معنية",
            "استخدام نماذج الانحدار المتعددة وطرائق الانحدار المتعددة",
            "تنفيذ تقنيات معالجة البيانات الموثوقة وتقنيات التحقق"
          ],
          results: [
            "تحقيق دقة التنبؤ العالية لعقد اللاعبين",
            "تحديد العوامل المؤثرة في قيمة السوق للاعبين",
            "إنشاء نموذج موثوق لتطبيقات تحليل الرياضة"
          ],
          githubUrl: "https://github.com/obai-ahmed/fifa-prediction",
          image: "/Data analysis-amico.png"
        },
        {
          id: "car-detection-system",
          title: "نظام تكتشاف السيارات الحقيقية في الوقت",
          badge: "رؤية حاسوبية",
          description: "تنفيذ خوارزمية YOLO لكتشاف الكائنات في الوقت الحقيقي لتكتشاف السيارات.",
          tags: ["YOLO", "OpenCV", "Python", "رؤية حاسوبية", "معالجة الوقت الحقيقي"],
          detailedDescription: "إنشاء نظام تكتشاف السيارات الحقيقية الذي يستخدم خوارزمية YOLO (You Only Look Once). النظام يمكنه تكتشاف وتتبع المركبات في تدفقات الفيديو بدقة عالية وسرعة.",
          challenges: [
            "متطلبات معالجة الوقت الحقيقي لتدفقات الفيديو",
            "التعامل مع ظروف الإضاءة والطقس المتغيرة",
            "تحسين دقة التكتشاف بينما يحافظ على السرعة"
          ],
          solutions: [
            "تنفيذ YOLO v5 لكتشاف الكائنات الحقيقية في الوقت الحقيقي بكفاءة",
            "تطبيق OpenCV لمعالجة الفيديو وتصويره",
            "تحسين معلمات النموذج لكتشاف السيارات المحددة"
          ],
          results: [
            "تحقيق تكتشاف السيارات الحقيقي بدقة عالية",
            "تنفيذ تدفقات الفيديو في ظروف متعددة",
            "إنشاء نظام متطور لمراقبة تطبيقات المرور"
          ],
          githubUrl: "https://github.com/obai-ahmed/car-detection",
          image: "/Visual data-bro.png"
        },
        {
          id: "sentiment-analysis-ecommerce",
          title: "أداة تحليل المشاعر للتجارة إلكترونية",
          badge: "معالجة اللغة الطبيعية",
          description: "تطوير نظام تحليل المشاعر مخصص لتحليل تعليقات العملاء والمراجعات في التجارة إلكترونية.",
          tags: ["RNNs", "معالجة اللغة الطبيعية", "تصنيف المشاعر", "التجارة إلكترونية"],
          detailedDescription: "إنشاء أداة تحليل المشاعر شاملة مخصصة لتطبيقات التجارة إلكترونية. النظام يحلل تعليقات العملاء والمراجعات لتوفير الإفادات لتحديد القرارات التجارية.",
          challenges: [
            "التعامل مع اللغة المحددة بالسياق في تعليقات التجارة إلكترونية",
            "معالجة كميات كبيرة من النص غير المنظم بكفاءة",
            "تحقيق دقة التصنيف العالية في تصنيف المشاعر"
          ],
          solutions: [
            "تنفيذ شبكات التسلسل العودية (RNNs) لتصميم النمط",
            "تطبيق تقنيات معالجة اللغة الطبيعية المتقدمة لمعالجة النص",
            "استخدام تعلم النقل مع نماذج اللغة المدربة مسبقًا"
          ],
          results: [
            "تحقيق دقة التصنيف العالية في تصنيف المشاعر لتعليقات التجارة إلكترونية",
            "تنفيذ معالجة كبيرة من تعليقات العملاء",
            "توفير إفادات عملية لتحسين الأعمال"
          ],
          githubUrl: "https://github.com/obai-ahmed/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        },
        {
          id: "covid-forecasting",
          title: "تنبؤ تأثير الموسمي لفيروس كوفيد-19",
          badge: "تحليل التنبؤ",
          description: "تطوير نماذج تحليل التنبؤ لتنبؤ اتجاهات الإصابة باستخدام تقنيات التعلم المشرف.",
          tags: ["تعلم مشرف", "التسلسل الزمني", "تصميم التنبؤ", "الصحة العامة"],
          detailedDescription: "إنشاء نماذج تحليل التنبؤ لتنبؤ اتجاهات الإصابة بفيروس كوفيد-19 وتأثيرات الموسمية. المشروع استخدم تقنيات التعلم المشرفة المختلفة لتحليل الأنماط وتنبؤ معدلات الإصابة المستقبلية.",
          challenges: [
            "أنماط التسلسل المعقدة في بيانات فيروس كوفيد-19",
            "التعامل مع عدم اليقين والتغير في معدلات الإصابة",
            "اعتماد عوامل متعددة لتأثير النقل"
          ],
          solutions: [
            "تطبيق تحليل التسلسل الزمني وتقنيات التنبؤ",
            "استخدام طرائق الانحدار المتعددة التي تجمع نماذج التنبؤ المتعددة",
            "اعتماد عوامل الموسمية والعوامل البيئية في التنبؤ"
          ],
          results: [
            "تطوير نماذج تحليل التنبؤ الدقيقة لاتجاهات فيروس كوفيد-19",
            "تحديد أنماط الموسمية في معدلات الإصابة",
            "توفير إفادات قيمة لتخطيط الصحة العامة"
          ],
          githubUrl: "https://github.com/obai-ahmed/covid-forecasting",
          image: "/Data analysis-amico.png"
        },
        {
          id: "financial-reporting",
          title: "تنظيم تقارير مالية آلي باستخدام Python و Microsoft Fabric لمعالجة البيانات بسلاسة.",
          badge: "Python",
          description: "تنظيم تقارير مالية آلي باستخدام Python و Microsoft Fabric لمعالجة البيانات بسلاسة.",
          tags: ["Python", "Microsoft Fabric", "Automation"],
          detailedDescription: "بناء حل أتمتة شامل للتقارير المالية يستخرج البيانات من مصادر متعددة ويعالجها وينتج تقارير موحدة.",
          challenges: [
            "كانت عملية إعداد التقارير اليدوية تستغرق وقتًا طويلاً وعرضة للأخطاء",
            "كانت البيانات بحاجة إلى التحقق منها وتحويلها قبل إعداد التقارير"
          ],
          solutions: [
            "تنفيذ نصوص Python لأتمتة استخراج البيانات وتحويلها",
            "استخدام Microsoft Fabric لتنظيم سير العمل والجدولة"
          ],
          results: [
            "تقليل وقت إعداد التقارير من يومين إلى ساعتين",
            "القضاء على الأخطاء اليدوية وتحسين دقة البيانات"
          ],
          githubUrl: "https://github.com/obai-ahmed/financial-reporting",
          image: "/Audit-amico.png"
        },
        {
          id: "sentiment-analysis",
          title: "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
          badge: "NLP",
          description: "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
          tags: ["Python", "NLP", "Text Analysis"],
          detailedDescription: "إنشاء نظام تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
          challenges: [
            "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
            "معالجة كميات كبيرة من النص غير المنظم بكفاءة"
          ],
          solutions: [
            "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
            "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة"
          ],
          results: [
            "تحقيق دقة 85٪ في تصنيف المشاعر",
            "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج"
          ],
          githubUrl: "https://github.com/obai-ahmed/sentiment-analysis",
          image: "/Artificial intelligence-amico.png"
        }
      ],

      // Project details
      financialReporting: {
        description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
        detailedDescription:
          "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
        challenges: {
          1: "Manual reporting process was time-consuming and error-prone",
          2: "Data needed to be validated and transformed before reporting",
        },
        solutions: {
          1: "Implemented Python scripts to automate data extraction and transformation",
          2: "Used Microsoft Fabric for workflow orchestration and scheduling"
        },
        results: {
          1: "Reduced reporting time from 2 days to 2 hours",
          2: "Eliminated manual errors and improved data accuracy"
        },
      },

      sentimentAnalysis: {
        description:
          "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
        detailedDescription:
          "إنشاء نظام تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
        challenges: {
          1: "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
          2: "معالجة كميات كبيرة من النص غير المنظم بكفاءة",
        },
        solutions: {
          1: "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
          2: "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة",
        },
        results: {
          1: "تحقيق دقة 85٪ في تصنيف المشاعر",
          2: "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج",
        },
      },
    },

    // Experience section
    experience: {
      title: "الخبرة والتعليم",
      subtitle: "رحلتي المهنية وخلفيتي الأكاديمية",
      timeline: [
        {
          title: "Data Analyst, IT Department",
          company: "Brithol Michcoma",
          period: "07/2024 - 11/2024",
          description: [
            "Analysed networking data to identify patterns and optimization opportunities",
            "Performed exploratory data analysis (EDA) to uncover actionable insights",
            "Configured and deployed over 200 Microtek routers across Mozambique client locations",
            "Deployed and configured PBX and VoIP systems utilizing Ylink and Cisco phones for 200+ employees, decreasing internal communication latency by 60% and saving approximately 10 hours per employee annually",
            "Monitored device performance using syslog-server tools and assisted in VSAT installations for remote connectivity",
            "Collaborated with interdisciplinary teams to support data-driven decision-making"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["Data Analysis", "Network Configuration", "VoIP Systems", "System Monitoring", "IT Infrastructure"],
        },
        {
          title: "IT System Analyst | Data Entry Clerk | Call Officer, IT Department",
          company: "INVSTORS GP LDA",
          period: "05/2022 - 05/2024",
          description: [
            "Monitored system performance and analysed real-time logistics data to support operations",
            "Designed dashboards to track fleet deployment, fuel usage, and delivery schedules",
            "Collaborated with procurement and IT teams to improve data accuracy and reporting workflows",
            "Entered and maintained critical operational data in company systems with high accuracy",
            "Handled customer calls, resolved inquiries, and documented complaints for escalation and service improvement",
            "Supported hardware/software troubleshooting and maintained technical documentation",
            "Logged and tracked customer complaints and technical issues, improving service quality",
            "Assisted in system documentation and record-keeping for audits and internal evaluations"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["System Analysis", "Data Entry", "Customer Service", "Technical Support", "Documentation"],
        },
        {
          title: "بكالوريوس علوم الكمبيوتر",
          institution: "جامعة الوسائط المتعددة",
          period: "2020 - 2024",
          description: [
            "Specialized in Data Science",
            "Relevant coursework: Machine Learning, Data Mining, Statistical Analysis, Big Data Analytics",
            "Participated in various data science competitions and hackathons",
          ],
          type: "education",
          location: "Cyberjaya, Selangor",
          skills: ["Data Science", "Machine Learning", "Statistical Analysis"],
          achievements: [{ text: "Data Science Specialization" }],
        },
      ],
    },

    // Volunteer section
    volunteer: {
      title: "الخبرة التطوعية",
      subtitle: "أدوار القيادة والمشاركة المجتمعية",
      responsibilities: "المسؤوليات",
      keyAchievements: "الإنجازات الرئيسية",
      leadershipExperience: "خبرة قيادية",
      roles: [
        {
          title: "Co Founder and Consultant",
          organization: "Sudanese Culture Society - MMU",
          period: "08/2023 - 10/2024",
          description: [
            "Consulted in organized cultural and charity events, significantly enhancing community engagement",
            "Represented MMU's Sudanese community at conferences and national-level meetings",
            "Contributed to fundraising efforts for displaced Sudanese communities",
          ],
          achievements: [
            "Successfully organized 5+ cultural events with 100+ attendees",
            "Raised funds for humanitarian causes",
            "Established partnerships with other cultural organizations",
          ],
        },
      ],
    },

    // Contact section
    contact: {
      title: "اتصل بي",
      subtitle: "لنناقش مشروعك القادم",
      email: "البريد الإلكتروني",
      emailAddress: "obaialid45@gmail.com",
      phone: "الهاتف",
      phoneNumber: "WS : +601137939422 | Phone : +971561647714",
      linkedin: "لينكد إن",
      linkedinHandle: "obai-ahmed-b7697433a",
      linkedinUrl: "http://www.linkedin.com/in/obai-ahmed-b7697433a/",
      github: "جيتهب",
      githubHandle: "SoObai",
      githubUrl: "http://github.com/SoObai",
      getInTouch: "تواصل معي",
      sendMessage: "أرسل لي رسالة",
      responseTime: "سرعة وقت الاستجابة",
      responseMessage: "عادة ما أرد على الرسائل خلال 24-48 ساعة. للأمور العاجلة، يُفضل التواصل عبر الهاتف أو لينكد إن.",
      messageSent: "تم إرسال الرسالة بنجاح!",
      thankYouMessage: "شكراً لرسالتك. سأرد عليك في أقرب وقت ممكن.",
      form: {
        name: "الاسم",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        subject: "الموضوع",
        subjectPlaceholder: "ماذا يتعلق هذا؟",
        message: "الرسالة",
        messagePlaceholder: "أخبرني عن مشروعك، متطلباتك، أو أي أسئلة لديك...",
        submit: "إرسال الرسالة"
      }
    },

    // Footer
    footer: {
      description: "عالم بيانات متخصص في حلول التعلم الآلي والذكاء الاصطناعي.",
      quickLinks: "روابط سريعة",
      references: "المراجع",
      copyright: "© 2025 Obai Ahmed. جميع الحقوق محفوظة.",
      referenceList: [
        {
          name: "Mr. Chadreque",
          title: "IT Department, Brithol Michcoma",
          contact: "Phone: +258 84 302 0123"
        },
        {
          name: "Mr. Mohammed Manni",
          title: "INVWSTORS GP LDA, Av. 24 de Junho, nº 1113",
          contact: "Email: info@investorgp.co.mz | Phone: +258 84 292 9475"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/obai_ahmed",
        github: "http://github.com/SoObai",
        linkedin: "http://www.linkedin.com/in/obai-ahmed-b7697433a/"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },
}

