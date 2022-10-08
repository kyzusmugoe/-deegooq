document.addEventListener('DOMContentLoaded', () => {
    //#region 頁面控制 套院pageBtn按鈕配合取得datasets中的ID資料即可切換頁面
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


 

    //Q1 購買清單
    const q1=()=>{
        document.querySelector("#Q1PlayMp3").addEventListener("click", ()=>{
            let mp3 = new Audio()
            mp3.src="./mp3/Q1.mp3"
            mp3.addEventListener("canplaythrough",()=>{
                mp3.play()
            })
            mp3.addEventListener('ended', ()=>{
                openPage("#Q2-1")
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
        
        const a1 = [9,4,2,7,8]//正確答案
        let a2 = []//回答的收集容器

        const renderMySelection = ()=>{
            document.querySelector(".mySelection").innerHTML = a2.toString()   
        }
        
        document.querySelector("#Q2PlayMp3").addEventListener("click", ()=>{
            let mp3 = new Audio()
            mp3.src="./mp3/87249.mp3"
            mp3.addEventListener("canplaythrough",()=>{
                mp3.play()
            })
            mp3.addEventListener('ended', ()=>{
                openPage("#Q2-2")
            })
        })

        document.querySelectorAll(".Q2-2_numbers").forEach(btn=>{
            btn.addEventListener("click", event=>{
                const num = event.target.dataset.num
                a2.push(num)                
                renderMySelection()                
                if(a2.length == 5){
                    if(a1.toString() == a2.toString()){
                        alert("答對了")
                    }else{
                        alert("答錯了")
                    }
                    a2 = []//清空

                    openPage("#Q3-1")
                }
            })
        })
    } 

    //Q3 執行力-大家來找碴
    const q3 = ()=>{
        //按鈕位置使用百分比定位，radius決定觸碰區域的大小，也是使用百分比
        const board = document.querySelector("#Q3-3 .board")
        let ans=[]//蒐集使用者點擊過後的資料
        const cBtnPos=[
            {left:55, top:44, radius:12, txt:'枕頭少一個'},
            {left:52, top:60, radius:15, txt:'貓咪跑走了'},
            {left:34, top:80, radius:12, txt:'拖鞋方向錯了'},
            {left:76, top:72, radius:18, txt:'地毯形狀變了'},
            {left:2,  top:74, radius:12, txt:'椅子少一個'},
            {left:12, top:14, radius:12, txt:'雲少一朵'},
            {left:12, top:35, radius:12, txt:'蠟燭位置變了'},
            {left:33, top:35, radius:12, txt:'蠟燭位置變了'},
            {left:46, top:3,  radius:12, txt:'燈少一盞'},
            {left:78, top:5,  radius:12, txt:'畫少一幅'},
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
            document.querySelector("#Q3-3 div.message").innerHTML = ans.toString()
        }
        
        board.addEventListener('click', event=>{
            const _t = event.target
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

            setTimeout(() => {                
                if(ans.length == 5){
                    alert("答題結束")         
                    openPage("#Q4-1")
                    /*ans = [];
                    document.querySelector("#Q3-3 div.message").innerHTML = ""
                    document.querySelectorAll("#Q3-3 div.board .cBtn.on").forEach(btn=>{
                        btn.classList.remove('on')
                    })*/
                }                
            }, 1000);
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
    document.querySelector(`#start`).style.display = "block"
    setBtnsHandler()
    q1()
    q2()
    q3()
    q4()
    q5()
})