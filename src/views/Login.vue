<template>
  <div class="login">
    <h6 class="alert alert-info col-lg-6 mx-auto shadow">ثبت نام</h6>

    <div class="row mt-2">
      <div class="col-11 col-lg-6 mx-auto border shadow rounded p-4 my-4">
        <p class="text-right mt-2">لطفا اطلاعات ورود خود را وارد نمایید.</p>

        <form @submit.prevent="doLogin" class="form m-4 p-2">
          <div class="form-group text-right text-light">
            <input
              type="text"
              placeholder="نام"
              class="form-control"
              id="nameInput"
              @keyup="doLogin"
              v-model="username"
              :class="{
                'is-invalid': usernameE === true,
                'is-valid': usernameE === false,
              }"
            />
            <div class="invalid-feedback" v-if="usernameE">
              {{ usernameEM }}
            </div>
          </div>
          <div class="form-group text-right">
            <input
              type="text"
              placeholder="نام خانوادگی"
              class="form-control"
              id="familyInput"
              @keyup="doLogin"
              v-model="family"
              :class="{
                'is-invalid': familyE === true,
                'is-valid': familyE === false,
              }"
            />
            <div class="invalid-feedback" v-if="familyE">
              {{ familyEM }}
            </div>
          </div>

          <div class="form-group text-right">
            <input
              type="text"
              class="form-control"
              placeholder="تلفن همراه"
              id="mobilenumber"
              @keyup="doLogin"
              v-model="mobile"
              :class="{
                'is-invalid': mobileE === true,
                'is-valid': mobileE === false,
              }"
            />
            <div class="invalid-feedback" v-if="mobileE">
              {{ mobileEM }}
            </div>
          </div>
          <div class="form-group text-right">
            <input
              type="text"
              placeholder="تلفن ثابت"
              class="form-control"
              id="phonenumber"
              @keyup="doLogin"
              v-model="phone"
              :class="{
                'is-invalid': phoneE === true,
                'is-valid': phoneE === false,
              }"
            />
            <div class="invalid-feedback" v-if="phoneE">
              {{ phoneEM }}
            </div>
          </div>
          <hr />
          <div class="form-group text-right">
            <input
              type="text"
              placeholder="آدرس دقیق"
              class="form-control"
              id="address"
              @keyup="doLogin"
              v-model="address"
              :class="{
                'is-valid': addressE === false,
              }"
            />
          
          </div>
          
          <div class="form-group text-right">
            <label for="formGender">جنسیت:</label>
            <select v-model="gender" @keyup="doLogin" class="form-control" :class="{
                'is-invalid': genderE === true,
                'is-valid': genderE === false,
              }">
              <option>خانم</option>
              <option>آقا</option>
            </select>
            <div class="invalid-feedback" v-if="genderE">
              {{ genderEM }}
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-success mt-3 form-control"
            @click="doMap"
          >
            مرحله بعد
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      usernameE: null,
      usernameEM: null,
      family: "",
      familyE: null,
      familyEM: null,
      mobile: "",
      mobileE: null,
      mobileEM: null,
      regmobile: "",
      phone: "",
      phoneE: null,
      phoneEM: null,
      address: "",
      addressE: null,
      addressEM: null,
      gender: "",
      genderE: null,
      genderEM: null,
    };
  },
  methods: {
    doLogin() {
      //name validation
      if (this.username.length < 3) {
        this.usernameE = true;
        if (this.username.length == 0) {
          this.usernameEM = "وارد کردن نام اجباری است";
        } else {
          this.usernameEM = "تعداد حروف حداقل 3 عدد می باشد";
        }
      } else {
        this.usernameE = false;
        this.usernameEM = "";
      }
      //family validation
      if (this.family.length < 3) {
        this.familyE = true;
        if (this.family.length == 0) {
          this.familyEM = "وارد کردن نام خانوادگی اجباری است";
        } else {
          this.familyEM = "تعداد حروف حداقل 3 عدد می باشد";
        }
      } else {
        this.familyE = false;
        this.familyEM = "";
      }

      if (!this.mobile.match(/^09[0|1|2|3|9][0-9]{8}$/)) {
        this.mobileE = true;
        this.mobileEM = "فرمت وارد شده اشتباه است";
      } else {
        this.mobileE = false;
        this.mobileEM = "";
      }
      //phonenumber validation
      if (!this.phone.match(/^0[0-9]{10}/)) {
        this.phoneE = true;
        this.phoneEM = "فرمت وارد شده اشتباه است";
      } else {
        this.phoneE = false;
        this.phoneEM = "";
      }

      //address validation
      if (this.address.length < 10) {
        this.addressE = true;
        if (this.address.length == 0) {
          this.addressEM = "وارد کردن آدرس اجباری است";
        } else {
          this.addressEM = "تعداد حروف حداقل 10 عدد می باشد";
        }
      } else {
        this.addressE = false;
        this.addressEM = "";
      }

      //gender validation
      if (this.gender.length==0) {
        this.genderE = true;
        this.genderEM = "وارد کردن جنسیت اجباری است";
      } else {
        this.genderE = false;
        this.genderEM = "";
      }

      this.$store.commit("Login", "token");
    },
    doMap(){
      this.$router.push("/map");
    },
  },
};
</script>