const Project = [
  {
    name: 'OnTime',
    tools: ['React', 'Backbone', 'SASS', 'Google Distance Matrix Web Service', 'Recharts', 'Backendless MBaaS'],
    image: 'src/assets/images/onTime-full.png',
    about: 'OnTime is a multi-tasking resource that aims to help users maximize their productivity, mindfullness, and awareness of mobility constraints.',
    challenge: 'The main challenge of this project was utilizing the flexibility of React\'s state based architecture to reuse single components that could handle the different rendering scenario\'s. By maintaining an agile workflow I was able to scale each component as I worked through the addition of new features. Keeping in mind my goal of a simple UI, I was able to concentrate on the functionality of the main timer component without having to worry about overcomplicating the visual structure. Creating a dashboard from scratch also gave me insight into the importance of user-generated data for an app without a wide variety of user input.',
    background: '../assets/backgrounds/confectionary.png'
  },
  {
    name: '',
    tools: ['React', 'Backbone', 'SASS', 'jService API'],
    image: 'src/assets/images/jeopardy-fullscreen.png',
    about: 'Utilizing an API that compiled years of Jeopardy questions and answers, this project was an early introduction into integrating a large-scale API with React.',
    challenge: 'The data provided by the jService API was not restructured when the API was created. This meant that the data-sets available were not always similarly structured. The main challenge with this project was figuring out how to search through API endpoints for data that could be rendered in similar ways, without having to manipulate the data to fit my needs. I tackled this by utilizing recursive algorithms that only returned endpoints that fit my desired criteria. Once this was completed I concentrated on an energetic design that blended bold fonts and bold colors.',
    background: '../assets/backgrounds/wov.png'
  }
];

export default Project;
