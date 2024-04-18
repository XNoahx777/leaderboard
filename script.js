console.clear();

const team = [
{
  rank: 1,
  name: 'Margarita',
  handle: 'margarita.mi.patrona',
  img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0e09fe0cca66a80420476d04e2fe7de0~c5_100x100.webp?lk3s=a5d48078&x-expires=1713650400&x-signature=X5L8QQmMtmue13bcDUiVgoZeAY4%3D',
  kudos: 36,
  sent: 31 },
{
  rank: 2,
  name: 'evelinmzo',
  handle: 'evelinmzo',
  img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/df5f9bca8ed56ccbe1a1eb46947c5f4e~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713650400&x-signature=6KpgJhzVG6kdwTCjAbLK5kKx9iw%3D',
  kudos: 31,
  sent: 21 },
{
  rank: 3,
  name: 'lau.699',
  handle: 'lau.699',
  img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/251a44e6b5fb0f4dd0b4e3c7b8da194c~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713650400&x-signature=E0K7hCRrUmqCEdmV1aNOCX21vxs%3D',
  kudos: 24,
  sent: 7 },
{
  rank: 4,
  name: 'isavillegasr',
  handle: 'isavillegasr',
  img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a22a38eeaf278b1204459730ef475ec3~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713650400&x-signature=q7630ziB%2FU5F8OLUmdzgCHAADvc%3D',
  kudos: 22,
  sent: 4 },
{
  rank: 5,
  name: 'mar.estrada02',
  handle: 'mar.estrada02',
  img: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png',
  kudos: 18,
  sent: 16 },
{
  rank: 6,
  name: 'Charles Leclerc',
  handle: 'charles_leclerc',
  img: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png',
  kudos: 16,
  sent: 6 },
{
  rank: 7,
  name: 'tutidelabarrera',
  handle: 'tutidelabarrera',
  img: 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png',
  kudos: 10,
  sent: 21 },
{
  rank: 8,
  name: 'Daniel Ricciardo',
  handle: 'danielricciardo',
  img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0e09fe0cca66a80420476d04e2fe7de0~c5_100x100.webp?lk3s=a5d48078&x-expires=1713650400&x-signature=X5L8QQmMtmue13bcDUiVgoZeAY4%3D',
  kudos: 7,
  sent: 46 },
{
  rank: 9,
  name: 'Alexander Albon',
  handle: 'alex_albon',
  img: 'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col-retina/image.png',
  kudos: 4,
  sent: 2 },
{
  rank: 10,
  name: 'Carlos Sainz Jr.',
  handle: 'carlossainz55',
  img: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png',
  kudos: 1,
  sent: 24 }];



const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://tiktok.com/@${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];

// Render winner card
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Top Creator Last Week</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;
