<template>
  <div class="card" v-for="(res, index) in order" :key="index">
    <div class="three-dot">
      <img :src="require('../assets/images/more.png')" alt="" @click="isDropdown(index)">
      <div class="drop-down" v-if="isDropdownShow && index === i">
        <a href="">Delete</a>
      </div>
    </div>
    <div class="card-details">
      <img class="product-image" :src="require('../assets/images/products/'+res.image)" alt="">
      <div>
        <div class="order-status" :class="{'orange': res.status === 'NEW ORDER',
        'blue': res.status === 'IN PROGRESS',
        'pink': res.status === 'DELIVERED',
        'green': res.status === 'COMPLETED',
        'default': res.status === 'CANCELLED'}">
          {{res.status}}
        </div>
        <div class="order-time">
          <font-awesome-icon :icon="['far', 'clock']" /> {{res.time}}
        </div>
        <div class="order-hours">
          {{res.hours}} | <span class="color-black">{{res.price}}</span>
        </div>
      </div>
    </div>
    <div class="reply-message" v-if="res.message.reply === 1">
      <Checkbox :text="`Reply to ${res.message.name}'s message`" :reply="res.message.reply" />
      <Checkbox :text="`Send a draft`" :reply="res.message.draft"/>
    </div>
    <div class="card-bottom">
      <div class="view-order">
        View Order
      </div>
      <div class="p-bar" v-if="res.status === 'IN PROGRESS' || res.status === 'DELIVERED'">
      <div class="progressbar">
        <div></div>
      </div>
      </div>
      <div class="card-user-message">
        <div v-if="res.message.reply === 0" class="navbar-logo-red-dot"></div>
        <font-awesome-icon class="chat-icon" :icon="['far', 'comment']" />
        <img :src="require('../assets/images/'+res.message.image)" class="avatar" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faClock, faComment, faCheck);
import Checkbox from './Checkbox.vue';

export default {
  name: 'Card',
  props: {
    order: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      isDropdownShow: false,
      i: null
    }
  },
  components: {
    FontAwesomeIcon,
    Checkbox
  },
  methods: {
    isDropdown(index) {
      this.isDropdownShow = !this.isDropdownShow;
      this.i = index;
    }
  }
}
</script>
