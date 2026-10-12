<?
$path = "./assets/wallpaper/";
$dir = scandir($path);
$arr = [];
if ($dir)
    foreach ($dir as $item)
        if ($item != "." && $item != "..") {
            $fileName = 'https://raw.githubusercontent.com/Smiriix/obs-wallpaper/main/assets/wallpaper/' . $item;
            $arr[] = $fileName;
        }

if($arr)
    file_put_contents("list.json", json_encode($arr, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
