<script setup lang="ts">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <title>inox - Kitchen & Interior Design Template</title>
// <meta name="description" content="inox is a Agency, Startup and SaaS template by tempload." />
// <meta name="keywords" content="inox, startup, saas, agency, development, html, template, tempload" />
// <meta name="author" content="tempload"/>

// useSeoMeta({
//   title: "Home",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// });
</script>

<template>
  <!-- ***** Welcome Area Start ***** -->
  <div class="welcome">
    <div class="welcome-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="welcome-text">
              <h1>Luxury Faucets Collections</h1>
              <p>
                Quisque ullamcorper volutpat dolor, sit amet egestas risus
                elementum id. Duis luctus augue vestibulum sem.
              </p>
              <a class="dark-btn" href="project-grid.html">
                <span class="show-btn">EXPLORE KITCHEN</span>
                <span class="hide-btn">EXPLORE KITCHEN</span>
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="slider-position">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="slider-wrapper">
        <div class="base">
          <div class="prev">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="next">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="owl-carousel">
          <div class="item">
            <div class="img">
              <img src="~/assets/images/photos/welcome/1.jpg" alt="" />
            </div>
            <div class="text">
              <h5>Kitchen Units</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~/assets/images/photos/welcome/2.jpg" alt="" />
            </div>
            <div class="text">
              <h5>High Gloss Lacquer</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~/assets/images/photos/welcome/3.jpg" alt="" />
            </div>
            <div class="text">
              <h5>Veneer Kitchen</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~/assets/images/photos/welcome/4.jpg" alt="" />
            </div>
            <div class="text">
              <h5>Driftwood</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~/assets/images/photos/welcome/5.jpg" alt="" />
            </div>
            <div class="text">
              <h5>Sawn Oak</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Welcome Area End ***** -->

  <!-- ***** Home Parallax Area Start ***** -->
  <section class="half-parallax">
    <div class="parallax-image"></div>
    <div class="parallax-items">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="parallax-item">
              <i class="fa fa-hourglass-o"></i>
              <h5 class="feature-title">PLANNING</h5>
              <p>
                Proin luctus odio et purus iaculis, et porta ex molestie.
                Curabitur euismod nulla enim.
              </p>
              <a class="dark-btn" href="gallery.html">
                <span class="show-btn">READ MORE</span>
                <span class="hide-btn">READ MORE</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="parallax-item">
              <i class="fa fa-connectdevelop"></i>
              <h5 class="feature-title">INTERIOR</h5>
              <p>
                Vestibulum justo odio, auctor sed elit vitae, sollicitudin
                varius metus. Maecenas diam.
              </p>
              <a class="dark-btn" href="gallery.html">
                <span class="show-btn">READ MORE</span>
                <span class="hide-btn">READ MORE</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="parallax-item">
              <i class="fa fa-flag-o"></i>
              <h5 class="feature-title">EXTERIOR</h5>
              <p>
                Integer tincidunt aliquam nibh. Sed sed velit tristique, egestas
                lorem eu, fermentum diam.
              </p>
              <a class="dark-btn" href="gallery.html">
                <span class="show-btn">READ MORE</span>
                <span class="hide-btn">READ MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Home Parallax Area End ***** -->

  <!-- ***** Features Big Item Start ***** -->
  <section class="section padding-bottom-120">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
        >
          <div class="left-heading">
            <h2 class="section-title dotted">What We Do</h2>
          </div>
          <div class="left-text">
            <p class="dark">
              Etiam eu felis condimentum, lacinia lorem eget, dictum nisl.
              Vestibulum lacinia erat at.
            </p>
            <p class="margin-bottom-40">
              Magnis dis parturient montes, nascetur ridiculus mus. Nunc et
              mauris quis urna fringilla dapibus a at mauris. Vivamus mattis
              est.
            </p>
            <ul class="margin-bottom-40">
              <li>Parturient montes, nascetur.</li>
              <li>Ridiculus mus. Nunc et mauris.</li>
              <li>Quis urna fringilla dapibus a at mauris.</li>
            </ul>

            <div class="row page-gallery-wrapper">
              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <a
                  href="~/assets/images/photos/home/1.jpg"
                  class="page-gallery"
                >
                  <img src="~/assets/images/photos/home/1.jpg" alt="" />
                </a>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <a
                  href="~/assets/images/photos/home/2.jpg"
                  class="page-gallery"
                >
                  <img src="~/assets/images/photos/home/2.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"
          data-scroll-reveal="enter right move 30px over 0.6s after 0.3s"
        >
          <img
            src="~/assets/images/photos/home/3.jpg"
            class="img-fluid float-right"
            alt="Title"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Features Big Item End ***** -->

  <!-- ***** Counter Parallax Start ***** -->
  <div class="parallax-counter">
    <div class="parallax-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="count-item">
              <strong>96</strong>
              <span>Active<br />Customer</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="count-item">
              <strong>190</strong>
              <span>Specialist<br />Staff</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="count-item">
              <strong>193</strong>
              <span>Complated<br />Project</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="count-item">
              <strong>12</strong>
              <span>Ongoing<br />Project</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Counter Parallax End ***** -->

  <!-- ***** Our Team Start ***** -->
  <section class="section">
    <div class="container">
      <!-- ***** Section Title Start ***** -->
      <div class="row">
        <div class="col-lg-12">
          <div class="center-heading">
            <h2 class="section-title">Our Team</h2>
          </div>
        </div>
        <div class="offset-lg-3 col-lg-6">
          <div class="center-text">
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus.
            </p>
          </div>
        </div>
      </div>
      <!-- ***** Section Title End ***** -->

      <div class="row">
        <!-- ***** Team Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12 position-relative">
          <div class="person-item">
            <div class="img">
              <img src="~/assets/images/photos/team/1.jpg" alt="" />
            </div>
            <div class="content">
              <div class="text">
                <h5 class="user-name">Fletch Skinner</h5>
                <span>DESIGNER</span>
                <ul class="social">
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Team Item End ***** -->

        <!-- ***** Team Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12 position-relative">
          <div class="person-item active">
            <div class="img">
              <img src="~/assets/images/photos/team/2.jpg" alt="" />
            </div>
            <div class="content">
              <div class="text">
                <h5 class="user-name">Hanson Deck</h5>
                <span>ARCHITECT</span>
                <ul class="social">
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Team Item End ***** -->

        <!-- ***** Team Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12 position-relative">
          <div class="person-item">
            <div class="img">
              <img src="~/assets/images/photos/team/3.jpg" alt="" />
            </div>
            <div class="content">
              <div class="text">
                <h5 class="user-name">Natalya Under</h5>
                <span>ART DIRECTOR</span>
                <ul class="social">
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Team Item End ***** -->
      </div>
    </div>
  </section>
  <!-- ***** Our Team End ***** -->

  <!-- ***** Blog Start ***** -->
  <section class="section white">
    <div class="container">
      <!-- ***** Section Title Start ***** -->
      <div class="row">
        <div class="col-lg-12">
          <div class="center-heading">
            <h2 class="section-title">Latest Blog Posts</h2>
          </div>
        </div>
        <div class="offset-lg-3 col-lg-6">
          <div class="center-text">
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus.
            </p>
          </div>
        </div>
      </div>
      <!-- ***** Section Title End ***** -->

      <div class="row">
        <!-- ***** Blog Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="blog-single.html" class="blog-post-grid">
            <img src="~/assets/images/photos/blog/1.jpg" alt="" />
            <div class="content">
              <h3>Chief clubhouse for female executives opens in Boston</h3>
              <div class="date">APR 09</div>
            </div>
          </a>
        </div>
        <!-- ***** Blog Item End ***** -->

        <!-- ***** Blog Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="blog-single.html" class="blog-post-grid">
            <img src="~/assets/images/photos/blog/2.jpg" alt="" />
            <div class="content">
              <h3>A hotel in the heart of Copenhagen’s Latin Quarter</h3>
              <div class="date">APR 09</div>
            </div>
          </a>
        </div>
        <!-- ***** Blog Item End ***** -->

        <!-- ***** Blog Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="blog-single.html" class="blog-post-grid">
            <img src="~/assets/images/photos/blog/3.jpg" alt="" />
            <div class="content">
              <h3>Skandium’s eco townhouse for LDF18 with Montana</h3>
              <div class="date">APR 09</div>
            </div>
          </a>
        </div>
        <!-- ***** Blog Item End ***** -->
      </div>
    </div>
  </section>
  <!-- ***** Blog End ***** -->
</template>
