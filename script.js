class letters extends HTMLElement {
    constructor(){
      super()
      this.literator = [...this.getAttribute("anim-text")?? "default-text"]
      this.currentValue = 0
      this.interval = this.getAttribute("interval") ?? 1000
      this.container = this
     this.i = setInterval(this.increase.bind(this),this.interval)
      this.animation()
    }
    animation(){
      this.literator.forEach(
        (element)=>{
          console.log(element)
                var l = document.createElement("div")
        l.innerText = element
        this.appendChild(l)
  
        }
  )
  
    }
  
    increase() {
      console.log(this.container)
      if (this.currentValue < this.children.length) {
        this.children[this.currentValue].classList.add("visible")
        this.currentValue++
      }
    else{
      console.log("stop");
    clearInterval(this.i)
    }
  }
  }

  customElements.define('letter-animation', letters);