class Bird{
    constructor(data){
        Object.assign(this,data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeemSwiped = true
    }

    getBirdHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="info">
                    <h4> ${name}, ${age} </h4>
                    <div class="bio" >
                        ${bio}
                    </div>
                </div>
                
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background:url(${avatar}) no-repeat; background-position: center; background-size: cover;"></div>

                <div class="status"></div>
            </div>`
    }
}

export default Bird