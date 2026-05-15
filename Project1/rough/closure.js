function main(){
let name = "Apurv"
    function outerFunction(){
        name = "Paul"
        function getName(){
            console.log(`My name is ${name}`)
        }
    getName()
    }
    console.log(name)
outerFunction()
}
main()

//lexsical -> neighbouring environment