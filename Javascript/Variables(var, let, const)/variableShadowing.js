/* let,const allows "variable shadowing." */

const test = () => {
    let a ="Hello";

    if(true) {
        let a = "Hi";
        console.log(a); //Hi
    }
    console.log(a); //Hello
}
test();
/*In the above example, "a=Hi" is a shadow of "a=Hello", "Hi is overlap the value of Hello" but still "Hi" is accessible only inside block scope. This is called variable shadowing. */

////////////////////////////////////////////////////////////////////////////////////////



/* shadowing the varaibles it do not cross boundary of scope that is we can shadow "var" variable using "let". but cannot do "let" with "var". If do opposite "let" with "var" it is called as "Illegal shadowing" and gives us an error "variable already defined."*/

const test1 = () => {
    var b = "Hellooooo";
    let c = "Bye";

    if(true) {
        let b = "Heeeeeee";
        var c = "Byeeeeeeeeee ";
        console.log(b);
        console.log(c);
    }
}
test1();

