import spark from "../assets/spark.jpg";
import grow from "../assets/grow.jpg";
import transform from "../assets/transform.jpg";
import websiteicon from "../assets/websiteicon.svg";
import seoicon from "../assets/seoicon.svg";
import supporticon from "../assets/supporticon.svg";
import responsiveicon from "../assets/responsiveicon.svg";
import commerce from "../assets/commerce.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

export const navLinks = [
  {
    id: "/",
    link: "/",
    title: "Home",
  },
  // {
  //   id: "apply",
  //   link:"/apply",
  //   title: "Apply",
  // },
  {
    id: "/services",
    link: "/services",
    title: "Our Services",
  },
  {
    id: "about",
    link: "/about",
    title: "About Us",
  },
  {
    id: "contact",
    link: "/contact",
    title: "Contact Us",
  },
];
// export const buttonLinks = [
//   {
//     id: "getstarted",
//     link: "/services#getstarted",
//   },
//   {
//     id: "about us",
//     link: "/about",
//   },
// ];
export const carousel = [
  {
    image: spark,
    heading: "Sparksites Studios",
    subHeading: "Empowering Brands One Spark At A Time",
  },
  {
    image: grow,
    heading: "Grow Your Brand With Us",
    subHeading: "Let's Take Your Brand to New Heights",
  },
  {
    image: transform,
    heading: "Transform Your Vision Into Reality",
    subHeading: "Let's Do This!",
  },
];

export const services = [
  {
    id: "service-1",
    icon: websiteicon,
    title: "Custom Website Design and Development",
    content:
      "At Sparksites Studios, we specialize in crafting quality websites that aligns with your the goal of your brand. We build Corporate and Professional websites, Landing Pages, E-commerce websites and stores, Blog websites and more. Your brand needs a website to grow, partner with us to achieve this.",
  },
  {
    id: "service-2",
    icon: responsiveicon,
    title: "Responsive and Mobile-Friendly Layouts",
    content:
      "What is a quality website without responsiveness? At Sparksites studios, we keep that in mind, crafting websites that are responsive on all devices. We provide unique and modern mobile-friendly layouts. We've got you covered. Get started with us now.",
  },
  {
    id: "service-3",
    icon: commerce,
    title: "E-commerce solutions",
    content:
      "We specialize in developing quality online shopping experiences. Our ecommerce websites are beautifully designed, modern, and fully functional. Let us know what you have in mind.",
  },
  {
    id: "service-4",
    icon: seoicon,
    title: "Search Engine Optimization(SEO) and Google Analytics",
    content:
      "Visibility is Key. All our websites are equipped with the best SEO practices. We also include Google Analytics tracking to keep you informed on your website analytics and traffic details. Let us bring your vision to life!",
  },
  {
    id: "service-5",
    icon: supporticon,
    title: "24/7 Support and Maintenance",
    content:
      "Our process doesn't end in web development, we provide 24/7 support and maintenance. Let us be your digital partner.",
  },
];

export const portfolio = [
  {
    title: "Rhoda Beddings",
    imageSrc:
      "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/ag1ufguhfcssvzausmef.jpg",
    description: "A professional website for Rhodabeddings Business",
    // demo: "https://rhodabeddings.com.ng/",
  },
  {
    title: "The Learnact",
    imageSrc:
      "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/zkazjdbx1y804v1sqvee.jpg",
    description:
      "A Learning Management System that educates individuals on SDG goals for Learnact Organization",
    demo: "https://thelearnact.com/",
  },
  {
    title: "Drex Hosting Company",
    imageSrc:
      "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/u06i9xhlqq0lpwseqohb.jpg",
    description: "A modern landing page for DREX Hosting and Domains Company.",
    demo: "https://drexhosting.netlify.app/",
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:
      "They're absolutely legit! They developed an amazing professional website for my business with a moderate budget in a short amount of time.",
    name: "Rhoda Beddings",
    title: "A beddings company",
    img: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/pzluce13hera8jmfokva.jpg",
  },
  {
    id: "feedback-2",
    content:
      "The landing page they made for me was a standout one, with a modern and beautiful layout.",
    name: "Hoobank",
    title: "Credit Card Company",
    img: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/ttkdstaql8rmaz9rsp2m.jpg",
  },
  {
    id: "feedback-3",
    content:
      " My Restaurant has increased sales thanks to Sparksites Studios, Customers can also now easily order and pay from directly our website.",
    name: "De Kitchen",
    title: "A restaurant",
    img: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/veflf8i4nlurefhcfjhe.jpg",
  },
];
export const footerLinks = [
  {
    id: 1,
    title: "Useful Links",
    links: [
      // {
      //   name: "Apply",
      //   link: "/apply",
      // },
      {
        name: "Our Services",
        link: "/services",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "Request A Proposal",
        link: "/services#getstarted",
      },
    ],
  },
  {
    id: 2,
    title: "Follow Along",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/_sparksitestudios/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/_sparksitestudios/",
  },
  {
    id: "social-media-2",
    icon: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/qjwinjdkqrefwxm36wnd.jpg",
    link: "mailto:sparksiteofficial@gmail.com",
  },
  {
    id: "social-media-3",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100084577849460",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/taiwo-onileowo/",
  },
];

export const positions = [
  {
    id: "position-1",
    position: "Frontend Devloper",
    description:
      "Responsible for building user friendly and well optimized websites using various web technologies.",
  },
  {
    id: "position-2",
    position: "Backend Developer",
    description:
      "Responsible for the architecture and implementation of robust server-side solutions, handle database management, and optimize performance to bring seamless functionality to our web applications.",
  },
  {
    id: "position-3",
    position: "UI/UX Designer",
    description:
      "Blend creativity with user-centric design principles to craft visually compelling and modern functional interfaces that captivate users.",
  },
  {
    id: "position-4",
    position: "Graphic designer",
    description:
      "Transfrom concepts into visually stunning realities. Be the artistic force that captivates audience.",
  },
  {
    id: "position-5",
    position: "Social Media Manager",
    description:
      "Responsible for crafting and executing strategic campaigns across platforms to engage audience, boost brand visibility, and drive meaningful connections.",
  },
  {
    id: "position-6",
    position: "Graphic designer",
    description:
      "Transfrom concepts into visually stunning realities. Be the artistic force that captivates audience.",
  },
  {
    id: "position-7",
    position: "Business Development Manager",
    description:
      "Drive growth and forge key partnerships. identify opportunities, build client relationships, an implement strategic plans to propel our web design company to higher heights.",
  },
];

export const clients = [
  {
    id: "client-1",
    name: "rhodabeddings",
    logo: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/r1wq9jm4itu8paqj3bih.jpg",
    link: "http://rhodabeddings.com.ng/",
  },
  {
    id: "client-2",
    name: "hoobank",
    logo: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/qnefgmubdvtn9abihdii.jpg",
    link: "https://h00bankweb.netlify.app/",
  },
  {
    id: "client-3",
    name: "dekitchen",
    logo: "https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/j0u0xkwoxmohikecqsk4.jpg",
  },
];

export const Modalservices = [
  {
    id: "service-1",
    service: "Custom website design",
  },
  {
    id: "service-2",
    service: "Responsive and mobile-friendly layouts",
  },
  {
    id: "service-3",
    service: " E-commerce solutions and online stores",
  },
  {
    id: "service-4",
    service: "Booking and ordering functionalities",
  },
  {
    id: "service-5",
    service: "Search engine optimization",
  },
  {
    id: "service-6",
    service: "24/7 support and maintenance",
  },
];

export const servicesText = [];
