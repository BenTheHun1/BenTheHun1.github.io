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

class HeaderAbout extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <center>
	  <p><img src="/benthehun1.svg" alt="BenTheHun1" width=40%></p>
	  </center>
	  <ul class="bar">
		  <li class="bar"><a href="/index.html">Blog</a></li>
		  <li class="bar"><a href="/portfolio/index.html">Portfolio</a></li>
		  <li class="bar"><a href="/mw/index.html">MiddleWorld</a></li>
		  <li style="float:right" class="bar"><a href="/about.html" class="active">About Me</a></li>
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
		<li style="float:right" class="bar"><a href="/portfolio/index.html">Back to: Portfolio</a></li>
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
customElements.define('head-about', HeaderAbout);