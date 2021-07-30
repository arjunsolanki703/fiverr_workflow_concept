<template>
  <header id="navbar">
        <nav class="navbar-container container">
          <div class="left-bar">
            <button type="button" class="navbar-toggle" @click="toggleMenu" aria-label="Open navigation menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="home-link logo">
              Fiverr
            </a>
            <div class="navbar-menu" :class="{'openToggle': openToggle}">
              <ul class="navbar-links" :class="{'linkOpenToggle': openToggle}">
                <li class="navbar-item"><a class="navbar-link" href="javascript:;">Dashboard</a></li>
                <li class="navbar-item"><a class="navbar-link" href="javascript:;">Messages</a></li>
                <li class="navbar-item"><a class="navbar-link active" href="javascript:;">Orders</a></li>
                <li class="navbar-item"><a class="navbar-link" href="javascript:;">Gigs</a></li>
                <li class="navbar-item"><a class="navbar-link" href="javascript:;">Analytics</a></li>
                <li class="navbar-item"><a class="navbar-link" href="javascript:;">Earnings</a></li>
              </ul>
            </div>
          </div>
          <a href="/" class="home-link">
            <img class="avatar" :src="require('../../assets/images/1.png')" alt="">
            <div class="navbar-logo-green-dot">
            </div>
          </a>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data() {
    return {
      openToggle: false
    }
  },
  methods: {
      toggleMenu() {
        this.openToggle = !this.openToggle;
        console.log('this.openToggle', this.openToggle);
      }
  }
}
</script>
