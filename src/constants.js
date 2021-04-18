import {
  BHEngineeringWeeksSarajevoLogo,
  enLangIcon,
  bhLangIcon,
  deLangIcon,
  udemyLogo,
  educationItemEfsaImage,
  educationItemEtfImage,
  educationItem2GimnazijaImage,
  educationItemOSGrbavica2Image,
  educationItemFollowMeImage,
  educationItemAtlantBHImage,
  educationItemJustCodeItImage,
  educationItemSymphony,
  reactIcon,
  javascriptIcon,
  html5Icon,
  css3Icon,
  reduxIcon,
  javaIcon,
  cIcon,
  cppIcon,
  csIcon,
  sassIcon,
  mySqlIcon,
  mernIcon,
} from './assets/img';
import Home from './containers/Home';

export const ROUTES = [
  {
    path: '/',
    component: Home,
  },
];

export const SCREEN_SIZES = {
  XS: 576,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 2399,
};

export const PORTFOLIO_SECTION_PROPERTIES = {
  bottom: true,
  fraction: 0,
  duration: 650,
};

export const LINK_PROPERTIES = {
  offset: -25,
  spy: true,
  smooth: true,
};

export const TILT_PROPERTIES = {
  reverse: true,
  scale: 1,
  max: 25,
};

export const BRAIN_TRAINING_ITEM_TYPES = {
  EDUCATION: 'EDUCATION',
  CERTIFICATE: 'CERTIFICATE',
  AWARD: 'AWARD',
  KNOWLEDGE: 'KNOWLEDGE',
};

