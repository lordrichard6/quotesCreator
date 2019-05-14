const quotes = [
{
	name:'Mark Caine',
	quote:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.'
},
{
	name:'Eleanor Roosevelt',
	quote:'Great minds discuss ideas, average minds discuss events, small minds discuss people.'
},
{
	name:'Mark Twain',
	quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.'
},
{
	name:'William Shakespeare',
	quote:'A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.'
},
{
	name:'John Lennon',
	quote:'Life is what happens when you’re busy making other plans.'
},
{
	name:'David Brinkley',
	quote:'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.'
},
{
	name:'John F. Kennedy',
	quote:'Those who dare to fail miserably can achieve greatly.'
},
{
	name:'Benjamin Franklin',
	quote:'He that falls in love with himself will have no rivals.'
},
{
	name:'Theodore Roosevelt',
	quote:'It is hard to fail, but it is worse never to have tried to succeed.'
},
{
	name:'Abraham Lincoln',
	quote:'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.'
},
{
	name:'Mother Theresa',
	quote:'Let us always meet each other with smile, for the smile is the beginning of love.'
},
{
	name:'Alexander Graham Bell',
	quote:'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.'
},
{
	name:'Leonardo Da Vinci',
	quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
},
{
	name:'J. K Rowling',
	quote:'It is our choices, that show what we truly are, far more than our abilities.'
},
{
	name:'Albert Einstein',
	quote:'If you want to live a happy life, tie it to a goal, not to people or things.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
	let number = Math.floor(Math.random()*quotes.length);
	console.log(number)
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;
}