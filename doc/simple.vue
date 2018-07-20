<template>
	<face-header logo="@media-onface/logo.svg" >
		<face-header-link active="true" href="/" icon="@media-cute/computer.svg" >
			首页
		</face-header-link>
		<face-header-link @click.stop="handleProject" icon="@media-cute/project.svg" >
			项目
		</face-header-link>
		<face-header-link href="/" icon="@media-cute/email.svg" >
			邮件
		</face-header-link>
		<face-header-link href="/" icon="@media-cute/phone.svg" >
			短信
		</face-header-link>
		<face-header-link href="/" icon="@media-cute/user-male.svg" >
			用户
		</face-header-link>
		<face-header-link href="/" icon="@media-cute/settings.svg" >
			设置
		</face-header-link>
	</face-header>
</template>

<script>
import Header, { HeaderLink } from "header.vue"
require('vue').use(Header)
require('vue').use(HeaderLink)
export default {
	methods: {
		handleProject: (e) => {
			alert('click project')
		}
	}
}
</script>
