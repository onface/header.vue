<template>
	<div  v-on="$listeners" :class="{'face-header': true, 'face-header--nav-show': switchShow}">
		<div class="face-header-inner">
			<a
				:href="logoHref"
				class="face-header-logo"
				@click="$emit('click-logo', $event)"
			>
				<img :src="media(logo)" alt="" class="face-header-logo-photo" />
				<span class="face-header-logo-title">
					<slot name="title"></slot>
				</span>
			</a>
			<span class="face-header-navSwitch" @click="switchHeader">
				<span class="face-header-navSwitch-open">
					<face-icon type="bars"/>
				</span>
				<span class="face-header-navSwitch-close">
					<face-icon type="close"/>
				</span>
			</span>
			<div class="face-header-nav">
				<slot></slot>
			</div>
			<div class="face-header-tool">
				<slot name="tool"></slot>
			</div>
		</div>
	</div>
</template>


<script>
import util from "util.vue"
import Icon from "icon.vue"
export default {
  name: 'face-header',
  props: require('./props'),
  components: {
	  'face-icon': Icon
  },
  methods: {
      media: util.media,
	  switchHeader: function () {
		  this.switchShow = !this.switchShow
	  }
  },
  data () {
    return {
		switchShow	: false
    }
  }
}
</script>
