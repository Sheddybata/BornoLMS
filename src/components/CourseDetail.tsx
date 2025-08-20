import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Play, 
  Clock, 
  BookOpen, 
  Target, 
  CheckCircle, 
  ArrowLeft,
  Video,
  FileText,
  Download,
  Users,
  ChevronDown,
  ChevronRight,
  Lock,
  Unlock,
  Brain
} from 'lucide-react';
import DeviceOperationQuiz from './DeviceOperationQuiz';
import InternetDataLiteracyQuiz from './InternetDataLiteracyQuiz';
import DigitalCommunicationQuiz from './DigitalCommunicationQuiz';

interface CourseDetailProps {
  onBack: () => void;
  courseId?: string;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: string;
  completed: boolean;
  content: string;
  locked: boolean;
  videoUrl?: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onBack, courseId = 'device-operation' }) => {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number>(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const { t } = useLanguage();

  const courses = {
    'device-operation': {
      title: "Device Operation and Fundamentals",
      category: "Technology",
      level: "Beginner",
      duration: "6 weeks",
      modules: 8,
      students: 1250,
      rating: 4.8,
      description: "The first step to becoming a confident digital citizen is understanding the tools you'll be using. This module is your hands-on introduction to the physical and conceptual parts of digital devices. We will explore everything from the buttons you press to the programs that run inside, giving you a solid foundation for all future modules. A strong grasp of these fundamentals is essential for all other digital skills.",
      learningOutcomes: [
        "Understand the basic components of digital devices",
        "Learn how to safely power on and shut down devices",
        "Master basic navigation and input methods",
        "Recognize common device interfaces and ports",
        "Develop confidence in handling digital equipment",
        "Build a foundation for advanced digital skills"
      ],
             lessons: [
                   {
            id: 1,
            title: "Basic Hardware and Software Concepts",
            duration: "45 minutes",
            type: "Video",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/vG_qmtdBPTU",
            content: `The world of computing is built on two main pillars: hardware and software. Understanding the relationship between these two is the key to understanding how any digital device works.

Hardware refers to the physical, tangible parts of a computer that you can see and touch. Think of it as the body of the computer. These components include:

• System Unit: The main box or casing that contains the most important parts, like the CPU (Central Processing Unit, the computer's "brain"), memory (RAM), and storage drives.
• Monitor: The screen where you see all the visual output.
• Keyboard: Used for typing text and entering commands.
• Mouse: A pointing device used to navigate and select items on the screen.
• Internal Storage: This is where all your files and programs are stored. Common types include hard disk drives (HDDs) and solid-state drives (SSDs).
• Peripheral Devices: These are external devices that connect to the computer, such as printers, scanners, and USB flash drives.

Software, on the other hand, is the set of instructions or programs that tell the hardware what to do. Think of software as the computer's mind or brain. Without software, the hardware is just a collection of metal and plastic.`
          },
                   {
            id: 2,
            title: "What is Hardware?",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/SSnNY8GfZig",
            content: `Hardware refers to the physical, tangible parts of a computer that you can see and touch. Think of it as the body of the computer. These components include:

System Unit: The main box or casing that contains the most important parts, like the CPU (Central Processing Unit, the computer's "brain"), memory (RAM), and storage drives.

Monitor: The screen where you see all the visual output.

Keyboard: Used for typing text and entering commands.

Mouse: A pointing device used to navigate and select items on the screen.

Internal Storage: This is where all your files and programs are stored. Common types include hard disk drives (HDDs) and solid-state drives (SSDs).

Peripheral Devices: These are external devices that connect to the computer, such as printers, scanners, and USB flash drives.

A mobile phone's hardware is a more compact version of these components, including its screen, camera, microphone, internal battery, and a powerful processor all in one small package.`
          },
                   {
            id: 3,
            title: "What is Software?",
            duration: "30 minutes",
            type: "Video",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/PBDlbSAddAI",
            content: `Software, on the other hand, is the set of instructions or programs that tell the hardware what to do. Think of software as the computer's mind or brain. Without software, the hardware is just a collection of metal and plastic. There are two main types of software:

Operating System (OS): This is the most important software, as it manages all the other software and hardware on the computer. Examples include Windows, macOS, and Linux for computers, and Android and iOS for mobile devices.

Application Software: These are programs designed to perform specific tasks. Examples include a calculator, a web browser (like Chrome), a word processor (like Microsoft Word), or a social media app.

The key difference is that hardware is physical, while software is digital. They must work together for the device to function. You provide commands through an input device (hardware), which the operating system (software) interprets and sends to the processor (hardware) to execute, and the result is displayed on the monitor (hardware).`
          },
                   {
            id: 4,
            title: "Using Input Devices (Mouse, Keyboard, Touchscreen)",
            duration: "75 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/JG_pea_aqpQ",
            content: `An input device is any tool you use to give commands and information to a computer. Mastering these tools is the first step toward effective device control.

The Mouse
You will learn to use a mouse to move a pointer on the screen. The main actions are:
• Pointing: Moving the pointer over an icon, button, or link.
• Clicking: Pressing the left mouse button once to select an item or open a menu.
• Double-clicking: Pressing the left mouse button twice in quick succession to open a file or launch a program.
• Dragging: Holding down the left mouse button while moving the mouse to move an object or select a block of text.

The Keyboard
The keyboard is used for typing text, numbers, and symbols. You will practice finding letters, numbers, and common punctuation. Important keys to learn include:
• Space Bar: Used to create a space between words.
• Enter Key: Used to start a new line or execute a command.
• Backspace Key: Used to delete the character to the left of the cursor.
• Shift Key: Used to type capital letters or the symbols at the top of the number keys.
• Arrow Keys: Used to move the cursor up, down, left, or right.

The Touchscreen
On devices like tablets and smartphones, the screen itself is the primary input device. Instead of a mouse, you use your fingers to:
• Tap: Press the screen once with your finger to select an item or open an app. This is the same as a single mouse click.
• Swipe: Slide your finger across the screen to move between pages, scroll through a list, or close an app.
• Pinch: Use two fingers to pinch inward to zoom out of an image, or spread them apart to zoom in.`
          },
                   {
            id: 5,
            title: "Navigating an Operating System",
            duration: "45 minutes",
            type: "Video",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/GjNp0bBrjmU",
            content: `The operating system (OS) is the most important software on a computer; it acts as the manager. When you turn on a computer, the first thing you see is the desktop, which is the main screen and part of the OS. The desktop is where you find icons (small pictures that represent files and programs) and the Start menu, which provides access to all your applications.

Basic OS Navigation
You will learn how to perform essential navigation tasks:
• Launching a Program: To start a program, you can either double-click its icon on the desktop or find it in the Start menu.
• Managing Windows: Programs and folders open in windows (rectangular boxes on the screen). You can minimize a window to hide it temporarily on the taskbar, maximize it to fill the entire screen, or close it when you are finished.
• Taskbar: The taskbar is a bar, usually at the bottom of the screen, that shows you which programs are currently running. You can click on a program's icon on the taskbar to switch to it.
• System Settings: You'll learn to access basic system settings, such as adjusting the screen brightness, changing the volume, and connecting to Wi-Fi.

Types of Operating Systems
While the fundamental principles are similar, different devices use different operating systems.
• Windows: The most common OS for desktop computers and laptops.
• macOS: The OS for Apple computers.
• Linux: A powerful and free OS often used by programmers.
• Android: The most common mobile OS for smartphones and tablets.
• iOS: The mobile OS for Apple iPhones and iPads.

Learning these basics will make it easier for you to use any digital device, regardless of the brand.`
          },
                   {
            id: 6,
            title: "Simple File Management",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/BY1y_RQxIdg",
            content: `A file is a piece of digital information, like a document, a photo, or a video. A folder is a digital container used to organize and store files, just like a physical folder on your desk. This section teaches you how to keep your digital work organized and easy to find.

Basic File Operations
• Creating a Folder: You can create a new folder on your desktop or in a specific location to store related files. Giving your folders clear names like "BICTDA Class Documents" or "Family Photos" is a good habit.
• Saving a File: When you create a new document in a program, you must save it to a location on your computer. You'll learn to use the "Save As" command to choose a name and folder for your file.
• Renaming a File or Folder: You can change the name of a file or folder at any time. Giving a file a descriptive name like "Resume-for-BICTDA-Job" is better than "Document1."
• Moving or Copying Files: You can easily move a file from one folder to another. The Copy command makes a duplicate of the file, while the Cut command moves the original file.

File Extensions
Every file has a name and a file extension, which is a short code (usually three or four letters) at the end of the file name, preceded by a dot. For example, document.docx or photo.jpg. The file extension tells the computer what type of file it is and which program should open it. Knowing common file extensions can help you organize your work more effectively.`
          },
         {
           id: 7,
           title: "Practical Exercises",
           duration: "90 minutes",
           type: "Hands-on",
           completed: false,
           locked: true,
           content: `This hands-on session will give you practical experience with all the concepts learned in previous lessons. You'll work through real-world scenarios and practice the skills you've developed.`
         },
         {
           id: 8,
           title: "Assessment and Review",
           duration: "45 minutes",
           type: "Quiz",
           completed: false,
           locked: true,
           content: `Final assessment to test your understanding of all concepts covered in this module. Complete this to earn your certificate.`
         }
       ]
    },

    'internet-data-literacy': {
      title: "Introduction to the Internet and Data Literacy",
      category: "Digital Literacy",
      level: "Beginner",
      duration: "4 weeks",
      modules: 4,
      students: 2100,
      rating: 4.9,
      description: "The internet is a vast network of information and people. This module will show you how to navigate this world safely and effectively. You will learn the difference between trustworthy and untrustworthy information, and how to use search tools to find what you need for personal or business use. We'll go beyond basic searches to turn you into a skilled digital information seeker.",
      learningOutcomes: [
        "Connect to the internet safely and understand different connection types",
        "Master advanced search techniques and find information efficiently",
        "Evaluate online information credibility using the S.A.T. method",
        "Download, organize, and manage files from the internet",
        "Recognize and avoid misinformation and unreliable sources",
        "Manage data usage and understand file sizes"
      ],
      lessons: [
                 {
           id: 1,
           title: "Getting Connected to the Internet",
           duration: "60 minutes",
           type: "Interactive",
           completed: false,
           locked: false,
                       videoUrl: "https://www.youtube.com/embed/Sfzo4xm5eX8",
           content: `To use the internet, you need a connection. This can be through a Wi-Fi network (a wireless connection) or through mobile data (a connection provided by your phone company). The strength and speed of your connection can affect your experience. A web browser is the application you use to access the internet. Popular browsers include Chrome, Firefox, and Safari. We will practice connecting to an available network, and then opening a web browser to get online.

Types of Internet Connections
• Wi-Fi: Uses radio waves to connect a device to the internet through a router. It is a common connection type in homes, offices, and community hubs.
• Mobile Data: Provided by a mobile phone company (e.g., MTN, Glo). You can connect to it on your smartphone or use it to create a Wi-Fi "hotspot" for other devices.
• Ethernet: A physical connection using a cable, typically used for desktop computers for a more stable and faster connection than Wi-Fi.

Understanding URLs
The address of a website is called a URL (Uniform Resource Locator). For example, https://www.google.com. The https:// part of the address means the connection is secure. It's a good practice to always look for https:// when entering personal information on a website. The .com or .ng at the end of the address is the domain extension, which gives you a clue about the website's purpose or location.`
         },
                 {
           id: 2,
           title: "Web Browsing and Advanced Search Techniques",
           duration: "75 minutes",
           type: "Hands-on",
           completed: false,
           locked: false,
                       videoUrl: "https://www.youtube.com/embed/7RlB1CJovTs",
           content: `Searching for information is a fundamental skill. You'll learn how to type search terms, or keywords, into a search engine (like Google) to find websites. We will go beyond basic searches to help you find exactly what you need.

Basic Search Strategies
• Use Specific Keywords: Instead of searching for "weather," search for "Maiduguri weather today."
• Use Quotation Marks: Placing quotation marks around a phrase ("BICTDA Digital Literacy") tells the search engine to look for that exact phrase. This is helpful for finding specific names or titles.
• Use Filters: Most search engines have filters you can use to narrow your results, such as "Images," "News," "Videos," or "Maps."

Advanced Search Operators
These are simple commands you can add to your search to get more precise results.
• site:: To search for information only on a specific website. For example: site:glo.ng mobile data plans.
• -: To exclude a word from your search. For example: maize farming -insects.
• filetype:: To search for a specific type of file. For example: filetype:pdf Borno State history.`
         },
         {
           id: 3,
           title: "Evaluating Online Information",
           duration: "60 minutes",
           type: "Interactive",
           completed: false,
           locked: false,
                       videoUrl: "https://www.youtube.com/embed/tl-S7XtLzNw",
           content: `Not all information online is accurate or safe. It is your responsibility to be a critical thinker. This section teaches you how to look for signs of a credible source and avoid misinformation.

The S.A.T. Method for Credibility
A simple method for evaluating a source is the S.A.T. Method:
• Source: Who created this content? Are they a known expert, an official organization, or just a random person? Look for an "About Us" page or an author's name.
• Accuracy: Is the information factual and free of spelling or grammar mistakes? Does it make sense? Does it match what other trusted sources are saying?
• Timeliness: When was the information published? For topics like technology or news, older information may no longer be relevant or accurate.

Identifying Misinformation
Misinformation is false or inaccurate information, often shared unintentionally. You can spot it by looking for:
• Sensational headlines that are meant to get an emotional reaction.
• Lack of author or sources cited in the article.
• Outrageous claims that seem too good (or too bad) to be true.

Always cross-check a surprising piece of information with at least two other trusted sources before believing or sharing it.`
         },
         {
           id: 4,
           title: "Downloading, Storing, and Organizing Files",
           duration: "90 minutes",
           type: "Hands-on",
           completed: false,
           locked: false,
                       videoUrl: "https://www.youtube.com/embed/rfdmDeZ-ri0",
           content: `When you find a document, photo, or application online that you want to keep, you can download it to your device. This section builds on the file management skills from Module 1.

The Download Process
• Initiating a Download: Downloads can be triggered by clicking a "Download" button or simply by clicking on a link to a file. Always make sure you are downloading from a trusted website to avoid viruses.
• Locating the File: Most operating systems have a dedicated "Downloads" folder where all downloaded files are saved automatically. You will learn to find this folder and manage your files from there.
• File Types: It's important to recognize common file types:
  ○ .pdf - A document file that looks the same on any device.
  ○ .jpg or .png - Image files.
  ○ .mp3 - Audio files.
  ○ .mp4 - Video files.

Data Usage and File Size
Every time you download a file or browse a website, you are using data. The size of a file, measured in kilobytes (KB), megabytes (MB), or gigabytes (GB), tells you how much space it takes up and how much data it will use to download. For example, a high-quality photo might be 2 MB, while a movie could be 2 GB. Knowing this helps you manage your mobile data plan.

Module Summary: Module 2 taught you how to connect to and use the internet effectively. You practiced advanced search techniques, learned to distinguish between credible and unreliable sources, and gained practical skills in downloading and organizing online content. You are now equipped to find and manage information confidently and safely.`
         },
         {
           id: 5,
           title: "Assessment and Review",
           duration: "45 minutes",
           type: "Quiz",
           completed: false,
           locked: true,
           content: `Final assessment to test your understanding of internet usage, search techniques, information evaluation, and file management. Complete this to earn your certificate.`
         }
      ]
    },
    'digital-communication': {
      title: "Digital Communication and Collaboration",
      category: "Communication",
      level: "Beginner",
      duration: "4 weeks",
      modules: 4,
      students: 1800,
      rating: 4.7,
      description: "Digital communication has become a crucial part of our lives. This module will help you navigate online conversations, from sending a formal email to participating in a group chat with friends. We will focus on the tools you use and the respectful behavior you need to be a good digital citizen.",
      learningOutcomes: [
        "Master email basics and professional netiquette",
        "Use messaging and social media apps effectively and safely",
        "Collaborate online using group tools and shared documents",
        "Understand and manage your digital footprint",
        "Practice respectful and positive online communication",
        "Build a strong digital reputation"
      ],
                           lessons: [
                     {
             id: 1,
             title: "Email Basics and Professional Netiquette",
             duration: "75 minutes",
             type: "Interactive",
             completed: false,
             locked: false,
             videoUrl: "https://www.youtube.com/embed/kZOfLN4YqhY",
             content: `Email is a widely used tool for formal and informal communication, especially in a professional context. You will learn how to:

• Create your own email account (e.g., on Gmail).
• Compose a new message with a clear subject line that tells the recipient what the email is about.
• Attach a file (like a document or a photo) to an email.
• Reply to and forward emails.
• CC (Carbon Copy) and BCC (Blind Carbon Copy) people on an email when you need to include them in a conversation.

Netiquette refers to the rules of polite online communication. For example, it is considered rude to type in all capital letters (this is seen as shouting). We'll discuss how to use polite greetings and be respectful and considerate in all your digital interactions.

Always remember to log out of your email account, especially on a public or shared computer.`
           },
                     {
             id: 2,
             title: "Using Messaging and Social Media Apps",
             duration: "60 minutes",
             type: "Hands-on",
             completed: false,
             locked: false,
             videoUrl: "https://www.youtube.com/embed/H9xN16F61mA",
             content: `Tools like WhatsApp and Facebook allow for real-time messaging and sharing with a large network of people. You'll learn how to:

• Send text messages, voice notes, and other content like photos.
• Create and participate in group chats.
• Set up a basic, secure profile with limited personal information.
• Manage your privacy settings to control who sees your content.

On social media, you can often choose to make your profile public (visible to everyone) or private (visible only to friends).

Interact with others in a positive and respectful way, avoiding arguments and being mindful of what you post.`
           },
                     {
             id: 3,
             title: "Online Group Collaboration Tools",
             duration: "90 minutes",
             type: "Interactive",
             completed: false,
             locked: false,
             videoUrl: "https://www.youtube.com/embed/bwKCkrKHQh8",
             content: `Online collaboration allows people to work together on projects from different locations. Tools for this can range from simple group chats to more advanced platforms.

Shared Documents: Tools like Google Docs or Microsoft 365 allow multiple people to edit the same document at the same time. You can see what others are writing and make changes together, which is a powerful way to collaborate.

Project Management Tools: More advanced tools can help a team keep track of tasks, deadlines, and project progress.

Shared Calendars: You can share a calendar with others to easily schedule meetings or plan events together.

This section will give you hands-on experience participating in a group chat, posting messages, and learning how to collaborate constructively. We will discuss the importance of listening to others' ideas and sharing your own respectfully.`
           },
                     {
             id: 4,
             title: "Understanding and Managing Your Digital Footprint",
             duration: "60 minutes",
             type: "Interactive",
             completed: false,
             locked: false,
             videoUrl: "https://www.youtube.com/embed/MOd3fKK6mDI",
             content: `Every post, message, and comment you make online leaves a digital footprint. This is the trail of data you leave behind, and it can be permanent. A positive digital footprint can help you, for example, when applying for jobs, while a negative one can harm your chances.

How to Manage Your Digital Footprint
• Think Before You Post: Before you post anything online, ask yourself: "Would I want my future employer or a family member to see this?"
• Use Privacy Settings: Regularly review and adjust your privacy settings on all your accounts.
• Be a Positive Contributor: Use your online platforms to share your skills, support your community, and express yourself in a positive way. This helps build a strong digital reputation that you can be proud of.

Module Summary: In Module 3, you developed essential communication skills for the digital world. You learned how to use email, messaging apps, and social media, all while practicing good netiquette. You also gained an understanding of your digital footprint and the importance of being a positive and responsible online citizen.`
           },
           {
             id: 5,
             title: "Assessment and Review",
             duration: "45 minutes",
             type: "Quiz",
             completed: false,
             locked: true,
             content: `Final assessment to test your understanding of digital communication, netiquette, collaboration tools, and digital footprint management. Complete this to earn your certificate.`
           }
        ]
    },
    'digital-content-creation': {
      title: "Digital Content Creation and Productivity",
      category: "Productivity",
      level: "Intermediate",
      duration: "5 weeks",
      modules: 4,
      students: 950,
      rating: 4.6,
      description: "This module is your practical guide to creating and managing digital content. We will move beyond just consuming information to actually producing it. You'll learn how to use powerful applications like Microsoft Word, Microsoft Excel, and Corel Draw to create professional-looking documents, organize data, and design visual materials for both personal and business use.",
      learningOutcomes: [
        "Master word processing with Microsoft Word for professional documents",
        "Create and manage data with Excel spreadsheets and formulas",
        "Design visual materials using Corel Draw graphic design tools",
        "Understand copyright and responsible content reuse",
        "Apply productivity tools to personal and business projects",
        "Create professional-looking materials independently"
      ],
             lessons: [
                   {
            id: 1,
            title: "Introduction to Word Processing (MS Word)",
            duration: "90 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/6GZ2VRrNRic",
            content: "Master word processing with Microsoft Word for professional documents."
          },
                   {
            id: 2,
            title: "Basic Data Management with Spreadsheets (Excel)",
            duration: "120 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/LgXzzu68j7M",
            content: "Create and manage data with Excel spreadsheets and formulas."
          },
          {
            id: 3,
            title: "Graphic Design Fundamentals (Corel Draw)",
            duration: "150 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/LhNnEibdrpk",
            content: "Design visual materials using Corel Draw graphic design tools."
          },
          {
            id: 4,
            title: "Responsible Content Reuse and Copyright",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/C1VCr71t3iU",
            content: "Understand copyright and responsible content reuse."
          },
          {
            id: 5,
            title: "Assessment and Review",
            duration: "45 minutes",
            type: "Quiz",
            completed: false,
            locked: true,
            content: `Final assessment to test your understanding of word processing, spreadsheet management, graphic design, and copyright principles. Complete this to earn your certificate.`
          }
       ]
    },
    'online-safety': {
      title: "Online Safety and Digital Citizenship",
      category: "Security",
      level: "Beginner",
      duration: "5 weeks",
      modules: 5,
      students: 1600,
      rating: 4.9,
      description: "As you become more comfortable with technology, it's essential to be aware of the risks that exist online. This module is dedicated to making you a smart, safe, and responsible digital citizen. We will cover everything from creating strong passwords to recognizing online scams, giving you the knowledge to protect yourself and others.",
      learningOutcomes: [
        "Identify and protect against cyber threats like viruses, phishing, and scams",
        "Implement strong security practices for devices and personal data",
        "Manage online privacy and build a positive digital reputation",
        "Handle online harassment and cyberbullying effectively",
        "Recognize and avoid sharing misinformation",
        "Know where to seek help for cybercrime and online issues"
      ],
             lessons: [
                   {
            id: 1,
            title: "Recognizing Cyber Threats (Viruses, Phishing, Scams)",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/XBkzBrXlle0",
            content: "Identify and protect against cyber threats like viruses, phishing, and scams."
          },
                   {
            id: 2,
            title: "Safe Practices for Devices and Data",
            duration: "75 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/N8xEgSe5RwE",
            content: "Implement strong security practices for devices and personal data."
          },
          {
            id: 3,
            title: "Managing Online Privacy and Reputation",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/xs9m7a-jJzg",
            content: "Manage online privacy and build a positive digital reputation."
          },
          {
            id: 4,
            title: "Responding to Online Harassment and Misinformation",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/3ZFff_6AJIk",
            content: "Handle online harassment and cyberbullying effectively."
          },
          {
            id: 5,
            title: "Digital Citizenship and Community Responsibility",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/6PgQNc0ro9Q",
            content: "Recognize and avoid sharing misinformation."
          },
          {
            id: 6,
            title: "Assessment and Review",
            duration: "45 minutes",
            type: "Quiz",
            completed: false,
            locked: true,
            content: `Final assessment to test your understanding of cyber threats, security practices, privacy management, and digital citizenship. Complete this to earn your certificate.`
          }
       ]
    },
    'emerging-technologies': {
      title: "Introduction to Emerging Technologies and Cybersecurity",
      category: "Technology",
      level: "Intermediate",
      duration: "4 weeks",
      modules: 4,
      students: 1200,
      rating: 4.7,
      description: "The world of technology is always changing. This module provides a brief introduction to some of the most exciting and transformative technologies on the horizon, along with an overview of cybersecurity, which is a critical topic in our digital world. While these topics can be complex, this section will give you a simple, foundational understanding of what they are and why they are important for our future.",
      learningOutcomes: [
        "Understand the basics of Artificial Intelligence and its everyday applications",
        "Learn about blockchain technology and its potential beyond cryptocurrency",
        "Explore quantum computing and its revolutionary processing capabilities",
        "Grasp fundamental cybersecurity concepts using the CIA Triad",
        "Recognize the ethical implications of emerging technologies",
        "Build a foundation for understanding future technological developments"
      ],
             lessons: [
                   {
            id: 1,
            title: "Artificial Intelligence (AI)",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/JcXKbUIebrU",
            content: "Understand the basics of Artificial Intelligence and its everyday applications."
          },
                   {
            id: 2,
            title: "Blockchain",
            duration: "75 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/yubzJw0uiE4",
            content: "Learn about blockchain technology and its potential beyond cryptocurrency."
          },
          {
            id: 3,
            title: "Quantum Computing",
            duration: "60 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/B3U1NDUiwSA",
            content: "Explore quantum computing and its revolutionary processing capabilities."
          },
          {
            id: 4,
            title: "An Introduction to Cybersecurity",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
            content: "Grasp fundamental cybersecurity concepts using the CIA Triad."
          },
          {
            id: 5,
            title: "Assessment and Review",
            duration: "45 minutes",
            type: "Quiz",
            completed: false,
            locked: true,
            content: `Final assessment to test your understanding of AI, blockchain, quantum computing, and cybersecurity fundamentals. Complete this to earn your certificate.`
          }
       ]
    },
    'capstone-project': {
      title: "Capstone Project and Pathway to Opportunities",
      category: "Project",
      level: "Advanced",
      duration: "6 weeks",
      modules: 5,
      students: 800,
      rating: 4.8,
      description: "This final module is your opportunity to bring everything you've learned together. You will work on a capstone project that showcases your new skills. This module is not just about finishing the course; it's about preparing for the next step in your journey, whether that's further education, a new career, or starting your own business.",
      learningOutcomes: [
        "Plan and execute a comprehensive capstone project using all learned skills",
        "Develop problem-solving and troubleshooting abilities for technical challenges",
        "Present your work professionally and receive constructive feedback",
        "Create a personal development plan for future learning and career goals",
        "Understand pathways to professional certifications and entrepreneurship",
        "Build confidence in applying digital skills to real-world scenarios"
      ],
             lessons: [
                   {
            id: 1,
            title: "Capstone Project Planning and Execution",
            duration: "120 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/mH9J0KYtAR0",
            content: "Plan and execute a comprehensive capstone project using all learned skills."
          },
                   {
            id: 2,
            title: "Troubleshooting and Problem-Solving",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/huTvW7sbK4U",
            content: "Develop problem-solving and troubleshooting abilities for technical challenges."
          },
          {
            id: 3,
            title: "Advanced Project Development",
            duration: "150 minutes",
            type: "Hands-on",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/nwMeINjRl6Y",
            content: "Take your project to the next level with advanced techniques and professional quality."
          },
          {
            id: 4,
            title: "Showcasing Your Work and Getting Feedback",
            duration: "75 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/1GFk1c7mQpo",
            content: "Present your work professionally and receive constructive feedback."
          },
          {
            id: 5,
            title: "Pathways to Further Learning and Entrepreneurship",
            duration: "90 minutes",
            type: "Interactive",
            completed: false,
            locked: false,
            videoUrl: "https://www.youtube.com/embed/pC5l5j2u9SQ",
            content: "Create a personal development plan for future learning and career goals."
          },
          {
            id: 6,
            title: "Assessment and Review",
            duration: "45 minutes",
            type: "Quiz",
            completed: false,
            locked: true,
            content: `Final assessment to test your understanding of project planning, problem-solving, advanced development, and career pathways. Complete this to earn your certificate.`
          }
       ]
    }
  };

  const course = courses[courseId as keyof typeof courses] || courses['device-operation'];
  
  // Initialize lessons state when course changes
  React.useEffect(() => {
    setLessons([...course.lessons]);
    setCompletedLessons(0); // Reset completion when course changes
  }, [courseId]);
  
  const totalLessons = lessons.length;
  // Include quiz completion in progress calculation
  const effectiveCompletedLessons = quizCompleted ? completedLessons + 1 : completedLessons;
  const progressPercentage = (effectiveCompletedLessons / totalLessons) * 100;

  // Unlock lessons based on progress
  React.useEffect(() => {
    if (courseId === 'device-operation') {
      setLessons(prevLessons => 
        prevLessons.map((lesson, index) => {
          if (index === 0) {
            // First lesson is always unlocked
            return { ...lesson, locked: false };
          } else if (index === 1 && effectiveCompletedLessons >= 1) {
            // Second lesson unlocked after first is completed
            return { ...lesson, locked: false };
          } else if (index === 2 && effectiveCompletedLessons >= 2) {
            // Third lesson unlocked after second is completed
            return { ...lesson, locked: false };
          } else if (index === 3 && effectiveCompletedLessons >= 3) {
            // Fourth lesson unlocked after third is completed
            return { ...lesson, locked: false };
          } else if (index === 4 && effectiveCompletedLessons >= 4) {
            // Fifth lesson unlocked after fourth is completed
            return { ...lesson, locked: false };
          } else if (index === 5 && effectiveCompletedLessons >= 5) {
            // Sixth lesson unlocked after fifth is completed
            return { ...lesson, locked: false };
          } else if (index === 6 && effectiveCompletedLessons >= 6) {
            // Practical exercises unlocked after sixth lesson
            return { ...lesson, locked: false };
          } else if (index === 7 && effectiveCompletedLessons >= 7) {
            // Assessment unlocked after practical exercises
            return { ...lesson, locked: false };
          }
          return lesson;
        })
      );
    }
  }, [effectiveCompletedLessons, courseId]);

  const handleLessonComplete = (lessonId: number) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson && !lesson.locked) {
      setCompletedLessons(prev => prev + 1);
      
      setLessons(prevLessons => {
        const updatedLessons = prevLessons.map(l => {
          if (l.id === lessonId) {
            return { ...l, completed: true };
          }
          return l;
        });
        
        // Unlock the next lesson if available
        const currentLessonIndex = updatedLessons.findIndex(l => l.id === lessonId);
        if (currentLessonIndex < updatedLessons.length - 1) {
          updatedLessons[currentLessonIndex + 1].locked = false;
        }
        
        return updatedLessons;
      });
      
      // Close the expanded lesson
      setExpandedLesson(null);
    }
  };

  const toggleLessonExpansion = (lessonId: number) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  // If quiz is being shown, render the appropriate quiz component
  if (showQuiz) {
    const quizProps = {
      onBack: () => setShowQuiz(false),
      onQuizComplete: () => {
        setQuizCompleted(true);
        setShowQuiz(false);
        // Mark the assessment lesson as completed
        setLessons(prevLessons => 
          prevLessons.map(lesson => 
            lesson.title.includes("Assessment") || lesson.title.includes("Review") || lesson.title.includes("Quiz")
              ? { ...lesson, completed: true, locked: false }
              : lesson
          )
        );
      }
    };

    // Render the appropriate quiz based on course ID
    switch (courseId) {
      case 'device-operation':
        return <DeviceOperationQuiz {...quizProps} />;
      case 'internet-data-literacy':
        return <InternetDataLiteracyQuiz {...quizProps} />;
      case 'digital-communication':
        return <DigitalCommunicationQuiz {...quizProps} />;
      default:
        return <DeviceOperationQuiz {...quizProps} />;
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t('viewAll')}
        </Button>
      </div>

      {/* Course Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                {course.category}
              </Badge>
              <Badge variant="secondary">{course.level}</Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
              {course.description}
            </p>
                         {/* Course metadata hidden as requested */}
             {/* <div className="flex items-center gap-6 text-sm text-gray-600">
               <div className="flex items-center gap-2">
                 <Clock className="h-4 w-4" />
                 <span>{course.duration}</span>
               </div>
               <div className="flex items-center gap-2">
                 <BookOpen className="h-4 w-4" />
                 <span>{course.lessons.length} lessons</span>
               </div>
               <div className="flex items-center gap-2">
                 <Users className="h-4 w-4" />
                 <span>{course.students.toLocaleString()} students enrolled</span>
               </div>
               <div className="flex items-center gap-2">
                 <Target className="h-4 w-4" />
                 <span>{course.rating} rating</span>
               </div>
             </div> */}
          </div>
                                           <div className="ml-8">
                        {/* Quiz button moved to course lessons */}
                      </div>
        </div>
      </div>

      {/* Progress Section */}
      <Card>
                <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">{t('courseProgress')}</CardTitle>
          <p className="text-gray-600">{t('trackLearningJourney')}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
                         <div className="flex items-center justify-between">
               <span className="text-sm font-medium text-gray-700">
                 {effectiveCompletedLessons} {t('of')} {totalLessons} {t('lessons')} {t('completed')}
               </span>
               <span className="text-sm font-medium text-green-600">
                 {Math.round(progressPercentage)}%
               </span>
             </div>
            <Progress value={progressPercentage} className="h-3" />
                         <div className="text-center">
               <Badge className="bg-green-100 text-green-800">
                 {effectiveCompletedLessons === totalLessons ? "Course Completed! 🎉" : "In Progress"}
               </Badge>
             </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">{t('whatYoullLearn')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{outcome}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Lessons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">{t('lessons')}</CardTitle>
          <p className="text-gray-600">{t('completeLessonsForCertificate')}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
                         {lessons.map((lesson, index) => (
              <div key={lesson.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleLessonExpansion(lesson.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      lesson.completed 
                        ? 'bg-green-100 text-green-600' 
                        : lesson.locked 
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {lesson.completed ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : lesson.locked ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        lesson.completed ? 'text-green-700' : 'text-gray-900'
                      }`}>
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          {lesson.type === 'Video' && <Video className="h-3 w-3" />}
                          {lesson.type === 'Interactive' && <FileText className="h-3 w-3" />}
                          {lesson.type === 'Hands-on' && <Download className="h-3 w-3" />}
                          {lesson.type === 'Quiz' && <Target className="h-3 w-3" />}
                          {lesson.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                                                               {lesson.completed ? (
                        <Badge className="bg-green-100 text-green-800">Completed</Badge>
                      ) : lesson.title.includes("Assessment") || lesson.title.includes("Review") || lesson.title.includes("Quiz") ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white border-green-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowQuiz(true);
                          }}
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          {t('takeQuiz')}
                        </Button>
                      ) : lesson.locked ? (
                        <Badge variant="secondary">{t('locked')}</Badge>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLessonComplete(lesson.id);
                          }}
                        >
                          {t('markComplete')}
                        </Button>
                      )}
                    {expandedLesson === lesson.id ? (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                </div>
                
                                 {/* Expanded Lesson Content */}
                 {expandedLesson === lesson.id && (
                   <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                     <div className="pt-4">
                       <div className="prose prose-sm max-w-none">
                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                           {lesson.content}
                         </p>
                       </div>
                       
                                               {/* YouTube Video Section */}
                        {lesson.videoUrl && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('videoLesson')}</h4>
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                src={lesson.videoUrl}
                                title={`${lesson.title} - Video Lesson`}
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}
                       
                       {!lesson.completed && !lesson.locked && (
                         <div className="mt-4 pt-4 border-t border-gray-200">
                           <Button 
                             onClick={() => handleLessonComplete(lesson.id)}
                             className="bg-green-600 hover:bg-green-700 text-white"
                           >
                             <CheckCircle className="h-4 w-4 mr-2" />
                             {t('markComplete')}
                           </Button>
                         </div>
                       )}
                     </div>
                   </div>
                 )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">{t('courseResources')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
              <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">{t('courseMaterials')}</h3>
              <p className="text-sm text-gray-600">{t('downloadableGuides')}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
              <Video className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">{t('videoTutorials')}</h3>
              <p className="text-sm text-gray-600">{t('stepByStepVideo')}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
              <Download className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">{t('practiceFiles')}</h3>
              <p className="text-sm text-gray-600">{t('handsOnExercises')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;
