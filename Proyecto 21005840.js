//Precio base de la cotización, en quetzales, lo puede cambiar
var plan_base = 2000

//Valores de los recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35 // 35%
var salario_recargo = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Bucle
var salida 
while(salida != "salir"){

//Mensajes de alerta para ingresar datos
 var nombre = prompt("Ingrese su nombre, por favor")
 var edad = prompt("¿Cuantos años tiene? Ingrese solamente números")
 console.log("El Asegurado se llama "+nombre)
 
 //Conversion de edad a Numero
 var edad_numero = parseInt(edad)
 
 if(edad_numero >= 0 && edad_numero <= 17){
   alert("Solo se permiten Edades iguales o Mayores a 18 años, "+nombre +" solo tiene "+edad +" años de edad.")
   break;
 }
 
 //Recargo por la Edad del Asegurado 
 if(edad_numero >= 18 && edad_numero <=24){
   console.log("Recargo por tener "+edad_numero +" años es de") 
   console.log(recargo = plan_base * edad_18)
   recargo_total = recargo_total + recargo
   }else if(edad_numero >=25 && edad_numero <=49){
    console.log("Recargo por tener "+edad_numero +" años es de") 
    console.log(recargo = plan_base * edad_25)
    recargo_total = recargo_total + recargo
   }else if(edad_numero >=50 && edad_numero <=90){
    console.log("Recargo por tener "+edad_numero +" años es de") 
    console.log(recargo = plan_base * edad_50)
    recargo_total = recargo_total + recargo
   }else{
     alert("Ingresar la edad del Asegurado es Obligatorio!!!.")
     break;
   }
    
 var casado = prompt("¿Está casado actualmente?", "si/no")
 var edad_conyuge

 if("SI" == casado.toUpperCase()){
   edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
 }
  
 // Conversion de edad de el conyuge a numero.
 if("SI" == casado.toUpperCase()){
   edad_conyuge_numero = parseInt(edad_conyuge)
 } 
  
 //Recargo de conyuge si tuviera  
 var edad_conyuge_numero = parseInt(edad_conyuge)
   
 if(edad_conyuge_numero >=18 && edad_conyuge_numero <=24){
   console.log("Recargo del Conyuge por tener "+ edad_conyuge_numero +" años es de") 
   console.log(recargo = plan_base * casado_18)
   recargo_total = recargo_total + recargo
   }else if(edad_conyuge_numero >=25 && edad_conyuge_numero <=49){
    console.log("Recargo del Conyuge por tener "+ edad_conyuge_numero +" años es de") 
    console.log(recargo = plan_base * casado_25)
    recargo_total = recargo_total + recargo
   }else if(edad_conyuge_numero >=50 && edad_conyuge_numero <=90){
    console.log("Recargo del Conyuge por tener "+ edad_conyuge_numero +" años es de") 
    console.log(recargo = plan_base * casado_50)
    recargo_total = recargo_total + recargo
 }  
  
 //Recargo por Hijos si tuviera.  
 var hijos = prompt("¿Tiene hijos o hijas?", "si/no")

 var cantidad_hijos

 if("SI" == hijos.toUpperCase()){
   cantidad_hijos = prompt("Cuantos hijos o hijas tiene")
   console.log("Tiene "+cantidad_hijos +" hijos")
 }

 if("SI" == hijos.toUpperCase()){
   cantidad_hijos_numero = parseInt(cantidad_hijos)
 }
 if(cantidad_hijos >=1){
    console.log("Recargo por hijos")
    console.log(recargo = plan_base * hijos_recargo * cantidad_hijos_numero)
    recargo_total = recargo_total + recargo
 } 
 
 //Recargo por Propiedades si tuviera. 
 var propiedades = prompt("¿Tiene Propiedades?", "si/no")

 var cantidad_propiedades

 if("SI" == propiedades.toUpperCase()){
   cantidad_propiedades = prompt("¿Cuantas Propiedades Posee?")
   console.log("Propiedades son "+cantidad_propiedades)
 }

 if("SI" == propiedades.toUpperCase()){
   cantidad_propiedades_numero = parseInt(cantidad_propiedades)
 }
 if(cantidad_propiedades >=1){
    console.log("Recargo por Propiedades")
    console.log(recargo = plan_base * propiedades_recargo * cantidad_propiedades_numero)
    recargo_total = recargo_total + recargo
 }
  
 //Recargo por el salario si tuviera 
 var salario = prompt("¿El Asegurado es Asalariado?", "si/no")

 var cantidad_salario

 if("SI" == salario.toUpperCase()){
   cantidad_salario = prompt("¿Cual es el Salario del Asegurado/a?")
   console.log("Salario es de "+cantidad_salario)
 }

 if("SI" == salario.toUpperCase()){
   cantidad_salario_numero = parseInt(cantidad_salario)
 }
 if(cantidad_salario >=1){
    console.log("Recargo por el Salario es de")
    console.log(recargo = cantidad_salario_numero * salario_recargo) 
    recargo_total = recargo_total + recargo
 }
  
 console.log("La suma de los Recargos aplicados es de "+recargo_total)
 
//Todos los recargos y el precio final.
 precio_final = recargo_total + plan_base
 alert("Para el Asegurado "+nombre +".")
 alert("El recargo total sera de: "+recargo_total +" Quetzales.")
 alert("El precio Final de la Cotizacion sera de: "+precio_final +" Quetzales.")    
 
 console.log("Precio Final de la Cotizacion del Seguro "+precio_final +" Quetzales.")
 
 salida = prompt("Ingrese 'salir' para cerrar el Cotizador", "Para continuar cotizando clic en boton 'cancelar'") 
}
