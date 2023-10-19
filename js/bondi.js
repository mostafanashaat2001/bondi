let spanActive = document.querySelectorAll('.our-work .header span');
let spanType = document.querySelector('.our-work .data')

spanActive.forEach(span => {
    span.addEventListener('click' , (e) => {
        // handel active
        e.target.parentElement.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
            e.target.classList.add('active');
        })
        if(e.target.dataset.type === 'photo'){
            spanType.innerHTML = `
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-01.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-02.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-03.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-04.jpg" alt="">
              </div>
            </div>
            `
        }else if(e.target.dataset.type === 'all'){
            spanType.innerHTML = `
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-01.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-02.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-03.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-04.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-05.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-06.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-07.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-08.jpg" alt="">
              </div>
            </div>
            `
        }else if(e.target.dataset.type === 'design'){
            spanType.innerHTML = `
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-05.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-06.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-07.jpg" alt="">
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card" data-work="Application">
                <img src="images/work-08.jpg" alt="">
              </div>
            </div>
            `
        }
    })
})