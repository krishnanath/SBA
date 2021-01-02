import { Component, OnInit } from '@angular/core';
import '../../assets/js/script.js';
//  import { Sbainformation } from "../services/models/Sbainformation.model";
import { DataService } from '../services/data/data.service';
import {
  Studyabroadcountry,
  Visacategory,
  Sbainformation
} from '../services/models/class.models.js';
import { environment } from '../../environments/environment';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var globalstyle: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // sbainformations$: Sbainformation[];
  visacategories: Visacategory[];
  studyabroadcountries: Studyabroadcountry[];
   aboutus: Sbainformation[];
   about_us: any;
  Sbainforation: any;
  review: any;
  // apiurl=[{url:'http://localhost:1337'}]

  env = [{ url: `${environment.apiUrl}` }];

  testmonials = [
    {
      id: 1,
      img:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhITEhASFhUVFQ8QFRUVFQ8QFRAVFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHSUtLSstLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA7EAABAwMCBAUCBAQFBAMAAAABAAIDBBEhEjEFQVFhBhMicYGRoTKxwdEHUuHwI0JicvEUgpKiFRZD/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAiEQACAgIDAAMAAwAAAAAAAAAAAQIRITEDEkEiUWETMrH/2gAMAwEAAhEDEQA/AOKa1SstArEgCTUQBRjCLZYBjQjMagBHY9LRrNvalnNymJXoLcopBDwgrcwRIQoyhL6EVBTUcrkAMTDGoyMRkF90Ly00WqDmqQRXy1pzEw5ii5qeDAV8wShcrV1K52wWR8EO73taPkn6J5GSsrWORQVcx0VO3Zwcf9Ti37WW6mNoH4Bbsbpeo3Up2uUJQrIUIIuD7DclKyREYLSEGmK4la8IjCjSRIbWIoWjdkWBmVtsaZhistZrNsYtuYiKJKMtBsBpQpGozygSPSo1hYggVLVJki1K66IRJwQ3I8gQk4ABW1IhaWCWrUQBTbAjsishYtg2NK2mNKgWodgA2sRhEixMTscKFjpFeYVtkKszChmNazMAyNS8hNRRphsSVsyK1tP2RBCrARKQiQ7DFaYlF0SszEguiS2YrXR9lhZZWAhUNA7WH3+E0QqNgobgYaL9bX+3NLTk7kl3fLvsMfdM1tY1jbuOkbDYl3Yf3YKgm42CfS23e+p31O3wqIfQy6Y7eXf38sfa6g2Y2IIA+365+qRdxRx5v+pKl573YIJ6EYuiCix4ZK1hJc71bDoQp1Euu5tjnbkl20LgxpOoOOoAbdMZW3lzbZvyJwPsiCiMbQccuR/dRkhstv8A5gM8+/8AVHc7U26RoVoBGU20BVbprFNU810riTaGJQgakaQ4QLJ6wCiL0vKxN6VB7UqMJNCIGqZYpEI2GxOVqAE3KEvpT2Yj5axMBYhYS4Y5RkehROU3JBGYJFsPQSpsTUEbheramGFVQNVvT7JWMmEmGEi690/KgiNKgtkYk3Ghxs7Kxp403UFi7mFYIndFaMiHRFZGFRcNiObRVNpz0UjTdlcBgQOIShjCeZwE38KSsyk26KCc2ON9h7lVNfWNZfOGi578vqU7LL+N/wDKNI/3Oxf6XXLNgfVTCNmxsSeg2H2/NRR2JUDpqWaul9INhi9sNHQLtOF+AWgAyOLvckLp+AcJZTxhjRsMnmSrYBMhkkiih8LQsGGNx2W3cFZyY36WV8oo0azkuMcIDm4FiNv7K4uvaWg6gLi3yvV5oQSuV8QcD8wYw7I90rD1TRwsctjf/Kd+x6pxjc9j9ilZIHROLT7WNs+3VM05FsfCayLQKfh5vcKUNMQrzh4D2e2CpSUtlmTrJUuaoJ2diSO6y0BoJpwhytR4xhakYkNRXlSKk+PKyyJqAOCEWpl7UJwRMBWKelaRow5dS1oUhUA5ChAyLGUBpUwVjMsInJ6GVU8UicikSsWy1bIptckWSIokSUzD7HJqKYKrDloOTdqCXrawBSFe1Ueeq0ASmXM0BxL4cQCquLVl+aCFU8Un5DmQ390P5XLBXijmwXF6jTABf8ep5+bALqfAfAvKiEjx65PUewOwXKiA1FRDELWs0m+1muJ/QLsq6srIMtDJGjk0AH6LI60ns6hrFNcnwbxvHK8RyMLH7dr/ADsuq8wFUVC0zCtOCDUVbGC73Bo6kgKuqfFNI3eZp7Nu78ljUWhCXmaCLEKuj8VUrtnn30uTpna5upjgQdiCCgzI838dgMkuBvb56qnoZ7tB+M/ZWP8AEokSN6ECy57hMnpI9/sl8BL+1HR8MqND+xwrgy3XMQvz8Aq9gfdoKVsnNGqgXSD4sqwkQHtRUidgogpOW9Ki4oWEEWoTmozihueimACQhuCK5yGU1msFZYtlYjYLRjjdRsthQKZEuwdikVFhUygC2bYUdsiC1qKGLUFB2SFNwvSkbE3HGUrodIYBRmNUImJpjEg6RAMRWRrYCNsEjYetilQbAn4XN1J1PJ5Nx8ndW3Eag8uew7qprBobbn16k5J/vsmiiyVIFQTStn8yOMvLWbDuP6p2evrtGsjc20gPe61idWHAbgCy7LwTwoMp9bm+qSzr7kN5D6fmrWXh4N7XA7FPF/hRxerPO+FSvkc0zQFrtVm6gQbgA4Jz8EkYXpfDvVGHJEUmm2b8xzyn6YaW27f1RpXgbNUcz4ziEoDXuLQDf081yzKGnhs6RuOXmPcCcX/A0E7A722XoE1MHE3F743IIv3GypOJ8Ea+LynRODNWr0kn1C41E/i2JCyits0vxZBcI8SUYs2PQ3li1v3HzZXtm6tbcXw4DZ3e3Vcm3wTA5oawOHqJ1HBGNNrkfZdLwTgjoWWdM59rAaicAckX+Cpv1HL/AMUqQGGN/MGx+R/RefcLktj++S9P/iO8ClIPNwA+hXlENw7sUFlCTxJMv4X/AIforzh78WXOU7rj2IVvRyWI7pHoDVl3pCFKLKbXXCi9t1OyFC7kN5R3xlAfGVrMLSOQC5GkjKHoyqJiMHdZdFdEhFazUDLli2QFpExpqzSjRQEozKfOVW0SohDEieWmxDZSZEElhYOCFONpgpwwpox4QsdYFWRhMxNQiMpuECyWTGjIkxqM1DBW7qVlbCAJfiE2lvcogfZUVVOXuce+kduqVZY8EYH3u87C4b3PMqt4hN6C88rn4Av/AERZpdRDW7DHwFVeJaizNA52HwDcn5P5K6KPCs9m8PSg08J6xxn/ANQn5pQAcrjPAXES6jhvu1uj/wATZXc0jpHBo23cf0W7Vgso3kdhOsk8uvX2R5RhVFU6VhaWH0t3FjeySq+PS7Mj1HmNkVJLY3RvKLgTi+6fawOVBDK+VgvGWHc3ITnDKlzSWO3H3HJN2FlAsHU+b9FCV1lN02MpCpl7oMVI5PxnTSTmNjGk+p17bAkWBPbJXm1dSmOTSdwS09ML1qLilOJJI3zMa9ltQc4NORfn7rzPxJVRy1TvJN2CwuNnHmQtETlS2ap24IVjEcAjkk4G59wfzKZpnYKVil9AbgFGEaBwo3andNlyt0xGsg3tshBl1ueQlCZInWhMWZNFyQHxW5I8kt1oo2CkxKQoT2WCPMUKR2FRCsUJCxQIW01E7LKkynWxBVtOSm2yE+6DuxU8ZGpIhZQiCLGDbKi5CwNejLLI5jSETsqxjucBK3QyyAbDlNU7VCRhBUoWlJKQ0UG0XUhFfC0JQFuOXKi5tl4pCXFfQwnnt9VzFVLYNaL53+V0vHheMnoWn7rj3SZJO30v2VuLRWKD6tDSTb9ugXNcQnL3Fx+E1WVplOluwxjn2HZL1EX+UfP7LpiqyxZu8I77+FNUHQPjO7JCfhwv+d13lVrYxzo2BzgNWm9tXa68i8D14pphqNmyeg9L8v77r2KOS4BStZKQfxRS0fG5JW6vJcLYLdNyCTaxAPVEj4sAXaoCNP4yWSANxfJt0RKynIJc29jYkAlpPyEB1W6xaPOzuLtPK25zyTI7YwjJYr/Bn/7DAB6iW2sTg4B2OeqDDxGGou+nkDyzBLcju091GCg8wnzQSDa4JLr22vyVxBAxjQ1jA1o2AAARllEJqMJfEBMTbul9NgSeVympQuQ/iFx0U9O5jT/iSgxtHNoP4nfA+5SJCuVKzyvi9V59RNL/ADve4e17N+wCJw5nP5+iQYrKmbZoHUgfqqnGsuy5YLFnz9yVqKTce6lOctPS35JKKTJ91IudNwOXkrxy5DhlTpcCupbNe2d1z8iyKE8olLzx2CbjnAwUrNKL2QsnQn5fNRkvZEkFspWaQ3VIqybfUhNJjZK3TkhxayVbF3VFonlsAXLFMwHosRwDJYRi42W2Nze62+WwsoRlKmaSGPOsoGpSdRKdlGK6NEXLNFnA66s4H2VJS5Vo24Cm0Vg8DzZLlMR+yp/+pN9lZU9RgXSzoeDyZWABJxypqrkBQYYxZSoqR4q61PIbf5V5tV1DpDoHNequDS0g7EEEdVxf/wARpc843J+OSrwutlkm0VMVMI2/6vyUnUwDL8/6XTzoLut0Fyh8Vwwf9v5f1XQmHrSKTVdrxzA1D4z+69F/h74q8zTTyn1gWaT/APoANvey86po7vPsR9lqoa6JzXNJa5pa4EYIPIpnkSLo+iC0FBFEzey5rwz4mfNCHSMOoWDi3Y43srU8bjHMj4KVNel1fhbaAEvPOBzVU/jerDAT3KAA55u4/HJZy+jda2F4hxLSCW5sD7Lxjj0kk8j5XuLiSR2aBsAOQXrnFWWjPsV5dw+PWZGnq5GBPlzSKKFuVaQfiA5D7kpapj8txCJRk4KMmJFeFrM/n7qvgdg/VFnfgDqgQc0i0Ulsepn+q1+66bhk2sAcwuQDsgq/4VVAEH4KTkjaEOikZjdIMdlWUjmuZcFVjGDVe6jFYyJPDwMzMFlXiMk26KymdhJskF08bSEmk2RkZeyMKMAXRJMWvsgT1bRgFUWhdM0YwsSpqfdbW6sPZC9RObLVI/qUJrCUzTADBRwQabeSwipg4ZQnU5abck9C8WH5rTpRfqkb6oPVNgGssrCKT02KC+IHPNDa0hSk+yLRhRkzxdMRVXKyVqISchG4Zw6WR1ww26nAQUW9G0zJnE7J2mjs25TVfw7ymtc4i17EBV1bXgNDW8/sE3RrZbjheQXEKs4a3c49kKobYOHQAn+/qoNIA1Hml5Ku76kf6MfVoP6pkjo0IUmWySEZLiB7FI+IJctb0z+g/JWEIsGtvgXe742/L7qlqTreXHbNu6rHZOWiNDFa193Z+E3xCnDiwc3P+wx+6DQAkud1wOyi2q1Tg8mkNb7Dmm9F8PR+B04jAFsFoH0Vq+ladwq7hUmprTdWrH9UqRRgWUjAcJlrLKXpQ5JE1UBsQ4oLtIXB8NotNW9vUXXoFQQ1pc7YZXD8KqPN4gCNrOt7JoxeWJKSwhDxJwIgl1lUUsNhndexVXDmvbkKqj4IwG+kINNmTSdnnBpHvOGlP8P8PSvOW2Hdd7Jw1rTcDBTkEIGyKiBs834j4blZkZCQ1GN1iLWXrjoQdwqLjvhxkzXaQA8C7T17I9SdlJDJYNN8OtfsmWx2zyVSY3M0xu/Fdot7FWsgNua5ORtYQ1XkI5+Eq0DUtiQ8wlqh3RUimSkErai+FW55q1pqa6hVUlso9ksC9G8iAl7LE01nssTGohRtusqotJugUVVZMTzBwyVJxanYcSiMxT6m2UaSSz8qFJGFAxFrrp7TwT6NUzofMBCCHAFLNqvTayzhMfmzsbfF7n2GUih4WUqOuoqBoYHPAJNsHkrEuAwMBL1Enp9lK+V1RioqkJt2xHxA7/DIXAR1RbKNQuCbey77jA1Cy5CahDjjBbcj3XPN/I7ONfEU4pXDU0Da7QP1KS4WS4Pe7Y3uf5iTeyUmYXzBv+74FrXT08rWNAGGNsP9xQ8of2yFfPpaert/ZVGu+rtZRqakvcsphdo7uH0uqxVIlJ2x+YeWxo5kf8/oq2mb6ndbq08RDTJb+UM+4B/VIMbZ/uAVloz2d94Yq7tA5jkunmiO4XnPDOMMisHtJ7i1wutp/GVPoGrXcY2TRjZpTSLWIOvkLdRK1mXEADK52s8asz5cZv1dj7Bc3W8TlmN3OJ7DAHwrR4n6SlzLwtvEnHfM9DD6fzVR4aOisiJ53b9VCOO2cXWoH6ZoXdHt/Oyu4JRIKbcrPWzsl3NyjNOAoFch0sHUaWtz7AdUCnbYIzhqNzywFixjZQZH2LT3t9UUlK1h9J7EH7oisQ4xQMLxJYX2JVbJT3vlXvEhdh+qoRJfcrn5FUrGjlAXQABJFmdk1UTd0KKSxudkbA1Q1HHjeyr+IVWLBFrK0W9JVLISTcrKGbYvbA20m3/C2gNm7hYqCidMLFNPaT1SbARkJ6N97XSNMCrQ7w+YDcK2s19rKp8g2u0LUE72pHxdsofs1hlm6nObC6e8LUhEj3kbCw+VWU1byJXS8NGmMH+a5TwTvJpVWB2Q4I91kUl2tPZB1LVM/BHQkfqqsyQSdtwqHiEWkk9f7K6AuVV4iZaF7hu1pIUeSPpfjlWDh5iNTiMDmevb2VVVVBfkbA4H6pyRhLbC9zsg/wDTaMHfe3T3QgqGlnBXlh+dh7nb7ZRYJPVp5Cw/dPCkx+Z6dfkqfDOH6hI63snsXqS476/WObWX+AB+iVaRdrv9I+uyIxxy08vyJ/dKXsHN6G49lloEtjVQy+ylCEKJ9x8BTA/dV42S5EMBg5IrGWQ4yFLV3XYjlYXy0rVuIz0II+EcG6BVC4KL0BHrPDpdcTHdWtP2RCVR+CavXSsHNt2fQq4Llws7U8E3IHmZsi6krV4se9ljBpDhAmN2n2K3K7CGDhYVmarsHcBc1I4XIvsSr6F/ob8j6FUszQC64ySVLmaSQ3HtldK3OEVsZItyUXA3W5KvSkv6Gr7FqiEBI1BGyakmvdJubnKdN+iNJAisRtPZYj2B0GPLBGwQtFjdYsU4tso0kXfD5ARYhZNThaWKbbi8DJJoAacagBzIH1XXP9LWjoAFixX43aZPkStERItQSepw/wBp/T9FixOagwlQOKvBieDsWkfULFiWTwNFZODqXiMNBy7kB278kOCF0ju7rdgOyxYp3Sso90W1RSNa0RjYbn+Z3P45JujpMaW/thYsQjoaWzn6ulIdKRsw57jmqqpb6mkbOz8FYsVIk5GozayYjNj8rFipDZOegjDyU2nusWLrickibpMKMpBBWLE4Dpv4c1OJWdHBw+R/RddIcrFi5J7Z0x0YHoFY70/RbWJRgMz8BQa/CxYgYTjksPl33Kq+KTf4hHssWISSayC6YIuAGQq6dwWLFz6ZaOUJtlAOUQ2IuVtYreEvTbZ222WLFinQ1n//2Q==',
      name: 'Ann Lee',
      position: 'Bachlor of information technology',
      review:
        'I really appreciate your time and expertise in helping me find and buy my current home in Seattle, WA. Hope we can do business again in the future and I will recommend you to family and friends.'
    },
    {
      id: 2,
      img:
        'data:image/jpeg;base64,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',
      name: 'Ann Lee',
      position: 'Bachlor of information technology',
      review:
        'I really appreciate your time and expertise in helping me find and buy my current home in Seattle, WA. Hope we can do business again in the future and I will recommend you to family and friends.'
    },

    {
      id: 3,
      img:
        'data:image/jpeg;base64,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',
      name: 'Ann Lee',
      position: 'Bachlor of information technology',
      review:
        'I really appreciate your time and expertise in helping me find and buy my current home in Seattle, WA. Hope we can do business again in the future and I will recommend you to family and friends.'
    },
    {
      id: 4,
      img:
        'data:image/jpeg;base64,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',
      name: 'Ann Lee',
      position: 'Bachlor of information technology',
      review:
        'I really appreciate your time and expertise in helping me find and buy my current home in Seattle, WA. Hope we can do business again in the future and I will recommend you to family and friends.'
    }
  ];

  constructor(private dataService: DataService, private toaster: ToastrService) {}

  public ngOnInit(): void {
    globalstyle();

    this.loadVisaCategories();
    this.loadStudyAbroadCountries();
    this.loadSbainformation();
  }
//   enquireForm = new FormGroup({
//     firstName: new FormControl('', [Validators.required]),
//     lastName: new FormControl('', [Validators.required]),
//     email: new FormControl('', [Validators.required]),
//     phoneNumber: new FormControl('', [Validators.required]),
//     message: new FormControl('', [Validators.required])
// });
public showSuccess(): void{
  this.toaster.success('Thank You for Enquire Us ');

}
  public onSubmit(): void{
    
    this.showSuccess();
    alert('god loves me')

  }

  loadVisaCategories() {
    return this.dataService.getVisacategories().subscribe(data => {
      this.visacategories = data;
      console.log(data);
    });
  }

  loadStudyAbroadCountries() {
    return this.dataService.getStudyabroadcoutry().subscribe(data => {
      this.studyabroadcountries = data;
      console.log(data);
    });
  }
  loadSbainformation() {
    return this.dataService.getSbainformation().subscribe(data => {
      this.Sbainforation = data;
      console.log(data);
    });
  }
}