export const BRAIN_TRAINING_ITEMS = [
  {
    title: "Master's Degree",
    educationalInstitution: 'Faculty of Economics and Business',
    startDate: new Date(2020, 11, 1),
    location: 'Trg Alije Izetbegovića 1',
    website: 'http://www.efsa.unsa.ba',
    image: educationItemEfsaImage,
    type: BRAIN_TRAINING_ITEM_TYPES.EDUCATION,
    locationCoordinates: [43.858629, 18.424822],
  },
  {
    title: "Bachelor's Degree",
    educationalInstitution: 'Faculty of Electrical Engineering Sarajevo',
    startDate: new Date(2017, 9, 1),
    endDate: new Date(2020, 6, 23),
    location: 'Zmaja od Bosne bb, Sarajevo',
    website: 'https://www.etf.unsa.ba',
    image: educationItemEtfImage,
    type: BRAIN_TRAINING_ITEM_TYPES.EDUCATION,
    locationCoordinates: [43.856665, 18.398376],
  },
  {
    title: 'High School Diploma',
    educationalInstitution: 'Second Gymnasium Sarajevo',
    startDate: new Date(2013, 8),
    endDate: new Date(2017, 5),
    location: 'Sutjeska 1, Sarajevo',
    website: 'https://www.2gimnazija.edu.ba',
    image: educationItem2GimnazijaImage,
    type: BRAIN_TRAINING_ITEM_TYPES.EDUCATION,
    locationCoordinates: [43.862066, 18.412315],
  },
  {
    title: 'Primary School Diploma',
    educationalInstitution: 'Primary School "Grbavica II"',
    startDate: new Date(2004, 8),
    endDate: new Date(2013, 5),
    location: 'Behdžeta Mutevelića bb, Sarajevo',
    website: 'https://www.osgrbavica2.edu.ba',
    image: educationItemOSGrbavica2Image,
    type: BRAIN_TRAINING_ITEM_TYPES.EDUCATION,
    locationCoordinates: [43.849831, 18.389334],
  },
  {
    title: 'English Language C1 Certification',
    educationalInstitution: 'Altera Lingua "Follow Me"',
    startDate: new Date(2003, 8),
    endDate: new Date(2017, 4),
    location: 'Alekse Šantića 8, Sarajevo',
    website: 'https://www.followme.ba',
    image: educationItemFollowMeImage,
    type: BRAIN_TRAINING_ITEM_TYPES.CERTIFICATE,
    locationCoordinates: [43.862042, 18.414317],
  },
  {
    title: 'German Language A2 Certification',
    educationalInstitution: 'Altera Lingua "Follow Me"',
    startDate: new Date(2008, 8),
    endDate: new Date(2011, 4),
    location: 'Alekse Šantića 8, Sarajevo',
    website: 'https://www.followme.ba',
    image: educationItemFollowMeImage,
    type: BRAIN_TRAINING_ITEM_TYPES.CERTIFICATE,
    locationCoordinates: [43.858481, 18.415154],
  },
  {
    title: 'Innovation Challenge Winners',
    educationalInstitution: 'Hackathon "Just Code It" in Sarajevo',
    startDate: new Date(2019, 11, 21),
    endDate: new Date(2019, 11, 22),
    image: educationItemJustCodeItImage,
    website: 'http://www.eestec-sa.ba/posts/76',
    type: BRAIN_TRAINING_ITEM_TYPES.AWARD,
    locationCoordinates: [43.856696, 18.398789],
  },
  {
    title: 'New knowledge',
    educationalInstitution: 'Symphony MEETUP "Hybernate"',
    startDate: new Date(2019, 3, 19),
    endDate: new Date(2019, 3, 19),
    image: educationItemSymphony,
    website: 'https://symphony.is',
    type: BRAIN_TRAINING_ITEM_TYPES.KNOWLEDGE,
    locationCoordinates: [43.853732, 18.388008],
  },
  {
    title: 'New knowledge',
    educationalInstitution: 'BH Engineering Weeks 2019',
    startDate: new Date(2019, 11, 12),
    endDate: new Date(2019, 11, 12),
    website: 'https://www.bhing.ba',
    image: BHEngineeringWeeksSarajevoLogo,
    type: BRAIN_TRAINING_ITEM_TYPES.KNOWLEDGE,
    locationCoordinates: [43.855336, 18.414434],
  },
  {
    title: 'Completed Course',
    educationalInstitution:
      'React - The Complete Guide (incl Hooks, React Router, Redux)',
    startDate: new Date(2020, 3, 1),
    endDate: new Date(2020, 3, 15),
    website: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux',
    image: udemyLogo,
    type: BRAIN_TRAINING_ITEM_TYPES.KNOWLEDGE,
  },
  {
    title: 'New knowledge',
    educationalInstitution: 'Online Meetup "How to become UX/UI Designer"',
    startDate: new Date(2020, 9, 21),
    endDate: new Date(2020, 9, 21),
    website: 'https://www.atlantbh.com',
    image: educationItemAtlantBHImage,
    type: BRAIN_TRAINING_ITEM_TYPES.KNOWLEDGE,
  },
];

export const FOOTER_LINKS = {
  FACEBOOK: 'https://www.facebook.com/shile.pres',
  INSTAGRAM: 'https://www.instagram.com/sisicfarris',
  YOUTUBE: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
  LINKED_IN: 'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
  GITHUB: 'https://github.com/silegrb',
};

export const LANGUAGES = [
  {
    code: 'en',
    flag: enLangIcon,
  },
  {
    code: 'bh',
    flag: bhLangIcon,
  },
  {
    code: 'de',
    flag: deLangIcon,
  },
];

export const MAXIMUM_LANGUAGE_GRADE = 6;

export const LOADING_WAIT_TIME = 1000;

export const EVENT_LISTENERS = {
  SCROLL: 'scroll',
};

export const THREE_JS_OPTIONS = {
  SPACE: {
    CAMERA: { fov: 100, position: [0, 0, 30] },
    PARTICLES_AMOUNT: 500,
    PARTICLES_POINT_LIGHT_PROPS: {
      distance: 40,
      intensity: 8,
      color: 'grey',
    },
  },
};

export const EPSILON = 0.00001;

