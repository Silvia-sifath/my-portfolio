export type NavItem = {
  id: string
  label: string
}

export type EducationItem = {
  degree: string
  institution: string
  duration: string
  result?: string
}

export type PublicationItem = {
  title: string
  type: string
  tags: string[]
  doi?: string
}

export type ExperienceItem = {
  role: string
  organization: string
  duration: string
  project?: string
  supervisor?: string
  bullets: string[]
  certificateUrl?: string
}

export type ProjectItem = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type AchievementItem = {
  label: string
  value: string
  link?: string
}

export type CertificationLeadershipItem = {
  title: string
  details: string
  link?: string
  certificateUrl?: string
}

export type ContactInfo = {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  researchgate?: string
}

export const siteConfig = {
  name: 'Silvia Sifath',
  initials: 'SS',
  profileImage: '/silvia.jpg',
  cvPath: '/CV_version1.pdf',

  roles: [
    'Lecturer in Computer Science & Engineering',
    'AI & Machine Learning Researcher',
    'Intelligent Systems Researcher',
    'Aspiring PhD Researcher',
    'Academic Mentor',
  ],

  professionalSummary:
    'Computer Science and Engineering academician and researcher specializing in Artificial Intelligence and intelligent systems, with experience in university teaching, academic mentoring, and interdisciplinary research. Contributing to teaching excellence, student development, and research initiatives through innovative academic practices. My work focuses on designing AI-driven solutions for real-world challenges, particularly in healthcare, agriculture, natural language processing, and data-driven decision-making. Passionate about bridging research and practical applications through innovative technologies and collaborative academic contributions.',

  researchInterests: [
    'Artificial Intelligence',
    'Deep Learning',
    'Machine Learning',
    'Agent-based Modelling',
    'Bioinformatics',
    'Fuzzy Expert Systems',
    'Natural Language Processing',
    'Healthcare Analytics',
    'Medical Image Analysis',
  ],
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const quickFacts = [
  { label: 'Position', value: 'Lecturer, Trust University' },
  { label: 'Location', value: 'Barishal, Bangladesh' },
  { label: 'Email', value: 'silviasifa0868@gmail.com' },
  { label: 'Academic Email', value: 'ssifath17.cse@bu.ac.bd' },
  { label: 'Phone', value: '+880 1783485403' },
]

export const aboutText =
  'I am a Lecturer at Trust University, Barishal, and a Computer Science and Engineering graduate from the University of Barishal, Bangladesh. I completed my B.Sc. in Computer Science and Engineering with a CGPA of 3.88/4.00 and my M.Sc. in Computer Science and Engineering with a CGPA of 3.96/4.00, achieving First Class in both degrees. My academic and research interests span Artificial Intelligence, Deep Learning, Machine Learning, Agent-based Modelling, Bioinformatics, Fuzzy Expert Systems, and Natural Language Processing. I have been actively involved in research since my undergraduate studies and have worked as a Research Assistant and Research Fellow under faculty supervision. My research experience includes medical image analysis, healthcare analytics, disease prediction, NLP, fuzzy intelligent systems, image clustering, and machine learning applications. I am also passionate about teaching, academic mentoring, and pursuing advanced research at the PhD level.'


export const educationItems: EducationItem[] = [
  {
    degree: 'M.Sc. in Computer Science and Engineering',
    institution: 'University of Barishal, Bangladesh',
    duration: 'June 2023 – May 2026',
    result: 'CGPA: 3.96(1st) / 4.00',
  },
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'University of Barishal, Bangladesh',
    duration: 'January 2017 – March 2023',
    result: 'CGPA: 3.88(1st) / 4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC), Science',
    institution: 'Guthia Ideal College',
    duration: '2014 – 2016',
    result: 'GPA: 5.00 / 5.00 — Board Scholarship',
  },
  {
    degree: 'Secondary School Certificate (SSC), Science',
    institution: 'Banaripara Secondary Girls School',
    duration: '2012 – 2014',
    result: 'GPA: 5.00 / 5.00 — Board Scholarship',
  },
]


