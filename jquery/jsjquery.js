$(function () {
    function fun(a, b, c, d) {
        let boxs = $(a)
        let imgs = $(b)
        boxs.each(function (index, value) {
            // console.log(index,value)
            value.onmousemove = function () {
                boxs.removeClass(c)
                imgs.removeClass(d)
                boxs.eq(index).addClass(c)
                imgs.eq(index).addClass(d)
            }
        })
    }

    function fu(a, b, c, d) {
        let boxs = $(a)
        let imgs = $(b)
        boxs.each(function (index, value) {
            // console.log(index,value)
            value.onmousemove = function () {
                boxs.removeClass(c)
                imgs.removeClass(d)
                boxs.eq(index).addClass(c)
                imgs.eq(index).addClass(d)
            }
            value.onmouseleave = function () {
                imgs.eq(index).on('mousemove', function () {
                    boxs.eq(index).addClass(c)
                    imgs.eq(index).addClass(d)
                })
                boxs.removeClass(c)
                imgs.removeClass(d)
            }
            imgs.eq(index).on('mouseleave', function () {
                boxs.removeClass(c)
                imgs.removeClass(d)
            })
        })
    }

    {
        fun('.jiadiank .jiadianyou div', '.jiadiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
        fun('.zhinengk .jiadianyou div', '.zhinengk .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
        fun('.dapeik .jiadianyou div', '.dapeik .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
        fun('.peijiank .jiadianyou div', '.peijiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
        fun('.zhoubiank .jiadianyou div', '.zhoubiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
        fu('.liebiao11 ul li', '.liebiao2 ul', 'liebian11bian', 'liexian')
    }


    {
        let imgs = $('.ban li')
        let left = $('.hua1')
        let right = $('.hua2')
        let circles = $('.lunbo ul li')
        let now = 0, text = 0;
        circles.each(function (index, value) {
            value.onclick = function () {
                circles[now].classList.remove('lunbodian1')
                circles[index].classList.add('lunbodian1')
                imgs[now].classList.remove('banxian')
                imgs[index].classList.add('banxian')
                now = index
            }
        })
        left.on('click', function () {
            text = now - 1
            if (text < 0) {
                text = imgs.length - 1
            }
            circles[now].classList.remove('lunbodian1')
            circles[text].classList.add('lunbodian1')
            imgs[now].classList.remove('banxian')
            imgs[text].classList.add('banxian')
            now = text
        })
        right.on('click', function () {
            text = now + 1
            if (text >= imgs.length) {
                text = 0
            }
            circles[now].classList.remove('lunbodian1')
            circles[text].classList.add('lunbodian1')
            imgs[now].classList.remove('banxian')
            imgs[text].classList.add('banxian')
            now = text
        })
    }


    {
        let danpin = $('.danpin')
        let danpinc = $('.danpinchang')
        let width = danpin[0].clientWidth
        let jian = $('.xinpinzuoyou')
        let left = jian.eq(0)
        let right = jian.eq(1)
        // console.log(right)
        let flag = true

        function move() {
            let lef = danpinc[0].offsetLeft
            if (lef == 0) {
                danpinc.animate({left: -width}, 2000, function () {
                    flag = true
                })
                right.removeClass('you')
                left.addClass('you')
            } else {
                danpinc.animate({left: 0}, 2000, function () {
                    flag = true
                })
                left.removeClass('you')
                right.addClass('you')
            }
        }

        left.on("click", function () {
            let lef = danpinc.offsetLeft
            if (lef != 0) {
                if (flag) {
                    flag = false
                    move()
                }
            }
        })
        right.on('click', function () {
            let lef = danpinc.offsetLeft
            if (lef == 0) {
                if (flag) {
                    flag = false
                    move()
                }
            }
        })
        let t = setInterval(move, 6000)
        danpin.on('mousemove', function () {
            clearInterval(t)
        })
        danpin.on('mouseleave', function () {
            t = setInterval(move, 6000)
        })
    }


    {
        function fun(a, b, c, d, e) {
            let banner = $(a)
            let img = $(b)
            let imgs = $(c)
            let cirs = $(d)
            let jians = $(e)
            let width = banner[0].clientWidth
            let n = 0, f = true;
            let tule = img.offsetLeft

            // console.log(tule)
            function mo(moren = 'r') {
                if (moren == 'r') {
                    n++
                    if (n >= imgs.length) {
                        n = 0
                    }
                } else {
                    n--
                    if (n < 0) {
                        n = imgs.length - 1
                    }
                }
                img.animate({left: -width * n}, function () {
                    f = true
                })
                cirs.removeClass('neirongzi162')
                cirs[n].classList.add('neirongzi162')
            }

            jians[0].onclick = function () {
                var tule = img.offsetLeft
                if (tule != 0) {
                    f = false
                    mo('l')
                }
            }
            jians[1].onclick = function () {
                var tule = img.offsetLeft
                if (tule != -width * 2) {
                    f = false
                    mo()
                }
            }
            cirs.each(function (index, value) {
                value.onclick = function () {
                    img.animate({left: -width * index}, function () {
                        f = true
                    })
                    cirs.removeClass('cxuan')
                    value.classList.add('cxuan')
                    n = b;
                }
            })
        }

        fun('.repingb .neirongzi1', '.repingb .neironghuan', '.repingb .neironghuan li', '.repingb .neirongzi16 div', '.repingb .neironghuadong div')
        fun('.repinga .neirongzi1', '.repinga .neironghuan', '.repinga .neironghuan li', '.repinga .neirongzi16 div', '.repinga .neironghuadong div')
        fun('.repingc .neirongzi1', '.repingc .neironghuan', '.repingc .neironghuan li', '.repingc .neirongzi16 div', '.repingc .neironghuadong div')
        fun('.repingd .neirongzi1', '.repingd .neironghuan', '.repingd .neironghuan li', '.repingd .neirongzi16 div', '.repingd .neironghuadong div')
    }


    {
        let tan = $('.spl')
        let tanz = $('.spfl')
        let zo = $('.spfl')
        // console.log(zo)
        let tanchu = $('.spfl ul')
        // console.log(tan,tanchu)
        tan.on('mouseenter', function () {
            tanchu.animate({height: 230}, 500)
        })
        tanz.on('mouseleave', function () {
            tanchu.animate({height: 0}, 500)
        })
    }

    $('.gwc').mouseenter(function () {
        $('.gjxg').show();
    })
    $('.gwc').mouseleave(function () {
        $('.gjxg').hide();
    })

})