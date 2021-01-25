<template>
  <section class="bgimage darken">
    <div class="container-fluid h-100">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="typewriter">
            <h1 class="text-center">
              Artists, Writers, Entrepreneurs, And Stories
            </h1>
          </div>
          <p class="text-center mt-5">
            <a href="#" class="btn btn-primary btn-large">All Blogs »</a>
          </p>
        </div>
      </div>
      <div class="row position-absolute" style="bottom: 7rem;">
        asdfjkaksjdhfjaskdhfasjkdhfajksdhf
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped lang="scss">
.bgimage {
  width:100%;
  height:500px;
   background-image: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1596116256245-1af81d516eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
}
.bgimage h1 {
  color:white;
  text-shadow:2px 2px #333;
}

.typewriter h1 {
  color: #fff;
  font-family: 'Cutive', serif;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    margin-top: 8rem;
  letter-spacing: .15em; /* Adjust as needed */
  animation:
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>
