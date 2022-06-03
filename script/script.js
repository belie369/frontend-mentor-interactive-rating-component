const componentEvaluation = document.querySelector('.component__evaluation');
const componentThankyou = document.querySelector('.component__thankyou');
const numberBtns = document.querySelectorAll('.component__evaluation-circle');
const submitBtn = document.querySelector('.component__evaluation-submit');

const showThankyou = () => {
	componentEvaluation.classList.toggle('fade-out');
	setTimeout(() => {
		componentEvaluation.style.display = 'none';
		componentThankyou.classList.toggle('fade-in');
		componentThankyou.style.display = 'block';
	}, 200);
};

submitBtn.addEventListener('click', showThankyou);
