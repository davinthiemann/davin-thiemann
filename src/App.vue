<script setup>
import GithubIcon from '../src/components/icons/IconGithub.vue'
import InstagramIcon from '../src/components/icons/IconInstagram.vue'
import LinkedInIcon from '../src/components/icons/IconLinkedIn.vue'
import FacebookIcon from '../src/components/icons/IconFacebook.vue'

</script>

<template>
  <div class="wrapper">
    <div class="info">
      <h1> Hi! I'm Davin </h1>
      <p> I'm a web developer currently studying in Bielefeld, Germany.</p>
      <p>Feel free to connect with me on my social platforms for collaborations, inquiries, or exciting opportunities! :)</p>
    </div>

    <div class="contact-wrapper">
      <img class="image-davin" src="/src/assets/Davin-Thiemann-1.jpg" alt="Davin Thiemann">
      <h3> Davin Thiemann </h3>
      <p>Frontend Web Developer | Student at <a href="https://www.hdnet.de/"> HDNET GmbH & Co. KG </a></p>

      <div class="socials">
        <a href="https://www.linkedin.com/in/davin-thiemann/">
          <LinkedInIcon class="icon" />
        </a>
        <a href="https://github.com/davinthiemann">
          <GithubIcon class="icon" />
        </a>
        <a href="https://www.instagram.com/davin.thmn/">
          <InstagramIcon class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.socials {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.icon {
  width: 25px;
  height: auto;
  color: white;
  opacity: 0.5;
}

.icon:hover {
  opacity: 1;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h1, h3 {
  color: white;
  font-weight: bold;
}

p {
  font-size: 1rem;
}

.info {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.contact-wrapper {
  background-color: #222222;
  padding: 2rem 5rem;
  border-radius: 16px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image-davin {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  object-position: 0 -30px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 24px 1px black;
  opacity: 0.7;
}

a {
  color: #a2a2a2;

  &:hover {
    color: white;
  }
}
</style>
