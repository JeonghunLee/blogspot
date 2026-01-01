# Google Blog 

</br>


* **구성목적**       
Blogger(blogspot) 는 구글에서 운영하는 Blog이며,나만의 Google Blog를 만들고 유지하기 위해서 매번 내부적으로,   
HTML 과 Javscript 과 CSS를 직접 수정을 하여 유지 보수를 했지만,수정되고 변경되어지는 부분이 기존 Google Blog 호환성 문제와    
수정한 부분을 매번 까먹고, 간혹 Blog가 문제가 되는 상태가 발생하여,이를 외부에서 모듈 (Javascript/CSS) 가져오는 형태로 생각을 하게되어짐           

</br>

* **구성방법 및 구현방법**  
    * 매번 Blogger 에서 각 Java Script 과 CSS 다 수정하여, 나의 Blog를 관리 진행했으나, 너무 복잡해짐      
    * 이를 쉽게 외부(Github Pages)에서 기반으로 외부 관리로 변경  
    * 최종 외부 Release(Github Pages) 에서 이 모듈을 가져다, Blogger에서 참조 형태로 사용하기로 전체를 변경함     
        * Blogger 의 내부 HTML와 Javascript/CSS 를 외부화   

</br>

* **Blogger 변경 전**          
이전에 직접 다 Goggle Blog를 직접 손수 수정했으나, 모든 것(JavaScript 과 CSS)을 
자동화 Version 관리 목적으로 GitHub로 이전하는 게 목표  
즉, 변경즉시, 각 Javascript 과 CSS를 외부에서 모듈형태로 가져다 쓰는 것으로 변경             

</br>


* **Blogger 변경 후**               
외부(Github Paage)에 Java Script 과 CSS를 가져와서 Blogger 처리하고 Version 관리를 진행           
    * 장점:  Version 관리와 소스관리 용이       
    * 단점:  Github가 문제 생기면 블로그도 문제생김 

</br>

## Github 관리방법  

</br>

* Github_Main **(Table of Contents)** 
    * [github-관리](./github_main.md#github-관리)
    * [전체구조](./github_main.md#전체구조)
    * [github-action-전체동작](./github_main.md#github-action-전체동작)
    * [github-action-latest문제](./github_main.md#github-action-latest문제)
    * [github-pages-연동](./github_main.md#github-pages-연동)     
    * [github-배포확인](./github_main.md#github-배포확인)
    * [blogger-배포](./github_main.md#blogger-배포)               

</br>

## Blogger 관리방법   

</br>

* Blogger Info **(Table of Contents)** 
    * [Blogger-Setup](blogger_info.md#blogger-setup)  
        * [Blogger-Setupv1](blogger_main_v1#blogger-setup)  
        * [Blogger-Setupv2](blogger_main_v2#blogger-setup-all-gadget-and-css)  
    * [Blogger-LinkSetup](blogger_info.md#blogger-linksetup)  
        * [link-images](blogger_link_gardget.md#link-images)  
            * [step1](blogger_link_gardget.md#step1-find-image)     
            * [step2](blogger_link_gardget.md#step2-resize-32x32-png-option)                  
            * [step3](blogger_link_gardget.md#step3-chanage-png-to-base64)      
            * [step4](blogger_link_gardget.md#step4-make-link-based-on-base64)                              
    * [변경-전후-관련사항](blogger_info.md#변경-전후-관련사항)  

</br>


> [!WARNING]  
> 특히, CSS 는 주의 해야 하며, 현재 중복사용이라, 이후/이전에 따라도 민감하며, 현재도 좀 오작동   
>

</br>

### Blogger 의 CSS

</br>

Table을 좀 세련되게 하려고 3개까지 추가한 상태 (class 쉽게 적용)   
class 내부만 변경하면 되니, 이 부분 각 CSS 참조 

</br>

##
<p align="center"><sup>© 2025 Jeonghun (James) Lee | </sup><a href="../README.md#blogspot"><sup>README</sup></a></p>