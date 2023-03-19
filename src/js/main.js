import '../scss/style.scss'
import { geographyData, mathData, itData, musicData } from './_quizData'

const questionEl = document.querySelector('#question')
const a_text = document.querySelector('#a-text')
const b_text = document.querySelector('#b-text')
const c_text = document.querySelector('#c-text')
const d_text = document.querySelector('#d-text')
const submitBtn = document.querySelector('#submit')
const answer = document.getElementsByName('answer')
const img = document.querySelector('img')

const math = document.querySelector('#math')
const geography = document.querySelector('#geography')
const music = document.querySelector('#music')
const it = document.querySelector('#it')

const allCategories = document.querySelector('.main__category')
const quizContainer = document.querySelector('.quiz-container')
const questionNrText = quizContainer.querySelector('p:first-of-type')

const headerTitle = document.querySelector('.header__title')
const mainTitle = document.querySelector('.main__title')
const result = document.querySelector('.result')
const resultText = document.querySelector('.result-text')
const progressBarText = document.querySelector('.progressbar__text')
const restartBtn = document.querySelector('#restart')




const theme = document.querySelector('#toggle_checkbox')
const root = document.documentElement

let currentQuiz = 0
let score = 0
let quizLength
let currentQuizData

function checkCategory(target) {
	deselect()
	quizLength = eval(target + 'Data')
	currentQuizData = eval(target + 'Data[currentQuiz]')
	loadElements(currentQuizData)
}

function loadElements(currentQuizData) {
	questionEl.innerText = currentQuizData.question
	img.setAttribute('src', currentQuizData.img)
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
	questionNrText.textContent = `Pytanie ${currentQuiz +1} / ${quizLength.length}`
}

const checkScore = category => {
	answer.forEach(item => {
		if (item.checked) {
			if (item.id === currentQuizData.correct) {
				score++
			}
			currentQuiz++
			if (currentQuiz < quizLength.length) {
				checkCategory(category)
			} else {
				showResult(score)
			}
		}
	})
}

const showResult = score => {
	calcProgresBar(score)
	resultText.innerHTML = `Liczba poprawnych odpowiedzi to: <span>${score}</span>`

	restartBtn.style.display = 'block'
	result.style.display = 'flex'
	quizContainer.style.display = 'none' // przeksztalcic na forEach
	submitBtn.style.display = 'none'
}

const calcProgresBar = (score) => {
	progressBarText.textContent = `${score} / ${quizLength.length}`
	const progressBar = 440 - (440 * ((100 / quizLength.length) * score)) / 100;
	root.style.setProperty('--progress-bar', progressBar)
}

const hideMenu = () => {
	;[allCategories, headerTitle, mainTitle].forEach(item => {
		item.style.display = 'none'
	})
	quizContainer.style.display = 'flex'
	submitBtn.style.display = 'block'
}

function deselect() {
	answer.forEach(radio => (radio.checked = false))
}

submitBtn.addEventListener('click', () => {
	const category = document.querySelector('.active')
	checkScore(category.id)
})

;[math, geography, it, music].forEach(item => {
	item.addEventListener('click', ({ target }) => {
		hideMenu()
		checkCategory(target.id)
		item.classList.add('active')
	})
})

theme.addEventListener('click', () => {
	document.body.classList.toggle('redtheme')
	console.log('blue')
})
