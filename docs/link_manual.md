# Link images

</br>

* **How to Make Image for Links**                    
    1. google image search           
    2. download image(png)         
    3. image cut and resize 32x32         
    4. make a link and img tag below    

</br>

> [!TIP]      
> 간혹, 32x32 제약 때문에 Image가 너무 손상되는 경우 image에서 크게 하고 직접 사용하자 
>

</br>

## STEP.1 Find Image

</br>

 ![](./imgs/link_imgs/x_serach.png)


</br>

## STEP.2 Resize 32x32 Png   

</br>

![Example](./imgs/link_imgs/32x32/x_32x32.png) 

* How to resize 32x32            
    https://www.iloveimg.com/resize-image

</br>

## STEP.3 Chanage Png to Base64

</br>

* How To make base64 data  
     https://onlinepngtools.com/convert-png-to-base64

</br>

## STEP.4 Make Link based on Base64      

</br>

* Backup       
    * [Medium](./links/base64_medium.md)       
    * [Twitter](./links/base64_twitter.md)    
    * [ALL](./links/base64_all.md)        


</br>

e.g. 
```
<!--  32x32 Twitter Start -->

<a href="https://twitter.com/Ahyuo79">

<img  width="32" height="32" 
src="data:image/png;base64,  xxx   />

</a>

<!--  32x32 Twitter End -->

```

</br>