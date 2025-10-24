# Github Action 

</br>

Github Action 기반의 CI/CD 자동화에 Github Page로 배포   

</br>

[Go To Index](index.md)

## 전체구조 

</br>

* Input File 
    * css/index.css
    * js/index.js 

</br>

* Output File 
    * html/release.html 

</br>


* Node.js에서 ESM(ECMAScript Module) 의 Package 이용 
    * esbuild.mjs
    * package.json 

</br>

* CI/CD/Deploy 자동화 
    * Github Action 에서 아래의 작업을 자동화 
        * v Tag가 있을 경우 진행   
        * 먼저 항상 가상으로 테스트 진행   

</br>

## 배포 확인 

</br>

* 각 현재 버전과 배포를 확인     
    [Release 확인](https://github.com/JeonghunLee/blogspot/releases/)       
    [Page 배포확인](https://github.com/JeonghunLee/blogspot/tree/gh-pages)       
 
</br>




