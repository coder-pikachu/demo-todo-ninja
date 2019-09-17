<template>
  <div class="team">
<h1 class="title pa-5 text-center cyan--text text--darken-4">Team</h1>

<v-container class="my-5">
    
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg2, avatar: v-for="(person, index) in team" :key="person.name">
        <sequential-entrance :delay="sendDelay(index)"  tag="div">

            <v-card flat class="text-center ma-3">

                <div class="text-center py-4" >
                    <v-avatar size="86" color="cyan darken-3">
                        <img :src="person.avatar">
                    </v-avatar>
                </div>

                <v-card-title class="justify-center subtitle-1"> {{ person.name }} </v-card-title>
                
                <v-card-text> {{ person.role }} </v-card-text>

                <v-card-actions class="justify-center">
                    <v-btn text color="cyan lighten-1">
                        <v-icon small left>mdi-message</v-icon>
                        <span>Message</span>
                    </v-btn>

                </v-card-actions>
            </v-card>

        </sequential-entrance>

        </v-flex>


    </v-layout>
</v-container>

  </div>
</template>

<script>

export default {
    data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png'},
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png'},
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  
},
methods:{
    sendDelay(index){
        console.log(index*1000);
        return index*1000;
    }
}
}
</script>