<template>
	<div class="face-header">
		<div class="face-header-inner">
			<a href="/" class="face-header-logo">
				<img :src="media(logo)" alt="" class="face-header-logo-photo" />
				<span class="face-header-logo-title">
					<slot name="title"></slot>
				</span>
			</a>
			<span class="face-header-navSwitch">
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
				<!-- <a href="#" class="face-header-tool-item">
					<img src="./media/user.svg" alt="" class="face-header-tool-item-icon" />
					<span class="face-header-tool-item-label">Admin</span>
				</a> -->
				<a href="#" class="face-header-tool-item">
					<img src="https://onface.github.io/design/media/onface/logout.svg" alt="" class="face-header-tool-item-icon" />
					<span class="face-header-tool-item-label">退出</span>
				</a>
			</div>
		</div>
	</div>
</template>


<script>
import util from "./util"
import Icon from "icon.vue"
export default {
  name: 'face-header',
  props: require('./props'),
  components: {
	  'face-icon': Icon
  },
  methods: {
      media: util.media
  },
  data () {
    return {

    }
  }
}
</script>