export const experienceItems: ExperienceItem[] = [
  {
    role: 'Lecturer',
    organization: 'Trust University, Barishal',
    duration: 'February 2025 – Present',
    bullets: [
      'Teach undergraduate courses in Computer Science and Engineering.',
      'Conduct lectures, laboratory sessions, assessments, and academic activities.',
      'Guide and mentor students in programming, software development, and research-related activities.',
      'Contribute to departmental academic activities and student development.',
    ],
  },

  {
    role: 'Assistant Proctor',
    organization: 'Trust University, Barishal',
    duration: 'April 2025 – Present',
    bullets: [
      'Assist in maintaining academic discipline and a supportive learning environment.',
      'Support university activities related to student affairs and academic administration.',
    ],
  },

  {
    role: 'Research Fellow',
    organization:
      'ICT Division, Government of Bangladesh — University of Barishal',
    duration: 'November 2024 – November 2025',
    supervisor: 'Assoc. Prof. Dr. Md. Manjur Ahmed',
    bullets: [
      'Conducted research under the ICT Fellowship program associated with the Master’s thesis.',
      'Worked on Artificial Intelligence and Machine Learning research problems.',
      'Performed data analysis, model development, experimentation, and evaluation.',
      'Prepared research outputs and technical documentation under academic supervision.',
    ],
  },

  {
    role: 'Research Assistant',
    organization: 'University of Barishal, Barishal, Bangladesh',
    duration: 'January 2022 – January 2025',
    supervisor: 'Assoc. Prof. Dr. Md. Manjur Ahmed',
    bullets: [
      'Participated in research projects involving Artificial Intelligence, Machine Learning, Deep Learning, and intelligent systems.',
      'Assisted with dataset preparation, model development, experimentation, and analysis.',
      'Contributed to research manuscripts, technical documentation, and publication activities.',
    ],
  },

  {
    role: 'Research Assistant',
    organization: 'University of Barishal, Barishal, Bangladesh',
    duration: 'July 2021 – December 2021',
    supervisor: 'Assoc. Prof. Dr. Rahat Hossain Faisal',
    bullets: [
      'Participated in academic research involving machine learning and intelligent computational systems.',
      'Assisted with data analysis, implementation, experimentation, and research documentation.',
    ],
  },

  {
    role: 'Research Assistant',
    organization: 'University of Barishal, Barishal, Bangladesh',
    duration: 'March 2021 – May 2021',
    supervisor: 'Assoc. Prof. Dr. Md. Manjur Ahmed',
    bullets: [
      'Supported research activities involving computational intelligence and machine learning.',
      'Assisted with literature review, data processing, experimentation, and research documentation.',
    ],
  },
]