export const SKILLSET_ITEMS = [
  {
    title: 'React',
    image: reactIcon,
    description:
      'Have a little over a year of work experience in React. Currently working as a front end developer using this framework. Some personal projects & this website are developed using React framework.',
    isTopSkill: true,
  },
  {
    title: 'JavaScript',
    image: javascriptIcon,
    description:
      "Working with JavaScript for two & a half years. Technical interview task that got me job I currently have is developed using Vanilla JavaScript. Understanding Vanilla JavaScript to it's core level helped me achieve full control over my code & learn JavaScript frameworks easily & quickly.",
    isTopSkill: true,
  },
  {
    title: 'HTML5',
    image: html5Icon,
    description:
      "Learned about HTML5 during my first year of Bachelor's Degree. Understanding & being able to create front end using HTML5 helped me understand JSX easier, boosting my overall React skills.",
    isTopSkill: true,
  },
  {
    title: 'CSS3',
    image: css3Icon,
    description:
      'Got introduced to CSS3 same time I learned about HTML5. Most of styling & animations on this website are custom made.',
    isTopSkill: true,
  },
  {
    title: 'SASS',
    image: sassIcon,
    description:
      "Started using SASS during my internship & instantly decided to replace CSS3 with SASS in my work, due to it's powerful capabilities compared to CSS3. Necessary to mention, knowing CSS3 made learning SASS look super easy.",
    isTopSkill: true,
  },
  {
    title: 'Redux',
    image: reduxIcon,
    description:
      'Was introduced to Redux during my internship & been working with this technology for over a year now. Using Redux facilitated the process of managing application state big time.',
  },
  {
    title: 'MERN Stack',
    image: mernIcon,
    description:
      "Started learning about MERN Stack during my first internship in 2020. Used NodeJS & ExpressJS during my third year of Bachelor's Degree. Used MERN stack for developing some personal projects as well.",
  },

  {
    title: 'Java',
    image: javaIcon,
    description:
      "Used Java first time during my second year of Bachelor's Degree. I learned a lot more about Java than the course offered, due to my huge interest for Java. Held instructions in Java for group of about 15 colleague students later.",
  },
  {
    title: 'C',
    image: cIcon,
    description:
      "My first touch with programming was back when I started learning about C & C++ programming language during my third year of High School. I continued learning about C & C++ during my first year of Bachelor's Degree. I held & still am holding instructions & consultations in C for group of about 10 colleague students.",
  },
  {
    title: 'C++',
    image: cppIcon,
    description:
      "Like mentioned before, I learned about C++ programming language during my third year of High School & first year of Bachelor's Degree. I held & am holding instructions in C++ for group of 10+ colleague students.",
  },
  {
    title: 'C#',
    image: csIcon,
    description:
      "Learned about C# programming language during my second year of Bachelor's Degree. I held & am still holding instructions in C# for group of 10+ Mechanical Engineering students.",
  },
  {
    title: 'MySQL',
    image: mySqlIcon,
    description:
      "Got introduced to MySQL during my second year of Bachelor's Degree, but didn't used it for too long. Important to mention, my personal opinion is that knowing MySQL is a great advantage when learning new stuff in this field.",
  },
];

