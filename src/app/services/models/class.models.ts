
export class Studyabroadcountry {

    id: number;
    title: string;
    description:string;
    image: {url:string;}
    bannerimage: {url:string}
  
       
    countryflag:{url:string;}
} 

export class Destination{
    id: number;
    title: string;
    description:string;
    image: {url:string;}
    bannerimage: {url:string}
    countrycode:string
  
       
    countryflag:{url:string;}
}

export class University{
    id:number;
    universityname:string;
    universityimage:{url:string}
    countrycode:string;

}

export class Visacategory {
    id: number;
    title: string;
    description: string;
    image:
     { name:string;
    url:string;
    }
    

    paragraph:string;
    

}

export class Bannerimage  {
    id: number;
    title: string;
    subtitle: string;
    bannerimage:
     { name:string;
    url:string;
    }
    

    paragraph:string;
}

export class Sbainformation
{
  
    headerAddress: string;
    phoneNoDefault: string;
    phoneNoAlternate: string;
    footerAddress:string;
    footerSbaInfo: string;
    AboutUsTitle:string;
    AboutUsDescription: string;
    AboutUsDetailedDescription:string;
    AboutUsImage: {
        url:string;
    }
    quickContactFormBackgroundImage:{
        url:string;
    }
Email:string;
     
}

 