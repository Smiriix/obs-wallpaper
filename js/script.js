document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.querySelector(".wallpaper--list__grid");
    fetch('https://api.github.com/repos/Smiriix/smiriix.github.io/contents/images?ref=main')
    .then(data => data.json())
    .then(result => {
        console.log(result);
    })
});