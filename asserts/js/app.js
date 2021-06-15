let GithubProfileComponent = {
  props: {
    username: {
      type: String,
      required: true,
      default: "emmanuel-kpeglo"
    }
  },
  template: "#Github-Profile-Component-Template",
  data () {
    return {
      data: {},
      newUsername: ""
    }
  }, 
  created () {
    fetch(`https://api.github.com/users/${this.username}`)
    .then(response => response.json())
    .then(data => {
      this.data = data;
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    changeUser () {
      this.username = this.newUsername;
      fetch(`https://api.github.com/users/${this.username}`)
      .then(response => response.json())
      .then(data => {
        this.data = data;
      }).catch(err => {
        console.log(err);
      })

    }
  }
}

new Vue({
  el: '#app',
  components: {
    'github-profile': GithubProfileComponent
  }
});

