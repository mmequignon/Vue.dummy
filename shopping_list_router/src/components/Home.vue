<template>
    <v-content>
        <v-btn flat v-if="last_edited"><router-link :to="'/list/' + last_edited.id">Last edited SL</router-link></v-btn>
    </v-content>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        last_edited: function() {
            return this.$store.getters.get_last_edited;
        },
    },
}
</script>
