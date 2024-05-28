
            var tablinks = document.getElementsByClassName("tab_links");
            var tabcontents = document.getElementsByClassName("tab_contents");

            function opentab(tabname){
                for(tablink of tablinks){
                    tablink.classList.remove("active_link");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active_tab");
                }
                event.currentTarget.classList.add("active_link");
                document.getElementById(tabname).classList.add("active_tab");
            }


            var sidemenu = document.getElementById("sidemenu");

            function openmenu(){
                sidemenu.style.right = "0";
            }
            function closemenu(){
                sidemenu.style.right = "-200px";
            }


            const submit = document.getElementById("submit");
            const msg = document.getElementById("msg");

            msg.classList.add("hidden");

            submit.addEventListener("click",function(){
                msg.classList.remove("hidden");
                
                text.value = "";

                setTimeout(() => {

                },3000);
            })

