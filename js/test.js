function tests(a) {


    const result = document.querySelector(".result");
    responseText = "hello world"
    let upperRT = responseText.toUpperCase();
    let caption = "Array results"


    let table = `
<table>
<caption>${caption} <> count in seconds:${a}</caption>
<tr>
 <td>
 blockCount:${blockCount.length}/
</td>
<td>
wallCount:${wallCount.length}/
</td>
<td>
bounces:${bounces.length}/
</td>
</tr>
<tr>
<td>
boundryleft:${gamebound.boundryleft}/
</td>
<td>
boundryright:${gamebound.boundryright}/
</td>
<td>
boundrytop:${gamebound.boundrytop}/
</td>
<td>
boundrybottom:${gamebound.boundrybottom}/
</td>
</tr><tr>

<td>
balls:${balls.length}/
</td>
<td>
player:${player.length}/
</td>
<td>
blok:${blok.length}/
</td>
<td>
Walls:${Walls.length}/
</td>
</tr>
<tr>

<td>
leftWall: x=${wallspecs.leftwall.x},y=${wallspecs.leftwall.y} / /
</td>
<td>
w=${wallspecs.leftwall.w},h=${wallspecs.leftwall.h} / / 
</td>
<td>
blockcount=${wallspecs.leftwall.blockcount},color=${wallspecs.leftwall.c} / / 
</td>
</tr>

<tr>
<td>
rightwall: x=${wallspecs.rightwall.x},y=${wallspecs.rightwall.y} / /
</td>
<td>
w=${wallspecs.rightwall.w},h=${wallspecs.rightwall.h} / / 
</td>
<td>
blockcount=${wallspecs.rightwall.blockcount},color=${wallspecs.rightwall.c} / / 
</td>

</tr>
<tr>
<td>
flor: x=${wallspecs.flor.x},y=${wallspecs.flor.y} / /
</td>
<td>
w=${wallspecs.flor.w},h=${wallspecs.flor.h} / / 
</td>
<td>
blockcount=${wallspecs.flor.blockcount},color=${wallspecs.flor.c} / / 
</td>

</tr>
<tr>
<td>
roof: x=${wallspecs.roof.x},y=${wallspecs.roof.y} / /
</td>
<td>
w=${wallspecs.roof.w},h=${wallspecs.roof.h} / / 
</td>
<td>
blockcount=${wallspecs.roof.blockcount},color=${wallspecs.roof.c} / / 
</td>

</tr>
<tr>
<td>
with:${wth}/
</td>
<td>
height:${hgt}/
</td>
<td>
Walls:${Walls[0].x} / /
</td>
</tr>

</table>
<div class="object">
vrs:${Object.keys(vrs)} / /
</div>
`;

    result.innerHTML = `<span>${table}</span>`;


}
let a = 0;
setInterval(() => {

    tests(a);
    a++
}, 1000);
