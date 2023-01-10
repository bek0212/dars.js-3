let pas = document.querySelector('.pas__btn')
let raq = document.querySelector('.pas__raqam')
let kat = document.querySelector('.pas__kat')
let nuq = document.querySelector('.pas__nuqta')
pas.addEventListener('keyup', (e)=>{
    
    var abs = pas.value
    
    if(abs.includes('.')){
        raq.classList.add('gren')
    }
    else{
        raq.classList.remove('gren')
    }
    var val2 = pas.value
    var a = val2.toLowerCase()
    
    if(val2== a){
        kat.classList.remove('kat')
    }
    else{
        kat.classList.add('kat')
        
    }
  


    let arr = pas.value
    let split = arr.split('')
    split.forEach((e,i)=>{
        if(isNaN(e) == false){
            nuq.classList.add('nuq')
        }
        else{
            nuq.classList.remove('nuq')
        }
    })






})
/////////////////////////////////////////////////

let jm = ['malibu','matiz','kaptiva','tiko','nexia','jentra','kobalt','nexia3','damas','spark','tracker',]
let gm = document.querySelector('.search__btn')
let list = document.querySelector('.list')
let list1 = document.querySelector('.li1')
let bosh = ['malibu']

gm.addEventListener('keydown', ()=>{
    let fildata = jm.filter((e,f,x)=> e.includes(gm.value)==true)
    fildata.forEach(e=>{
        let newLi = document.querySelector('li')
        newLi.textContent = fildata
        list.appendChild(newLi)
    })
    
})






