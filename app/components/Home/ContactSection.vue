<template>
  <section class="page" id="contact">
    <div class="page-bottom padding-top-0" style="border: 1px solid #f5f5f5">
      <div class="section map">
        <div class="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.130663108226!2d144.95525857834872!3d-37.81040835171613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4a092efd03%3A0xae2253c74400b1!2s239%20A&#39;Beckett%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1ses!2sve!4v1766589305392!5m2!1ses!2sve"
            style="border: 0; width: 100%; height: 100%" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="contact-item">
                    <div class="icon location">
                      <i class="fa fa-location-arrow"></i>
                    </div>
                    <p>
                      10303 NW 62nd Street <br />
                      Doral FL 33178
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="contact-item">
                    <div class="icon phone">
                      <i class="fa fa-phone"></i>
                    </div>
                    <a href="tel:17863071513">+17863071513 (English)</a>
                    <a href="tel:17866201586">+17866201586 (Spanish)</a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="contact-item">
                    <div class="icon mail">
                      <i class="fa fa-envelope"></i>
                    </div>
                    <a href="mailto:eurogrober@gmail.com">
                      eurogrober@gmail.com
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-bottom">
        <div class="container">
          <div class="row">
            <!-- ***** Contact Text Start ***** -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5 class="margin-bottom-30">Get in touch</h5>
              <div class="contact-text">
                <p>
                  <b>GröberPlus</b> was formed in Hückeswagen (Germany) in 2003
                  responding to the concerns of several professionals. They had
                  the idea of creating a product line.
                </p>
              </div>
            </div>

            <div class="col-lg-8 col-md-6 col-sm-12">
              <div class="contact-form">
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="name" placeholder="Name, surname" required />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="email" name="email" placeholder="E-Mail" required />
                    </div>
                    <div class="col-lg-12">
                      <textarea name="message" placeholder="Your message" required></textarea>
                    </div>
                    <div class="col-lg-12">
                      <button class="dark-btn float-right" type="submit">
                        <span class="show-btn">SUBMIT</span>
                        <span class="hide-btn">SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
