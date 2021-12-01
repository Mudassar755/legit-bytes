import * as React from "react"

import mvp_development from '../assets/images/vactor/mvp-development.png'
import devops from '../assets/images/vactor/devops.png'
import cloud from '../assets/images/vactor/cloud.png'
import avatar from '../assets/images/icon/avatar.png'
import quotes from '../assets/images/icon/quotes.png'
import blogpost from '../assets/images/icon/blogpost.png'
import popularBadge from '../assets/images/icon/popular-post.png'

import Layout from "../components/Layout"
import AOS from 'aos';
// import "aos/dist/aos.css";

// markup
const IndexPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true
    });
    AOS.refresh();
  }, [])
  return (
    <div className="full-waypper">
      <section className="full-waypper-area-about full-waypper-area-home">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>Delivering Innovative <span>and</span> <br /> Cost Effective Digital Solutions</h1>
                    <p className='mt-4'>
                      Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>. <br />Phasellus quam lectus malesuada venenatis ut <span>nulla</span> commodo. Nunc nulla.
                    </p>
                    <div className="button_home">
                      <a href="#">Get Started</a>
                    </div>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="hero_image hero_image_home" data-aos="fade-up">
                    {/* <img src={home_hero} alt="Hero Vactor" /> */}
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
        					End Hero Content Area Design
                ================================================ */}
          {/*===============================================
                        Start Services Design
            ================================================ */}
          <section className="welcome_seaction_area home_Cybersecurity_identify">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8">
                  {/* Content */}
                  <div className="title_hero text-center" data-aos="fade-up">
                    {/* <p>We identify, detect, protect and defend against Cybersecurity Attacks.</p> */}
                    <h2>Awesome Services For <span>Customer</span></h2>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="row servise_hero_item p-lg-5 my-5">
                <div className="col-lg-4 col-sm-6 servise_img">
                  <img src={mvp_development} alt="protect" />
                </div>
                <div className="col-lg-8 col-sm-12 servise_content">
                  <h3>Rapid MVP Development</h3>
                  <p>We can help you design and develop a high-quality Minimum Viable Product to validate your business assumptions faster and more efficiently. Our goal is creating successful products that your users will love.</p>
                  <div className="servise_button">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="row servise_hero_item p-lg-5 my-5">
                <div className="col-lg-4 col-sm-6 servise_img">
                  <img src={devops} alt="protect" />
                </div>
                <div className="col-lg-8 col-sm-12 servise_content">
                  <h3>Devops Implementation</h3>
                  <p>A transformational shift which incorporates secure culture, practices, and tools to drive visibility, collaboration, and agility of security into each phase of the DevOps pipeline</p>
                  <div className="servise_button">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="row servise_hero_item p-lg-5 my-5">
                <div className="col-lg-4 col-sm-6 servise_img">
                  <img src={cloud} alt="protect" />
                </div>
                <div className="col-lg-8 col-sm-12 servise_content">
                  <h3>Cloud Consulting</h3>
                  <p>With our team of certified cloud professional, unleash the full potential of cloud and build more flexible, scalable and available services.</p>
                  <div className="servise_button">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End Services Design
                ================================================ */}
          {/*===============================================
                        Start Testimonials Design
            ================================================ */}
          <section className="welcome_seaction_area home_Cybersecurity_identify">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8">
                  <div className="title_hero text-center" data-aos="fade-up">
                    <h2>Testimonials</h2>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="row testimonial my-5">
                <div className="col-lg-6 col-sm-12">
                  <div className="testimonial-card d-flex p-4">
                    <img src={quotes} className="quotes" />
                    <div className="avatar">
                      <img src={avatar} alt="protect" />
                    </div>
                    <div className="ml-2">
                      <div className="testimonial-text mb-3">
                        <h3>Ara Felicia</h3>
                        <span>UI Designer</span>
                      </div>
                      <p className="testimonial-msg">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo tortor lacus massa maecenas.”</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                  <div className="testimonial-card d-flex p-4">
                    <img src={quotes} className="quotes" />
                    <div className="avatar">
                      <img src={avatar} alt="protect" />
                    </div>
                    <div className="ml-2">
                      <div className="testimonial-text mb-3">
                        <h3>Ara Felicia</h3>
                        <span>UI Designer</span>
                      </div>
                      <p className="testimonial-msg">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo tortor lacus massa maecenas.”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row testimonial justify-content-center p-lg-5 my-5">
                <div className="col-lg-6 col-sm-12">
                  <div className="testimonial-card d-flex p-4">
                    <img src={quotes} className="quotes" />
                    <div className="avatar">
                      <img src={avatar} alt="protect" />
                    </div>
                    <div className="ml-2">
                      <div className="testimonial-text mb-3">
                        <h3>Ara Felicia</h3>
                        <span>UI Designer</span>
                      </div>
                      <p className="testimonial-msg">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo tortor lacus massa maecenas.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End Testimonials Design
                ================================================ */}
          {/*===============================================
                        Start Portfolio Design
            ================================================ */}
          <section className="welcome_seaction_area home_Cybersecurity_identify">
            <div className="container">

              <div className="row testimonial my-5">
                <div className="col-3 portfolio">
                  <h3>100%</h3>
                  <p>Payments Success</p>
                </div>
                <div className="col-3 portfolio">
                  <h3>100%</h3>
                  <p>Payments Success</p>
                </div>
                <div className="col-3 portfolio">
                  <h3>100%</h3>
                  <p>Payments Success</p>
                </div>
                <div className="col-3 portfolio">
                  <h3>100%</h3>
                  <p>Payments Success</p>
                </div>

              </div>
            </div>
          </section>
          {/*===============================================
                            End Services Design
                ================================================ */}


          {/*===============================================
                        Start Blogs Design
            ================================================ */}
          <section className="blogs-section">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8">
                  {/* Content */}
                  <div className="title_hero text-center" data-aos="fade-up">
                    {/* <p>We identify, detect, protect and defend against Cybersecurity Attacks.</p> */}
                    <h2>Latest News From <span>Blog</span></h2>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="row my-5">
                <div className="col-lg-6 col-sm-12 feature-post p-0">
                  <div className="overlay">

                  <div className="content">
                    <div className="badge">
                      <img src={popularBadge} />Technology
                    </div>
                    <h4 className="post-title">
                      Facebook is changing <br />its name to Meta
                    </h4>
                    <date className="date">24 November 2021</date>
                    <p className="post-desription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mauris porta ultrices non massa vitae dignissim nunc. Amet netus imperdiet sed sit leo, consectetur vitae, cursus.</p>
                  </div>
                  </div>
                  <img src={blogpost} alt="protect" />
                </div>
                <div className="col-lg-6 col-sm-12 popular-posts" >
                  <h3>Popular Post</h3>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 post">
                      <div className="badge">
                        <img src={popularBadge} />Technology
                      </div>
                      <h4 className="post-title">
                        Facebook is changing its name to Meta
                      </h4>
                      <date className="date">24 November 2021</date>
                    </div>
                    <div className="col-lg-6 col-sm-12 post">
                      <div className="badge">
                        <img src={popularBadge} />Technology
                      </div>
                      <h4 className="post-title">
                        Facebook is changing its name to Meta
                      </h4>
                      <date className="date">24 November 2021</date>
                    </div>
                    <div className="col-lg-6 col-sm-12 post">
                      <div className="badge">
                        <img src={popularBadge} />Technology
                      </div>
                      <h4 className="post-title">
                        Facebook is changing its name to Meta
                      </h4>
                      <date className="date">24 November 2021</date>
                    </div>
                    <div className="col-lg-6 col-sm-12 post">
                      <div className="badge">
                        <img src={popularBadge} />Technology
                      </div>
                      <h4 className="post-title">
                        Facebook is changing its name to Meta
                      </h4>
                      <date className="date">24 November 2021</date>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/*===============================================
                            End Services Design
                ================================================ */}
        </Layout>
      </section>
    </div>
  )
}

export default IndexPage
