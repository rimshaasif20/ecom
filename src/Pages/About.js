import React from 'react'
import Navigate from './Navigate';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import Animation from '../Components/Animation';
import "./Conatctus.css";
import './Style.css';
function About() {
  return (
    <>
      <Navigate />
      <div className='container ml-4 mr-4 '>
     
        <div className='about-content ' style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginLeft: '150px'
        }}>
          <div className="about-head p-2">
            <h1 >About Us</h1>
          </div>
          <div className="about p-2">
            <p>AppsGenii Technologies enable clients to out perform the competition and stay ahead of the innovation curve. Our business experiences are real and so are the results that we bring to our clients. We are always in search of exploring new frontiers for clients to transform their businesses, their thinking and their end results. Throughout all of the assigned phases, our people concentrate on design, usability, functionality and execution. Our Team work together to meet your business objectives with the help of project management and quality assurance designed to make the experience of working with AppsGenii Technologies seamless.
              Amazon Developing ‘Anytime’ A Cross-Platform Messaging App On Steroids sustanon 250 results italy pharma industry: an international success story.
            </p>
            <p>
              We make sure that our clients are in tune with our team’s every step of the way on a project to make sure that the end product looks and works exactly as the client envisioned. Whether you need a hardcore Mobile Applications, Smart Web Development or Digital Marketing Solutions, Robotic Process Automation, User Experience Design, or Startup Enabling Structure – we’ve our resources aligned to stand and deliver. Our physical presence in Australia, Germany and Pakistan offices lead the charge on your project, rather it be Big Data, Business Automations, Artificial Intelligence, BlockChain or Machine Learning.

              Our mission
            </p>
          </div>
        </div>
        <div className='row'>
         
          <div className='col'>
            <Card className='element' style={{ height: '27 rem', width: '20rem', backgroundColor: "palegreen", marginTop: '80px' }}>
             <Animation />
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Designing a compelling user experience is central to our process. Our purpose is to provide IT solutions which enable organizations to achieve their business objectives. Our culture is based on an unwavering belief in integrity and ethical business practices. We pride ourselves on becoming the industry leader in innovation and client satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <img src="pic.png" alt='Working Pic' style={{ width: '500px', height: '450px', marginLeft: '60px' }} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default About