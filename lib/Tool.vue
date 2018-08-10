<template>
    <a v-on="$listeners" :href="href" :class="{'face-header-tool-item': true, 'face-header-tool-item--on': active && active !== 'false'}">
        <img :src="media(icon)" alt="" class="face-header-tool-item-icon" />
        <span class="face-tool-nav-item-label">
            <slot></slot>
        </span>
    </a>
</template>


<script>
import util from "util.vue"
export default {
  name: 'face-header-tool',
  props: require('./tool-props'),
  methods: {
      media: util.media
  },
  data () {
    return {

    }
  }
}
</script>
