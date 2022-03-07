var puan=0;
        var hucre=[];
        function guncelle(){
            var random1=random(1,5);
            var random2=random(1,5);
            while(random1==random2){
                random2=random(1,5);
            }
            console.log(random1);
            console.log(random2);

            for(i=1;i<=4;i++){
            renkdegis(i,random1);
            }
            renkdegisfarkli(random2);

        }
        function renkdegis(i,random1){
            document.getElementById("kutu"+i).style.backgroundColor=renkler(random1);

        }
        function renkdegisfarkli(random2){
            var rastgelekutu = random(1,5);
            console.log("seçilen kutu: "+rastgelekutu);
            document.getElementById("kutu"+rastgelekutu).style.backgroundColor=renkler(random2);

        }
        function renkler(renksayi){
            if(renksayi==1){return "red"}else
            if(renksayi==2){return "pink"}else
            if(renksayi==3){return "blue"}else
            return "green"
        }

        function kontrol(kutu){
            var dogrukutu;
            if(document.getElementById("kutu1").style.backgroundColor!=document.getElementById("kutu2").style.backgroundColor){
                if(document.getElementById("kutu1").style.backgroundColor==document.getElementById("kutu3").style.backgroundColor){
                    dogrukutu=2;
                }else{
                    dogrukutu=1;
                }
                }else if(document.getElementById("kutu3").style.backgroundColor!=document.getElementById("kutu4").style.backgroundColor){
                    if(document.getElementById("kutu3").style.backgroundColor==document.getElementById("kutu1").style.backgroundColor){
                        dogrukutu=4;
                    }else{
                        dogrukutu=3;
                    }
                }
                console.log("dogrukutu"+dogrukutu);
                console.log("basılankutu"+kutu);
            
            if(kutu==dogrukutu){
                puan=puan+10;
                document.getElementById("puan").innerHTML=puan+" Puan"
                guncelle();
            }else{
                puan=puan-10;
                document.getElementById("puan").innerHTML=puan+" Puan"
                guncelle();
            }
        }
        
        function random(min,max){
            return Math.floor(Math.random()*(max-min)+min);
        }