var findId="";
        function getListFromLocal(){
            const products=JSON.parse(localStorage.getItem('buoi5Product'))
            if(products){
                return products;
            }else{
                return []
            }
        }
        var listProduct=getListFromLocal();
        console.log(listProduct)
        

        function createForm(){
            appear1();
        }
        function create(){
            var name =document.getElementById('name').value;
            var price= document.getElementById('price').value;
            var image= document.getElementById('address').value;
            var newProduct ={
                id: "SP" +(listProduct.length +1),
                name:name,
                price:price,
                img: image,
            }
            listProduct.push(newProduct);
            console.log(listProduct)
            document.getElementById('tbody').innerHTML = ""
            localStorage.setItem('buoi5Product',JSON.stringify(listProduct));
            document.addEventListener('DOMContentLoaded',show())
            close1();
        }
        function show(){
       
            for(let i=0;i<listProduct.length;i++){
                var row =document.getElementById('tbody');
                row.innerHTML +=`
                    <tr>
                        <td>${listProduct[i].id}</td>
                        <td>${listProduct[i].name}</td>
                        <td class="c-img"><div class="t-img"><img src="${listProduct[i].img}"" alt=""></div></td>
                        <td>${listProduct[i].price}</td>
                        <td>
                            <button type="button" onclick="formAl('${listProduct[i].id}')"><i class='fas fa-cogs'></i></button>
                            <button type="button" onclick="formDelete('${listProduct[i].id}')"><i class='fas fa-trash'></i></button>
                        </td>
                    </tr>
                `
            }
        }
        function formAl(id){
            appear2();
            findId=id;
            var findProduct= listProduct.find(p => p.id ===id);
            console.log(findId)
            document.getElementById('f2-id').innerHTML =findId;
            document.getElementById('upName').value =findProduct.name;
            document.getElementById('upPrice').value =findProduct.price;
            document.getElementById('upAddress').value =findProduct.img;
        }
        
        function update(){
            var upName=document.getElementById('upName').value;
            var upPrice= document.getElementById('upPrice').value ;
            var upAddress= document.getElementById('upAddress').value;
            document.getElementById('f2-id').innerHTML = findId;
            for(let i=0;i<listProduct.length;i++){
                if(listProduct[i].id==findId){
                    listProduct[i].name=upName;
                    listProduct[i].price=upPrice
                    listProduct[i].img=upAddress
                }
            }
            findId=""
            close2()
            localStorage.setItem('buoi5Product',JSON.stringify(listProduct))
            document.getElementById('tbody').innerHTML = ""
            document.addEventListener('DOMContentLoaded',show())
        }
        function formDelete(id){
            findId=id;
            appear3()
        }
        function delete1(){
            for(let i=0;i<listProduct.length;i++){
                if(listProduct[i].id==findId){
                    listProduct.splice(i,1)
                    break
                }
            }
            close3()
            localStorage.setItem('buoi5Product',JSON.stringify(listProduct))
            document.getElementById('tbody').innerHTML = ""
            document.addEventListener('DOMContentLoaded',show())

        }
        //form1
        function appear1(){
            document.getElementById('formCre').style.display ="block";
        }
        function close1(){
            document.getElementById('formCre').style.display ="none";
        }
        //form2
        function appear2(){
            document.getElementById('formAl').style.display ="block";
        }
        function close2(){
            document.getElementById('formAl').style.display ="none";
        }
        //form3
        function appear3(){
            document.getElementById('formDe').style.display ="flex";
        }
        function close3(){
            document.getElementById('formDe').style.display ="none";
        }