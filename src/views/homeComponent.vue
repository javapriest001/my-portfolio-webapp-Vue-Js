<template>
<div class="container-fluid">
 <v-container  id="home" fluid class="container py-5">
  <v-row class="justify-content-center ">
    <v-col cols="12" md="12" sm="12" xs="12">
      <h4 class="text-muted welcome_text py-5">Hello There! <v-icon small color="#030432"> mdi-hand-wave </v-icon>, My Name Is </h4>
      <h1 class="intro_name" >ENWERE, VINCENT C.</h1>
      <h2 class="intro_occupation"><v-icon  color="#060863"> mdi-dna </v-icon> Biochemist || <v-icon  color="#060863"> mdi-dot-net </v-icon> Software Developer </h2>
      <p class="text-start mt-5 intro_note">I am a certified biochemist who transitioned into full-time software development in other to profer modern solutions <br> to science, genetics analysis , Fintech Companies and businesses willing to scale beyond competition <br> through the power of old and new technologies, having worked on projects both on <br> private and company scales i feel very confident you and I can walk through a lot on this journey.</p>

      <v-btn large height="60" class="mt-5 cta_btn" outlined elevation="2">Let's Connect</v-btn>
    </v-col>
  </v-row>
 </v-container>
  <v-container id="about" fluid class="container py-5">
    <v-row justify-content-center class="align-items-center">
      <v-col cols="12" md="6" lg="6" sm="12" >
          <v-img
          src="@/assets/img/20210916_164540.png"
          alt="software Developer"
          max-height="450px"
          max-width="450px"
          class="about_image"
          >

          </v-img>
      </v-col>

      <v-col cols="12" md="6" lg="6" sm="12">
        <h4 class="text-muted welcome_text py-5" :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''"> - My Journey <v-icon small color="#030432"> mdi-chart-line-variant </v-icon></h4>
        <h3 :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''" > About Me</h3>
        <p :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''" >I’m Enwere Vincent C., a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.

          I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.

          Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.</p>

        <v-row :class="$vuetify.breakpoint.mdAndDown? 'justify-content-center': ''">
          <v-btn
              icon
              elevation="3"
              v-for="icon in social" :key="icon"
              class="mx-2 my-4"

          >
            <v-icon color="#060863">{{icon.id}}</v-icon>
          </v-btn>
        </v-row>
        <v-btn
            href="/Enwere-Vincent-CV.pdf"
            large height="60"
                class="mt-5 cta_btn"
                :class="$vuetify.breakpoint.mdAndDown? 'w-100 py-4' : ''" outlined elevation="2"
        >Download My CV</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="container">
    <v-row class="justify-content-center text-center">
      <v-col cols="12" sm="12"  xs="12"  class=""  justify-content-center>
        <h3 class="text-center">My Stack Knowledge Base</h3>
        <v-row justify-content-center text-center>
          <v-col  cols="12" >
            <v-btn

                class="stacks"
                v-for="item in stacks" :key="item"
                target="_blank"
                small
                text

            ><v-icon class="pe-2 " x-small>mdi-information-outline</v-icon> {{item}}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
<v-container fluid>
  <v-row justify-content-center class="justify-content-center" text-center>
    <h4 class="text-muted welcome_text py-5" :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''"> - Work Flow <v-icon small color="#030432"> mdi-chart-line-variant </v-icon></h4>
    <h3 :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''" > Value-Oriented Work Steps</h3>
    <v-col cols="6" md="6" lg="3" sm="6" xs="6" v-for="process in process" class="justify-content-center text-center" :key="process.title" >
      <v-card
          outlined
          class="border-0 rounded-start"
          elevation="2"
          color="#ECECFE"
          data-aos="zoom-in-up"
      >
       <v-icon color="#060863" class="my-3" large>
         {{process.img}}
       </v-icon>

        <v-card-title class="text-center process_title justify-center ">{{process.title}}</v-card-title>
        <v-card-text>{{process.desc}}</v-card-text>
