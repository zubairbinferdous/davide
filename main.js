
    function fun() {
    let ver = 200;
    let hello = 40;
    if (ver > hello) {
        console.log("ok good work");
    } else {
        console.log("ok bad");
    }
    }

    const funNmae = fun(); 

    var price = 100;
    var price2 = 200;
    if (price > price2){
    console.log(funNmae);
    }


    var name = 'hello';
    var number = 912;

    let fullName = ['Rohim', 'zubair', 'itok', 'hello me'];
    console.log(fullName);

    let length = fullName.length;
    let index1  = fullName.indexOf('Rohim');
    let index2  = fullName.indexOf('zubair');
    let index3  = fullName.indexOf('itok');
    let index4 = fullName.indexOf('hello me');
    console.log(length);
    console.log(index1 , index2 , index3 , index4);

    function num(){
        if( length > number){
            console.log('hell0 fun');
        }else{
            console.log('you are bad')
        }
    }
    num();

    for (let length = 0; length < fullName.length; length++) {
        console.log('hello world', length )
    }

    for (let length = 0; length < fullName.length; length++) {
        console.log('hello world', length )
    }

    for (let length = 0; length <= 10000; length++) {
        console.log('hello world', length )
    }