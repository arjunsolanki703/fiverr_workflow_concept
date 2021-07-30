<template>
  <div class="message-point cursor-pointer" @click="handleCheckbox()">
    <div :class="!isChecked ? 'uncheckbox' : 'checkbox'">
      <font-awesome-icon v-show="isChecked" class="checkmark" icon="check" />
    </div>
    <span :class="isChecked ? 'overline' : ''">
      {{text}}
    </span>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck);
export default {
  name: 'Checkbox',
  props: {
    text: {
      type: String,
      required: true,
    },
    reply: {
      type: String,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      isChecked: this.reply === 0 ? false : true,
    }
  },
  methods: {
    handleCheckbox() {
      this.isChecked = !this.isChecked
    }
  }
}
</script>
