# Google Blog 

</br>

* **목적**       
나만의 Google Blog를 만들기 위해                  
    * 각 Java Script 과 CSS 다 수정하여, 나의 Blog를 관리 진행했으나, 너무 복잡해짐      
    * 이를 쉽게 외부에서 관리로 변경  
    * 최종 Release 에서 이를 가져다 참조 형태로 사용하기로 전체를 변경함    

</br>

* **변경 전**          
이전에 직접 다 Goggle Blog를 직접 손수 수정했으나, 모든 것(JavaScript 과 CSS)을 
자동화 Version 관리 목적으로 GitHub로 이전하는 게 목표  
즉, 변경즉시, 각 Javascript 과 CSS를 외부에서 모듈형태로 가져다 쓰는 것으로 변경             

</br>


* **변경 후**               
외부(Github Paage)에 Java Script 과 CSS를 가져와서 Blogger 처리하고 Version 관리를 진행           
    * 장점:  Version 관리와 소스관리 용이       
    * 단점:  Github가 문제 생기면 블로그도 문제생김 

</br>

## Github 관리 

</br>

[Github 관리](./github_main.md)

</br>

## Blogger 관리 

</br>

[Blogger 관리](blogger_info.md) 

</br>


> [!WARNING]  
> 특히, CSS 는 주의 해야 하며, 현재 중복사용이라, 이후/이전에 따라도 민감하며, 현재도 좀 오작동   
>

</br>


