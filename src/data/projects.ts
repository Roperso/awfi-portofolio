export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  status: string;
  featured: boolean;
  image: string;
  externalUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy?: string;
  gallery?: string[];
  overview?: string;
  role?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string;
  process?: string;
}

export const projects: Project[] = [
  {
    slug: 'game-rpg-3d',
    title: 'Game RPG 3D — Turn-Based Combat',
    category: 'Unity / Game Development',
    description:
      'A 3D RPG game featuring turn-based combat, elemental interactions, skills, mana, reward systems, and character build mechanics.',
    technologies: ['Unity', 'C#', 'Blender', 'Shader Graph'],
    year: '2026',
    status: 'Completed',
    featured: true,
    image: '/images/rpg-game.jpg',
    role: 'Lead Game Programmer & Technical Designer',
    overview:
      'Developed an immersive turn-based RPG tactical combat system built in Unity using C#. The game implements state machines for turn sequencing, dynamic status effects, elemental synergy matrices, character progression trees, and visual particle feedback for abilities.',
    features: [
      'Turn-based tactical combat loop with initiative queue ordering',
      'Dynamic elemental affinity system (Fire, Water, Arcane, Void) affecting damage multipliers',
      'Skill cooldowns, mana resource management, and multi-target ability casting',
      'Stat-scaling equipment and customizable character passive build mechanics',
      'Custom camera staging and VFX particle shaders for critical attacks',
    ],
    challenges: [
      'Managing turn synchronization and state transitions across multiple entities simultaneously',
      'Balancing skill multipliers and damage formulas for strategic gameplay variety',
    ],
    solutions: [
      'Architected an event-driven Finite State Machine (FSM) decoupled from MonoBehaviours',
      'Created a modular scriptable-object data pipeline for rapid skill and enemy balancing',
    ],
    results:
      'Smooth 60 FPS combat performance with responsive tactical UI and engaging combat flow tested across multiple encounter scenarios.',
  },
  {
    slug: 'game-rating-prediction',
    title: 'Game Rating Prediction',
    category: 'Data Science',
    description:
      'A machine learning web application for predicting video game critic scores based on game characteristics. The project uses data preprocessing and a Random Forest Regressor model, with Streamlit as the web application interface.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest Regressor', 'Streamlit'],
    year: '2025',
    status: 'Completed',
    featured: false,
    image: '/images/game-rating-prediction.jpg',
    githubUrl: 'https://github.com/Roperso/uas-datascience-game-rating',
    demoUrl: 'https://game-rating-prediction.streamlit.app/',
    role: 'Data Scientist & Machine Learning Engineer',
    overview:
      'A machine learning web application for predicting video game critic scores based on game characteristics. The project uses data preprocessing and a Random Forest Regressor model, with Streamlit as the web application interface.',
    features: [
      'Video game dataset analysis',
      'Data preprocessing',
      'Feature handling for categorical data',
      'Random Forest regression',
      'Critic Score prediction',
      'Interactive Streamlit interface',
      'Deployed live using Streamlit Community Cloud',
    ],
    challenges: [
      'Handling missing values, high-cardinality categorical features, and non-linear target score distributions',
      'Optimizing model hyper-parameters to avoid overfitting while maintaining fast inference speed on Streamlit',
    ],
    solutions: [
      'Engineered clean data preprocessing pipelines using Pandas, NumPy, One-Hot Encoding, and Standard Scaling',
      'Trained and evaluated a Random Forest Regressor model with Scikit-learn, yielding high predictive performance',
    ],
    results:
      'Successfully deployed live on Streamlit Community Cloud, providing fast and interactive video game critic score predictions based on user-selected game metadata.',
  },
  {
    slug: 'cat-breed-detection',
    title: 'Cat Breed Detection',
    category: 'Python / YOLOv8 / Computer Vision',
    description:
      'A cat breed detection system developed using YOLOv8, including dataset preparation, image annotation, model training, and testing.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Roboflow'],
    year: '2025',
    status: 'Completed',
    featured: false,
    image: '/images/cat-detection.jpg',
    role: 'Computer Vision & Machine Learning Developer',
    overview:
      'End-to-end computer vision pipeline for real-time classification and localization of diverse domestic cat breeds under varying lighting conditions, poses, and occlusions.',
    features: [
      'Multi-class object detection and bounding-box inference using YOLOv8 nano and medium backbones',
      'Custom data preprocessing, augmentation (rotation, mosaic, color jitter), and Roboflow labeling',
      'Real-time webcam video stream inference overlay with confidence threshold controls',
      'Evaluation metrics tracking: mAP@0.5, precision-recall curves, and confusion matrix analysis',
    ],
    challenges: [
      'High intra-class variation and visual similarities between certain domestic cat coat patterns',
      'Optimizing inference latency for smooth real-time video processing',
    ],
    solutions: [
      'Applied heavy image augmentation pipelines and fine-tuned transfer learning on domain-specific datasets',
      'Quantized PyTorch model weights to ONNX/TensorRT formats for accelerated execution',
    ],
    results:
      'Achieved over 91.4% mAP@0.5 with sub-35ms inference latency on standard test video feeds.',
  },
  {
    slug: 'comic-reading-web-app',
    title: 'Comic Reading Web Application',
    category: 'UI/UX / Web Design',
    description:
      'A digital comic reading application designed with a focus on visual presentation and user experience.',
    technologies: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    year: '2025',
    status: 'Completed',
    featured: false,
    image: '/images/comic-app.jpg',
    role: 'UI/UX Designer & Product Prototyper',
    overview:
      'Crafted a high-fidelity digital comic reader interface tailored for immersive storytelling. Emphasizes clean reader navigation, ergonomic page transitions, customizable reading modes (webtoon scroll vs. double page), and dark mode typography.',
    features: [
      'Distraction-free canvas reader with responsive page zoom and intuitive tap zones',
      'Comprehensive design system with typography scale, dark palette tokens, and icon kits',
      'Library organization, reading history bookmarks, and chapter progress indicators',
      'Interactive prototype validating thumb-reach zones and gesture navigation',
    ],
    challenges: [
      'Balancing high-density chapter navigation with clean visual immersion during reading',
      'Designing flexible layouts accommodating both vertical scroll and traditional comic formats',
    ],
    solutions: [
      'Engineered auto-hiding HUD controls that dismiss during active reading interaction',
      'Created fluid layout components adapting seamlessly across mobile, tablet, and desktop viewports',
    ],
    results:
      'User usability testing showed 95% satisfaction rate on navigation clarity and reader comfort.',
  },
  {
    slug: 'graphic-design-projects',
    title: 'Graphic Design Projects',
    category: 'Graphic Design / Creative Design',
    description:
      'A collection of freelance graphic design work created for various digital and visual communication needs.',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator', 'Canva'],
    year: '2020–2023',
    status: 'Ongoing',
    featured: false,
    image: '/images/graphic-design.jpg',
    role: 'Freelance Graphic Designer & Visual Artist',
    overview:
      'Curated portfolio of commercial graphic design deliverables including modern digital posters, YouTube high-CTR thumbnail packages, brand identity guidelines, and promotional marketing collateral.',
    features: [
      'High-impact editorial typography with dark aesthetic and futuristic color palettes',
      'Custom visual composition, photo manipulation, and digital lighting effects',
      'Conversion-optimized social media and video thumbnail assets tailored for creators',
      'Vector brand logo suites, typography guidelines, and complete branding collateral',
    ],
    results:
      'Delivered 50+ commercial design projects with consistent client satisfaction and high social media engagement.',
  },
  {
    slug: 'hmti-infokom',
    title: 'HMTI Information & Communication',
    category: 'Organization / Communication',
    description:
      'Information and communication projects developed while leading the Information and Communication Division of HMTI.',
    technologies: ['Figma', 'Canva', 'Social Media Management', 'Creative Direction'],
    year: '2024–2025',
    status: 'Completed',
    featured: false,
    image: '/images/hmti-infokom.jpg',
    role: 'Ketua Divisi Infokom (Head of Information & Communication)',
    overview:
      'Led the creative and communications division for the Informatics Student Union (HMTI), overseeing branding consistency, publication scheduling, event campaign visuals, and digital student outreach.',
    features: [
      'Unified brand identity and social media visual guidelines for departmental publications',
      'Event branding kits for hackathons, academic webinars, workshops, and student orientation',
      'Collaborative team workflow delegation and creative quality control across 10+ division staff',
      'Multi-channel content production across Instagram, LinkedIn, Discord, and campus digital boards',
    ],
    results:
      'Grew student engagement by over 140% across digital channels and successfully published 80+ official organization media releases.',
  },
];