// Months go from 0 do 11
/* export const PORTFOLIO = {
  BASIC_INFORMATION: {
    title: 'components.basicInformation',
    content: {
      name: 'Faris',
      surname: 'Šišić',
      dateOfBirth: new Date(1998, 7, 24),
      gender: 'components.male',
      nationality: 'components.bosniaAndHerzegovina',
      mobilePhone: '+ 387 60 338 1032',
      emailAddress: 'sisicfarisofficial@gmail.com',
      address: 'Sarajevo, Bosnia and Herzegovina',
      facebookLink: 'https://www.facebook.com/shile.pres',
      youtubeLink: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
      linkedInLink:
        'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
      instagramLink: 'https://www.instagram.com/sisicfarris',
      githubLink: 'https://github.com/silegrb',
    },
  },
  WORK_EXPERIENCE: {
    title: 'components.workExperience',
    content: [
      {
        position: 'components.intern',
        workplace: 'Softhouse Consulting',
        startDate: new Date(2020, 3, 1),
        endDate: new Date(2020, 5, 30),
        location: 'Trg Solidarnosti 2, Sarajevo',
        website: 'https://www.softhouse.se',
        image: softhouseLogo,
      },
      {
        position: 'components.softwareDeveloper',
        workplace: 'Softhouse Consulting',
        startDate: new Date(2020, 6, 1),
        location: 'Trg Solidarnosti 2, Sarajevo',
        website: 'https://www.softhouse.se',
        image: softhouseLogo,
      },
    ],
  },
  EDUCATION: {
    title: 'components.education',
  },
  SKILLS: {
    title: 'Skills',
    content: {
      LANGUAGE_SKILLS: {
        title: 'Language skills',
        content: [
          {
            language: 'Bosnian and Herzegovinian',
            icon: bhLangIcon,
            overallGrade: 6,
            grades: [
              {
                title: 'Listening',
                grade: 6,
              },
              {
                title: 'Reading',
                grade: 6,
              },
              {
                title: 'Spoken interaction',
                grade: 6,
              },
              {
                title: 'Spoken production',
                grade: 6,
              },
              {
                title: 'Writing',
                grade: 6,
              },
            ],
          },
          {
            language: 'English',
            icon: enLangIcon,
            overallGrade: 5,
            grades: [
              {
                title: 'Listening',
                grade: 5,
              },
              {
                title: 'Reading',
                grade: 5,
              },
              {
                title: 'Spoken interaction',
                grade: 5,
              },
              {
                title: 'Spoken production',
                grade: 5,
              },
              {
                title: 'Writing',
                grade: 5,
              },
            ],
          },
          {
            language: 'German',
            icon: deLangIcon,
            overallGrade: 2,
            grades: [
              {
                title: 'Listening',
                grade: 2,
              },
              {
                title: 'Reading',
                grade: 2,
              },
              {
                title: 'Spoken interaction',
                grade: 2,
              },
              {
                title: 'Spoken production',
                grade: 2,
              },
              {
                title: 'Writing',
                grade: 2,
              },
            ],
          },
        ],
      },
      DIGITAL_SKILLS: {
        title: 'Digital skills',
        content: [
          {
            title: 'Microsoft Office',
          },
          {
            title: 'C',
          },
          {
            title: 'C++',
          },
          {
            title: 'C#',
          },
          {
            title: 'Java',
          },
          {
            title: 'Javascript',
          },
          {
            title: 'HTML5',
          },
          {
            title: 'CSS3',
          },
          {
            title: 'MERN Stack',
          },
          {
            title: 'ReactJS',
          },
          {
            title: 'ReactRedux',
          },
          {
            title: 'ExpressJS',
          },
          {
            title: 'MongoDB',
          },
          {
            title: 'NodeJS',
          },
          {
            title: 'SQL',
          },
          {
            title: 'GIT',
          },
          {
            title: 'Bitbucket',
          },
          {
            title: 'Github',
          },
          {
            title: 'Firebase',
          },
          {
            title: 'Blender',
          },
          {
            title: 'Unity',
          },
          {
            title: 'MATLABSimulink',
          },
          {
            title: 'JetBrains WebStorm',
          },
          {
            title: 'JetBrains IDEA',
          },
          {
            title: 'Visual Studio & Visual Studio Code',
          },
          {
            title: 'Trello',
          },
          {
            title: 'JIRA',
          },
          {
            title: 'Azure DevOps',
          },
          {
            title: 'Swagger',
          },
          {
            title: 'JavaFX',
          },
          {
            title: 'Postman',
          },
        ],
      },
      ORGANISATIONAL_SKILLS: {
        title: 'Organisational skills',
        content: [
          {
            title:
              'good team-leading skills - team leader on college projects, team leader on hackathon "Just Code It" event in Sarajevo, basketball and volleyball captain',
          },
          {
            title:
              'good organisational and managerial skills - team leader on college projects, management for party events',
          },
        ],
      },

      COMMUNICATIONAL_SKILLS: [
        {
          title: 'excellent social and communication skills gained through sports, sports related events, humanitarian events, frequent school projects and presentations and mathematics and programming instructions',
        },
      ],
      DRIVING_SKILLS: [
        {
          title: 'B1',
        },
        {
          title: 'B',
        },
      ],

    },

  OTHER_SKILLS: [
  ],

  },
}; */
