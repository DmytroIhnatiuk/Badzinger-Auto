import Swiper from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules'
import { getElement } from '../core/index.js'

function reviewsSlider() {
	if (!getElement('[data-swiper="reviewsSlider"]')) return

	reviewsSlider = new Swiper('[data-swiper="reviewsSlider"]', {
		modules: [Navigation],
		spaceBetween: 24,
		slidesPerView: 1,

		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: '.review-next',
			prevEl: '.review-prev',
		},
	})
}
function teemSlider() {
	if (!getElement('[data-swiper="teemSlider"]')) return

	teemSlider = new Swiper('[data-swiper="teemSlider"]', {
		modules: [Navigation],
		spaceBetween: 22,
		slidesPerView: 1.2,
		breakpoints: {
			640: {
				slidesPerView: 2.3,
			},
			1024: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: '.teem-next',
			prevEl: '.teem-prev',
		},
	})
}
function presentCarSlider() {
	if (!getElement('[data-swiper="presentCarSlider"]')) return

	presentCarSlider = new Swiper('[data-swiper="presentCarSlider"]', {
		modules: [Navigation],
		spaceBetween: 20,
		slidesPerView: 1.3,
		breakpoints: {
			640: {
				slidesPerView: 2.4,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		navigation: {
			nextEl: '.presentCar-next',
			prevEl: '.presentCar-prev',
		},
	})
}
function transitCarSlider() {
	if (!getElement('[data-swiper="transitCarSlider"]')) return

	transitCarSlider = new Swiper('[data-swiper="transitCarSlider"]', {
		modules: [Navigation],
		spaceBetween: 20,
		slidesPerView: 1.3,
		breakpoints: {
			640: {
				slidesPerView: 2.4,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		navigation: {
			nextEl: '.transitCar-next',
			prevEl: '.transitCar-prev',
		},
	})
}

export { reviewsSlider, teemSlider, presentCarSlider, transitCarSlider }
