import React from 'react';
import { Feature } from '../../components';
import './features.css';

/*const featuresData = [
  {
    title: 'Improving end distrusts instantly ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  },
]*/

const Features = () => (
    <div className='website__features section__padding' id='features'>
      <div className='website__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>
          Request Early Access To Get Started
        </p>
      </div>
      <div className='website__features-container'>
        <Feature title="Effortless Conversion" text="Easily convert PDFs to PowerPoint slides with a user-friendly interface, ensuring accurate translation of content, formatting, and layout for a time-saving experience."/>
        <Feature title="Customization and Design Tools" text="Tailor presentations with customizable fonts, colors, backgrounds, and design templates. Enhance visual appeal using animations, multimedia integration, and other design features." />
        <Feature title="Collaboration and Sharing" text="Share presentations seamlessly across platforms and devices, fostering collaboration in teams, departments, or educational settings." />
      </div>
    </div>
  ); 

export default Features