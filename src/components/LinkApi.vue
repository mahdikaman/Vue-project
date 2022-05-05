<script>
export default {
  name: "LinkApi",
  methods: {
    hacked() {
      alert("I am sorry but your Computer got hacked!");
    },
    goToApi() {
      window.open("https://api.openbrewerydb.org");
    },
  },
};
</script>

<template>
  <div class="info">
    <section class="section-cta">
      <div class="container">
        <div class="cta">
          <div class="cta-text-box">
            <h2 class="heading-secondary">Vote for your best Brewery !</h2>

            <form class="cta-form" action="#">
              <div>
                <label for="favorite-brewery">Favorite Brewery</label>
                <input
                  id="favorite-brewery"
                  type="text"
                  placeholder="Banjo Brewing"
                  required
                />
              </div>
              <div>
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="mahdi"
                  required
                />
              </div>
              <div>
                <label for="email"> Your email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="hej@example.com"
                  required
                />
              </div>
              <div>
                <label for="select-where">Where did you hear from us?</label>
                <select id="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="IT">IT högskolan</option>
                  <option value="NONE">None of your business</option>
                  <option value="Mahdi">From Mahdi</option>
                  <option value="Jon">From Jon</option>
                </select>
              </div>
              <button class="cta" @click="goToApi">Visit Brewery API</button>
              <button class="cta" @click="hacked">Send your Review</button>
            </form>
          </div>
          <div class="cta-img-box" role="img" />
        </div>
      </div>
    </section>
  </div>
  <div class="div_img" />
</template>

<style lang="css" scoped>
.section-cta {
  padding: 0;
}

.cta {
  display: grid;
  grid-template-columns: 2fr 1fr;

  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;

  background-image: linear-gradient(to right bottom, #fadd95, #bfbb42);
  overflow: hidden;
}

.cta-text-box {
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  color: #45260a;
}

.cta .heading-secondary {
  color: inherit;
  margin-bottom: 3.2rem;
}

.cta-text {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 3.8rem;
}

.cta-img-box {
  background-image: linear-gradient(
      to right bottom,
      rgba(235, 151, 78, 0.35),
      rgba(230, 125, 34, 0.35)
    ),
    url("../../public/_E_R9670.jpg");
  background-size: cover;
  background-position: center;
}

.cta-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.2rem;
  row-gap: 1.4rem;
}

.cta-form label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
}

.cta-form input,
.cta-form select {
  width: 100%;
  padding: 1.2rem;
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.cta-form input::placeholder {
  color: #aaa;
}

.cta *:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
}
</style>
