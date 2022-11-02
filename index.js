class CaesarCipher{
    constructor(a){ //int
        this.cifrado=a;
    }

    cifrar(st){ //st string
        st=st.toUpperCase();
        st=st.split("");
        let resultado=[];
        st.forEach(letra => {
            if(letra.charCodeAt(0)+this.cifrado>90){
                let calculo=((letra.charCodeAt(0)+this.cifrado)-90)+64;  //para poder pasar de la Z a la A sin muchos problemas
                resultado.push(String.fromCharCode(calculo));
            }
            else{
                resultado.push(String.fromCharCode(letra.charCodeAt(0)+this.cifrado));
            }
        });
        return resultado.join("");
    }

    descifrar(str){ //str pues es string
        str=str.toUpperCase();
        str=str.split("");
        let resultado=[];
        str.forEach(letra=>{
            if(letra.charCodeAt(0)-this.cifrado<65){
              
                let calc=91-(65-(letra.charCodeAt(0)-this.cifrado))
                console.log(calc)
                resultado.push(String.fromCharCode(calc));
            }
            else{
                resultado.push(String.fromCharCode(letra.charCodeAt(0)-this.cifrado));
            }

        });
        return resultado.join("")
    }
}


let ces1=new CaesarCipher(5);
console.log(ces1.cifrar("HOLAZ"))
console.log(ces1.descifrar("mtqfe"))
console.log(ces1.descifrar("a"))
//65-90