<template>
  <nav>
    <v-app-bar flat app color="cyan lighten-5">

      <v-app-bar-nav-icon class="blue-grey--text darken-3" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="text-uppercase blue-grey--text darken-3">
        <span class="font-weight-light">ToDo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->

      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text height="100%" class="blue-grey--text darken-3" v-on="on">
          <v-icon left>mdi-chevron-down</v-icon>
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in links" :key="link.text" router :to="link.route">

          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Signout Button -->

      <v-btn text normal height="100%" class="blue-grey--text darken-3">
        Sign Out
        <v-icon right>mdi-logout</v-icon>
      </v-btn>

    </v-app-bar>
<!-- This is the nav drawer on left -->
    <v-navigation-drawer :value="drawer" app color="cyan darken-4">
        
        <!-- This is the user's avatar and name -->
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="86">
                    <img src="/avatar-1.png">
                </v-avatar>
                <p class="white--text subtitle-1 pt-4">The Net Ninja</p>
            </v-flex>

            <v-flex class="my-4">
                <Popup />
            </v-flex>
        </v-layout>

<!-- This is the list of links in the navbar -->
    <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
            <v-list-item-content>
                <v-list-item-title class="white--text" >{{ link.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

    </v-navigation-drawer>
  </nav>
</template>


<script>
import Popup from './Popup'
export default {
    components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
          {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
          {icon: 'mdi-folder', text: 'My Project', route: '/Projects'},
          {icon: 'mdi-account-group', text: 'Team', route: '/Team'},
      ],
    };
  }
};
</script>