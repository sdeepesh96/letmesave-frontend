<template>
    <div class="testimonial-sec">
      <v-container>
      <h4>With love to Letme-save.com</h4>
      </v-container>
        <v-container class="desk-testimonial">
        <v-row>
          <v-col cols="4">
            <div class="testimonial-content">
              <img src="~/assets/quotes.png">
              <div class="test-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
              </div>
              <div class="test-avatar">
                  <v-avatar size="75">
                    <img
                      src="~/assets/t-avatar.png"
                      alt="Testimonial Avatar"
                    >
                  </v-avatar>
                  <div class="test-info">
                    <h5>Willson</h5>
                    <p>Bergen</p>
                  </div>
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="testimonial-content">
              <img src="~/assets/quotes.png">
              <div class="test-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
              </div>
              <div class="test-avatar">
                  <v-avatar size="75">
                    <img
                      src="~/assets/t-avatar.png"
                      alt="Testimonial Avatar"
                    >
                  </v-avatar>
                  <div class="test-info">
                    <h5>Willson</h5>
                    <p>Bergen</p>
                  </div>
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="testimonial-content">
              <img src="~/assets/quotes.png">
              <div class="test-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
              </div>
              <div class="test-avatar">
                  <v-avatar size="75">
                    <img
                      src="~/assets/t-avatar.png"
                      alt="Testimonial Avatar"
                    >
                  </v-avatar>
                  <div class="test-info">
                    <h5>Willson</h5>
                    <p>Bergen</p>
                  </div>
              </div>
            </div>
          </v-col>

        </v-row>
      </v-container>
      <v-container class="mob-testimonial">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
        <v-carousel-item>
          <v-sheet
          light>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="testimonial-content">
                  <img src="~/assets/quotes.png">
                  <div class="test-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
                  </div>
                  <div class="test-avatar">
                      <v-avatar size="75">
                        <img
                          src="~/assets/t-avatar.png"
                          alt="Testimonial Avatar"
                        >
                      </v-avatar>
                      <div class="test-info">
                        <h5>Willson</h5>
                        <p>Bergen</p>
                      </div>
                  </div>
                </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet
          light>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="testimonial-content">
                  <img src="~/assets/quotes.png">
                  <div class="test-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
                  </div>
                  <div class="test-avatar">
                      <v-avatar size="75">
                        <img
                          src="~/assets/t-avatar.png"
                          alt="Testimonial Avatar"
                        >
                      </v-avatar>
                      <div class="test-info">
                        <h5>Willson</h5>
                        <p>Bergen</p>
                      </div>
                  </div>
                </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet
          light>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="testimonial-content">
                  <img src="~/assets/quotes.png">
                  <div class="test-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit</p>
                  </div>
                  <div class="test-avatar">
                      <v-avatar size="75">
                        <img
                          src="~/assets/t-avatar.png"
                          alt="Testimonial Avatar"
                        >
                      </v-avatar>
                      <div class="test-info">
                        <h5>Willson</h5>
                        <p>Bergen</p>
                      </div>
                  </div>
                </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      </v-container>
      

    </div>

</template>

<style scoped>
.testimonial-sec {
    background-image: url("../assets/pic-12.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    margin-top: 3em;
    padding:3em 0;
}
.testimonial-content>img {
    left: 0;
    position: absolute;
    top: 0;
}
.testimonial-sec h4{
  font-size: 44px;
  font-weight: 300;
  color: #fff;
  
}
.theme--light.v-sheet {
    background-color: unset;
    border-color: unset;
}
.testimonial-content {
    background: #ededed;
    min-height: 350px;
    min-width: 100%;
    border-radius: 4px;
    margin-top: 1.5em;
    position: relative;
    background-image: url("../assets/quote-bg.png");
    background-position: 80% center;
    background-repeat: no-repeat ;
}
.test-avatar {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 1em;
    padding: 0 2em 2em;
}
.test-info {
    text-align: left;
    margin: auto 0;
}
.test-info h5 {
    font-size: 24px;
    font-weight: 500;
}
.test-info p {
    margin-bottom:0;
}
.test-content>p {
    text-align: left;
}
.test-content {
    padding: 4em 3em 3em;
}
@media (max-width: 767px){
  .container.desk-testimonial {
    display: none;
  }
  .testimonial-content>img {
    left: 12px;
  }
  /* .testimonial-sec h4{
    font-size: 28px;
  } */
}
@media (min-width: 768px){
  .container.mob-testimonial {
    display: none;
  }
}
</style>

