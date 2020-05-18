import React from 'react';
import Calc from './calc';




function Homepage() {
  return (
    <section className="sect1">
    

    <div className="jumbotron">
    <h1 className="display-4">Welcome to my personal site</h1>
    <p className="lead">Hi! I'm Andrii. I build web applications that are scalable, secure, high performing. <br />
    I'm learning programming from building real projects.
  </p>
<h3 className="display-4">My Stack</h3>
  <p className="lead">- JavaScript, React, Node;<br />
  - MySQL, PHP, Laravel;
  </p>
  
  
</div>

    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Job</th>
      <th scope="col">Company</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">SEO/Growth specialist</th>
      <td>LetsBuild (Copenhagen)</td>
      <td> - I was a SEO lead, responsible for all stages of SEO;<br/>
 - I was able to scale traffic from 8K to 200K+ monthly page views in around 2 years;<br/>
 - Optimize conversion and drive significant amount of MRR (~$100K) from SEO;<br/>
 - A/B testing in funnel and conversion optimization, automation (HubSpot, Mailchimp), tracking and measuring KPIs, lead qualification;<br/>
 - experience with paid channels;</td>
      <td>08.2016-now</td>
      
    </tr>
    <tr>
      <th scope="row">Google Student Ambassador</th>
      <td>Google (Dublin-Aarhus)</td>
      <td>Representative on campus; specialization in digital marketing; organizing workshops, presentations, trainings, etc.</td>
      <td>2014-15</td>
    </tr>

    <tr>
      <th scope="row">Developer (student job)</th>
      <td>id-advice Aps (Aarhus)</td>
      <td>Work with RFID technology; HTML, CSS, creating Web templates; MySQL, PHP; Developing API's; Collaborating with EU-projects (8 countries involved).</td>
      <td>2014-15</td>
    </tr>

    <tr>
      <th scope="row">SEO manager</th>
      <td>avio.ua (Kyiv)</td>
      <td>HTML/CSS-coding, Google Analytics, Data Analysis; Excel; Search engine optimization; Creating unique content for web-pages.</td>
      <td>2013-14</td>
    </tr>
    
  </tbody>
</table>



    </section>
    
  );
}

export default Homepage;