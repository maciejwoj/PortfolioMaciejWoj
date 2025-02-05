export const projects = [
  {
    title: 'Chat Forum',
    description: "This Java-based chat forum leverages Apache Kafka to provide a scalable and efficient platform for real-time communication. Users can log in to various chat rooms and engage in conversations with other participants seamlessly.",
      image: '/images/chatForum.jpg',//make screanshot of my chat
      tags: ['Java', 'Kafka'],
    source: 'https://github.com/maciejwoj/chat-forum',
    visit: 'https://github.com/maciejwoj/chat-forum',
    id: 0,
  },
  {
    title: 'Password manager',
    description:"This C++ terminal-based password manager application provides a secure and convenient way to manage and generate passwords. Designed with user security and ease of use in mind, the application allows users to securely store and manage their passwords using a master password to encrypt and decrypt stored data. ",
    image: '/images/passwordM.jpg',//change image
    tags: ['C++'],
    source: 'https://github.com/maciejwoj/Menadzer-Hasel',
    visit: 'https://github.com/maciejwoj/Menadzer-Hasel',
    id: 1,
  },
  {
    title: 'Pac-Man Game',
    description: "This Java-based Pac-Man game brings a modern twist to the classic arcade experience, featuring dynamic maps, special abilities, and enhanced gameplay mechanics. Built using JTable for rendering the game map, this version of Pac-Man offers an engaging and customizable experience for players.",
      image: '/images/Pac-man.webp',//add screanshot of my game
      tags: ['Java'],
    source: 'https://github.com/maciejwoj/Pac-Man',//add github link 
    visit: 'https://github.com/maciejwoj/Pac-Man',
    id: 2,
  },
  // {
  //   title: 'Black Jack',
  //   description: "This simple card game... ",//generate description(chatbot)
  //   image: '/images/BlackJackss.png',//add stock icon
  //   tags: ['Python'],
  //   source: 'https://google.com',//add github link 
  //   visit: 'https://google.com',
  //   id: 3,
  // },

  {
    title: 'single layer neural network design to recognize diferrent language',
    description: "single layer neural network design to recognize diferrent language, knn- agloryt , k-means, huffman algorytm",//generate description(chatbot)
    image: '/images/5.webp',//add stock icon
    tags: ['Python'],
    source: 'https://github.com/maciejwoj/-single-layer-neural-network',//add github link to single layer network
    visit: 'https://github.com/maciejwoj/K-means',//add knn-algorytm or something from AI
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Started my journey', },
  { year: 2022, text: 'Graduated High School', },
  { year: 2023, text: 'Started studing on the PJATK', },
  { year: 2023, text: 'Started working as a IT tutor in Ambitni',},
];