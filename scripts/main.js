const headings=document.querySelectorAll('.main_container .heading .sub_title .text')
const grids=document.querySelectorAll('.columns')

function enterScreen(index){
    const grid=grids[index]
    const heading=headings[index]
    heading.classList.remove('animate-before','animate-after')
}

function exitScreen(index, exitDelay){
    const heading=headings[index]
    heading.classList.add('animate-after')

}

function setupAnimationCycle({timePerScreen, exitDelay}){
    const cycleTime=timePerScreen + exitDelay
    let nextIndex=0

    function nextCycle(){
        const currentIndex=nextIndex
        enterScreen(currentIndex)

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

        nextIndex=nextIndex >= grids.length-1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle,cycleTime)
}
setupAnimationCycle({
timePerScreen:2000,
exitDelay: 200 * 7

})