export const publicationItems: PublicationItem[] = [
  {
    title:
      'Adaptive Similarity-Based Non-negative Matrix Factorization with Normalization for Image Clustering',
    type:
      'Published — International Journal of Machine Learning and Cybernetics, Springer, Volume 17, April 2026',
    tags: ['Machine Learning', 'Image Clustering', 'Matrix Factorization'],
    doi: 'https://doi.org/10.1007/s13042-026-03119-z',
  },

  {
    title:
      'Automatic Classification of Orange Fruit Diseases Using Deep Neural Network Model',
    type:
      'Published — Journal of Agriculture and Food Research, Elsevier, Volume 27, May 2026, Article 102712',
    tags: ['Deep Learning', 'Computer Vision', 'Agricultural AI'],
    doi: 'https://doi.org/10.1016/j.jafr.2026.102712',
  },

  {
    title:
      'Recurrent Neural Network-based Multiclass Cyberbullying Classification',
    type:
      'Published — Natural Language Processing Journal, Elsevier, Volume 9, December 2024, Article 100111',
    tags: ['NLP', 'RNN', 'Cyberbullying Detection'],
    doi: 'https://doi.org/10.1016/j.nlp.2024.100111',
  },

  {
    title:
      "A Robust Ensemble Framework for Alzheimer's Disease Prediction Using Feature Engineering and Optimized Voting Classifier",
    type:
      'Accepted — Scopus-indexed Springer conference proceedings, ICETCS and ITSS-IoE 2025, Wolverhampton, UK',
    tags: ['Machine Learning', 'Healthcare AI', 'Alzheimer’s Disease'],
  },

  {
    title:
      'Intelligent Learning Behavior Profiling System for Student Based on Fuzzy Agent Model',
    type:
      'Published — Book chapter in Data-Driven Applications for Emerging Technologies, Taylor & Francis',
    tags: ['Fuzzy Systems', 'Agent-based Modelling', 'Education'],
    doi: 'https://doi.org/10.1201/9781003605508-2',
  },

  {
    title:
      'Student Learning Behavior Profiling System Based on Fuzzy Agent-Based System',
    type:
      'Submitted — International Journal of Artificial Intelligence in Education, Springer, February 2026',
    tags: ['Fuzzy Agent', 'AI in Education', 'Student Modeling'],
  },
  {
    title:
      'CSWFE: A Class-Specific Weighted Feature Engineering Framework for Mpox Skin Lesion Classification Using Explainable AI',
    type: '(Undergraduate Thesis) — Accepted in 4th International Conference on Computing Advancements (ICCA 2026)',
    tags: ['Explainable AI', 'Medical Imaging'],
  },
  {
    title:
      'Regional Language Classification in Bangladesh Using NLP and Machine Learning Techniques',
    type:
      'Submitted — Arabian Journal for Science and Engineering, Elsevier, November 2025',
    tags: ['NLP', 'Machine Learning', 'Bangla Language'],
  },

  {
    title:
      'A Synergistic Framework Combining Bloom’s Taxonomy and Explainable AI for Question Classification Using Machine Learning',
    type:
      'Submitted — International Journal of Artificial Intelligence in Education, Springer, September 2025',
    tags: ['Explainable AI', 'Machine Learning', 'Education'],
  },

  {
    title:
      'A Modular Fuzzy Expert System for Chemotherapy Drug Dose Scheduling',
    type:
      'Published — Healthcare Analytics, Elsevier, Volume 3, November 2023, Article 100139',
    tags: ['Fuzzy Expert System', 'Healthcare AI', 'Chemotherapy'],
    doi: 'https://doi.org/10.1016/j.health.2023.100139',
  },

  {
    title:
      'Natural Convective Heat and Mass Transfer Flow in a Doubly Stratified High Porosity Medium',
    type:
      'Published — Engineering Reports, Wiley, Volume 8(4), April 2026, Article e70742',
    tags: ['Engineering', 'Mathematical Modeling', 'Heat Transfer'],
    doi: 'https://doi.org/10.1002/eng2.70742',
  },

  {
    title:
      'Multi-objective Optimization and Feedback-based Chemotherapy Drug Scheduling',
    type:
      'Published — IEEE ICAEEE 2024, June 2024, pp. 1–6',
    tags: ['Optimization', 'Healthcare', 'Genetic Algorithm'],
    doi: 'https://doi.org/10.1109/ICAEEE62219.2024.10561667',
  },

  {
    title:
      'Affordable Early Detection of Autism Spectrum Disorder Using Innovative Eye-Tracking Methods',
    type:
      'Published — IEEE Xplore, 27th International Conference on Computer and Information Technology (ICCIT)',
    tags: ['Healthcare AI', 'Autism Detection', 'Eye Tracking'],
    doi: 'https://doi.org/10.1109/ICCIT64611.2024',
  },

  {
    title:
      'Enhanced Fuzzy Expert Control for Cancer Chemotherapy Drug Dose Scheduling',
    type:
      'Published — Barishal University Journal of Bio-Science, 3(1), 47–64, June 2024',
    tags: ['Fuzzy Expert System', 'Cancer', 'Chemotherapy'],
    doi: '10.13140/RG.2.2.12355.82721',
  },

  {
    title:
      'Optimization of Chemotherapy Drug Regimens with Genetic Algorithm and Dose Optimizer',
    type:
      'Published — Barishal University Journal of Bio-Science, 3(1), 65–74, June 2024',
    tags: ['Genetic Algorithm', 'Optimization', 'Chemotherapy'],
    doi: '10.13140/RG.2.2.12146.11208',
  },
]


export const projectItems: ProjectItem[] = [
  {
    title: 'Brain Tumor Prediction Using Machine Learning and Deep Learning',
    description:
      'A machine learning and deep learning project focused on analyzing brain tumor data, identifying relationships within the dataset, and selecting appropriate predictive algorithms for classification and prediction.',
    tech: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Data Analysis',
    ],
    github: 'https://github.com/Silvia-sifath/Brain_tumor',
  },

  {
    title: 'SuperHut — Online Shopping Application',
    description:
      'Developed an online shopping application based on the Customer-to-Customer (C2C) e-commerce model using the .NET framework.',
    tech: [
      '.NET',
      'C#',
      'Database',
      'Web Development',
      'C2C E-commerce',
    ],
    github: 'https://github.com/Silvia-sifath/project_supershop',
  },
  {
    title: 'Scientific Introduction',
    description:
      'Developed an application designed to provide scientific information and introductions for different organisms. The system was implemented using Java Swing with a MySQL database.',
    tech: [
      'Java',
      'Java Swing',
      'MySQL',
      'Database',
    ],
    github: 'https://github.com/Silvia-sifath/project_scientific',
  },
]


