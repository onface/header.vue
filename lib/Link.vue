<template>
    <a v-on="$listeners" :href="href" :class="{'face-header-nav-item': true, 'face-header-nav-item--on': active && active !== 'false'}">
        <img :src="media(icon)" alt="" class="face-header-nav-item-icon" />
        <slot></slot>
    </a>
</template>


<script>
import util from "./util"
export default {
  name: 'face-header-link',
  props: require('./link-props'),
  methods: {
      media: util.media
  },
  data () {
    return {

    }
  }
}
</script>
