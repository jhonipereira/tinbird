const birds = []

for(let i = 0; i<10; i++){
    birds.push ( {
        name: "Bird"+(Math.random() + 1).toString(36).substring(7),
        avatar: `assets/pictures/${i+1}.jpg`,
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    })
}

export default birds