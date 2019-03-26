<template>
    <v-content>
        <v-layout row>
            <v-flex md4>
                <v-text-field label="Box" box v-model="item.title" outline />
            </v-flex>
            <v-flex md2>
                <v-btn color="success" @click="add_item">add</v-btn>
            </v-flex>
        </v-layout>
        <ul>
            <v-list v-for="(i, index) in items" :key="i">
                <li>
                    <v-layout row justify-space-between>
                        <v-flex md4>
                            <v-checkbox v-model="i.done"></v-checkbox>
                        </v-flex>
                        <v-flex md4>
                            {{ i.title }}
                        </v-flex>
                        <v-flex md4>
                            <v-text-field v-if="i.done" type="number" v-model="i.price" outline></v-text-field>
                        </v-flex>
                        <v-flex md4>
                            <v-btn color="error" @click="delete_item(index)">delete</v-btn>
                        </v-flex>
                    </v-layout>
                </li>
            </v-list>
        </ul>
        <h1>Budget : <input dark v-model="budget"/> ; Total : {{ total_sum }}</h1>
        <div style="background:red;" v-if="budget_exceeded">Budget exceeded</div>
    </v-content>
</template>

<script>
export default {
    name: 'List',
    data: function  () {
        return {
            new_item: "",
            item: {
                title: "",
                price: 0.0,
                done: false
            },
            items: [],
            id: this.$store.getters.get_new_id,
            budget: 0,
            last_edited: 0,
        }
    },
    computed: {
        total_sum: function(){
            let total = this.items.reduce((acc, obj) => acc += parseInt(obj.price), 0);
            return total;
        },
        budget_exceeded: function(){
            let total = this.items.reduce((acc, obj) => acc += parseInt(obj.price), 0);
            return total > this.budget ? true : false;
        }
    },
    methods: {
        store: function(){
            this.$store.commit("update", this.$data);
        },
        restore: function(){
            var o = this.$store.getters.get_by_id(this.id);
            if (o){
                o = JSON.parse(o);
                this.items = o.items;
                this.budget = o.budget;
            }
        },
        add_item: function(){
            if (this.item.title.trim()){
                this.items.push({
                    title: this.item.title,
                    price: this.item.price,
                    done: this.item.done
                })
                this.item.title = "";
                this.last_edited = Date.now();
                this.store();
            }
        } ,
        delete_item: function(index){
            this.items.splice(index, 1);
            this.last_edited = Date.now();
            this.store();
        },
    },
    created: function(){
        this.restore();
    }
}
</script>

