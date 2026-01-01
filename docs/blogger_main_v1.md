# Google Blog 

</br>

구글 Blogger 는 반드시 Github Page가 배포 후 아래와 같이 설정 진행  

[Go To Blogger Setup](./blogger_info.md#blogger-setup)

</br>

## Blogger Setup 

</br>

Google Blog의 나만의 Java Script 과 나만의 CSS 적용하여 사용 중 이를 버전별로 관리   

* 맞춤설정 
    * HTML 수정     
    ![](./imgs/blogger_00.png)

</br>

* HTML 소스 
HTML 소스 분석 에서 직접 Head 끝 부분에 아래 추가           
```
<!-- Jeonghun's Javascript/css v${version} Start -->
    <script defer src="https://JeonghunLee.github.io/blogspot/jeonghun-latest.js"></script>
    <link rel="stylesheet" href="https://JeonghunLee.github.io/blogspot/jeonghun-latest.css"></link>
<!-- Jeonghun's Javascript/css v${version} End -->
```

</br>

##
<p align="center"><sup>© 2025 Jeonghun (James) Lee | </sup><a href="index.md#blogger-관리방법"><sup>Table of Contents</sup></a></p>
