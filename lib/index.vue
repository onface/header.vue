<template>
	<div class="face-header">
		<div class="face-header-inner">
			<a href="/" class="face-header-logo">
				<img src="https://onface.github.io/design/media/onface/logo.svg" alt="" class="face-header-logo-photo">
				<span class="face-header-logo-title">
					<slot name="title"></slot>
				</span>
			</a>
			<span class="face-header-navSwitch">
				<span class="face-header-navSwitch-open fi fi-bars"></span>
				<span class="face-header-navSwitch-close fi fi-close"></span>
			</span>
			<div class="face-header-nav">
				<a href="#" class="face-header-nav-item">
					<img src="https://onface.github.io/design/media/cute/settings.svg" alt="" class="face-header-nav-item-icon" />
					设置
				</a>
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
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>
