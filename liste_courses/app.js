var app = new Vue({
    el:"#app",
    data: { 
        new_item: "",
        items: [],
        id: 0
    },
    methods: {
        add_item: function(){
            this.items.push({ 
                id: this.id,
                done: false,
                title: this.new_item 
            });
            this.new_item = "";
            this.id ++;
        }
    }
})
