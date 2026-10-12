document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.querySelector(".wallpaper--list__grid");

    fetch('./../list.json')
        .then(data => data.json())
        .then(result => {
            // console.log(result);
            if (result.length) {
                result.forEach(item => {
                    const imgItem = new Image();
                    imgItem.onload = () => {
                        imgItem.addEventListener("click", () => {
                            let copyText = document.createElement("input");
                            copyText.value = `https://smiriix.github.io/obs-wallpaper/wallpaper.html?image=${item}`;
                            document.body.appendChild(copyText);
                            copyText.select();
                            document.execCommand("copy");
                            alert("Ссылка на изображение было скопировано");
                            copyText.remove();
                        });
                        listWrapper.appendChild(imgItem);
                    }

                    imgItem.src = item;
                });
            }
        })
});