let nav1=document.querySelector('.nav3');
let toggle=document.querySelector('.toggle');
toggle.addEventListener('click',()=>{
  if(nav1.classList.contains('nav2')){
    nav1.classList.remove('nav2');
  }else{
    nav1.classList.add('nav2');
  }
 
});

let exp_pro_edu=document.querySelector('.exp-edu-pro');
let left=document.querySelector('.left');
let right=document.querySelector('.right');
let html=[` <section id="experience">
      <h2>Experience</h2>
      <div class="experience">
        <div class="item">
          <h3>intern,Algerinne Des Eaux - Annaba, Algeria </h3>
          <p><strong>03-2023 – Present</strong></p>
          <p><strong> &#183;</strong> Analyzed water samples physicochemical methods to ensure water quality.</p>

        </div>
        <div class="item">
          <h3>intern, sider El Hadjar, Annaba, Algeria </h3>
          <p><strong>Dec 2022 – present</strong></p>
          <p><strong> &#183;</strong> Gained hands-on experience with metallurgical testing techniques, including
            quality control procedures and standard analytical methods.</p>

        </div>
        <div class="item">
          <h3>intern, Sonatrach - skikda, Algeria </h3>
          <p><strong>July 2022 – present</strong></p>
          <p><strong> &#183;</strong> Learned the essential stages of crude oil refining, from desalting and distilation
            to the treatment of finished products.</p>

        </div>

        <div class="item">
          <h3>intern, sidal - Algiers, Algeria </h3>
          <p><strong>Mar 2022 – present</strong></p>
          <p><strong> &#183;</strong> Aquired the necessary know -how to control the quality of medicines while adhering
            to good loboratory practices.</p>

        </div>
      </div>
    </section>`,` <section id="education">
    <h2>Education</h2>
    <div class="education">
      <div class="item">
        <h3>Ms process Engineer</h3>
        <p><strong>Ecole polytechnique de Constantine</strong> | Sept 2018 – July 2023</p>
        <p> <strong> &#183;</strong> Gained multidisciplinary trianing in process in process engineering. with focus
          areas in chemical, pharmaceutical and
          environmental applications.
        </p>
        <p><strong> &#183;</strong> Graduated witb distinction and was one of the top-ranking students.
        </p>
      </div>
    </div>
  </section>`,`<section id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <div class="item">
        <h3>Final year project-National Polytechnic School of Constantine</h3>
        <p><strong>Title:</strong> lonotropic gelation of essential oils for the development of bio-patces aimed at
          wound healing</p>
        <p><strong> &#183;</strong> conducted characterization studies of essential oils and encapsulated formultions
        </p>
        <p><strong> &#183;</strong> Participated in startup training programs and patent developement as part of
          innovative project initiative.</p>

      </div>

    </div>
  </section>`];
  exp_pro_edu.innerHTML=html[0];
  let i=0;
  left.addEventListener('click',()=>{
   i-=1;
   if(i<0){
    i=0;
   }
   exp_pro_edu.innerHTML=html[i];
  });
  right.addEventListener('click',()=>{
    i+=1;
    if(i>2){
     i=2;
    }
    exp_pro_edu.innerHTML=html[i];
   });
   
   let exp=document.querySelector('.exp');
   exp.addEventListener('click',()=>{
    exp_pro_edu.innerHTML=html[0];
   });
   let edu=document.querySelector('.edu');
   edu.addEventListener('click',()=>{
    exp_pro_edu.innerHTML=html[1];
   });
   let pro=document.querySelector('.pro');
   pro.addEventListener('click',()=>{
    exp_pro_edu.innerHTML=html[2];
   });