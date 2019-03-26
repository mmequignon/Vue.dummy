import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store ({
    name: "store",
    state : {
        lists: {},
    },
    getters: {
        get_by_id: (state) => (id) => {
            for (var list in state.lists){
                if (list.id == id){
                    return list;
                }
            }
            return false;
        },
        get_new_id: function(state){
            var res = 0;
            this.console.log(state.lists);
            for (var list in state.lists){
                if (res < list.id){
                    res = list.id + 1;
                }
            }
            return res;
        }
    },
    mutations: {
        save: function (state){
            if (state.lists){
                localStorage.setItem("lists", JSON.stringify(state.lists));
            }
        },
        restore: function(state){
            if (localStorage.lists){
                state.lists = JSON.parse(localStorage.lists);
            }
        },
        update: function(state, item) {
            if (state.lists[item.id]){
                delete state.lists[item.id];
                state.lists[item.id] = item;
            }
            else {
                state.lists[item.id] = item;
            }
            this.commit("save");
        }
    }
})
