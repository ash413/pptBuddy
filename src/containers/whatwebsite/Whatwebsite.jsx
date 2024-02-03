import React from 'react';
import { Feature } from '../../components';
import './whatwebsite.css';

const Whatwebsite = () => {
  return (
    <div className='website__whatwebsite section__margin' id='wwebsite'>
      <div className='website__whatwebsite-feature'>
        <Feature title="What is PPTBuddy?" 
        text="Say goodbye to the complexities of manual slide creation. 
        With PPTBuddy, the process is swift, simple, and tailored to your needs. 
        Whether you're a professional navigating the business landscape or a student looking to ace that presentation, 
        PPTBuddy streamlines the journey from static documents to vibrant slides." />
      </div>
      <div className='website__whatwebsite-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination!
        </h1>
      </div>
      <div className='website__whatwebsite-container'>
        <Feature title="Education" text="Within the education sector, both teachers and students often deal with PDF resources, lecture notes, or research articles. A PDF to PPT converter would facilitate the creation of visually appealing presentations for classroom teaching, project presentations, or collaborative assignments."/>
        <Feature title="Corporate" text="Many businesses receive information in the form of PDF documents, such as reports, research findings, or documentation. A PDF to PPT converter could be invaluable for professionals needing to convert these documents into presentations for meetings, client pitches, or internal briefings."/>
        <Feature title="Content Creation" text="Content creators, bloggers, or influencers frequently come across valuable information in PDF format. A PDF to PPT converter can be a game-changer for those looking to repurpose content for online platforms, webinars, or social media."/>
      </div>
    </div>
  )
}

export default Whatwebsite