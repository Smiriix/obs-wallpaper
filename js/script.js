document.addEventListener("DOMContentLoaded", () => {
    const listWrapper = document.querySelector(".wallpaper--list__grid");

    const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                item.target.src = item.target.dataset.href;
            }else{
                item.target.src = '';
            }
        });
    });

    fetch('https://api.github.com/repos/Smiriix/obs-wallpaper/contents/assets/wallpaper?ref=main')
        .then(data => data.json())
        .then(result => {
            // console.log(result);
            if (result.length) {
                result.forEach(item => {
                    const imgItem = document.createElement("img");
                    // imgItem.src = item.download_url;
                    imgItem.href = '#';
                    imgItem.dataset.href = item.download_url;
                    imgItem.alt = item.name;
                    imgItem.addEventListener("click", () => {
                        let copyText = document.createElement("input");
                        copyText.value = `wallpaper.html?image=${item.download_url}`;
                        document.body.appendChild(copyText);
                        copyText.select();
                        document.execCommand("copy");
                        alert("Ссылка на изображение было скопировано");
                        copyText.remove();
                    });
                    observer.observe(imgItem);
                    listWrapper.appendChild(imgItem);
                });
            }
        })
});