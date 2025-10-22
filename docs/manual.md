# Google Blog 

</br>



* **목적**       
나만의 Google Blog를 만들기 위해                  
    * 각 Java Script 과 CSS 다 수정하여, 나의 Blog를 관리 진행했으나, 너무 복잡해짐      
    * 이를 쉽게 외부에서 관리로 변경  
    * 최종 Release 에서 이를 가져다 참조 형태로 사용하기로 전체를 변경함    



</br>

* **변경 전**          
이전에 직접 다 Goggle Blog를 직접 손수 수정했으나, 모든 것을 자동화 Version 관리 목적으로 GitHub로 이전하는 게 목표  
지금봐도 복잡함  T.T          

</br>


* **변경 후**               
    외부에 Java Script 과 CSS를 처리하고 Version 관리를 진행           
    * 장점:  Version 관리와 소스관리 용이       
    * 단점:  Github가 문제 생기면 블로그도 문제생김  T.T             

</br>

## 변경 전 관련 테스트 

</br>

> [!NOTE]  
> **처음 Gist로 관리할 생각도 했으나, Version 관리가 안됨** 

</br>

## 변경 후 중요성 

</br>

Github Pages 와 전부 Github Action으로 Package 화 진행하여 간단히 Blog에 삽입구조       

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

> [!IMPORTANT]  
>  Markdown을 어떻게 쉽게 쓸 방법과 CSS를 좀 세련되게 할 방법?     

</br>

> [!CAUTION]
> 매번 느끼지만, 조심해서 써야, 각 글이나, 표 등, 다양한 것들이 폰트 , 그림 문제가 생감   


</br>

## My Google Blog

</br>

* 각 관리 방법 
    * [Link 관리](./link_manual.md)        
    * [Java Script and CSS 관리](java_css_manaul.md)      
        * 특히 주의 Blog의 모든 폰트 와 포맷이 변경되므로, 주의!!!!!!

</br>

> [!WARNING]  
> 특히, CSS 는 주의 해야 하며, 현재 중복사용이라, 이후/이전에 따라도 민감하며, 현재도 좀 오작동   
>

</br>


