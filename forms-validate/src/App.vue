<template>
  
	<div id="app">
		
		<!-- npm install vuelidate --save -->

		<div class="container">
			<form action="#" class="pt-4" @submit.prevent="onSubmit">

				<div class="form-group">
					<label for="email">Email</label>
					<input 
						type="email" 
						id="email" 
						class="form-control"
            :class="{'is-invalid': $v.email.$error}"
						@input="$v.email.$touch()"
						v-model="email"
					>
          <div class="invalid-feedback" v-if="!$v.email.error">
            this field id required.
          </div>
				</div>

        <div class="form-group">
					<label for="password">Password</label>
					<input 
						type="password" 
						id="password" 
						class="form-control"
            :class="{'is-invalid': $v.password.$error}"
						@input="$v.password.$touch()"
						v-model="password"
					>
          <div class="invalid-feedback" v-if="!$v.password.minLength">
            Min length of password is 6.
          </div>
				</div>

        <div class="form-group">
					<label for="confirm">Confirm password</label>
					<input 
						type="password" 
						id="confirm" 
						class="form-control"
            :class="{'is-invalid': $v.confirmPassword.$error}"
						@input="$v.confirmPassword.$touch()"
						v-model="confirmPassword"
					>
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
            Password should be match.
          </div>
				</div>

        <button 
          class="btn btn-success" 
          type="submit"
          :disabled="$v.$invalid"
          >submit</button>

			</form>
		</div>


	</div>

</template>

<script>

		import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit() {
      let emailString    = 'email: ' + this.email + '\n',
          passwordString = 'password: ' + this.password + '\n',
          result         = emailString + passwordString;

     alert(result);
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  },
}
</script>

<style>

</style>
