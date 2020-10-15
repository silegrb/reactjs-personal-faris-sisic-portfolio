import Content from './containers/Content';

export const ROUTES = [
  {
    path: '/',
    component: Content,
  },
];

export const SCREEN_SIZES = {
  XS: 767,
  SM: 991,
  MD: 1199,
  LG: 2399,
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
    },
  },
  /* WORK_INFORMATION: [
    {
      position: 'Intern',
      workplace: 'Softhouse Consulting',
      startDate: '01/04/2020',
      endDate: '30/06/2020',
      location: 'Trg Solidarnosti 2, Sarajevo',
      website: 'www.softhouse.se',
    },
    {
      position: 'Software Developer',
      workplace: 'Softhouse Consulting',
      startDate: '01/07/2020',
      location: 'Trg Solidarnosti 2, Sarajevo',
      website: 'www.softhouse.se',
    },
  ],
  EDUCATION: [
    {
      title: 'Primary School Diploma',
      educationalInstitution: 'Primary School "Grbavica II"',
      startDate: '09/2004',
      endDate: '06/2013',
      location: 'Behdžeta Mutevelića bb, Sarajevo',
      website: 'www.osgrbavica2.edu.ba',
    },
    {
      title: 'High School Diploma',
      educationalInstitution: 'Second gymnasium Sarajevo',
      startDate: '09/2013',
      endDate: '06/2017',
      location: 'Sutjeska 1, Sarajevo',
      website: 'www.2gimnazija.edu.ba',
    },
    {
      title: 'Bachelor of Electrical Engineering',
      educationalInstitution: 'Faculty of Electrical Engineering',
      startDate: '01/10/2017',
      endDate: '23/07/2020',
      location: 'Zmaja od Bosne bb, Sarajevo',
      website: 'www.etf.unsa.ba',
    },
    {
      title: 'Altera Lingua "Follow Me" Certificate C1',
      educationalInstitution: 'English language course "Follow Me"',
      startDate: '09/2003',
      endDate: '05/2017',
      location: 'Alekse Šantića 8, Sarajevo',
      website: 'www.followme.ba',
    },
    {
      title: 'Altera Lingua "Follow Me" Zeugnis A2',
      educationalInstitution: 'German language course "Follow Me"',
      startDate: '09/2008',
      endDate: '05/2011',
      location: '',
      website: 'www.followme.ba',
    },
    {
      title: 'New knowledge',
      educationalInstitution: 'Symphony MEETUP "Hybernate" - Migrations, Deployments and Optimization',
      date: '19/04/2018',
    },
    {
      title: 'New knowledge',
      educationalInstitution: 'BH Engineering Weeks 2019',
      date: '12/12/2019',
    },
    {
      title: 'Innovation challenge winners',
      educationalInstitution: 'Hackathon "Just Code It" in Sarajevo',
      startDate: '21/12/2019',
      endDate: '22/12/2019',
    },
  ],
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
