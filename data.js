// ============================================================
//  SUJAN R — PORTFOLIO DATA
//  ✏️  EDIT THIS SECTION to update your info.
//  Scroll down to find: personal, experience, education,
//  skills, projects, videos, resume.
//  Save the file and refresh your browser to see changes.
// ============================================================

const PORTFOLIO = {

  // ─────────────────────────────────────────────
  //  PERSONAL INFO
  // ─────────────────────────────────────────────
  personal: {
    firstName:   "Sujan",
    lastName:    "R",
    title:       "AR/VR Developer & Data Scientist",
    tagline:     "Building immersive AR/VR experiences and intelligent ML systems. 1+ yr Unity production experience. Pursuing M.Sc. Data Science.",
    email:       "rsuji521@gmail.com",
    phone:       "+91 70945 78691",
    location:    "Salem, Tamil Nadu, India",
    linkedin:    "https://linkedin.com/in/sujan-r",
    github:      "https://github.com/sujanraja",
    // ↓ Paste Google Drive profile photo URL here
    // Format: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
    profilePhoto: "",
    availableForWork: true,
    statusText:  "Open to Work",
  },

  // ─────────────────────────────────────────────
  //  HERO STATS (shown on hero section)
  // ─────────────────────────────────────────────
  stats: [
    { number: "15+", label: "Games Built" },
    { number: "1+",  label: "Yr Experience" },
    { number: "3",   label: "Live Projects" },
  ],

  // ─────────────────────────────────────────────
  //  EXPERIENCE
  // ─────────────────────────────────────────────
  experience: [
    {
      company:   "Triverse Technologies",
      role:      "Unity Game Developer",
      location:  "Ashok Nagar",
      duration:  "Apr 2023 - Apr 2024 - 1 Year",
      type:      "full-time",
      bullets: [
        "Spearheaded development of 15+ educational games in 2D and 3D formats, driving product growth.",
        "Engineered complex AR mechanics including coin collection and long-distance interaction features.",
        "Optimized game performance and assets for smooth execution on mobile platforms.",
      ],
    },
    {
      company:   "Madras Mind Works",
      role:      "Unity Game Dev Intern",
      location:  "Anna Nagar, Chennai",
      duration:  "Jan 2023 – Mar 2023",
      type:      "internship",
      bullets: [
        "Enhanced WebGL functionalities and rendering optimizations for the SIFY project at Lab23.",
        "Implemented strategic prefab optimizations to ensure long-term project scalability.",
      ],
    },
  ],

  // ─────────────────────────────────────────────
  //  EDUCATION
  // ─────────────────────────────────────────────
  education: [
    {
      degree:      "M.Sc. Data Science",
      institution: "Periyar University Salem",
      duration:    "2024 – Present",
    },
    {
      degree:      "B.Voc in AR and VR",
      institution: "Periyar University Salem",
      duration:    "2020 – 2023",
    },
  ],

  // ─────────────────────────────────────────────
  //  SKILLS
  //  category options: "game" | "data" | "tools"
  // ─────────────────────────────────────────────
  skills: [
    // Game Dev
    { name: "Unity / C#",        level: 93, category: "game" },
    { name: "AR Foundation",     level: 85, category: "game" },
    { name: "3D / Maya / Blender", level: 75, category: "game" },
    { name: "WebGL Optimization", level: 78, category: "game" },
    { name: "Shader Graph",      level: 70, category: "game" },
    // Data Science
    { name: "Python",            level: 88, category: "data" },
    { name: "TensorFlow / Keras", level: 80, category: "data" },
    { name: "NLP / NLTK",        level: 76, category: "data" },
    { name: "Pandas / NumPy",    level: 84, category: "data" },
    { name: "Tableau / Power BI", level: 72, category: "data" },
    { name: "OpenCV",            level: 68, category: "data" },
    // Tools
    { name: "VS Code",           level: 92, category: "tools" },
    { name: "Git / GitHub",      level: 85, category: "tools" },
    { name: "Photoshop",         level: 70, category: "tools" },
    { name: "MySQL",             level: 74, category: "tools" },
  ],

  // ─────────────────────────────────────────────
  //  TOOLS / CHIPS (shown as badges)
  // ─────────────────────────────────────────────
  tools: [
    "Unity", "Maya", "Blender", "Adobe Illustrator", "Photoshop",
    "Jupyter Notebook", "Google Colab", "VS Code", "MySQL Workbench",
    "Tableau", "Power BI", "Excel", "Git", "AR Foundation",
  ],

  // ─────────────────────────────────────────────
  //  PROJECTS
  //  type options: "ar" | "game" | "ai" | "web"
  //  driveDownloadUrl: Google Drive direct download link
  //    → Upload ZIP to Drive → Share → Anyone with link
  //    → Replace /view with /uc?export=download
  //  thumbnailUrl: Google Drive image
  //    → Replace /view with /uc?export=view
  // ─────────────────────────────────────────────
  projects: [
    {
      title:       "AR Plant Insertion in Real World",
      type:        "ar",
      emoji:       "🌿",
      tags:        ["Unity", "AR Foundation", "C#", "Mobile"],
      description: "Augmented Reality application that places virtual plants into real-world environments using mobile camera with surface detection.",
      bullets: [
        "Implemented surface detection and real-time object placement for educational AR experiences.",
        "Developed intuitive gesture-based interaction for plant placement and scaling.",
      ],
      thumbnailUrl:    "", // ← paste Google Drive image URL here
      driveDownloadUrl:"https://drive.google.com/drive/folders/1t__AZUHYwsJuVPNVJl8eE51eySr3OWZF?usp=drive_link", // ← paste Google Drive ZIP download URL here
      liveUrl:         "",
      githubUrl:       "",
    },
    {
      title:       "Human Anatomy Interactive 3D Game",
      type:        "game",
      emoji:       "🧬",
      tags:        ["Unity 3D", "C#", "3D Models", "Educational"],
      description: "Interactive 3D educational game to explore and learn human anatomy with labeled 3D models and immersive gameplay.",
      bullets: [
        "Implemented object interaction, UI systems, and anatomical part identification using C# scripting.",
        "Designed immersive gameplay with labeled 3D models to enhance learning experience.",
      ],
      thumbnailUrl:    "", // ← paste Google Drive image URL here
      driveDownloadUrl:"https://drive.google.com/drive/folders/1FZZIXNbmiqbpYNxrpIURr4rLrtUFIFdk?usp=drive_link", // ← paste Google Drive ZIP download URL here
      liveUrl:         "",
      githubUrl:       "",
    },
    {
      title:       "AI Chatbot — Data Science Q&A",
      type:        "ai",
      emoji:       "🤖",
      tags:        ["NLP", "TensorFlow", "Keras", "Python", "Tkinter"],
      description: "Offline AI chatbot for Data Science Q&A using Neural Network classifier with full NLP pipeline deployed via Tkinter GUI.",
      bullets: [
        "Engineered robust NLP pipeline with tokenization and lemmatization for accurate intent detection.",
        "Deployed offline-capable model achieving high accuracy on domain-specific Q&A tasks.",
      ],
      thumbnailUrl:    "", // ← paste Google Drive image URL here
      driveDownloadUrl:"", // ← paste Google Drive ZIP download URL here
      liveUrl:         "https://sujanraja.github.io/DATAMIND_AI/",
      githubUrl:       "https://github.com/sujanraja/DATAMIND_AI.git",
    },
    // ── ADD MORE PROJECTS BELOW ──
    // {
    //   title:       "My New Project",
    //   type:        "game",           // ar | game | ai | web
    //   emoji:       "🎮",
    //   tags:        ["Unity", "C#"],
    //   description: "Short description here.",
    //   bullets:     ["Feature one.", "Feature two."],
    //   thumbnailUrl:    "",
    //   driveDownloadUrl:"",
    //   liveUrl:         "",
    //   githubUrl:       "",
    // },
  ],

  // ─────────────────────────────────────────────
  //  VIDEOS
  //
  //  ⚠️  GOOGLE DRIVE DOES NOT WORK FOR VIDEO EMBED
  //      Google Drive blocks iframe embedding (shows
  //      "refused to connect" error). Use YouTube instead.
  //
  //  ✅  BEST OPTION — YOUTUBE (FREE, ALWAYS WORKS):
  //      1. Go to youtube.com → Upload your video
  //      2. You can set it as "Unlisted" (only people
  //         with the link can see it — perfect for HR)
  //      3. Open the video → Share → Embed
  //      4. Copy ONLY the video ID from the URL:
  //         youtube.com/watch?v=  >>>  dQw4w9WgXcQ  <<<
  //      5. Paste like: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  //
  //  ✅  ALTERNATIVE — GOOGLE DRIVE (ONLY WORKS IF
  //      you open the portfolio on YOUR OWN computer
  //      while logged into your Google account):
  //      drive.google.com/file/d/FILE_ID/preview
  //      ⚠️  Will NOT work for HR / other people.
  //
  //  source: "youtube"  ← use this for YouTube
  //  source: "drive"    ← use this for Google Drive
  // ─────────────────────────────────────────────
  videos: [
    {
      title:       "AR Plant Insertion — Live Demo",
      category:    "AR / VR",
      description: "Real-time plant placement using mobile AR with surface detection",
      source:      "youtube",
      // ↓ Paste full YouTube embed URL: https://www.youtube.com/embed/YOUR_VIDEO_ID
      url:         "https://youtu.be/Lx8IzqksiZA?si=X8_DOGa9etf5OhYN",
    },
    {
      title:       "Human Anatomy 3D Game — Gameplay",
      category:    "GAME DEV",
      description: "Interactive 3D anatomy exploration and learning showcase",
      source:      "youtube",
      url:         "https://youtu.be/PffIC_OHOvA?si=bCsG3iQo6Vxx-NwY",
    },
    {
      title:       "AI Chatbot — NLP Demo",
      category:    "AI / ML",
      description: "Online chatbot answering Data Science questions live",
      source:      "youtube",
      url:         "https://youtu.be/4QKr1xAKyE4?si=T4bh4_wxLS5ekvp2",
    },
    // ── ADD MORE VIDEOS BELOW ──
    // {
    //   title:       "New Video Title",
    //   category:    "GAME DEV",
    //   description: "Short description",
    //   source:      "youtube",
    //   url:         "https://www.youtube.com/embed/VIDEO_ID",
    // },
  ],

  // ─────────────────────────────────────────────
  //  RESUME
  //  Upload PDF to Google Drive → Share → Anyone with link
  //  Paste the /view URL below
  // ─────────────────────────────────────────────
  resume: {
    driveUrl: "https://drive.google.com/file/d/1yyBsORueQwtDHcjnWljiuKE7yayixApa/view?usp=drive_link", // ← paste Google Drive PDF link here
    fileName: "Sujan_R_Resume.pdf",
  },

};
