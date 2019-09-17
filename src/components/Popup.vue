<template>
    <v-dialog max-width="600px">

        <template v-slot:activator="{ on }">
        <v-btn class="cyan lighten-4 cyan--text text--darken-4" v-on="on">Add new project</v-btn>
        </template>
            <v-card>
                <v-card-title class="title cyan--text text--darken-4">
                    Add a new project
                      </v-card-title>
                      <v-card-text>
                    <v-form>
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder-outline"></v-text-field>
                        <v-textarea label="Information" v-model="information" prepend-icon="mdi-pencil-outline"></v-textarea>
                        <v-btn class="cyan darken-4 white--text my-3" @click="submit">Add Project</v-btn>
                    </v-form>
                    </v-card-text>
              
            </v-card>
        

    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            information: ''
        }
    },
    methods: {
        submit(){
            //console.log(this.title, this.information)
        }
    },
    
}
</script>