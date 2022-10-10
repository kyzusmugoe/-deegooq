document.addEventListener('DOMContentLoaded', () => {
    //#region 頁面控制 套院pageBtn按鈕配合取得datasets中的ID資料即可切換頁面
    let collectData ={}
    const pages = document.querySelectorAll(".page")
    const btns = document.querySelectorAll(".pageBtn")

    //關閉所有頁面
    const closeAll = () => {
        pages.forEach(page => {
            page.style.display = "none"
        })
    }
    
    const openPage = pageID =>{
        closeAll()
        document.querySelector(pageID).style.display = "block"
    }
    

    //將所有的pageBtn設定click後的行為
    const setBtnsHandler = () => {
        btns.forEach(btn => {
            btn.addEventListener("click", event => {
                openPage(`#${event.currentTarget.dataset.id}`)
            })
        })
    }
    //#endregion

    //data collector
    const setDataCollector = (key, value)=>{
        collectData = {
            ...collectData,
            [key]:value
        }
        console.log(collectData)
    }
 

    //button group
    const setButtonGroup = ()=>{
        document.querySelectorAll(".button-group").forEach(btn=>{
            btn.addEventListener("click", event=>{
                const _t = event.currentTarget
                const _g = _t.dataset.group
                const _v = _t.dataset.value
                document.querySelectorAll(`.button-group[data-group=${_g}]`).forEach(gBtn=>{
                    gBtn.classList.remove('on')
                })
                _t.classList.add('on')
                setDataCollector(_g, _v)
            })
        })
    }


    const basic = ()=>{
        
    }

    //Q1 購買清單
    const q1=()=>{
        let sw = true
        const _progress =  document.querySelector("#Q1progress .bar")

        document.querySelector("#Q1PlayMp3").addEventListener("click", ()=>{
            if(!sw) return
            sw = false
            let mp3 = new Audio()
            mp3.src="./mp3/Q1.mp3"
            mp3.addEventListener("canplaythrough",()=>{
                mp3.play()
            })
            
            
            mp3.addEventListener('ended', ()=>{
                //openPage("#Q2-1")
                sw = true
                document.querySelector("#Q1isListened").removeAttribute("style")
                _progress.style.width = `${0}%`
            })
            
            mp3.addEventListener('timeupdate', ()=>{
                _progress.style.width = `${Math.floor((mp3.currentTime/mp3.duration)*100)}%`
            })
        })

        const needBuyList= []

        document.querySelectorAll('#Q1-4 .needBuy').forEach(btn=>{
            btn.addEventListener('click', event=>{
                event.target.disabled = true
                needBuyList.push(event.target.dataset.buy)
                console.log(needBuyList)
                if(needBuyList.length == 5){
                    alert("選完了")
                    openPage('#end')
                }
            })
        })
    }

    //Q2 執行力-聽語音點選數字
    const q2=()=>{        
        let sw = true;
        const a1 = [9,4,2,7,8]//正確答案
        let a2 = []//回答的收集容器
        let last
        const renderMySelection = ()=>{
            //document.querySelector(".mySelection").innerHTML = a2.toString()
            const sn = a2.length
            const _curent = document.querySelector(`.mySelection .Q2-2_answer:nth-child(${a2.length})`)
            _curent.classList.add('on', 'current')
            _curent.querySelector('.value').innerHTML = a2[a2.length-1]
            if(last){
                last.classList.remove('current')
            }
            last = _curent
        }
        
        document.querySelector("#Q2PlayMp3").addEventListener("click", ()=>{
            if(!sw) return
            sw = false
            let mp3 = new Audio()
            mp3.src="./mp3/87249.mp3"
            mp3.addEventListener("canplaythrough",()=>{
                mp3.play()
            })
            mp3.addEventListener('ended', ()=>{
                setTimeout(() => {
                    setDataCollector('Q2', a2)
                    openPage("#Q2-2")
                }, 1000);
            })
        })

        document.querySelectorAll(".Q2-2_numbers").forEach(btn=>{
            btn.addEventListener("click", event=>{                                
                if(a2.length < 5){
                    const num = event.target.dataset.num
                    a2.push(num)
                    renderMySelection()                
                    if(a2.length == 5){
                        setTimeout(() => {
                            openPage("#Q3-1")    
                        }, 1000);
                    }
                }
            })
        })
    } 

    //Q3 執行力-大家來找碴
    const q3 = ()=>{

        //計時器
        let Q3BTimer
        let Q3ATimer

        //按鈕位置使用百分比定位，radius決定觸碰區域的大小，也是使用百分比
        const BID = "Q3-4"
        const board = document.querySelector(`#${BID} .board`)
        let ans=[]//蒐集使用者點擊過後的資料

        const cBtnPos=[
            {left:55, top:44, radius:12, txt:'枕頭少了一個'},
            {left:52, top:60, radius:15, txt:'少了貓咪'},
            {left:34, top:80, radius:12, txt:'拖鞋方向變了'},
            {left:76, top:72, radius:18, txt:'地毯變圓的'},
            {left:2,  top:74, radius:12, txt:'凳子少一張'},
            {left:12, top:14, radius:12, txt:'窗外雲朵變了'},
            {left:26, top:35, radius:16, txt:'桌上蠟燭位置改變'},
           // {left:33, top:35, radius:12, txt:'蠟燭位置變了'},
            {left:46, top:3,  radius:12, txt:'吊燈少一個'},
            {left:78, top:5,  radius:12, txt:'牆上相框少一個'},

        ]
        
        cBtnPos.map(data=>{
            const _btn = document.createElement('div');
            board.appendChild(_btn)
            _btn.classList.add("cBtn")
            _btn.style.width = `${data.radius}%`
            //_btn.style.height = `${data.radius * (board.clientWidth / board.clientHeight)}%`
            _btn.style.height = `${data.radius * 1.49}%`
            _btn.style.left = `${data.left}%` 
            _btn.style.top = `${data.top}%`
            _btn.dataset.txt = data.txt
            //onsole.log(board.clientWidth / board.clientHeight)
        })

        const renderMesg = ()=>{
            const container = document.querySelector(`#${BID} div.message`)            
            while (container.firstChild) {
                container.removeChild(container.lastChild)
            }
            ans.map(a=>{
                const ansTxt = document.createElement('div')
                ansTxt.innerHTML = a
                container.appendChild(ansTxt)
            })
        }
        
        board.addEventListener('click', event=>{
            const _t = event.target
            if(ans.length >= 5) return

            if(_t.classList.contains('cBtn')){
                _t.classList.add('on')
                let aready = false
                ans.map(txt=>{
                    if(txt== _t.dataset.txt){
                        aready = true
                    }
                })
                if(!aready){
                    ans.push(_t.dataset.txt)
                }else{
                    console.log('已經按過了')
                }
            }else{
                ans.push('答錯了')
            }
            renderMesg()
           
            if(ans.length == 5){                
                setDataCollector('Q3', ans)
                clearInterval(Q3ATimer)
                setTimeout(() => {
                    openPage("#Q4-1")
                }, 1500);
            }       
        })
        
        const setTimer = (timer, ct, VID, endF)=>{
            let _ct = ct
            timer = setInterval(()=>{
                _ct--
                document.querySelector(VID).innerHTML = _ct
                if(_ct == 0){
                    endF()
                }
            }, 1000);
        }

        document.querySelector("#startQ3beforeTimer").addEventListener('click',()=>{
            setTimer(Q3BTimer, 30, "#Q3beforeTimer .value",()=>{
                openPage("#Q3-4")
                clearInterval(Q3BTimer)
                setTimer(Q3ATimer, 40, "#Q3AfterTimer .value",()=>{
                    openPage("#Q4-1")
                    clearInterval(Q3ATimer)
                    setDataCollector('Q3', ans)
                })
            })
        })
        
        document.querySelector("#startQ3AfterTimer").addEventListener('click',()=>{
            clearInterval(Q3BTimer)
            setTimer(Q3ATimer, 40, "#Q3AfterTimer .value",()=>{
                openPage("#Q4-1")
                clearInterval(Q3ATimer)
                setDataCollector('Q3', ans)
            })
        })
    }

    //Q4 選顏色
    const q4 = ()=>{
        const ans= ["紅","藍","綠","橙","紫"]
        let step = 0

        const renderQuestColor =()=>{
            document.querySelectorAll("#Q4-2 .questColor").forEach((color, index)=>{
                if(step == index){
                    color.classList.add('on')
                }else{
                    color.classList.remove('on')
                }
            })
        }
        document.querySelectorAll("#Q4-2 .colorBtn").forEach(btn=>{
            btn.addEventListener('click', event=>{
                console.log(event.currentTarget.dataset.color)
                if(event.currentTarget.dataset.color == ans[step]){
                    step++
                    alert("答對了!")
                    if(step ==5){
                        openPage("#Q5-1")
                    }
                    renderQuestColor()
                }else{
                    alert("答錯了!請重新作答")
                }
            })
        })
        renderQuestColor()
    }

    //q5 畫時鐘
    const q5 = ()=>{
        const canvas = document.querySelector("#drawCanvas");
        const signaturePad = new SignaturePad(canvas);
    }
    
    
    //init
    closeAll()
    //document.querySelector(`#start`).style.display = "block"
    document.querySelector(`#Q4-1`).style.display = "block"
    setBtnsHandler()
    setButtonGroup()
    
    basic()
    q1()
    q2()
    q3()
    q4()
    q5()
})