
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
    
}

hello("Javascript")

const helloFuncV1 =(firstName) => {console.log(`Merhaba ${firstName}`)}

helloFuncV1("helloFuncV1")

const helloFuncV2= firstName =>  console.log(`Merhaba ${firstName}`)

helloFuncV2("helloFuncV2")

const helloFuncV3=(firstName,lastName) => console.log(`MErhaba ${firstName} ${lastName}`);

helloFuncV3("helloFuncV3","Last Name Info")

const helloFuncV4 = (firstName,lastName) => { 
    let info = `merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4","Other Info")
