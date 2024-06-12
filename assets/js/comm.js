// Header
const headerEl = document.querySelector('#header')
let lastScrollY = 0

// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
    'scroll',
    _.throttle(function () {
        const currentScrollY = window.scrollY

        console.log('현재 : ' + currentScrollY)
        console.log('마지막 : ' + lastScrollY)

        if (currentScrollY > 200) {
            headerEl.classList.add('bg-w')

            gsap.to(headerEl, {
                backgroundColor: 'white',
                duration: 0.5,
            })
            //스크롤 방향에 따라 헤더 숨김/보임

            if (currentScrollY > lastScrollY) {
                //스크롤 다운
                gsap.to(headerEl, {
                    y: -70,
                    duration: 0.5,
                })
            } else {
                //스크롤업
                gsap.to(headerEl, {
                    y: 0,
                    duration: 0.5,
                })
            }
        } else {
            headerEl.classList.remove('bg-w')
            gsap.to(headerEl, {
                backgroundColor: 'transparent',
                color: 'white',
                duration: 0.5,
            })
        }
        lastScrollY = currentScrollY
    }, 300),
)
