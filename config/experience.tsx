import { Link } from '@chakra-ui/react'

export type Company = 'PI' | 'Typsy' | 'EY'

export type CompanyDetail = {
  name: string
  // longName: string
  // subDetail?: string
  url: string
  position: string
  duration: string
  logo: string
  // {
  //   light: string
  //   dark?: string
  // }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  PI: {
    name: 'Planet Innovation',
    // longName: 'Healthtech Innovation Consultancy',
    // subDetail: 'Medical device manufacturing',
    url: 'https://www.planetinnovation.com.au/',
    position: 'Senior Software Engineer',
    duration: 'Aug 2020 - Mar 2023',
    logo: '/worked_at_logos/planetinnovation/planetinnovation-logo.png',
    // {
    //   light:
    //     '/worked_at_logos/planetinnovation/PlanetInnovation_logo_black.png',
    //   dark: '/worked_at_logos/planetinnovation/PlanetInnovation_logo.png',
    // },
    roles: [
      <>
        Specialized in web technologies, secondarily in Windows IoT embedded
        systems, and also had the opportunity to work with iOS and Android app
        development
      </>,
      <>
        Consistently exceeded KPIs, noted for consistently delivering
        high-quality work ahead of schedule
      </>,
      <>
        Led the design and development of a comprehensive new instrument
        commissioning process, including Windows imaging and machine setup
      </>,
      <>
        Maintained BDD and TDD practices to implement testing at every level for
        compliance with stringent medical industry standards
      </>,
      <>
        Provided coaching and detailed code reviews for junior team members and
        interns
      </>,
    ],
  },
  Typsy: {
    name: 'Typsy',
    // longName: 'longnanem',
    // subDetail: 'subdetail',
    url: 'https://www.typsy.com/',
    position: 'Software Engineer',
    duration: 'Mar 2019 - Aug 2020',
    logo: '/worked_at_logos/typsy/typsy-logo.png',
    // {
    //   light: '/worked_at_logos/scg/SCG_400x400.jpg',
    //   dark: '/worked_at_logos/scg/SCG.png',
    // },
    roles: [
      <>
        Implemented and maintained features of the SaaS platform, ranging from
        an MVC frontend to the identity server to serverless functions to cloud
        based storage and later included mobile apps for both Android and iOS
        using Xamarin
      </>,
      <>
        Pitched, designed and implemented an image delivery solution that
        automated the optimization of images across all components that was
        simple for developers to use and caused a load time decrease of 50% and
        resource size decrease of 70% on our most content heavy page
      </>,
      <>
        Monitored the health of the platform using Azure to ensure stability and
        resilience in each component of the platform
      </>,
      <>
        Reviewed colleagues' code and gave feedback centered around code
        performance, best practices and SOLID design principles
      </>,
    ],
  },
  EY: {
    name: 'EY',
    // longName: 'longname',
    // subDetail: 'subdetail',
    url: 'https://eysweeney.com.au/',
    position: 'Junior Web Consultant',
    duration: 'Mar 2017 - Sep 2018',
    logo: '/worked_at_logos/ey/ey-logo.png',
    // {
    //   light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
    //   dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
    // },
    roles: [
      <>
        A member of the digital division focused on MVC market research websites
        with supporting MSSQL databases that included a survey section where
        respondents enter data, and an authorized portal where consultants
        review the insights presented in meaningful dashboards with charts
      </>,
      <>
        Created and managed best practices documentation for the team, including
        security and general development principles to ensure high quality work
        outputs
      </>,
      <>
        Championed implementation of agile methodologies in the team, such as
        task management and CI/CD, using the VSTS platform
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.PI,
  Experiences.Typsy,
  Experiences.EY,
]
