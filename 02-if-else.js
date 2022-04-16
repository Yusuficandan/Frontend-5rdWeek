number=20
_case_w="Weird"
_case="Not Weird"

if (number>=1 && number<=100) {
    if ((number+1)%2==0) console.log(_case_w)

    else if(number>2 && number<5) console.log(_case)

    else if(number>6 && number<20) console.log(_case_w)

    else if(number>=20) console.log(_case)
}
else console.log("1-100 arasi sayi girin :)")