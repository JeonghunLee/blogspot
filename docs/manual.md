# Google Blog 


</br>

이전에 직접 다 Goggle Blog를 직접 수정해서 수정했으나,        
모든 것을 자동화 Version 관리 목적으로 GitHub로 이전하는 게 목표         

**처음 Gist로 관리할 생각도 했으나, Version 관리가 안됨** 

</br>

## My Google Blog

</br>

필요한 기능들을 JavaScript 과 CSS로 직접 구현을 해서 넣으나,               
현재 관리하기가 너무 힘들어 이부분 Version 기능으로 지속적인 Upgrade 방식     

</br>

## Github Pages 연동   

</br>

Google Blog Theme과 My Google Blog를 관리하는 게 목표

* Setting 
![](./imgs/github_00.png)


</br>

## Blogger 변경 


</br>

* 최종 확인 후
    https://github.com/JeonghunLee/blogspot/tree/gh-pages


* 항상 최신 추적
```
<!-- Jeonghun's Javascript/css  -->
    <script defer src="https://JeonghunLee.github.io/blogspot/jeonghun-latest.js?v=20250902.1"></script>
    <link rel="stylesheet" href="https://JeonghunLee.github.io/blogspot/jeonghun-latest.css?v=20250902.1"></link>

```

* 문제 시 즉시 롤백 (버전 고정 사용)
```
    <!-- Jeonghun's Javascript/css Start -->
    <script defer src="https://JeonghunLee.github.io/blogspot/jeonghun-v0.0.3.js"></script>
    <link rel="stylesheet" href="https://JeonghunLee.github.io/blogspot/jeonghun-v0.0.3.css"></link>
    <!-- Jeonghun's Javascript/css End -->    

```

</br>
