<template>
  <div class="dashboard">
    <h1 class="title pa-5 text-center cyan--text text--darken-4">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb4">
        
        <v-col class="text-left" cols="12" md="6">
         <div>
        <v-tooltip top>
           <template v-slot:activator="{ on }">
          <v-btn small text @click="sortBy('title')" v-on="on">
          <v-icon left small class="grey--text">mdi-folder</v-icon>
          <span class="grey--text caption text-lowercase">By Project Name</span>
          </v-btn>
           </template>
        <span>Sort projects by project name</span>
        </v-tooltip>
        </div>
        </v-col>
        

        <v-col class="text-left" cols="12" xs=6 sm=4 md="2">
         <div>
           <v-tooltip top>
           <template v-slot:activator="{ on }">
           <v-btn small text @click="sortBy('person')" v-on="on">
          <v-icon left small class="grey--text">mdi-account</v-icon>
          <span class="grey--text caption text-lowercase">By Person</span>
        </v-btn>
        </template>
        <span>Sort projects by person</span>
        </v-tooltip>
        </div>
        </v-col>

        <v-col class="text-left" cols="12" xs=6 sm=4 md="2">
         <div>
           <v-tooltip top>
           <template v-slot:activator="{ on }">
           <v-btn small text @click="sortBy('due')" v-on="on">
          <v-icon left small class="grey--text">mdi-folder</v-icon>
          <span class="grey--text caption text-lowercase">By due date</span>
        </v-btn>
         </template>
        <span>Sort projects by due date</span>
        </v-tooltip>
        </div>
        </v-col>

        <v-col class="text-left" cols="12" xs=2 sm=4 md="2">
         <div>
           <v-tooltip top>
           <template v-slot:activator="{ on }">
            <v-btn small text @click="sortBy('status')" v-on="on">
          <v-icon left small class="grey--text">mdi-folder</v-icon>
          <span class="grey--text caption text-lowercase">by status</span>
        </v-btn>
        </template>
        <span>Sort projects by status</span>
        </v-tooltip>
        </div>
        </v-col>

      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">

        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="text-center">
              <v-chip small :class="` white--text caption my-2 ${project.status}`"> {{project.status}} </v-chip>
            </div>

          </v-flex>

        </v-layout>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
   background: orange !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>