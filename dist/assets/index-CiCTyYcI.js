(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function m(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const K=[" █████╗ ██████╗ ██╗  ██╗██╗     ██╗██╗████████╗","██╔══██╗██╔══██╗██║  ██║██║     ██║██║╚══██╔══╝","███████║██████╔╝███████║██║     ██║██║   ██║   ","██╔══██║██╔══██╗██╔══██║██║██   ██║██║   ██║   ","██║  ██║██████╔╝██║  ██║██║╚█████╔╝██║   ██║   ","╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝ ╚════╝ ╚═╝   ╚═╝   ","                                               ","██████╗  █████╗ ████████╗██╗██╗                ","██╔══██╗██╔══██╗╚══██╔══╝██║██║                ","██████╔╝███████║   ██║   ██║██║                ","██╔═══╝ ██╔══██║   ██║   ██║██║                ","██║     ██║  ██║   ██║   ██║███████╗           ","╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝╚══════╝           "],V="Abhijit Patil",J="guest",Y="AbhijitShell",Q="112358",X="https://github.com/abhijit-23blaze",Z={email:"abhijiiitpatil@gmail.com",github:"github.com/abhijit-23blaze",linkedin:"https://www.linkedin.com/in/abhijiiitpatil/"},ee="0meow000meow0meow0meowmeowmeowmeow0000meowmeowmeow0meow000meowmeowmeow00meow00meowmeow0000meow0meowmeow000meowmeow0meowmeowmeow0meow0000meow000000meowmeow0000meow00meow000000meowmeowmeow00meowmeow0meowmeow00meow0meow0meowmeow000meowmeow0meowmeow00meow0meow0meowmeowmeow00meow00meowmeow00meow0meow0meowmeowmeow0meow0000meow000000meowmeow0meow00meow0meowmeow0meowmeow0meow0meowmeow0000meow0meowmeow00meowmeowmeow0meowmeow00meow0meow00meow000000meowmeow00meowmeow00meowmeowmeow00meow00meowmeow0meowmeowmeowmeow0meowmeow0meowmeow0meow00meow000000meowmeowmeow0meow000meowmeow0meow0000meowmeow0meow00meow0meowmeowmeow00meowmeow00meow000000meowmeowmeow00meowmeow0meowmeow00meow0meow0meowmeowmeow00meow00meowmeowmeow0meowmeow00meowmeow00meow0meow0meowmeowmeow00meow000meow0meowmeow0000meow000000meowmeow0000meow0meowmeow0meowmeowmeow00meowmeow00meow0000meow000000meowmeowmeow0meow000meowmeow0meow0000meowmeowmeowmeow00meow00meow000000meowmeow000meowmeow0meowmeow0meowmeow000meowmeowmeow0meow0meow0meowmeow00meow0meow00meow000000meowmeowmeow0meowmeowmeow0meowmeow0meow00meow0meowmeow0meowmeow000meowmeow0meowmeow0000meow000000meowmeow000meow00meowmeow00meow0meow00meow000000meowmeow0meow0000meowmeow0meow00meow0meowmeow00meow000meowmeow00meow000meowmeow00meow0meow0meowmeow0meowmeowmeow000meow000000meowmeow0meow00meow0meowmeow0meowmeowmeow000meow000000meowmeow0meow00meow0meowmeowmeow0meow00",oe="There is a chain of Easter Eggs hidden in this website, find the sudo password and earn my respect forever (～￣▽￣)～",te="P.S : I am a big fan of Japanese cats !! ^_^",re="Hello I am Abhijit Patil 🖐️, a passionate developer from India.",se="I have interests over numerous domine of computer science so don't judge me just now",ne="Check out my projects by typing 'projects' + enter to understand me better 😊",me=[["sems"],["Agro something"]],ae={background:"#090300",foreground:"#D6D5D4",banner:"#807D7C",border:{visible:!0,color:"#807D7C"},prompt:{default:"#01A0E4",user:"#F7F7F7",host:"#01A252",input:"#FDED02"},link:{text:"#B6AAEE",highlightColor:"#FFADE2",highlightText:"#0C0623"},commands:{textColor:"#8E1EFF"}},t={ascii:K,title:V,username:J,hostname:Y,password:Q,repoLink:X,social:Z,neko:ee,hackme:oe,hackme1:te,aboutGreeting:re,aboutSkills:se,aboutSkills1:ne,projects:me,colors:ae};(()=>{const e=document.createElement("style"),o=document.head,n=`body {background: ${t.colors.background}}`,m=`body {color: ${t.colors.foreground}}`,r=`input {background: ${t.colors.background}}`,c=`input {color: ${t.colors.prompt.input}}`,p=`.output {color: ${t.colors.prompt.input}}`,T=`#pre-host {color: ${t.colors.prompt.host}}`,i=`#host {color: ${t.colors.prompt.host}}`,M=`#pre-user {color: ${t.colors.prompt.user}}`,x=`#user {color: ${t.colors.prompt.user}}`,U=`#prompt {color: ${t.colors.prompt.default}}`,F=`pre {color: ${t.colors.banner}}`,W=`a {color: ${t.colors.link.text}}`,_=`a:hover {background: ${t.colors.link.highlightColor}}`,q=`a:hover {color: ${t.colors.link.highlightText}}`,G=`.command {color: ${t.colors.commands.textColor}}`,z=`.keys {color: ${t.colors.banner}}`;o.appendChild(e),e.sheet&&(e.sheet.insertRule(`#bars {background: ${t.colors.background}}`),e.sheet.insertRule(`main {border-color: ${t.colors.border.color}}`),e.sheet.insertRule(`#bar-1 {background: ${t.colors.border.color}; color: ${t.colors.background}}`),e.sheet.insertRule(`#bar-2 {background: ${t.colors.border.color}}`),e.sheet.insertRule(`#bar-3 {background: ${t.colors.border.color}}`),e.sheet.insertRule(`#bar-4 {background: ${t.colors.border.color}}`),e.sheet.insertRule(`#bar-5 {background: ${t.colors.border.color}}`),e.sheet.insertRule(n),e.sheet.insertRule(m),e.sheet.insertRule(r),e.sheet.insertRule(c),e.sheet.insertRule(p),e.sheet.insertRule(T),e.sheet.insertRule(i),e.sheet.insertRule(M),e.sheet.insertRule(x),e.sheet.insertRule(U),e.sheet.insertRule(F),e.sheet.insertRule(W),e.sheet.insertRule(_),e.sheet.insertRule(q),e.sheet.insertRule(G),e.sheet.insertRule(z))})();const ie={commands:[["'about'","Who made this website?"],["'projects'","Maybe there's something interesting."],["'whoami'","A perplexing question."],["'sudo'","???"],["'Hackme'","??Hecker ⊙﹏⊙∥"],["'repo'","View the Github Repository."],["'banner'","Display the banner."],["'clear'","Clear the terminal."]]},ce=()=>{const e=[];return e.push("<br>"),ie.commands.forEach(o=>{const n="&nbsp;";let m="";m+=n.repeat(2),m+="<span class='command'>",m+=o[0],m+="</span>",m+=n.repeat(17-o[0].length),m+=o[1],e.push(m)}),e.push("<br>"),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e.push("<br>"),e},le=ce(),we=()=>{const e=[];return e.push("<br>"),t.ascii.forEach(o=>{let n="";for(let r=0;r<o.length;r++)o[r]===" "?n+="&nbsp;":n+=o[r];let m=`<pre>${n}</pre>`;e.push(m)}),e.push("<br>"),e.push("Welcome to WebShell v1.0.0"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e.push("<br>"),e},j=we(),ue=()=>{const e=[],o="&nbsp;",n="Email",m="Github",r="Linkedin",c=`<i class='fa-solid fa-envelope'></i> ${n}`,p=`<i class='fa-brands fa-github'></i> ${m}`,T=`<i class='fa-brands fa-linkedin'></i> ${r}`;let i="";return e.push("<br>"),e.push(t.aboutGreeting),e.push(t.aboutSkills),e.push(t.aboutSkills1),e.push("<br>"),i+=o.repeat(2),i+=c,i+=o.repeat(17-n.length),i+=`<a target='_blank' href='mailto:${t.social.email}'>${t.social.email}</a>`,e.push(i),i="",i+=o.repeat(2),i+=p,i+=o.repeat(17-m.length),i+=`<a target='_blank' href='${t.social.github}'>${t.social.github}</a>`,e.push(i),i="",i+=o.repeat(2),i+=T,i+=o.repeat(17-r.length),i+=`<a target='_blank' href='${t.social.linkedin}'>${t.social.linkedin}</a>`,e.push(i),e.push("<br>"),e},he=ue(),pe=()=>{const e=["<br>","COMMAND NOT FOUND","Type <span class='command'>'help'</span> to get started.","<br>"],o=[];return e.forEach(n=>{o.push(n)}),o},de=pe(),be=()=>{let e="";const o=[],n=`${t.projects.length} File(s)`,m="&nbsp;";return o.push("<br>"),t.projects.forEach(r=>{let c=`<a href="${r[2]}" target="_blank">${r[0]}</a>`;e+=m.repeat(2),e+=c,e+=m.repeat(17-r[0].length),e+=r[1],o.push(e),e=""}),o.push("<br>"),o.push(n),o.push("<br>"),o},fe=be(),R={message:[["In the kaleidoscope of existence,","I am but a reflection questioning the enigma - "],["Amidst cosmic whispers,","I navigate the maze of self-discovery,","echoing the eternal refrain - "],["In the symphony of life,","I am a note inquiring its own melody,","harmonizing with the universal query - "],["As stardust contemplating its journey,","I ponder the cosmic query,","silently asking - "],["In the tapestry of reality,","I am the thread of self-inquiry,","weaving through the eternal question - "]]},ge=()=>{const e=[],o=Math.floor(Math.random()*R.message.length);return e.push("<br>"),R.message[o].forEach((n,m)=>{m===R.message[o].length-1&&(n+="<span class='command'>who am I?</span>"),e.push(n)}),e.push("<br>"),e},ke=()=>{const e=[];return e.push("<br>"),e.push(t.hackme),e.push(t.hackme1),e.push("<br>"),e.push("<br>"),e},ye=ke(),Ee=()=>{const e=[];return e.push("<br>"),e.push(t.neko),e.push("<br>"),e.push("<br>"),e},Ie=Ee();let w=document.getElementById("write-lines"),h=0,P="",u,E=!1,$=!1,v=0,l=!1;const b=w,f=document.getElementById("terminal"),a=document.getElementById("user-input"),g=document.getElementById("input-hidden"),k=document.getElementById("password-input"),y=document.getElementById("password-field"),N=document.getElementById("pre-host"),A=document.getElementById("pre-user"),L=document.getElementById("host"),D=document.getElementById("user"),I=document.getElementById("prompt"),Te=["help","about","projects","whoami","repo","banner","clear","hackme"],d=[],Re=t.password,ve=t.repoLink,B=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function S(e){const o=e.key;switch(o){case"Enter":e.preventDefault(),$?Ne():Se(),B();break;case"Escape":a.value="";break;case"ArrowUp":O(o),e.preventDefault();break;case"ArrowDown":O(o);break;case"Tab":$e(),e.preventDefault();break}}function Se(){if(!w||!I)return;const e="";let o;if(u=a.value,l?o=u:o=`<span class='output'>${u}</span>`,d.push(u),h=d.length,u==="clear"){C(u.toLowerCase().trim()),a.value=e,u=e;return}const n=document.createElement("div");n.innerHTML=`<span id="prompt">${I.innerHTML}</span> ${o}`,w.parentNode&&w.parentNode.insertBefore(n,w),u.trim().length!==0&&C(u.toLowerCase().trim()),a.value=e,u=e}function $e(){let e=a.value;for(const o of Te)if(o.startsWith(e)){a.value=o;return}}function O(e){switch(e){case"ArrowDown":h!==d.length&&(h+=1,a.value=d[h],h===d.length&&(a.value=P));break;case"ArrowUp":h===d.length&&(P=a.value),h!==0&&(h-=1,a.value=d[h]);break}}function C(e){if(e.startsWith("rm -rf")&&e.trim()!=="rm -rf"){E?e==="rm -rf src"&&!l?(l=!0,setTimeout(()=>{!f||!b||(f.innerHTML="",f.appendChild(b),w=b)}),Ae(),setTimeout(()=>{s(["What made you think that was a good idea?","<br>"])},200),setTimeout(()=>{s(["Now everything is ruined. (P.S : you succesfully hacked the website, send me this image and claim your respect)","<br>"])},1200)):s(e==="rm -rf src"&&l?["there's no more src folder.","<br>"]:l?["What else are you trying to delete?","<br>"]:["<br>","Directory not found.","type <span class='command'>'ls'</span> for a list of directories.","<br>"]):s(["Permission not granted.","<br>"]);return}switch(e){case"clear":setTimeout(()=>{!f||!b||(f.innerHTML="",f.appendChild(b),w=b)});break;case"banner":if(l){s(["WebShell v1.0.0","<br>"]);break}s(j);break;case"help":if(l){s(["maybe restarting your browser will fix this.","<br>"]);break}s(le);break;case"whoami":if(l){s([`${t.username}`,"<br>"]);break}s(ge());break;case"about":if(l){s(["Nothing to see here.","<br>"]);break}s(he);break;case"projects":if(l){s(["I don't want you to break the other projects.","<br>"]);break}s(fe);break;case"repo":s(["Redirecting to github.com...","<br>"]),setTimeout(()=>{window.open(ve,"_blank")},500);break;case"hackme":if(l){s(["Nothing to see here.","<br>"]);break}s(ye);break;case"neko":if(l){s(["Nothing to see here.","<br>"]);break}s(Ie);break;case"linkedin":break;case"github":break;case"email":break;case"rm -rf":if(l){s(["don't try again.","<br>"]);break}s(E?["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>","<br>"]:["Permission not granted.","<br>"]);break;case"sudo":if(l){s(["no.","<br>"]);break}if(!k)return;$=!0,a.disabled=!0,g&&(g.style.display="none"),k.style.display="block",setTimeout(()=>{y.focus()},100);break;case"ls":if(l){s(["","<br>"]);break}s(E?["src","<br>"]:["Permission not granted.","<br>"]);break;default:if(l){s(["type 'help'","<br>"]);break}s(de);break}}function s(e){e.forEach((o,n)=>{Pe(o,n)})}function Pe(e,o){setTimeout(()=>{if(!w)return;const n=document.createElement("p");n.innerHTML=e,w.parentNode.insertBefore(n,w),B()},40*o)}function H(){!g||!k||(y.value="",a.disabled=!1,g.style.display="block",k.style.display="none",$=!1,setTimeout(()=>{a.focus()},200))}function Ne(){if(v===2){if(!g||!w||!k)return;s(["<br>","INCORRECT PASSWORD.","PERMISSION NOT GRANTED.","<br>"]),H(),v=0;return}if(y.value===Re){if(!w||!w.parentNode)return;s(["<br>","PERMISSION GRANTED.","Try <span class='command'>'rm -rf'</span>","<br>"]),H(),E=!0;return}else y.value="",v++}function Ae(){const e=document.getElementById("bars"),o=document.body,n=document.getElementById("main"),m=document.getElementsByTagName("span");if(e){e.innerHTML="",e.remove(),n&&(n.style.border="none"),o.style.backgroundColor="black",o.style.fontFamily="VT323, monospace",o.style.fontSize="20px",o.style.color="white";for(let r=0;r<m.length;r++)m[r].style.color="white";a.style.backgroundColor="black",a.style.color="white",a.style.fontFamily="VT323, monospace",a.style.fontSize="20px",I&&(I.style.color="white")}}const Le=()=>{L&&(L.innerText=t.hostname),D&&(D.innerText=t.username),N&&(N.innerText=t.hostname),A&&(A.innerText=t.username),window.addEventListener("load",()=>{s(j)}),a.addEventListener("keypress",S),a.addEventListener("keydown",S),y.addEventListener("keypress",S),window.addEventListener("click",()=>{a.focus()}),console.log(`%cPassword: ${t.password}`,"color: red; font-size: 20px;")};Le();
