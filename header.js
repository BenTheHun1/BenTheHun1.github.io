class HeaderWW extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <ul class="bar">
		<li style="float:right" class="bar"><a href="/portfolio/index.html">Back to: Portfolio</a></li>
		<li class="bar"><a href="/ww/index.html" class="active">White Wolf Database</a></li>
		</ul>
		<p></p>
	  `;
	}
}

class HeaderPort extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <center>
	  <p><img src="/benthehun1.svg" alt="BenTheHun1" width=40%></p>
	  <ul class="contact">
		  <li class="contact"><a href="mailto:benhunsicker1@gmail.com" class="contact"><img src="/img/mail.ico" alt="Email" Title="Email"></a></li>
		  <li class="contact"><a href="https://twitter.com/benthehun1" class="contact"><img src="/img/tweet.ico" alt="Twitter" Title="Twitter"></a></li>
		  <li class="contact"><a href="https://www.youtube.com/@BenTheHun1" class="contact"><img src="/img/yt.png" alt="YouTube" Title="YouTube"></a></li>
		  <li class="contact"><a href="https://github.com/BenTheHun1" class="contact"><img src="/img/git.ico" alt="GitHub" Title="GitHub"></a></li>
		  <li class="contact"><a href="https://www.twitch.tv/benthehun1" class="contact"><img src="/img/twitch.png" alt="Twitch" Title="Twitch"></a></li>
		  <li class="contact"><a href="https://www.curseforge.com/members/benthehun1" class="contact"><img src="/img/anvil.svg" alt="CurseForge" Title="CurseForge" height="28px" style="filter: invert(1);"></a></li>
	  </ul>
	  </center>
	  <ul class="bar">
		  <li class="bar"><a href="/index.html">Blog</a></li>
		  <li class="bar"><a href="/portfolio/index.html" class="active">Portfolio</a></li>
		  <li class="bar"><a href="/mw/index.html">MiddleWorld</a></li>
		  <li style="float:right" class="bar"><a href="/about.html">About Me</a></li>
	  </ul>
	  `;
	}
}

class HeaderGeneric extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <center>
	  <p><img src="/benthehun1.svg" alt="BenTheHun1" width=40%></p>
	  <ul class="contact">
		  <li class="contact"><a href="mailto:benhunsicker1@gmail.com" class="contact"><img src="/img/mail.ico" alt="Email" Title="Email"></a></li>
		  <li class="contact"><a href="https://twitter.com/benthehun1" class="contact"><img src="/img/tweet.ico" alt="Twitter" Title="Twitter"></a></li>
		  <li class="contact"><a href="https://www.youtube.com/@BenTheHun1" class="contact"><img src="/img/yt.png" alt="YouTube" Title="YouTube"></a></li>
		  <li class="contact"><a href="https://github.com/BenTheHun1" class="contact"><img src="/img/git.ico" alt="GitHub" Title="GitHub"></a></li>
		  <li class="contact"><a href="https://www.twitch.tv/benthehun1" class="contact"><img src="/img/twitch.png" alt="Twitch" Title="Twitch"></a></li>
		  <li class="contact"><a href="https://www.curseforge.com/members/benthehun1" class="contact"><img src="/img/anvil.svg" alt="CurseForge" Title="CurseForge" height="28px" style="filter: invert(1);"></a></li>
	  </ul>
	  </center>
	  <ul class="bar">
		  <li class="bar"><a href="/index.html">Blog</a></li>
		  <li class="bar"><a href="/portfolio/index.html">Portfolio</a></li>
		  <li class="bar"><a href="/mw/index.html">MiddleWorld</a></li>
		  <li style="float:right" class="bar"><a href="/about.html">About Me</a></li>
	  </ul>
	  `;
	}
}

class HeaderVerse extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <center>
	  <p><img src="/benthehun1.svg" alt="BenTheHun1" width=40%></p>
	  <ul class="contact">
		  <li class="contact"><a href="mailto:benhunsicker1@gmail.com" class="contact"><img src="/img/mail.ico" alt="Email" Title="Email"></a></li>
		  <li class="contact"><a href="https://twitter.com/benthehun1" class="contact"><img src="/img/tweet.ico" alt="Twitter" Title="Twitter"></a></li>
		  <li class="contact"><a href="https://www.youtube.com/@BenTheHun1" class="contact"><img src="/img/yt.png" alt="YouTube" Title="YouTube"></a></li>
		  <li class="contact"><a href="https://github.com/BenTheHun1" class="contact"><img src="/img/git.ico" alt="GitHub" Title="GitHub"></a></li>
		  <li class="contact"><a href="https://www.twitch.tv/benthehun1" class="contact"><img src="/img/twitch.png" alt="Twitch" Title="Twitch"></a></li>
		  <li class="contact"><a href="https://www.curseforge.com/members/benthehun1" class="contact"><img src="/img/anvil.svg" alt="CurseForge" Title="CurseForge" height="28px" style="filter: invert(1);"></a></li>
	  </ul>
	  </center>
	  <ul class="bar">
		  <li class="bar"><a href="/index.html">Blog</a></li>
		  <li class="bar"><a href="/portfolio/index.html">Portfolio</a></li>
		  <li class="bar"><a href="/mw/index.html" class="active">MiddleWorld</a></li>
		  <li style="float:right" class="bar"><a href="/about.html">About Me</a></li>
	  </ul>
	  `;
	}
}

class HeaderAdv extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  	<ul class="bar">
		<li style="float:right" class="bar"><a href="/portfolio/index.html">Back to: Portfolio</a></li>
		<li class="bar"><a href="" class="active">Advent</a></li>
		</ul>
		<p></p>
	  `;
	}
}

class HeaderIF extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  	<ul class="bar">
		<li style="float:right" class="bar"><a href="/games/index.html">Back to: Projects</a></li>
		<li class="bar"><a href="" class="active">Interactive Fiction Hub</a></li>
		</ul>
		<p></p>
	  `;
	}
}
  
customElements.define('header-component', HeaderWW);
customElements.define('head-portfolio', HeaderPort);
customElements.define('head-verse', HeaderVerse);
customElements.define('head-advent', HeaderAdv);
customElements.define('head-if', HeaderIF);
customElements.define('head-generic', HeaderGeneric);