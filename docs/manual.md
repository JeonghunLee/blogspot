# Google Blog 

</br>



* **목적**       
나만의 Google Blog를 만들기 위해 각 Java Script 과 CSS 다 수정하여, 나의 Blog를 관리 했으나,    
블로그 부분 복잡함이 너무 증가하여 이를 간편하게 하기 위해서 별도로 외부에 Release 하는 방식으로 변경    




</br>

* 변경 전 
> 이전에 직접 다 Goggle Blog를 직접 수정해서 수정했으나, 모든 것을 자동화 Version 관리 목적으로 GitHub로 이전하는 게 목표         


* 변경 후 
> 외부에 Java Script 과 CSS를 처리하고 Version 관리를 진행 

</br>


**처음 Gist로 관리할 생각도 했으나, Version 관리가 안됨** 

</br>

## 변경 후 중요성 

</br>

Github Pages 와 전부 Github Action으로 Package 화 진행하여 간단히 Blog에 삽입구조       

</br>

## My Google Blog

</br>

필요한 기능들을 JavaScript 과 CSS로 직접 구현을 해서 넣으나,               
현재 관리하기가 너무 힘들어 이부분 Version 기능으로 지속적인 Upgrade 방식     

[Link 관리](./link_manual.md)       

</br>

## Github Pages 연동   

</br>

Google Blog Theme과 My Google Blog를 관리하는 게 목표

* Setting 
![](./imgs/github_00.png)


</br>

## Blogger 변경 전 확인   


</br>

* Release  후 변경확인  
    * 아래 최종 File 들 확인       
    https://github.com/JeonghunLee/blogspot/tree/gh-pages
![](./imgs/github_01.png)

</br>

* Release          
    https://github.com/JeonghunLee/blogspot/releases

</br>

## Blogger 변경 방법 

</br>

* **변경방식**   
    * latest version : Blog에서 수정할 필요 없이 쉽게 변경 
    * version 명시 : 매번 Blog에서 특정 버전으로 변경    


</br>

### latest 방식-1  

</br>

* 항상 **최신 추적**
    * 아래와 같이 버전에 상관 없이 적용방법 
```
    <!-- Jeonghun's Javascript/css  -->
    <script defer src="https://JeonghunLee.github.io/blogspot/jeonghun-latest.js"></script>
    <link rel="stylesheet" href="https://JeonghunLee.github.io/blogspot/jeonghun-latest.css"></link>
    <!-- Jeonghun's Javascript/css End -->      

```

</br>

### version 방식-1  

</br>

* 문제 시 즉시 롤백 (버전 고정 사용)
    * 특정 버전으로 관리 방법    
    * [gh-pages](https://github.com/JeonghunLee/blogspot/tree/gh-pages/)    
    * [release.html](https://github.com/JeonghunLee/blogspot/tree/gh-pages/release.html)
```
    <!-- Jeonghun's Javascript/css Start -->
    <script defer src="https://JeonghunLee.github.io/blogspot/jeonghun-v0.0.3.js"></script>
    <link rel="stylesheet" href="https://JeonghunLee.github.io/blogspot/jeonghun-v0.0.3.css"></link>
    <!-- Jeonghun's Javascript/css End -->    

```


</br>
