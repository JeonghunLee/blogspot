# Github 관리  

</br>

* Github Action 기반의  CI/CD/Deploy 자동화 
    * Github Action 에서 아래의 작업을 자동화 
        * v Tag가 있을 경우 진행   
        * 먼저 항상 가상으로 테스트 진행   

</br>

* Node.js에서 ESM(ECMAScript Module) 의 Package 이용 
    * esbuild.mjs
    * package.json 

</br>

* package.json (esbuild.mjs 자동실행)
```
  "scripts": {
    "clean": "rimraf dist",
    "build": "node esbuild.mjs",
    "release": "npm run clean && npm run build"
  }
}
```

</br>

[Go Back Manaul](index.md)

</br>

## 전체구조      

</br>

```
src/
    css/index.css     --> 각 Blog의 HTML 분석 후 각 부분 변경 
    js/index.js       --> 각 Blog 의 HTML 분석 후 각 부분 변경   (세련미를 주기위해 sliding 방식사용)   
    html/releae.html --> 최종 releas format 
```

</br>

* Input File 
    * css/index.css
    * js/index.js 
    * html/release.html    
        * format 만 사용하고 version만 변경해서 기록   

</br>

* Output File and Branch     
    * gp-pages
        * jeonghun-latest.css
        * jeonghun-latest.js
        * jeonghun-v0.0.6.css
        * jeonghun-v0.0.6.js
        * release.html   // update release version    

</br>

## Github Action 

</br>

* package.json 
    script 에 의해 자동실행  

```
      - run: npm install

      # 0) Build Step (esbuild.mjs) 
      #   esbuild -> package.json -> "release": "npm run clean && npm run build"
      - name: Build (with tag-derived version)
        run: npm run release
```
![](./imgs/github_action_00.png)

</br>

* gh-pages branch 
```
      # 1) gh-pages 브랜치로 dist 전체 업로드
      - name: Deploy latest to Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          # 이 액션은 dist 내용을 gh-pages 브랜치에 푸시합니다.
          # 저장소 Settings → Pages → Branch: gh-pages / root 로 설정.

      # 2) Release Upload 
      - name: Upload versioned assets to Release
        if: startsWith(github.ref, 'refs/tags/')
        uses: softprops/action-gh-release@v2
        with:
          files: |
            dist/jeonghun-v*.css
            dist/jeonghun-latest.css
            dist/jeonghun-v*.js
            dist/jeonghun-latest.js
```
![](./imgs/github_action_01.png)

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

Google Blog에서 가져다 쓸 Javascript와 CSS를 의미하며, 이곳에서는 배포버전의 방식   

</br>

* **변경방식(배포방법)**   
    * latest version : **Blog에서 수정할 필요 없이 쉽게 변경**  
    * version 명시 : 매번 Blog에서 특정 버전으로 변경    


</br>

각 배포방법을 2가지 제공하며, 가급적 Latest를 써야 Bloger에서 수정할 필요가 없다       

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
