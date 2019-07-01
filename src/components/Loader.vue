<template>
    <div class="background">
        <div class="ring">
            Loading
            <span></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background 
{
    position: absolute;
    background: rgba(132, 122, 122, 0.5); 
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #262626;
    width: 150px;
    height: 150px;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    font-family: sans-serif;
    font-size: 20px;
    color: #FF69B4;
    text-align: center;
    line-height: 150px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow: 0 0 10px #FF69B4;
    box-shadow: 0 0 20px rgb(0, 0, 0,.5);
}
.ring::before{
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #FF69B4;
    border-right: 3px solid rgb(240, 55, 215);
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
}
span{
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
}
span::before{
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #FF69B4;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #FF69B4;
}
@keyframes animateCircle {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes animate {
    0%{
        transform: rotate(45deg);
    }
    100%{
        transform: rotate(405deg);
    }
}
</style>
