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
                var stored_id = state.lists[list].id;
                if (stored_id == id){
                    return state.lists[list];
                }
            }
            return false;
        },
        get_last_edited: state => {
            var last_edited_list = false;
            for (var index in state.lists){
                var list = state.lists[index];
                var more_recent = last_edited_list.last_edited < list.last_edited;
                if (!last_edited_list || more_recent){
                    last_edited_list = list
                    continue;
                }
            }
            return last_edited_list;
        },
        get_new_id: state => {
            var res = 0;
            for (var list in state.lists){
                var id = parseInt(list);
                if (res <= id){
                    res = id + 1;
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
