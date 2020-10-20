import Content from './containers/Content';
import {
  BHEngineeringWeeksSarajevoLogo,
  drugaGimnazijaSarajevoLogo,
  elektrotehnickiFakultetSarajevoLogo,
  followMeAlteraLinguaLogo,
  grbavicaDvaLogo,
  hackathonJustCodeItSarajevoLogo,
  softhouseLogo,
  symphonySarajevoLogo,
} from './assets/img';

export const ROUTES = [
  {
    path: '/',
    component: Content,
  },
];

export const SCREEN_SIZES = {
  XS: 576,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 2399,
};

// Months go from 0 do 11
export const PORTFOLIO = {
  BASIC_INFORMATION: {
    title: 'BASIC INFORMATION',
    content: {
      name: 'Faris',
      surname: 'Šišić',
      dateOfBirth: new Date(1998, 7, 24),
      gender: 'Male',
      nationality: 'Bosnian-Herzegovinian',
      mobilePhone: '+ 387 60 338 1032',
      emailAddress: 'sisicfarisofficial@gmail.com',
      address: 'Hasana Brkića 15, Sarajevo',
      facebookLink: 'https://www.facebook.com/shile.pres',
      youtubeLink: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
      linkedInLink:
        'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0/',
      instagramLink: 'https://www.instagram.com/___silegrb__/',
      githubLink: 'https://github.com/silegrb',
    },
  },
  WORK_EXPERIENCE: {
    title: 'WORK EXPERIENCE',
    content: [
      {
        position: 'Intern',
        workplace: 'Softhouse Consulting',
        startDate: new Date(2020, 3, 1),
        endDate: new Date(2020, 5, 30),
        location: 'Trg Solidarnosti 2, Sarajevo',
        website: 'www.softhouse.se',
        avatar: softhouseLogo,
      },
      {
        position: 'Software Developer',
        workplace: 'Softhouse Consulting',
        startDate: new Date(2020, 6, 1),
        location: 'Trg Solidarnosti 2, Sarajevo',
        website: 'www.softhouse.se',
        avatar: softhouseLogo,
      },
    ],
  },
  EDUCATION: {
    title: 'EDUCATION',
    content: [
      {
        title: 'Primary School Diploma',
        educationalInstitution: 'Primary School "Grbavica II"',
        startDate: new Date(2004, 8),
        startDateFormatter: 'MMM, YYYY',
        endDate: new Date(2013, 5),
        endDateFormatter: 'MMM, YYYY',
        location: 'Behdžeta Mutevelića bb, Sarajevo',
        website: 'www.osgrbavica2.edu.ba',
        avatar: grbavicaDvaLogo,
      },
      {
        title: 'High School Diploma',
        educationalInstitution: 'Second gymnasium Sarajevo',
        startDate: new Date(2013, 8),
        startDateFormatter: 'MMM, YYYY',
        endDate: new Date(2017, 5),
        endDateFormatter: 'MMM, YYYY',
        location: 'Sutjeska 1, Sarajevo',
        website: 'www.2gimnazija.edu.ba',
        avatar: drugaGimnazijaSarajevoLogo,
      },
      {
        title: 'Bachelor of Electrical Engineering',
        educationalInstitution: 'Faculty of Electrical Engineering',
        startDate: new Date(2017, 9, 1),
        endDate: new Date(2020, 6, 23),
        location: 'Zmaja od Bosne bb, Sarajevo',
        website: 'www.etf.unsa.ba',
        avatar: elektrotehnickiFakultetSarajevoLogo,
      },
      {
        title: 'Altera Lingua "Follow Me" Certificate C1',
        educationalInstitution: 'English language course "Follow Me"',
        startDate: new Date(2003, 8),
        startDateFormatter: 'MMM, YYYY',
        endDate: new Date(2017, 4),
        endDateFormatter: 'MMM, YYYY',
        location: 'Alekse Šantića 8, Sarajevo',
        website: 'www.followme.ba',
        avatar: followMeAlteraLinguaLogo,
      },
      {
        title: 'Altera Lingua "Follow Me" Zeugnis A2',
        educationalInstitution: 'German language course "Follow Me"',
        startDate: new Date(2008, 8),
        startDateFormatter: 'MMM, YYYY',
        endDate: new Date(2011, 4),
        endDateFormatter: 'MMM, YYYY',
        location: '',
        website: 'www.followme.ba',
        avatar: followMeAlteraLinguaLogo,
      },
      {
        title: 'New knowledge',
        educationalInstitution:
          'Symphony MEETUP "Hybernate" - Migrations, Deployments and Optimization',
        date: new Date(2019, 3, 19),
        avatar: symphonySarajevoLogo,
      },
      {
        title: 'New knowledge',
        educationalInstitution: 'BH Engineering Weeks 2019',
        date: new Date(2019, 11, 12),
        website: 'www.bhing.ba',
        avatar: BHEngineeringWeeksSarajevoLogo,
      },
      {
        title: 'Innovation challenge winners',
        educationalInstitution: 'Hackathon "Just Code It" in Sarajevo',
        startDate: new Date(2019, 11, 21),
        endDate: new Date(2019, 11, 22),
        avatar: hackathonJustCodeItSarajevoLogo,
      },
    ],
  },
  /*
SKILLS: {
  LANGUAGE: [
    {
      language: 'English',
      listening: 5,
      reading: 5,
      spokenInteraction: 5,
      spokenProduction: 5,
      writing: 5,
    },
    {
      language: 'German',
      listening: 2,
      reading: 2,
      spokenInteraction: 2,
      spokenProduction: 2,
      writing: 2,
    },
  ],
  DIGITAL_SKILLS: [
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
  ORGANISATIONAL_SKILLS: [
    {
      title: 'good team-leading skills - team leader on college projects, team leader on hackathon "Just Code It" event in Sarajevo, basketball and volleyball captain',
    },
    {
      title: 'good organisational and managerial skills - team leader on college projects, management for party events',
    },
  ],
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
  OTHER_SKILLS: [
    // TODO Add other skills
  ],
},
*/
};
