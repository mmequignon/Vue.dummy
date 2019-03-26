<template>
	<v-app>
		<v-toolbar>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat><router-link to="/">Home</router-link></v-btn>
                <v-btn flat><router-link to="/lists">Lists</router-link></v-btn>
                <v-btn flat><router-link to="/about">About</router-link></v-btn>
			</v-toolbar-items>
		</v-toolbar>
        <router-view></router-view>
	</v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
