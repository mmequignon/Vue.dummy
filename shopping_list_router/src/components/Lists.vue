<template>
    <v-content>
        <ul>
            <v-list v-for="list in lists" :key="list.id">
                <v-layout row justify-space-between>
                    <v-flex md4>
                        Liste {{ list.id }}
                    </v-flex>
                    <v-flex md4>
                        <v-btn flat><router-link :to="'/list/' + list.id">Edith</router-link></v-btn>
                    </v-flex>
                </v-layout>
            </v-list>
        </ul>
        <v-btn flat><router-link :to="'/list/' + next_id">New SL</router-link></v-btn>
    </v-content>
</template>

<script>
export default {
    name: 'Lists',
    computed: {
        lists: function() {
            return this.$store.state.lists;
        },
        next_id: function() {
            return this.$store.getters.get_new_id;
        }
    },
    created: function(){
        this.$store.commit("restore");
    }
}
</script>