<!--        <v-img-->
<!--            :src="'@/assets/img/' + process.icon"-->
<!--            max-width="50px"-->
<!--            max-height="50px"-->
<!--        ></v-img>-->
      </v-card>
    </v-col>
  </v-row>
</v-container>
  <v-container id="projects" fluid class="container py-5">
    <h3 :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''" > My Projects</h3>
    <v-row class="justify-content-center">
      <v-col cols="12" lg="4" md="4" sm="6" v-for="project in projects" :key="project.img">
        <v-card
            class="mx-auto my-2"
            max-width="374"
        >
          <v-img
              height="250"
              width="450"
              :src="project.img"
          ></v-img>
          <v-spacer></v-spacer>
          <v-btn
              class="ms-3 mt-2"
              icon
              elevation="5"
              large
              :href="project.url"
          > <v-icon color="#060863" class="text--white">mdi-github</v-icon></v-btn>
          <v-btn
              class="ms-3 mt-2"
              icon
              elevation="5"
              large

          > <v-icon color="#060863" class="text--white">mdi-open-in-new elevation=2</v-icon></v-btn>
          <v-card-title color="#060863">{{project.title}}</v-card-title>
          <v-card-text>
            <div>{{project.desc}}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title color="#060863">Stack Used</v-card-title>

          <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4"
                column
            >
              <v-chip elevation="2" small color="#060863" class="text--white chip">{{project.lang.first}}</v-chip>

              <v-chip elevation="2" small color="#060863" class="text--white chip">{{project.lang.second}}</v-chip>

              <v-chip elevation="2" small color="#060863" class="text--white chip">{{project.lang.third}}</v-chip>


<!--              <v-chip>{{project.lang.fourth === '' ?  }}</v-chip>-->
            </v-chip-group>
          </v-card-text>

<!--          <v-card-actions>-->
<!--            <v-btn-->
<!--                color="deep-purple lighten-2"-->
<!--                text-->
<!--                @click="reserve"-->
<!--            >-->
<!--              Reserve-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="container py-5">
    <v-row class="justify-content-center">
      <h3 :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''" > Let's Connect</h3>
      <p class="" :class="$vuetify.breakpoint.mdAndDown? 'text-center': ''">Looking For Seasoned and Value-Oriented Software around you or remotely? </p>

      <v-row :class="$vuetify.breakpoint.mdAndDown? 'justify-content-center': ''">
        <v-btn
            icon
            elevation="3"
            v-for="icon in social" :key="icon"
            class="mx-2 my-4"
            app
        >
          <v-icon color="#060863">{{icon.id}}</v-icon>
        </v-btn>
      </v-row>
    </v-row>
  </v-container>

  <v-container fluid class="container py-5">
    <v-footer  >
      <v-col
          class="text-center"
          cols="12"

      >
       &copy; {{ new Date().getFullYear() }} — <strong color="white"> Enwere Vincent</strong>
      </v-col>
    </v-footer>
  </v-container>

</div>
</template>

<script>

