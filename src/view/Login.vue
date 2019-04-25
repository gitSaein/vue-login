<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert v-model="isLoginError" variant="danger" >등록되지 않은 아이디거나, 아이디 또는 비밀번호를 잘못 입력 하셨습니다. </v-alert>
                <br>
                <form @submit="login({email:email, password:password})">
                  <v-text-field name="email" v-model="email" prepend-icon="person" label="Email"></v-text-field>
                  <v-text-field name="password" v-model="password" prepend-icon="lock" label="Password" type="password"></v-text-field>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit">Login</v-btn>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login',
  metaInfo: {
    title: 'Login'
  },
  data: () => ({
    email: '',
    password: '',
    rememberMe: false
  }),
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>