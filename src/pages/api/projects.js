const projects = [
  {
    icon: "./assets/Sepetteslim/icon.png",
    title: "Sepetteslim",

    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.sepetteslim&hl=tr&gl=US",
      ios: "https://apps.apple.com/tr/app/sepet-teslim/id1483814557?l=tr",
    },

    content: {
      en: "E-Commerce",
      tr: "E-Ticaret",
    },
    images: [
      "./assets/Sepetteslim/Screenshot-1.webp",
      "./assets/Sepetteslim/Screenshot-2.webp",
      "./assets/Sepetteslim/Screenshot-3.webp",
    ],
  },
  {
    icon: "./assets/Netan/netan-logo.jpg",
    title: "Netan",
    link: "https://netan.com.tr/",
    content: {
      en: "Corporate Website",
      tr: "Kurumsal Web Sitesi",
    },
    images: [
      "./assets/Netan/Screenshot-1.jpg",
      "./assets/Netan/Screenshot-2.jpg",
      "./assets/Netan/Screenshot-3.jpg",
      "./assets/Netan/Screenshot-4.jpg",
      "./assets/Netan/Screenshot-5.jpg",
    ],
  },
  {
    icon: "./assets/Pure-Soccer/icon.png",
    title: "Pure Soccer",
    content: {
      tr: "Mobil Futbol Oyunu",
      en: "Mobile Soccer Game",
    },
    images: [
      "./assets/Pure-Soccer/Screen-0.webp",
      "./assets/Pure-Soccer/Screen-1.webp",
      "./assets/Pure-Soccer/Screen-2.webp",
      "./assets/Pure-Soccer/Screen-3.webp",
      "./assets/Pure-Soccer/Screen-4.webp",
      "./assets/Pure-Soccer/Screen-5.webp",
    ],
  },
  {
    icon: "./assets/Uniobb/icon.png",
    title: "Uniobb",
    content: {
      tr: "Üniversiteliler Arası Sosyal Ağ",
      en: "Social Network App",
    },
    images: [
      "./assets/Uniobb/Screen-0.png",
      "./assets/Uniobb/Screen-1.png",
      "./assets/Uniobb/Screen-2.png",
      "./assets/Uniobb/Screen-3.png",
      "./assets/Uniobb/Screen-4.png",
      "./assets/Uniobb/Screen-5.png",
      "./assets/Uniobb/Screen-6.png",
      "./assets/Uniobb/Screen-7.png",
      "./assets/Uniobb/Screen-8.png",
      "./assets/Uniobb/Screen-9.png",
    ],
  },
  {
    icon: "./assets/Box-Rot/icon.png",
    title: "BoxRot",
    content: {
      tr: "Mobil Bulmaca Oyunu",
      en: "Mobile Puzzle Game",
    },
    images: [
      "./assets/Box-Rot/Screen-0.jpg",
      "./assets/Box-Rot/Screen-1.jpg",
      "./assets/Box-Rot/Screen-2.jpg",
      "./assets/Box-Rot/Screen-3.jpg",
      "./assets/Box-Rot/Screen-4.jpg",
    ],
  },
  {
    icon: "./assets/Simple-Soccer/icon.png",
    title: "Simple Soccer",
    content: {
      tr: "Mobil Futbol Oyunu",
      en: "Mobile Soccer Game",
    },
    images: [
      "./assets/Simple-Soccer/screen-0.jpg",
      "./assets/Simple-Soccer/screen-1.jpg",
      "./assets/Simple-Soccer/screen-2.jpg",
      "./assets/Simple-Soccer/screen-3.jpg",
      "./assets/Simple-Soccer/screen-4.jpg",
    ],
  },
];

export default (req, res) => {
  // Get data from your database
  res.status(200).json(projects);
};
