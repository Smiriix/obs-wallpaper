document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.querySelector(".wallpaper--list__grid");

    fetch('https://api.github.com/repos/Smiriix/obs-wallpaper/contents/assets/wallpaper?ref=main')
    .then(data => data.json())
    .then(result => {
        console.log(result);
        if(result.length){
            result.forEach(item => {
                const imgItem = document.createElement("img");
                imgItem.src = item.download_url;
                imgItem.dataset.name = item.name;
                imgItem.addEventListener("click", () => {
                    let copyText = document.createElement("input");
                    copyText.value = item.download_url;
                    document.body.appendChild(copyText);
                    copyText.select();
                    document.execCommand("copy");
                    alert("Ссылка на изображение было скопировано");
                    copyText.remove();
                });
                listWrapper.appendChild(imgItem);
            });
        }
    })
});