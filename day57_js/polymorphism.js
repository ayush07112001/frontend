class Bank{
    rateOfInterest(){

    }
}
class PNB extends Bank{
    rateOfInterest(){
        return 0.04;
    }
}
class SBI extends Bank{
    rateOfInterest(){
        return .05;
    }
}
class HDFC extends Bank{
    rateOfInterest(){
        return 0.07
    }

}
const SBIobj=new SBI()
console.log(SBIobj.rateOfInterest())