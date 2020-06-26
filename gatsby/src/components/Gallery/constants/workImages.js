import qw from '../../../assets/images/work/qw.jpg'
import tredence from '../../../assets/images/work/tredence.jpeg'
import qwThumb from '../../../assets/images/work/workThumb/qwThumb.jpg'
import tredenceThumb from '../../../assets/images/work/workThumb/tredenceThumb.jpeg'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: qw,
    thumbnail: qwThumb,
    company: 'Quantworks Inc.',
    location: 'Carrboro, NC, USA',
    title: 'Full Stack Software Engineer',
    years: 'May 2019 - Present',
    description:
      "After taking the HCI and Software Engineering courses in my university, I wanted to understand how full-stack development worked. Here, I worked on three projects that focused on building web and mobile applications to sequentialize a person's entry into the United States' Judicial System. I also worked on an optimization algorithm for a Scooter rental company.",
    exposure:
      'Agile, ReactJS, AngularJS, VueJS, AWS, Python, PostgreSQL, Location Optimization, Test Automation - JasmineJS',
  },
  {
    id: '2',
    source: tredence,
    thumbnail: tredenceThumb,
    company: 'Tredence Inc.',
    location: 'Bengaluru, India',
    title: 'Business Analyst',
    years: 'Jan 2018 - Jun 2018',
    description:
      'During the final semester of my undergraduate study, I was employed here as a Working Student/Intern. This was my formal introduction to Business Analytics and working on projects that belonged to Fortune 500 companies. I worked with a companies in the telecom, technology and manufacturing sector to optimize store location, and understand their customers.',
    exposure:
      'Customer Segmentation, Location Optimization, Dashboards, SQL, R, RShiny, Python, MS Excel, Tableau',
  },
]