export default {
  name: "homeComponent",

  mounted(){
    //console.log(drawer)
  },
  data(){
    return {
      stacks: ["Java" , "Vue. Js" , "Laravel" , "MongoDB" , "REST API"],
      process: [
        {icon: 'work-idea.svg', img: 'mdi-head-cog', title: 'Discover', desc: 'I conduct user research to identify the problem I want to solve.'},
        {icon: 'work-plan.svg', img: 'mdi-pencil-remove-outline', title: 'Define', desc: 'I brainstorm possible design solutions to the identified problem.'},
        {icon: 'work-design.svg', img: 'mdi-progress-star', title: 'Prototype', desc: 'I create high fidelity design and prototype the project before full implementation.'},
        {icon: 'implement.svg', img: 'mdi-dots-hexagon', title: 'Implement', desc: 'After designing, I deliver for implementation still placing value and quality as priority.'}
      ],
      social: [
        {id: 'mdi-facebook'},
        {id: 'mdi-github'},
        {id: 'mdi-linkedin'},
        {id: 'mdi-twitter'},
        {id: 'mdi-instagram'},
        {id: 'mdi-email'},

      ],
      projects:[
        {title: 'E.I.T Timeline Application', img: 'https://i.ibb.co/mCbKfB3/Screenshot-2022-05-29-201411.png' , desc: 'Timeline Application',  lang: {first: 'laravel', second: 'jQuery', third: 'Bootstrap 5'  } , url: 'https://github.com/Cybermatepro/EIT-timelie-Laravel'},
        {title: 'Personal Portfolio Website', img: 'https://i.ibb.co/wMMGJyP/Screenshot-2022-05-29-193926.png' , desc: 'Personal Portfolio',   lang: {first: 'Vue Js', second: 'Vuetify', third: 'Bootstrap 5'  } , url: 'https://github.com/Cybermatepro/my-portfolio-webapp-Vue-Js'},
        {title: 'TO-DO Application', img: 'https://i.ibb.co/0yWJgmR/Screenshot-2022-05-29-203537.png' , desc: 'To-Do Application',  lang: {first: 'JavaScript', second: 'HTML/CSS', third: 'Bootstrap 5'  } , url: 'https://github.com/Cybermatepro/To-Do-App'},
        {title: 'Staff Management Portal', img: 'https://i.ibb.co/dgtB8N1/Screenshot-2022-05-29-200056.png', desc: 'Staff Management Portal',  lang: {first: 'PHP-OOP', second: 'jQuery', third: 'Bootstrap 5', fourth: ''   } , url: 'https://github.com/Cybermatepro/php-timeline-oop'},
        {title: '4-Point CGPA Calculator', img: 'https://i.ibb.co/BVQLkYT/Screenshot-2022-05-29-200251.png' ,  desc: '4-Point CGPA Calculator',  lang: {first: 'JavaScript', second: 'HTML/CSS', third: 'Bootstrap 5'  } , url: 'https://github.com/Cybermatepro/4-Point-CGPA-Calculator'},
        {title: 'Local File Submit Portal', img: 'https://i.ibb.co/4FFRJyd/Screenshot-2022-05-29-204057.png' ,  desc: 'Local Submit Application',  lang: {first: 'PHP', second: 'HTML/CSS', third: 'Bootstrap 5'  } , url: 'https://github.com/Cybermatepro/Local-File-Submission-'},

      ]

    }
  },

  methods: {
    drawer(){
      //
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,200;0,300;0,700;0,800;1,100;1,300;1,500;1,700&display=swap');

body{
  font-family: 'Raleway', sans-serif !important;
}


.welcome_text{

  font-size: 18px;
  margin-bottom: -12px;
}
.container{

  padding: 60px 100px !important;
}
.intro_name{
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size:60px;
  color: #060863;
  margin-top: 10px;
}
.intro_occupation {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size:40px;
  opacity: .6;
  color: #060863;

}
h3{
  font-family: 'Raleway', sans-serif;
  font-size:40px;
  color: #060863;
  font-weight: 600;
}
.intro_note{
  color: #060863;
  font-size: 18px;
}
.stacks{
  font-size: 18px;
}
.process_title{
  text-align: center !important;
}
.chip{
  color: white !important;
}
@media(max-width: 375px){
  .about_image{
    width: 300px !important;
    height: 300px !important;
  }
}
@media(max-width: 550px){
  .container{

    padding: 30px 20px 20px 20px !important;
  }
  .welcome_text{
    font-size: 18px;

  }
  .intro_name{
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size:30px;
    color: #060863;
  }
  .stacks{
    font-size: 18px;
  }
  h3{
    font-family: 'Raleway', sans-serif;
    font-size:30px;
    color: #060863;
    font-weight: 600;
  }
  .intro_occupation {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size:24px;
    opacity: .6;
    color: #060863;

  }
  .cta_btn{
    display: block;
    width: 100%;
  }
  .about_image{
    width: 350px !important;
    height: 350px !important;
  }

}
</style>