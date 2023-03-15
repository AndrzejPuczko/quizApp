import '../scss/style.scss'
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
const internet = document.querySelector('#it')
const music = document.querySelector('#music')
const allCategories = document.querySelector('.category')
const quizContainer = document.querySelector('.quiz-container')

let currentQuiz = 0
let score = 0

const quizData = [
	{
		question: 'Ile lat ma prezydent ANdrzej?',
		a: 'Prezydent ma 35 lat',
		b: 'Prezydent ma 35 lat',
		c: 'Prezydent ma 45 lat',
		d: 'Prezydent ma 55 lat',
		img: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		correct: 'd',
	},
	{
		question: 'how you feel123123?',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		img: 'https://images.ctfassets.net/hrltx12pl8hq/1XHWt9mHWP7M57ESa6c21a/ec958aa9bbfdf8357c23c6954a096e2f/shutterstock_2248147783.jpg',
		correct: 'a',
	},
	{
		question: 'how you feel?',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		correct: 'a',
	},
]

const mathematic = [
	{
		question: 'Math1',
		a: 'Prezydent ma 35 lat',
		b: 'Prezydent ma 35 lat',
		c: 'Prezydent ma 45 lat',
		d: 'Prezydent ma 55 lat',
		img: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		correct: 'b',
	},
	{
		question: 'Math2',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		img: 'https://images.ctfassets.net/hrltx12pl8hq/1XHWt9mHWP7M57ESa6c21a/ec958aa9bbfdf8357c23c6954a096e2f/shutterstock_2248147783.jpg',
		correct: 'b',
	},
	{
		question: 'Math3',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		correct: 'b',
	},
]

const it = [
	{
		question: 'IT1',
		a: 'Prezydent ma 35 lat',
		b: 'Prezydent ma 35 lat',
		c: 'Prezydent ma 45 lat',
		d: 'Prezydent ma 55 lat',
		img: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		correct: 'b',
	},
	{
		question: 'IT2',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		img: '',
		correct: 'b',
	},
	{
		question: 'IT3',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		correct: 'b',
	},
]

const musicData = [
	{
		question: 'MT1',
		a: 'Prezydent ma 35 lat',
		b: 'Prezydent ma 35 lat',
		c: 'Prezydent ma 45 lat',
		d: 'Prezydent ma 55 lat',
		img: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		correct: 'b',
	},
	{
		question: 'M2',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		img: '',
		correct: 'b',
	},
	{
		question: 'M3',
		a: '25',
		b: '25',
		c: '25',
		d: '30',
		correct: 'b',
	},
]

let currentQuizData

function checkCategory(target) {
	deselect()
	target === 'math' ? currentQuizData = mathematic[currentQuiz] : false
	target === 'geography' ? currentQuizData = quizData[currentQuiz] : false
	target === 'it' ? currentQuizData = it[currentQuiz] : false
	target === 'music' ? currentQuizData = musicData[currentQuiz] : false
	loadElements(currentQuizData)
}

function loadElements(currentQuizData) {
	questionEl.innerText = currentQuizData.question
	img.setAttribute('src', currentQuizData.img)
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

const checkScore = category => {
	console.log(category)
	answer.forEach(item => {
		if (item.checked) {
			console.log(category)
			console.log(item.id)
			if (item.id === currentQuizData.correct) {
				score++
			}
			currentQuiz++
			if (currentQuiz < quizData.length) {
				checkCategory(category)
			} else {
				console.log(`Trafiłeś ${score} / ${quizData.length} pytań`)
				console.log(score)
				submitBtn.style.display = 'none'
			}
		}
	})
}

function deselect() {
	answer.forEach(radio => (radio.checked = false))
}

submitBtn.addEventListener('click', e => {
	const category = document.querySelector('.active')
	checkScore(category.id)
})
;[math, geography, internet, music].forEach(item => {
	item.addEventListener('click', ({ target }) => {
		checkCategory(target.id)
		item.classList.add('active')
		allCategories.style.display = 'none'
		quizContainer.style.display = 'flex'

	})
})
