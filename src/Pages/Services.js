import React from 'react'
import Navigate from './Navigate';
import { Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import "../App.css"
function Services() {
  return (
    <div>
      <Navigate />
      <div className='container mt-3 d-flex justify-content-center' >

        <div className='row'>
          <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="cyber.jpg" />
              <Card.Body>
                <Card.Title> <strong>Cyber Security</strong></Card.Title>
                <Card.Text>
                  AppsGenii guarantees to provide specialized and quantifiable cybersecurity services which will definitely contribute to prevent disruptions to the imperative information infrastructure. AppsGenii main objective is to sustain core values by maintaining Trust, proactiveness, and impartiality with the customers for a safer cyberspace.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="mobile.png" />
              <Card.Body>
                <Card.Title> <strong>Mobile App Design</strong></Card.Title>
                <Card.Text>
                  AppsGenii Technologies we design, build and maintain iOS, Android & Windows Mobile Apps that just looks perfect and runs exactly as the client envisioned.
                  We believe that an app’s success greatly depends on how perfectly the app serves its purpose, its scope of scalability to match up with growing needs of target audience, ease of use and engineered user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="web.jpg" />
              <Card.Body>
                <Card.Title> <strong>Web Development</strong></Card.Title>
                <Card.Text>
                 The foremost part of our web development services is the Design & Usability of the website because if your website fails to provide the desired information to your users with ease in navigation, then more chances are they will leave your site in time span of 3 to 5 seconds. And maybe they will never come to your site again! We just don’t develop customized web pages for our clients
                </Card.Text>
              </Card.Body>
            </Card>
          </div>


          <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="cyber.jpg" />
              <Card.Body>
                <Card.Title> <strong>Cyber Security</strong></Card.Title>
                <Card.Text>
                  AppsGenii guarantees to provide specialized and quantifiable cybersecurity services which will definitely contribute to prevent disruptions to the imperative information infrastructure. AppsGenii main objective is to sustain core values by maintaining Trust, proactiveness, and impartiality with the customers for a safer cyberspace.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="mobile.png" />
              <Card.Body>
                <Card.Title> <strong>Mobile App Design</strong></Card.Title>
                <Card.Text>
                  AppsGenii Technologies we design, build and maintain iOS, Android & Windows Mobile Apps that just looks perfect and runs exactly as the client envisioned.
                  We believe that an app’s success greatly depends on how perfectly the app serves its purpose, its scope of scalability to match up with growing needs of target audience, ease of use and engineered user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src="web.jpg" />
              <Card.Body>
                <Card.Title> <strong>Web Development</strong></Card.Title>
                <Card.Text>
                 The foremost part of our web development services is the Design & Usability of the website because if your website fails to provide the desired information to your users with ease in navigation, then more chances are they will leave your site in time span of 3 to 5 seconds. And maybe they will never come to your site again! We just don’t develop customized web pages for our clients
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  )
}

export default Services