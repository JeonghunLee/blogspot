# Google Blog 

</br>

이전의 나의 구글 Blogger 는 다 손으로 HTML 부분을 내가 직접 수정해서 거의 만들었으나,
이제 쉽게 관리하도록 이를 모듈화를 하기로 결정   

</br>

[Go To Index](index.md)

## Blogger-Setup

</br>

* Github 배포 후 관리 
    * [Blogger 관리 v1](./blogger_main_v1.md)     
    * [Blogger 관리 v2](./blogger_main_v2.md) 

</br>

## Blogger-LinkSetup

</br>

* [Link Gadget 관리](blogger_link_gardget.md)       
    * Link Gadget 는 현재 또 별도로 관리, 이유는 Image 때문에   
    * 현재 Side bar 부터 각 CSS 상위에서 관리 

</br>

## 변경 전 관련 테스트 

</br>

> [!NOTE]  
> **처음 Gist로 관리할 생각도 했으나, Version 관리가 안됨** 

</br>

## 변경 후 중요성 

</br>

* 변경 후 Github Release 와 Google Blogger 연동    
    Github Pages 와 전부 Github Action으로 Package 화 진행하여 간단히 Blog에 삽입구조 변경완료       
    
</br>

> [!IMPORTANT]  
>  Markdown을 어떻게 쉽게 쓸 방법과 CSS를 좀 세련되게 할 방법?     


</br>

## 변경 후 작업사항 

</br>

이 부분은 아직 해결 못하고, 생각만 정리    


</br>

* 각 이외 아이디어 정리사항  
    1. 템플릿이 중복되어서 가끔 깨짐 
        * 이 부분도 Github Page 화 해야 할 듯 
    2. JavaScript의 Update 
        * 각 Gaget 기반으로 작성했으나, 너무 오래됨           
    3. CSS 의 동일된 규격 과 세부화 규격정의   
        * CSS 를 쉽게 인식하기 위해서 각 File을 나누어서 하도록 해야 할듯함    
        * 너무 Blog 각 HTML로 각 Class를 만들어서 해서 복잡함              
        * Github 처럼 Markdown 이 Blogger가 되면 문제가 없을 텐데          
    4. Github Page 와 연동할 방법 모색 
        * Blgger에서 Markdown이 안되니, 이를 Github Pages로 연결??   
</br>


</br>

> [!CAUTION]         
> 매번 느끼지만, 조심해서 써야, 각 글이나, 표 등, 다양한 것들이 폰트 , 그림 문제가 생기며, 
> 벌써 Side Effect를 발견 , 특히 Bold가 문제 


</br>





