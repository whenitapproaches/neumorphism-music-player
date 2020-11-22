<template>
	<div class="player">
		<div class="information has-text-centered mt-4">
			<h1 class="title">{{ currentSong.name }}</h1>
			<p class="subtitle">{{ currentSong.artist }}</p>
		</div>
		<div class="progress-info mt-3">
			<p>{{ currentPlayingTime }}</p>
			<p>{{ songDuration }}</p>
		</div>
		<div
			class="progress-bar mt-1"
			ref="progressBarDOM"
			@mousedown="mouseDownProgressBar($event)"
		>
			<div class="active-bar" :style="{ width: `${activeProgressBarWidth}%` }">
				<button
					@mousedown.self="mouseDownProgressBarButton()"
					class="current button"
				></button>
			</div>
		</div>
		<div class="controls mt-5">
			<button class="button">
				<i class="las la-step-backward"></i>
			</button>
			<button class="button" @click="playOrPause()">
				<i class="las la-pause" v-if="currentSong.isPlaying"></i>
				<i class="las la-play" v-else></i>
			</button>
			<button class="button">
				<i class="las la-step-forward"></i>
			</button>
		</div>
	</div>
</template>

<script>
import motDaoYeuDuong from "@/assets/audio/mot-dao-yeu-duong-tau-bay.mp3"
import tanPhaiGiacMo from "@/assets/audio/Tan-Phai-Giac-Mo-Hoang-Bach.mp3"
const songs = [
	{
		name: "Một Dạo Yêu Đương",
		artist: "Tàu Bay",
		src: [motDaoYeuDuong],
	},
	{
		name: "Tàn Phai Giấc Mơ",
		artist: "Hoàng Bách",
		src: [tanPhaiGiacMo],
	},
]

import { Howl } from "howler"

import { ref, reactive, computed } from "vue"
export default {
	setup() {
		const activeProgressBarWidth = ref(0)
		const progressBarDOM = ref(null)

		const currentSong = reactive({})

		const currentPlayingTime = computed(() => {
			if (!currentSong.duration) return ""
			const duration = currentSong.time
			let second = duration % 60

			return `${Math.floor(duration / 60)}:${
				second < 10 ? "0" + second : second
			}`
		})

		const songDuration = computed(() => {
			if (!currentSong.duration) return ""
			let duration = currentSong.duration

			let second = duration % 60

			return `${Math.floor(duration / 60)}:${
				second < 10 ? "0" + second : second
			}`
		})

		let isMouseDownProgressBarButton = false
		const mouseDownProgressBar = (event) => {
			if (!currentSong.isPlayable) return
			const { x: mouseX } = event
			const {
				x: progressBarX,
				width: progressBarWidth,
			} = progressBarDOM.value.getBoundingClientRect()
			const progressBarNewWidth =
				((mouseX - progressBarX) * 100) / progressBarWidth
			isMouseDownProgressBarButton = true
			return setProgressBarWidth(progressBarNewWidth)
		}

		const mouseDownProgressBarButton = () => {
			isMouseDownProgressBarButton = true
		}

		const mouseMoveProgressBar = (event) => {
			if (!isMouseDownProgressBarButton) return
			const { x: mouseX } = event
			const {
				x: progressBarX,
				width: progressBarWidth,
			} = progressBarDOM.value.getBoundingClientRect()
			if (mouseX < progressBarX) {
				pause()
				seek(0)
				play()
				return setProgressBarWidth(0)
			}
			const progressBarNewWidth =
				((mouseX - progressBarX) * 100) / progressBarWidth
			if (progressBarNewWidth >= 100) {
				pause()
				return setProgressBarWidth(100)
			}
			isMouseDownProgressBarButton = true
			return setProgressBarWidth(progressBarNewWidth)
		}

		const endMoveProgressBar = (event) => {
			if (!isMouseDownProgressBarButton) return
			isMouseDownProgressBarButton = false
			const { x: mouseX } = event
			const {
				x: progressBarX,
				width: progressBarWidth,
			} = progressBarDOM.value.getBoundingClientRect()
			if (mouseX < progressBarX) {
				pause()
				seek(0)
				play()
				return setProgressBarWidth(0)
			}
			const progressBarNewWidth =
				((mouseX - progressBarX) * 100) / progressBarWidth
			if (progressBarNewWidth >= 100) {
				pause()
				seek(currentSong.duration)
				return setProgressBarWidth(100)
			}
			const second = Math.round(
				(progressBarNewWidth * currentSong.duration) / 100
			)
			pause()
			seek(second)
			play()
			return setProgressBarWidth(progressBarNewWidth)
		}

		const setProgressBarWidth = (width) => {
			if (width > 100 || width < 0) return
			return (activeProgressBarWidth.value = width)
		}

		const createSong = (index) => {
			const { name, artist, src } = songs[index]

			currentSong.name = name
			currentSong.artist = artist

			currentSong.song = new Howl({
				src,
			})

			currentSong.time = 0

			currentSong.song.on("load", () => {
				currentSong.isPlayable = true
				currentSong.duration = Math.round(currentSong.song.duration())
				play()
			})

			currentSong.song.on("end", () => {
				currentSong.isPlaying = false
			})
		}

		const seek = (second) => {
			currentSong.song.seek(second)
			currentSong.time = second
		}

		const progress = () => {
			if (currentSong.isPlaying && currentSong.isPlayable) {
				currentSong.time++
				const progressBarNewWidth =
					(currentSong.time / currentSong.duration) * 100
				setProgressBarWidth(progressBarNewWidth)
			}
			setTimeout(progress, 1000)
		}

		progress()

		const play = () => {
			if (currentSong.isPlaying || !currentSong.isPlayable) return
			if (currentSong.time >= currentSong.duration) {
				setProgressBarWidth(0)
				pause()
				seek(0)
			}
			currentSong.isPlaying = true
			currentSong.song.play()
		}

		const pause = () => {
			if (!currentSong.isPlaying) return
			currentSong.isPlaying = false
			currentSong.song.pause()
		}

		const playOrPause = () => {
			return currentSong.isPlaying ? pause() : play()
		}

		window.addEventListener("mousemove", mouseMoveProgressBar)
		window.addEventListener("mouseleave", endMoveProgressBar)
		window.addEventListener("mouseup", endMoveProgressBar)

		createSong(0)

		return {
			activeProgressBarWidth,
			mouseDownProgressBar,
			mouseDownProgressBarButton,
			progressBarDOM,
			songDuration,
			currentPlayingTime,
			playOrPause,
			currentSong,
		}
	},
}
</script>

<style scoped lang="scss" src="./ThePlayer.scss">
</style>