export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: [
      'Java',
      'Python',
      'C',
      'C++',
      'MATLAB',
      'HTML',
      'SQL',
      'PHP',
    ],
  },

  {
    category: 'Artificial Intelligence & Machine Learning',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'Image Classification',
      'Image Clustering',
      'Natural Language Processing',
      'Fuzzy Expert Systems',
      'Agent-based Modelling',
      'Bioinformatics',
    ],
  },

  {
    category: 'Research Areas',
    items: [
      'Artificial Intelligence',
      'Deep Learning',
      'Machine Learning',
      'Medical Image Analysis',
      'Healthcare Analytics',
      'NLP',
      'Fuzzy Systems',
      'Intelligent Systems',
      'Optimization',
    ],
  },

  {
    category: 'Frameworks & Technologies',
    items: [
      'Django',
      'Java Swing',
      '.NET',
      'Hadoop',
    ],
  },

  {
    category: 'Development & Database Tools',
    items: [
      'Eclipse',
      'PyCharm',
      'Visual Studio',
      'MySQL',
      'Oracle Database',
      'MATLAB',
      'LaTeX',
    ],
  },

  {
    category: 'Data & Visualization',
    items: [
      'Power BI',
      'Tableau Public',
      'Data Analysis',
      'Data Visualization',
    ],
  },

  {
    category: 'Software Engineering',
    items: [
      'SDLC',
      'SRS',
      'System Design',
      'Object-Oriented Programming',
      'Design Patterns',
      'Requirement Engineering',
      'Problem Solving',
    ],
  },
]


export const achievementItems: AchievementItem[] = [
  {
    label: 'Dean’s Award',
    value:
      'Academic Excellence in the Faculty of Science and Engineering — October 2023',
  },

  {
    label: 'ICT Fellowship',
    value:
      'ICT Fellowship for Master’s Thesis — November 2024 to November 2025',
  },

  {
    label: 'Harvard Hackathon',
    value:
      'Participating Member — PregnaCare selected from 303 teams and presented at the Harvard Hackathon — April 2025',
  },

  {
    label: 'EDGE Project',
    value:
      'Participant, ICT Division, Government of Bangladesh — August 2024 to November 2024',
  },

  {
    label: 'HSC Board Scholarship',
    value:
      'Board Scholarship based on public examination results in Science — 2016',
  },

  {
    label: 'SSC Board Scholarship',
    value:
      'Board Scholarship based on public examination results in Science — 2014',
  },

  {
    label: 'JSC Scholarship',
    value:
      'Scholarship for outstanding performance in public examination — 2012',
  },

  {
    label: 'IELTS',
    value:
      'Overall 6.5 — Listening 6.0, Reading 7.5, Writing 6.0, Speaking 6.0',
  },
]


export const certificationsLeadershipItems: CertificationLeadershipItem[] = [
  {
    title: 'Certificate of Climate and Human Rights',
    details: 'Amnesty International — April 2023',
  },

  {
    title: 'EDGE Project Participant',
    details:
      'ICT Division, Government of Bangladesh — August 2024 to November 2024',
  },

  {
    title: 'Harvard Hackathon — PregnaCare',
    details:
      'Participating Member; project selected from 303 teams and presented at the Harvard Hackathon — April 2025',
  },

  {
    title: 'ICT Fellowship',
    details:
      'Fellowship for Master’s Thesis — November 2024 to November 2025',
  },
  {
    title: "Class Representative — M.Sc. in Computer Science and Engineering",
    details:
      "Served as the Class Representative, coordinating academic communication between students and faculty members and supporting departmental activities.",
  },
  {
    title: "Class Representative — B.Sc. in Computer Science and Engineering",
    details:
      "Served as the Class Representative, facilitating communication, organizing academic activities, and representing student concerns.",
  },
]


export const contactInfo: ContactInfo = {
  email: 'silviasifa0868@gmail.com',
  phone: '+880 1783485403',
  location: 'Banaripara, Barishal, Bangladesh',
  linkedin:
    'https://www.linkedin.com/in/silvia-sifath-448983263',
  github: 'https://github.com/Silvia-Sifath',
  researchgate:
    'https://www.researchgate.net/profile/Silvia-Sifath',
}
