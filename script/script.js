const componentEvaluation = document.querySelector('.component__evaluation');
const componentThankyou = document.querySelector('.component__thankyou');
const numberBtns = document.querySelectorAll('.component__evaluation-circle');
const submitBtn = document.querySelector('.component__evaluation-submit');
const thankyouRating = document.querySelector('.component__thankyou-rating');

let selectedValue = 0;

const checkCircle = (e) => {
	numberBtns.forEach((btn) => btn.classList.remove('component__evaluation-circle--selected'));
	e.target.classList.toggle('component__evaluation-circle--selected');
	selectValue(e);
	showScore();
};

const selectValue = (e) => {
	selectedValue = e.target.value;
};

const showScore = () => {
	thankyouRating.textContent = `${selectedValue}`;
};

const showThankyou = () => {
	if (selectedValue <= 0) {
		alert('Please select a rating!');
	} else {
		componentEvaluation.classList.toggle('fade-out');
		setTimeout(() => {
			componentEvaluation.style.display = 'none';
			componentThankyou.classList.toggle('fade-in');
			componentThankyou.style.display = 'block';
		}, 200);
	}
};

submitBtn.addEventListener('click', showThankyou);
numberBtns.forEach((btn) => btn.addEventListener('click', checkCircle));
