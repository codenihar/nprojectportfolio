import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    link: 'https://nmusic.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408845/React%20portfolio/Static/nmusic_kcgq8r.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through Nihar most listened on 28th Nov 2021.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    link: 'https://welcomegoa.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408845/React%20portfolio/Static/welcome_goa_pblplz.jpg',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the places visit in Goa.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    link: 'https://pushpasongs.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408845/React%20portfolio/Static/pushpa_songs_cobv6r.jpg',
    title: 'Pushpa Songs',
    description: 'A website that displays Pushpa movie songs.',
  },
  {
    projectId: 3,
    category: 'STATIC',
    link: 'https://pushpasongs.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408845/React%20portfolio/Static/nstatic_cyql8v.jpg',
    title: 'Static Websites',
    description: 'A website that displays few static websites Nihar built.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    link: 'https://vrnihar.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Responsive/vrnihar_yndnqp.jpg',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    link: 'https://niharfoods.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677410325/React%20portfolio/Responsive/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342_qjpdyg.jpg',
    title: 'Nihar Foods',
    description:
      'Discover delicious recipes and culinary inspiration from around the world on our food website. From savory to sweet, we got you covered for every meal and occasion.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    link: 'https://studio.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677410030/React%20portfolio/Responsive/Website-Design-new_kvqvbt.jpg',
    title: 'Web Design Tool',
    description:
      'Elevate your web design game with our powerful and user-friendly tool. Create stunning websites with ease using our intuitive drag-and-drop interface and customizable templates.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    link: 'https://npickles.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Responsive/npickles_xo4u3z.jpg',
    title: 'Pickles',
    description:
      'Get your taste buds tingling with our delicious range of pickles. Handcrafted using the freshest ingredients, our pickles are the perfect accompaniment to any meal or snack.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    link: 'https://codefury.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Responsive/Codefury_kjomhx.jpg',
    title: 'Grow UP',
    description:
      'Experience innovation at its best with our startup website, which we designed for CodeFury competition. Discover our cutting-edge solutions that empower businesses and individuals to achieve their goals and succeed in today digital landscape.',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    link: 'https://necom.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677410255/React%20portfolio/Responsive/e-commerce-_ckfyxc.jpg',
    title: 'E-commerce website',
    description:
      'Shop online with ease on my e-commerce website, offering a variety of products at competitive prices.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    link: 'https://nweather.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408845/React%20portfolio/Dynamic/nweather_odz7md.jpg',
    title: 'Weather',
    description:
      'Stay ahead of the weather with my accurate and reliable weather website. Get up-to-date information on temperature, precipitation, and more to plan your day accordingly.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    link: 'https://ntodo.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Dynamic/ntodo_ezflmp.jpg',
    title: 'To Do Application',
    description:
      'Organize your life with my user-friendly todo list app. Keep track of your tasks, set reminders, and achieve your goals with ease.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    link: 'https://niharwiki.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Dynamic/niharwiki_st9lve.jpg',
    title: 'Nihar Wikipedia',
    description:
      'Explore the knowledge with my Wikipedia website prototype. Access a vast collection of articles and information on a variety of topics, from science and history to pop culture and more.',
  },
  {
    projectId: 11,
    category: 'DYNAMIC',
    link: 'https://nrandomjoke.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408844/React%20portfolio/Dynamic/nrandomjoke.ccbp.tech_vvvvwq.jpg',
    title: 'Random Joke',
    description:
      'Laugh out loud with my random joke website on technical stuff. Enjoy a humorous take on coding, tech culture, and everything in between - the perfect break for developers and tech enthusiasts.',
  },
  {
    projectId: 12,
    category: 'DYNAMIC',
    link: 'https://ncountrypop.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/ncountrypop_dohzqf.jpg',
    title: 'Country Population',
    description:
      'Explore global population trends with my website, providing up-to-date population figures for countries around the world.',
  },
  {
    projectId: 13,
    category: 'DYNAMIC',
    link: 'https://nnumberfacts.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/nnumberfacts_kao8g6.jpg',
    title: 'Number Facts',
    description:
      'Discover interesting and fun facts about numbers with my number facts website.',
  },
  {
    projectId: 14,
    category: 'DYNAMIC',
    link: 'https://nrannumgen.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/nrannumgen_stsbgr.jpg',
    title: 'Random Number Generator (React JS)',
    description:
      'Generate random numbers for any purpose with my number generator website.',
  },
  {
    projectId: 15,
    category: 'DYNAMIC',
    link: 'https://ndesser.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/ndesser_fuuoyk.jpg',
    title: 'Destination Search (React JS)',
    description:
      'Explore stunning destinations around the world with my website.',
  },
  {
    projectId: 16,
    category: 'DYNAMIC',
    link: 'https://ncashwithdraw.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/ncashwithdraw_iwsgp3.jpg',
    title: 'Cash with draw website (React JS)',
    description: 'With draw cash from Nihar bank account without entering pin.',
  },
  {
    projectId: 17,
    category: 'DYNAMIC',
    link: 'https://narrow.ccbp.tech/',
    imageURL:
      'https://res.cloudinary.com/nihars3/image/upload/v1677408843/React%20portfolio/Dynamic/narrow_jovocz.jpg',
    title: 'Google Search (React JS)',
    description:
      'Find Nihar, Puttaparthi Arrow and Yenakamaala backside on Google Search.',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({
      activeTabId: tabId,
    })
  }

  render() {
    const filteredProjects = this.getFilteredProjects()
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <Header />
        <h1 className="title">MERN Stack Developer</h1>
        <p className="description">
          I am Nihar, a Bachelor&apos;s degree candidate in Artificial
          Intelligence at the University of Visvesvaraya College of Engineering
          in Bengaluru. As an experienced web developer with a strong portfolio
          of creating more than 50 websites, I am proficient in Python and have
          a keen interest in machine learning. I am looking for an internship
          opportunity in full-stack development in order to develop my skills
          further and gain practical experience. With a proactive and driven
          approach, I am constantly looking to enhance my knowledge and make
          meaningful contributions to any organization. Below are few of my
          projects. Please have a look at it.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
