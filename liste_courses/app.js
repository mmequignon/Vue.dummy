var app = new Vue({
    el:"#app",
    data: { 
        new_item: "",
        item: {
            title: "",
            price: 0.0,
            done: false
        },
        items: [],
        id: 0,
        budget: 0,
        budget_exceeded: false
    },
    computed: {
        total_sum: function(){
            total = this.items.reduce((acc, obj) => acc += parseInt(obj.price), 0);
            this.budget_exceeded = total > this.budget ? true : false;
            return total;
        }
    },
    methods: {
        store: function(){
            localStorage.setItem("data", JSON.stringify(this.items));
        },
        restore: function(){
            if (localStorage.getItem("data")){
                this.items = JSON.parse(localStorage.getItem("data"));
                localStorage.removeItem("data");
            }
        },
        add_item: function(){
            this.items.push({
                title: this.item.title,
                price: this.item.price,
                done: this.item.done
            })
            this.item.title = "";
            this.store();
        } ,
        delete_item: function(index){
            this.items.splice(index, 1);
            this.store();
        },
    },
    created: function(){
        this.restore();
    }
})
