<template>
	<div>
		<div class="music">
			<TheCover />
			<ThePlayer />
		</div>
	</div>
</template>

<script>
import TheCover from '@/components/TheCover.vue';
import ThePlayer from '@/components/ThePlayer.vue';
export default {
	components: {
		TheCover, ThePlayer
	},
	setup() {},
}
</script>

<style lang="scss" src="./TheMusic.scss">
</style>