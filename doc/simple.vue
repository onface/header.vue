<template>
	<face-header
		logo="@media-onface/logo.svg"
		logo-href="https://onface.live/header.vue"
		@click-logo.prevent="handleClickLogo"
		>
		<template slot="title">onface</template>
		<face-header-link active="true" href="/" icon="@media-cute/computer.svg" >
			首页
		</face-header-link>
		<face-header-link @click.prevent="handleProject" icon="@media-cute/project.svg" >
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
		<template slot="tool">
			<face-header-link href="/logout" icon="@media-onface/logout.svg" >
				退出
			</face-header-link>
		</template>
	</face-header>
</template>

<script>
import Header, { HeaderLink, HeaderTool } from "header.vue"
import message from "face-message"
require('vue').use(Header)
require('vue').use(HeaderLink)
require('vue').use(HeaderTool)
export default {
	data: function () {
		return {
			some: 'abc'
		}
	},
	methods: {
		handleClickLogo: (e) => {
			message.info('logo')
		},
		handleProject: (e) => {
			message.info('project')
		}
	}
}
</script>
